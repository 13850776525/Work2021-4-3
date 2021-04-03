package com.msbkj.controller;

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
    public R add(TAnnouce annouce){
        annouceService.insert(annouce);
        return R.ok("新增成功");
    }

    @RequestMapping("/delete")
    public R delete(Integer id){
        annouceService.deleteByPrimaryKey(id);
        return R.ok("删除成功");
    }

    @RequestMapping("/update")
    public R update(TAnnouce annouce){
        annouceService.updateByPrimaryKey(annouce);
        return R.ok("更新成功");
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
