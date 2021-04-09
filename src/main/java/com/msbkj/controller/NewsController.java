package com.msbkj.controller;

import com.google.gson.Gson;
import com.msbkj.entity.TFeatures;
import com.msbkj.entity.TNews;
import com.msbkj.service.FeaturesService;
import com.msbkj.service.NewsService;
import com.msbkj.utils.CommonUtil;
import com.msbkj.utils.R;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by Elvis on 2021/3/5.
 */
@RestController
@RequestMapping(value = "/news")
public class NewsController {
    @Autowired
    private NewsService newsService;
    @Autowired
    private FeaturesService featuresService;

    @RequestMapping("/add")
    public String add(TNews news){
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String dateString = formatter.format(new Date());
        news.setTimes(dateString);
        news.setLikes("0");
        newsService.insert(news);
        TFeatures f = new TFeatures(news.getUserId());
        f.setNewsContent(news.getContent());
        featuresService.updateByConditions(f);
        return new Gson().toJson("新增成功");
    }

    @RequestMapping("/delete")
    public String delete(Integer id){
        newsService.deleteByPrimaryKey(id);
        return new Gson().toJson("删除成功");
    }

    @RequestMapping("/update")
    public String update(TNews news){
        newsService.updateByPrimaryKey(news);
        TFeatures f = new TFeatures(news.getUserId());
        f.setNewsContent(news.getContent());
        featuresService.updateByConditions(f);
        return new Gson().toJson("更新成功");
    }

    @RequestMapping("/getAll")
    public R getAll(){
        return R.ok().put("data", newsService.selectAll("0"));
    }

    @RequestMapping("/getOne/{id}")
    public R getOne(@PathVariable("id") Integer id){
        return R.ok().put("data", newsService.selectByPrimaryKeyAndFlag(id, "0"));
    }
}
