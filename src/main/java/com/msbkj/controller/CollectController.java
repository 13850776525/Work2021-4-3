package com.msbkj.controller;

import com.google.gson.Gson;
import com.msbkj.entity.TCollect;
import com.msbkj.entity.TFeatures;
import com.msbkj.entity.TNews;
import com.msbkj.service.CollectService;
import com.msbkj.service.FeaturesService;
import com.msbkj.service.NewsService;
import com.msbkj.utils.R;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Elvis on 2021/3/5.
 */
@RestController
@RequestMapping(value = "/collect")
public class CollectController {
    @Autowired
    private CollectService collectService;
    @Autowired
    private FeaturesService featuresService;
    @Autowired
    private NewsService newsService;

    @RequestMapping("/add")
    public String add(TCollect collect){
        collectService.insert(collect);
        int id = collect.getNewsId();
        System.out.println(id);
        TNews tNews = newsService.selectByPrimaryKeyAndFlag(id, "0");
        if (!tNews.getContent().isEmpty()) {
            TFeatures f = new TFeatures(collect.getUserId());
            f.setCollectContent(tNews.getContent());
            featuresService.updateByConditions(f);
        }
        return new Gson().toJson("新增成功");
    }

    @RequestMapping("/delete")
    public String delete(Integer id){
        collectService.deleteByPrimaryKey(id);
        return new Gson().toJson("删除成功");
    }

    @RequestMapping("/update")
    public String update(TCollect collect){
        collectService.updateByPrimaryKey(collect);
        int id = collect.getNewsId();
        TNews tNews = newsService.selectByPrimaryKeyAndFlag(id, "0");
        if (!tNews.getContent().isEmpty()) {
            TFeatures f = new TFeatures(collect.getUserId());
            f.setCollectContent(tNews.getContent());
            featuresService.updateByConditions(f);
        }
        return new Gson().toJson("更新成功");
    }

    @RequestMapping("/getAll")
    public R getAll(){
        return R.ok().put("data", collectService.selectAll());
    }

    @RequestMapping("/getOne/{id}")
    public R getOne(@PathVariable("id") Integer id){
        return R.ok().put("data", collectService.selectByPrimaryKey(id));
    }
}
