package com.msbkj.controller;

import com.msbkj.entity.TAdmin;
import com.msbkj.service.AdminService;
import com.msbkj.utils.R;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Elvis on 2021/3/5.
 */
@RestController
@RequestMapping(value = "/admin")
public class AdminController {
    @Autowired
    private AdminService adminService;

    @RequestMapping("/add")
    public R add(TAdmin admin){
        adminService.insert(admin);
        return R.ok("新增成功");
    }

    @RequestMapping("/delete")
    public R delete(Integer id){
        adminService.deleteByPrimaryKey(id);
        return R.ok("删除成功");
    }

    @RequestMapping("/update")
    public R update(TAdmin admin){
        adminService.updateByPrimaryKey(admin);
        return R.ok("更新成功");
    }

    @RequestMapping("/getAll")
    public R getAll(){
        return R.ok().put("data", adminService.selectAll());
    }

    @RequestMapping("/getOne/{id}")
    public R getOne(@PathVariable("id") Integer id){
        return R.ok().put("data", adminService.selectByPrimaryKey(id));
    }
}
