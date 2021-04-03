package com.msbkj.controller;

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
    public R add(TNews news){
        newsService.insert(news);
        TFeatures f = new TFeatures(news.getUserId());
        f.setNewsContent(news.getContent());
        featuresService.updateByConditions(f);
        return R.ok("新增成功");
    }

    @RequestMapping("/delete")
    public R delete(Integer id){
        newsService.deleteByPrimaryKey(id);
        return R.ok("删除成功");
    }

    @RequestMapping("/update")
    public R update(TNews news){
        newsService.updateByPrimaryKey(news);
        TFeatures f = new TFeatures(news.getUserId());
        f.setNewsContent(news.getContent());
        featuresService.updateByConditions(f);
        return R.ok("更新成功");
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
