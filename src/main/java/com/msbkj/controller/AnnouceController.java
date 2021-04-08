package com.msbkj.controller;

import com.google.gson.Gson;
import com.msbkj.entity.TAnnouce;
import com.msbkj.service.AnnouceService;
import com.msbkj.utils.R;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Elvis on 2021/3/5.
 */
@RestController
@RequestMapping(value = "/annouce")
public class AnnouceController {
    @Autowired
    private AnnouceService annouceService;

    @RequestMapping("/add")
    public String add(TAnnouce annouce){
        annouceService.insert(annouce);
        return new Gson().toJson("新增成功");
    }

    @RequestMapping("/delete")
    public String delete(Integer id){
        annouceService.deleteByPrimaryKey(id);
        return new Gson().toJson("删除成功");
    }

    @RequestMapping("/update")
    public String update(TAnnouce annouce){
        annouceService.updateByPrimaryKey(annouce);
        return new Gson().toJson("更新成功");
    }

    @RequestMapping("/getAll")
    public R getAll(){
        return R.ok().put("data", annouceService.selectAll());
    }

    @RequestMapping("/getOne/{id}")
    public R getOne(@PathVariable("id") Integer id){
        return R.ok().put("data", annouceService.selectByPrimaryKey(id));
    }
}
