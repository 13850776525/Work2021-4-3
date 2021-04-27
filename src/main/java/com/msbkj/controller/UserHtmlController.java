package com.msbkj.controller;

import com.msbkj.entity.*;
import com.msbkj.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@Controller
@RequestMapping(value = "/userHtml")
public class UserHtmlController {
    @Autowired
    UserService userService;

    @RequestMapping("/userRegister")
    public String userRegister(HttpServletRequest request, HttpServletResponse response){
        return "userRegister";
    }

    @RequestMapping("/register")
    @ResponseBody
    public String register(HttpServletRequest request, HttpServletResponse response){
        String account = request.getParameter("account");
        String pwd = request.getParameter("password");
        String age = request.getParameter("age");
        String degree = request.getParameter("degree");
        String sex = request.getParameter("sex");
        String photo="/qualification/pic.jpg";//新注册用户设置默认头像
        List<TUser> list = userService.checkUserExit(account);
        if (null != list && list.size()>0){
            return "fail";
        }else {
            userService.addUser(account,sex,pwd,age,degree,photo);
            // 转化degree并构造Features
            int uuid = userService.maxUserId();

            TFeatures f = new TFeatures(uuid, sex, age, CommonUtil.converDegree(degree));
            featuresService.insert(f);
            // 注册完计算一次
            calculte();
            return "success";
        }
    }

    @RequestMapping("/userLogin")
    public String userLogin(HttpServletRequest request, HttpServletResponse response){
        return "userLogin";
    }

    @RequestMapping("/login")
    @ResponseBody
    public String login(HttpServletRequest request, HttpServletResponse response){
        String account = (String) request.getParameter("account");
        String password = (String) request.getParameter("pwd");
        String num = request.getParameter("num");
        String code = request.getParameter("code");

        if (num.toUpperCase().equals(code.toUpperCase())) {
            TUser user = userService.login(account,password);
            if (user != null) {
                request.getSession().setAttribute("user", user);
                return "登录成功";
            } else {
                return "账号或密码错误";
            }
        } else {
            return "验证码错误";
        }
    }

    @RequestMapping("/aboutUser")
    public String aboutUser(HttpServletRequest request, HttpServletResponse response, Model model){
        String account = request.getParameter("account");
        TUser user = userService.userLogin(account);
        if (null != user){
            model.addAttribute("user",user);
        }
        return "aboutUser";
    }

    @RequestMapping("/my")
    public String my(HttpServletRequest request, HttpServletResponse response,Model model){
        String username = request.getParameter("username");
        TUser user = userService.userLogin(username);
        if (null != user){
            model.addAttribute("user",user);
        }
        return "my";
    }

    @RequestMapping("/saveMy")
    @ResponseBody
    public String saveMy(HttpServletRequest request, HttpServletResponse response){
        String account = request.getParameter("username");
        String height = request.getParameter("height");
        String education = request.getParameter("education");
        String weight = request.getParameter("weight");
        userService.updateUserInfo(account,education,height,weight);
        int uuid = userService.getIdByUserName(account);
        TUser user = userService.selectByPrimaryKey(uuid);
        TFeatures f = new TFeatures(uuid, user.getSex(), user.getAge(), CommonUtil.converDegree(education));
        featuresService.updateByConditions(f);
        return "success";
    }

    @RequestMapping("/photoWall")
    public String photoWall(HttpServletRequest request, HttpServletResponse response,Model model){
        String username = request.getParameter("username");
        TUser user = userService.userLogin(username);
        if (null != user){
            model.addAttribute("user",user);
        }
        String sex = null;
        if (user.getSex().equals("男")){
            sex = "女";
        }else {
            sex = "男";
        }
        List<TUser> list = userService.getAnotherSex(sex);
        if (null != list && list.size() != 0){
            model.addAttribute("list",list);
        }
        return "photoWall";
    }

