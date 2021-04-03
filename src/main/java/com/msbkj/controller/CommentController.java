package com.msbkj.controller;

import com.msbkj.entity.TComment;
import com.msbkj.entity.TFeatures;
import com.msbkj.service.CommentService;
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
@RequestMapping(value = "/comment")
public class CommentController {
    @Autowired
    private CommentService commentService;
    @Autowired
    private NewsService newsService;
    @Autowired
    private FeaturesService featuresService;

    @RequestMapping("/add")
    public R add(TComment comment){
        commentService.insert(comment);
        TFeatures f = new TFeatures(comment.getUserId());
        f.setCommentId(comment.getNewsId());
        featuresService.updateByConditions(f);
        return R.ok("新增成功");
    }

    @RequestMapping("/delete")
    public R delete(Integer id){
        commentService.deleteByPrimaryKey(id);
        return R.ok("删除成功");
    }

    @RequestMapping("/update")
    public R update(TComment comment){
        commentService.updateByPrimaryKey(comment);
        TFeatures f = new TFeatures(comment.getUserId());
        f.setCommentId(comment.getNewsId());
        featuresService.updateByConditions(f);
        return R.ok("更新成功");
    }

    @RequestMapping("/getAll")
    public R getAll(){
        return R.ok().put("data", commentService.selectAll());
    }

    @RequestMapping("/getOne/{id}")
    public R getOne(@PathVariable("id") Integer id){
        return R.ok().put("data", commentService.selectByPrimaryKey(id));
    }
}
