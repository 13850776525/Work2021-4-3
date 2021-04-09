package com.msbkj.controller;

import com.google.gson.Gson;
import com.msbkj.entity.*;
import com.msbkj.service.AdviseService;
import com.msbkj.service.FeaturesService;
import com.msbkj.service.UserService;
import com.msbkj.utils.CommonUtil;
import com.msbkj.utils.R;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by Elvis on 2021/3/5.
 */
@Controller
@RequestMapping(value = "/user")
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private FeaturesService featuresService;
    @Autowired
    private AdviseService adviseService;

    @RequestMapping("/add")
    @ResponseBody
    public String add(TUser user){
        userService.insert(user);
        // 转化degree并构造Features
        TFeatures f = new TFeatures(user.getId(), user.getSex(), user.getAge(), CommonUtil.converDegree(user.getDegree()));
        featuresService.insert(f);
        return new Gson().toJson("新增成功");
    }

    @RequestMapping("/delete")
    @ResponseBody
    public String delete(Integer id){
        userService.deleteByPrimaryKey(id);
        featuresService.deleteByPrimaryKey(id);
        adviseService.deleteByPrimaryKey(id);
        return new Gson().toJson("删除成功");
    }

    @RequestMapping("/update")
    @ResponseBody
    public String update(TUser user){
        userService.updateByPrimaryKey(user);
        TFeatures f = new TFeatures(user.getId(), user.getSex(), user.getAge(), CommonUtil.converDegree(user.getDegree()));
        featuresService.updateByConditions(f);
        return new Gson().toJson("更新成功");
    }

    @RequestMapping("/getAll")
    @ResponseBody
    public R getAll(){
        return R.ok().put("data", userService.selectAll());
    }

    @RequestMapping("/getOne/{id}")
    @ResponseBody
    public R getOne(@PathVariable("id") Integer id){
        return R.ok().put("data", userService.selectByPrimaryKey(id));
    }


    @RequestMapping("/userinfo")
    public String getProductInfo(HttpServletRequest request, HttpServletResponse response){
        return "userInfo";
    }

    @RequestMapping("/menu")
    public String menu(HttpServletRequest request, HttpServletResponse response){
        return "firmMenu1";
    }


    @RequestMapping("/getUserInfo")
    @ResponseBody
    public String getUserInfo(HttpServletRequest request, HttpServletResponse response){
        String page = request.getParameter("page");
        Integer limit = Integer.parseInt(request.getParameter("limit"));
        Integer page1 = Integer.parseInt(page);
        page1 = (page1 - 1) * limit;
        String name = request.getParameter("username");
        String price = request.getParameter("price");
        List<TUser> list=userService.getProductInfo(name,price,page1,limit);
        List<TUser> lists=userService.getProductInfo(name,price,page1,1000);
//        Integer count=knowService.findCount(title,scope);
        LayuiData layuiData = new LayuiData();
        layuiData.setMsg("");
        layuiData.setCode(0);
        layuiData.setCount(lists.size());
        layuiData.setData(list);
        return new Gson().toJson(layuiData);
    }



}
