package com.msbkj.controller;

import com.google.gson.Gson;
import com.msbkj.entity.*;
import com.msbkj.service.AdminService;
import com.msbkj.service.UserService;
import com.msbkj.utils.R;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

/**
 * Created by Elvis on 2021/3/5.
 */
@Controller
@RequestMapping(value = "/manger")
public class MangerConller {

    @Autowired
    private UserService userService;


    @RequestMapping("/adminInfo")
    public String adminInfo(HttpServletRequest request, HttpServletResponse response){
        return "adminInfo";
    }


    @RequestMapping("/getAdminInfo")
    @ResponseBody
    public String getAdminInfo(HttpServletRequest request, HttpServletResponse response){
        String page = request.getParameter("page");
        Integer limit = Integer.parseInt(request.getParameter("limit"));
        Integer page1 = Integer.parseInt(page);
        page1 = (page1 - 1) * limit;
        String name = request.getParameter("username");
        String price = request.getParameter("price");
        List<TAdmin> list=userService.getAdminInfo(name,price,page1,limit);
        List<TAdmin> lists=userService.getAdminInfo(name,price,page1,1000);
//        Integer count=knowService.findCount(title,scope);
        LayuiData layuiData = new LayuiData();
        layuiData.setMsg("");
        layuiData.setCode(0);
        layuiData.setCount(lists.size());
        layuiData.setData(list);
        return new Gson().toJson(layuiData);
    }


    @RequestMapping("/newsinfo")
    public String newsinfo(HttpServletRequest request, HttpServletResponse response){
        return "newsinfo";
    }


    @RequestMapping("/getNewInfo")
    @ResponseBody
    public String getNewInfo(HttpServletRequest request, HttpServletResponse response){
        String page = request.getParameter("page");
        Integer limit = Integer.parseInt(request.getParameter("limit"));
        Integer page1 = Integer.parseInt(page);
        page1 = (page1 - 1) * limit;
        String name = request.getParameter("username");
        String price = request.getParameter("price");
        List<TNews> list=userService.getNewInfo(name,price,page1,limit);
        List<TNews> lists=userService.getNewInfo(name,price,page1,1000);
//        Integer count=knowService.findCount(title,scope);
        LayuiData layuiData = new LayuiData();
        layuiData.setMsg("");
        layuiData.setCode(0);
        layuiData.setCount(lists.size());
        layuiData.setData(list);
        return new Gson().toJson(layuiData);
    }


    @RequestMapping("/CollectInfo")
    public String CollectInfo(HttpServletRequest request, HttpServletResponse response){
        return "CollectInfo";
    }


    @RequestMapping("/getCollectInfo")
    @ResponseBody
    public String getCollectInfo(HttpServletRequest request, HttpServletResponse response){
        String page = request.getParameter("page");
        Integer limit = Integer.parseInt(request.getParameter("limit"));
        Integer page1 = Integer.parseInt(page);
        page1 = (page1 - 1) * limit;
        String name = request.getParameter("username");
        String price = request.getParameter("price");
        List<TCollect> list=userService.getCollectInfo(name,price,page1,limit);
        List<TCollect> lists=userService.getCollectInfo(name,price,page1,1000);
//        Integer count=knowService.findCount(title,scope);
        LayuiData layuiData = new LayuiData();
        layuiData.setMsg("");
        layuiData.setCode(0);
        layuiData.setCount(lists.size());
        layuiData.setData(list);
        return new Gson().toJson(layuiData);
    }

    @RequestMapping("/CommentInfo")
    public String CommentInfo(HttpServletRequest request, HttpServletResponse response){
        return "CommentInfo";
    }


    @RequestMapping("/getCommentInfo")
    @ResponseBody
    public String getCommentInfo(HttpServletRequest request, HttpServletResponse response){
        String page = request.getParameter("page");
        Integer limit = Integer.parseInt(request.getParameter("limit"));
        Integer page1 = Integer.parseInt(page);
        page1 = (page1 - 1) * limit;
        String name = request.getParameter("username");
        String price = request.getParameter("price");
        List<TComment> list=userService.getCommentInfo(name,price,page1,limit);
        List<TComment> lists=userService.getCommentInfo(name,price,page1,1000);
//        Integer count=knowService.findCount(title,scope);
        LayuiData layuiData = new LayuiData();
        layuiData.setMsg("");
        layuiData.setCode(0);
        layuiData.setCount(lists.size());
        layuiData.setData(list);
        return new Gson().toJson(layuiData);
    }


    @RequestMapping("/AnnouceInfo")
    public String AnnouceInfo(HttpServletRequest request, HttpServletResponse response){
        return "AnnouceInfo";
    }


    @RequestMapping("/getAnnouceInfo")
    @ResponseBody
    public String getAnnouceInfo(HttpServletRequest request, HttpServletResponse response){
        String page = request.getParameter("page");
        Integer limit = Integer.parseInt(request.getParameter("limit"));
        Integer page1 = Integer.parseInt(page);
        page1 = (page1 - 1) * limit;
        String name = request.getParameter("username");
        String price = request.getParameter("price");
        List<TAnnouce> list=userService.getAnnouceInfo(name,price,page1,limit);
        List<TAnnouce> lists=userService.getAnnouceInfo(name,price,page1,1000);
//        Integer count=knowService.findCount(title,scope);
        LayuiData layuiData = new LayuiData();
        layuiData.setMsg("");
        layuiData.setCode(0);
        layuiData.setCount(lists.size());
        layuiData.setData(list);
        return new Gson().toJson(layuiData);
    }


}
