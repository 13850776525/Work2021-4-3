package com.msbkj.controller;

import com.google.gson.Gson;
import com.msbkj.entity.TAdmin;
import com.msbkj.service.AdminService;
import com.msbkj.utils.R;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by Elvis on 2021/3/5.
 */
@RestController
@RequestMapping(value = "/admin")
public class AdminController {
    @Autowired
    private AdminService adminService;

    @RequestMapping("/add")
    public String add(TAdmin admin){
        adminService.insert(admin);
        return new Gson().toJson("新增成功");
    }

    @RequestMapping("/delete")
    public String delete(Integer id){
        adminService.deleteByPrimaryKey(id);
        return new Gson().toJson("删除成功");
    }

    @RequestMapping("/update")
    public String update(TAdmin admin){
        adminService.updateByPrimaryKey(admin);
        return new Gson().toJson("更新成功");
    }

    @RequestMapping("/getAll")
    public R getAll(){
        return R.ok().put("data", adminService.selectAll());
    }

    @RequestMapping("/getOne/{id}")
    public R getOne(@PathVariable("id") Integer id){
        return R.ok().put("data", adminService.selectByPrimaryKey(id));
    }



    @RequestMapping("/load")
    public String load(HttpServletRequest request, HttpServletRequest resp){
        String num = request.getParameter("num");
        String account = request.getParameter("account");
        String pwd = request.getParameter("pwd");
        String code = request.getParameter("code");
        if (num.toUpperCase().equals(code.toUpperCase())) {
            TAdmin admins = adminService.login(account,pwd);
            if (admins!=null){
                return "登陆成功";
            }else{
                return "密码错误";
            }
        } else {
            return "验证码错误";
        }

    }



}
