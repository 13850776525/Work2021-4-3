package com.msbkj.controller;

import com.msbkj.utils.SimilarityUtil;
import com.msbkj.entity.TAdmin;
import com.msbkj.entity.TUser;
import com.msbkj.service.AdminService;
import com.msbkj.service.UserService;
import com.msbkj.utils.R;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Elvis on 2020/6/1.
 */
@RestController
@RequestMapping(value = "/")
public class HelloController {
    @RequestMapping("hello")
    public String login(){
        return "hello world!!";
    }

    @RequestMapping("t1")
    public R ok(){
        return R.ok();
    }

    @RequestMapping("t2")
    public R error(){
        return R.error();
    }

    @RequestMapping("t3")
    public R getAdmins(){
        return R.ok().put("data", adminService.selectAll());
    }

    @RequestMapping("t4")
    public double calSim(String a, String b){
        return SimilarityUtil.getSimilarity(a, b);
    }

    @Autowired
    private AdminService adminService;
    @RequestMapping("test1")
    public List<TAdmin> getAllAdmin(){
        return adminService.selectAll();
    }

    @Autowired
    private UserService userService;
    @RequestMapping("test2")
    public List<TUser> getAllUser(){
        return userService.selectAll();
    }
}
