package com.msbkj.controller;

import com.msbkj.entity.TAdvise;
import com.msbkj.entity.TFeatures;
import com.msbkj.service.AdviseService;
import com.msbkj.service.CollectService;
import com.msbkj.service.CommentService;
import com.msbkj.service.FeaturesService;
import com.msbkj.service.NewsService;
import com.msbkj.service.UserService;
import com.msbkj.utils.R;
import com.msbkj.utils.SimilarityUtil;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Elvis on 2021/3/6.
 */
@RestController
@RequestMapping(value = "/advise")
public class AdviseController {
    @Autowired
    private FeaturesService featuresService;
    @Autowired
    private AdviseService adviseService;

//    @Scheduled(fixedDelay = 20000) //20s
    @Scheduled(cron = "0 0 8-23 * * ?") //8-23点每整点执行一次
    public R scheduledTask() {
        return calculte();
    }

    @RequestMapping("/cal")
    public R handleTask() {
        return calculte();
    }

    public R calculte(){
        // 获取当前所有用户的特征
        List<TFeatures> features = featuresService.selectAll();
//        for (TFeatures t: features) {
//            System.out.println(t.toString());
//        }
        // 开始计算
        System.out.println("begin calculate:");
        // 推荐topN
        int N = 5;
        List<TFeatures> targets;
        Map<Double, Integer> sortMap;
        Set<Double> keySet;

        // 先清除advise表中的内容
        adviseService.deleteAll();
        for (TFeatures t1: features) {
            String friends = "";
            // 用于对推荐值排序
            sortMap = new TreeMap<>((a, b) -> (int)(b - a));
            // 查询满足当前性别、学历、年龄要求的数据
            String sex = t1.getSex().equals("男") ? "女" : "男";
            String degree = t1.getDegree();
            String age = t1.getAge();
            String min = String.valueOf(Integer.parseInt(age) - 3);
            String max = String.valueOf(Integer.parseInt(age) + 3);
            targets = featuresService.selectByConditions(sex, degree, min, max);

            for (TFeatures t2: targets) {
                if (t1.getUserId() != t2.getUserId()) {
//                    System.out.println(t1.toString());
//                    System.out.println(t2.toString());
                    // 满足硬性要求的推荐对象 进行权重计算
                    double w1 = 0.3;
                    double w2 = 0.3;
                    double w3 = 1 - w1 - w2;
                    double v1 = 0.0;
                    double v2 = 0.0;
                    double v3 = 0.0;
                    // 最终的推荐数值，初始值设置非0，避免被map吞掉
                    double value = 0.1;

                    // 关注的新鲜事相似度
                    v1 = SimilarityUtil.getSimilarity(t1.getNewsContent(), t2.getNewsContent());
                    // 收藏内容的相似度
                    v2 = SimilarityUtil.getSimilarity(t1.getCollectContent(), t2.getCollectContent());
                    // 最近评论id是否相同
                    v3 = t1.getCommentId().equals(t2.getCommentId()) ? 1.0 : 0;

                    value += w1 * v1 + w2 * v2 + w3 * v3;
                    System.out.println("v1:" + v1 + " v2:" + v2 + " v3:" + v3 + " value:" + value);
                    sortMap.put(value, t2.getUserId());
                }
            }

            keySet = sortMap.keySet();
            Iterator<Double> it = keySet.iterator();
            while (it.hasNext() && N > 0) {
                double tmp = it.next();
                friends += sortMap.get(tmp) + ";";
                N--;
            }

            System.out.println(t1.getUserId() + "'s friends:" + friends);
            // 插入数据到advise
            if (!friends.isEmpty()) {
                adviseService.insert(new TAdvise(t1.getUserId(), friends));
            }
        }

        return R.ok();
    }

    @RequestMapping("/getAll")
    public R getAll(){
        return R.ok().put("data", adviseService.selectAll());
    }

    @RequestMapping("/getOne/{userid}")
    public R getOne(@PathVariable("userid") Integer userid){
        return R.ok().put("data", adviseService.selectByPrimaryKey(userid));
    }

    @RequestMapping("/getFea")
    public R getFea(String sex, String degree, String age){
        sex = sex.equals("男") ? "女" : "男";
        String min = String.valueOf(Integer.parseInt(age) - 3);
        String max = String.valueOf(Integer.parseInt(age) + 3);

        System.out.println(sex + " " + degree + " " + min + " " + max);
        return R.ok().put("data", featuresService.selectByConditions(sex, degree, min, max));
    }

    @RequestMapping("/getAllFea")
    public R getAllFea(){
        return R.ok().put("data", featuresService.selectAll());
    }





}