    @RequestMapping("/joinFriend")
    @ResponseBody
    public String joinFriend(HttpServletRequest request, HttpServletResponse response){
        String id = request.getParameter("id");
        String username = request.getParameter("username");
        String userId = userService.selectIdByUsername(username);
        TFriends friends = userService.isFriend(userId,id);
        if (null != friends){
            return "already";
        }else {
            userService.joinFriend(userId,id);
            return "success";
        }
    }

    @RequestMapping("/news")
    public String news(HttpServletRequest request, HttpServletResponse response,Model model){
        String username = request.getParameter("username");
        TUser user = userService.userLogin(username);
        if (null != user){
            model.addAttribute("user",user);
        }
        List<TNews> newsList = userService.getNews();
        model.addAttribute("newsList",newsList);
        List<TComment> commentList = userService.getComment();
        model.addAttribute("commentList",commentList);
        return "news";
    }

    @RequestMapping("/dianZanNew")
    @ResponseBody
    public String dianZanNew(HttpServletRequest request, HttpServletResponse response){
        String id = request.getParameter("id");
        String username = request.getParameter("username");
        String userId = userService.selectIdByUsername(username);
        Likes likes = userService.getLikesOne(userId,id);
        if (null == likes){
            userService.dianZanNew(id);
            userService.addLikes(userId,id);
            return "success";
        }else {
            return "already";
        }
    }

    @RequestMapping("/pinglunnew")
    @ResponseBody
    public String pinglunnew(HttpServletRequest request, HttpServletResponse response){
        String newsId = request.getParameter("id");
        String talkInput = request.getParameter("talkInput");
        String username = request.getParameter("username");
        String userId = userService.selectIdByUsername(username);
        userService.addUserComment(userId,newsId,talkInput);

        TFeatures f = new TFeatures(Integer.parseInt(userId));
        f.setCommentId(Integer.parseInt(newsId));
        featuresService.updateByConditions(f);
        return "success";
    }

    @RequestMapping("/shoucangnew")
    @ResponseBody
    public String shoucangnew(HttpServletRequest request, HttpServletResponse response){
        String newsId = request.getParameter("id");
        String username = request.getParameter("username");
        String userId = userService.selectIdByUsername(username);
        TCollect collect = userService.checkCollect(userId,newsId);
        if (null != collect){
            return "already";
        }else {
            userService.shoucangnew(userId,newsId);

            TFeatures f = new TFeatures(Integer.parseInt(userId));
            TNews tNews = newsService.selectByPrimaryKeyAndFlag(Integer.parseInt(newsId), "0");
            f.setCollectContent(tNews.getContent());
            featuresService.updateByConditions(f);
            return "success";
        }
    }

    @RequestMapping("/firstPage")
    public String firstPage(HttpServletRequest request, HttpServletResponse response,Model model){
        String username = request.getParameter("username");
        TUser user = userService.userLogin(username);
        if (null != user){
            model.addAttribute("user",user);
        }
        return "firstPage";
    }

    @Autowired
    private AnnouceService annouceService;

    @RequestMapping("/annouce")
    public String annouce(HttpServletRequest request, HttpServletResponse response,Model model){
        List<TAnnouce> annouces = annouceService.selectAll();
        model.addAttribute("annoucesList",annouces);
        String username = request.getParameter("username");
        TUser user = userService.userLogin(username);
        if (null != user){
            model.addAttribute("user",user);
        }
        return "annouce";
    }

    //    @Scheduled(fixedDelay = 20000) //20s
    @Scheduled(cron = "0 0 8-23 * * ?") //6-23点每整点执行一次
    public R scheduledTask() {
        return calculte();
    }

    public R calculte(){
        // 获取当前所有用户的特征
        List<TFeatures> features = featuresService.selectAll();
        for (TFeatures t: features) {
            System.out.println(t.toString());
        }
        // 开始计算
        System.out.println("begin calculate:");
        // 推荐topN
        int N = 8;
        List<TFeatures> targets;
        Map<Double, Integer> sortMap;
        Set<Double> keySet;

        // 先清除advise表中的内容
        adviseService.deleteAll();
        for (TFeatures t1: features) {
            N = 8;
            String friends = "";
            // 用于对推荐值排序
            sortMap = new TreeMap<>((a, b) -> (int)(b * 10000 - a * 10000));
            // 查询满足当前性别、学历、年龄要求的数据
            String sex = t1.getSex().equals("男") ? "女" : "男";
            String degree = t1.getDegree();
            String age = t1.getAge();
            String min = String.valueOf(Integer.parseInt(age) - 3);
            String max = String.valueOf(Integer.parseInt(age) + 3);
            targets = featuresService.selectByConditions(sex, degree, min, max);

            for (TFeatures t2: targets) {
                if (t1.getUserId() != t2.getUserId()) {
                    System.out.println(t1.toString());
                    System.out.println(t2.toString());
                    // 满足硬性要求的推荐对象 进行权重计算
                    double w1 = 0.3;
                    double w2 = 0.3;
                    double w3 = 1 - w1 - w2;
                    double v1 = 0.0;
                    double v2 = 0.0;
                    double v3 = 0.0;
                    // 最终的推荐数值，初始值设置非0，避免被map吞掉
                    double value = 0.1;

                    // 避免新鲜事和收藏内容为空，导致相似度为NaN，因此随机加入字符
                    String content1 = t1.getNewsContent();
                    String content2 = t2.getNewsContent();
                    String collect1 = t1.getCollectContent();
                    String collect2 = t2.getCollectContent();
                    if (content1.isEmpty() || content1 == null || content1.trim().length() == 0) {
                        content1 = getRandomString(10);
                    }
                    if (content2.isEmpty() || content2 == null || content2.trim().length() == 0) {
                        content2 = getRandomString(10);
                    }
                    if (collect1.isEmpty() || collect1 == null || collect1.trim().length() == 0) {
                        collect1 = getRandomString(10);
                    }
                    if (collect2.isEmpty() || collect2 == null || collect2.trim().length() == 0) {
                        collect2 = getRandomString(10);
                    }
                    // 关注的新鲜事相似度
                    v1 = SimilarityUtil.getSimilarity(content1, content2);
                    // 收藏内容的相似度
                    v2 = SimilarityUtil.getSimilarity(collect1, collect2);
                    // 最近评论id是否相同
                    v3 = t1.getCommentId().equals(t2.getCommentId()) ? 1.0 : 0;

                    // 计算最终的权重
                    value += w1 * v1 + w2 * v2 + w3 * v3;
                    System.out.println("v1:" + v1 + " v2:" + v2 + " v3:" + v3 + " value:" + value);
                    sortMap.put(value, t2.getUserId());
                    System.out.println("value" + value + " " + t2.getUserId());
                }
            }
            System.out.println("sortMap" + sortMap.size());

            keySet = sortMap.keySet();
            Iterator<Double> it = keySet.iterator();
            while (it.hasNext() && N > 0) {
                double tmp = it.next();
                friends += sortMap.get(tmp) + ";";
                System.out.println("---------" + friends + "000000" + N);
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

    public static String getRandomString(int length){
        String str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        Random random=new Random();
        StringBuffer sb=new StringBuffer();
        for(int i=0;i<length;i++){
            int number=random.nextInt(62);
            sb.append(str.charAt(number));
        }
        return sb.toString();
    }


    @RequestMapping("/like")
    public void like(HttpServletRequest request, HttpServletResponse response,Model model){
        String userId = request.getParameter("userId");
        TAdvise like =  adviseService.selectByPrimaryKey(Integer.parseInt(userId));
        List<TUser> userLike = new ArrayList<TUser>();
        if (like!=null){
            String listLike[] = like.getAdviseFriends().split(";");
            if (listLike!=null){
                for (String s : listLike) {
                    TUser user = userService.selectByPrimaryKey(Integer.parseInt(s));
                    userLike.add(user);
                }
            }
        }
        model.addAttribute("userLike",userLike);
        TUser user = userService.selectByPrimaryKey(Integer.parseInt(userId));
        if (null != user){
            model.addAttribute("user",user);
        }
        //return "annouce";
    }

    @RequestMapping(value = "/upload", produces = "text/plain;charset=utf-8")
    @ResponseBody
    public Object upload(HttpServletRequest request, HttpServletResponse response, MultipartFile file) {
        String username = request.getParameter("username");
        String userId = userService.selectIdByUsername(username);
        try {
            //获取文件名
            String originalName = file.getOriginalFilename();
            //扩展名
            String prefix = originalName.substring(originalName.lastIndexOf(".") + 1);
            System.out.println("prefix" + prefix);
            //使用UUID+后缀名保存文件名，防止中文乱码问题
            String uuid = UUID.randomUUID() + "";
            File file1 = new File("");
            String filePath = file1.getCanonicalPath() +
                    File.separator + "src" + File.separator + "main" + File.separator + "resources"
                    + File.separator + "static" + File.separator  + "qualification";
            System.out.println("projectPath==" + filePath);
            String projectPath = filePath + File.separator + uuid + "." + prefix;
            System.out.println(projectPath);
            File files = new File(projectPath);
            file.transferTo(files); // 将接收的文件保存到指定文件中
            String url = "\\qualification" + File.separator + uuid + "." + prefix;
            userService.updateUserImg(url,userId);
            LayuiData layuiData = new LayuiData();
            layuiData.setCode(0);
            layuiData.setMsg(url);
            return JSON.toJSONString(layuiData);
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }

    @RequestMapping("/fabuNews")
    @ResponseBody
    public String fabuNews(HttpServletRequest request, HttpServletResponse response){
        String content = request.getParameter("content");
        String username = request.getParameter("username");
        String userId = userService.selectIdByUsername(username);
        userService.fabuNews(userId,content);
        return "success";
    }

    @RequestMapping("/myPhoto")
    public String myPhoto(HttpServletRequest request, HttpServletResponse response,Model model){
        String username = request.getParameter("username");
        TUser user = userService.userLogin(username);
        if (null != user){
            model.addAttribute("user",user);
        }
        return "myPhoto";
    }
    @RequestMapping("/talkFriend")
    @ResponseBody
    public String talkFriend(HttpServletRequest request, HttpServletResponse response){
        String id = request.getParameter("id");
        String username = request.getParameter("username");
        String userId = userService.selectIdByUsername(username);
        TFriends friends = userService.isFriend(userId,id);
        if (null != friends){
            return "already";
        }else {
            return "success";
        }
    }


    @RequestMapping("/talks")
    public String talks(HttpServletRequest request, HttpServletResponse response,Model model){
        String id = request.getParameter("id");
        String username = request.getParameter("username");
        String userId = userService.selectIdByUsername(username);
        TUser user = userService.userLogin(username);
        if (null != user){
            model.addAttribute("user",user);
            request.getSession().setAttribute("userLogin",user);
        }
        List<talk> commentList = userService.getTalk(userId,id);
        model.addAttribute("commentList",commentList);
        model.addAttribute("heid",userId);
        model.addAttribute("meid",id);
        return "talk";
    }

    @RequestMapping("/addTalk")
    @ResponseBody
    public String addTalk(HttpServletRequest request, HttpServletResponse response){
        String heid = request.getParameter("heid");
        String talkInput = request.getParameter("talkInput");
        String meid = request.getParameter("meid");
        userService.addTalk(meid,heid,meid,talkInput);
        return "success";
    }


    @RequestMapping("/talksnow")
    public String talksnow(HttpServletRequest request, HttpServletResponse response,Model model){
        String meid = request.getParameter("meid");
        String heid = request.getParameter("heid");
        List<talk> commentList = userService.getTalk(heid,meid);
        model.addAttribute("commentList",commentList);
        model.addAttribute("heid",heid);
        model.addAttribute("meid",meid);
        TUser user = (TUser) request.getSession().getAttribute("userLogin");
        if (null != user){
            model.addAttribute("user",user);
        }
        return "talk";
    }

}
