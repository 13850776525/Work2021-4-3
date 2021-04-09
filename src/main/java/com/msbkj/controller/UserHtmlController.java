package com.msbkj.controller;

import com.msbkj.entity.*;
import com.msbkj.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@Controller
@RequestMapping(value = "/userHtml")
public class UserHtmlController {
    @Autowired
    UserService userService;

    @RequestMapping("/userRegister")
    public String userRegister(HttpServletRequest request, HttpServletResponse response){
        return "userRegister";
    }

    @RequestMapping("/register")
    @ResponseBody
    public String register(HttpServletRequest request, HttpServletResponse response){
        String account = request.getParameter("account");
        String pwd = request.getParameter("password");
        String age = request.getParameter("age");
        String degree = request.getParameter("degree");
        String sex = request.getParameter("sex");
        List<TUser> list = userService.checkUserExit(account);
        if (null != list && list.size()>0){
            return "fail";
        }else {
            userService.addUser(account,sex,pwd,age,degree);
            return "success";
        }
    }

    @RequestMapping("/userLogin")
    public String userLogin(HttpServletRequest request, HttpServletResponse response){
        return "userLogin";
    }

    @RequestMapping("/login")
    @ResponseBody
    public String login(HttpServletRequest request, HttpServletResponse response){
        String account = (String) request.getParameter("account");
        String password = (String) request.getParameter("pwd");
        String num = request.getParameter("num");
        String code = request.getParameter("code");

        if (num.toUpperCase().equals(code.toUpperCase())) {
            TUser user = userService.login(account,password);
            if (user != null) {
                request.getSession().setAttribute("user", user);
                return "登录成功";
            } else {
                return "账号或密码错误";
            }
        } else {
            return "验证码错误";
        }
    }

    @RequestMapping("/aboutUser")
    public String aboutUser(HttpServletRequest request, HttpServletResponse response, Model model){
        String account = request.getParameter("account");
        TUser user = userService.userLogin(account);
        if (null != user){
            model.addAttribute("user",user);
        }
        return "aboutUser";
    }

    @RequestMapping("/my")
    public String my(HttpServletRequest request, HttpServletResponse response,Model model){
        String username = request.getParameter("username");
        TUser user = userService.userLogin(username);
        if (null != user){
            model.addAttribute("user",user);
        }
        return "my";
    }

    @RequestMapping("/saveMy")
    @ResponseBody
    public String saveMy(HttpServletRequest request, HttpServletResponse response){
        String account = request.getParameter("username");
        String height = request.getParameter("height");
        String education = request.getParameter("education");
        String weight = request.getParameter("weight");
        userService.updateUserInfo(account,education,height,weight);
       return "success";
    }

    @RequestMapping("/photoWall")
    public String photoWall(HttpServletRequest request, HttpServletResponse response,Model model){
        String username = request.getParameter("username");
        TUser user = userService.userLogin(username);
        if (null != user){
            model.addAttribute("user",user);
        }
        String sex = null;
        if (user.getSex().equals("男")){
            sex = "女";
        }else {
            sex = "男";
        }
        List<TUser> list = userService.getAnotherSex(sex);
        if (null != list && list.size() != 0){
            model.addAttribute("list",list);
        }
        return "photoWall";
    }

    @RequestMapping("/joinFriend")
    @ResponseBody
    public String joinFriend(HttpServletRequest request, HttpServletResponse response){
        String id = request.getParameter("id");
        String username = request.getParameter("username");
        String userId = userService.selectIdByUsername(username);
        TFriends friends = userService.isFriend(userId,id);
        if (null != friends){
            return "already";
        }else {
            userService.joinFriend(userId,id);
            return "success";
        }
    }

    @RequestMapping("/news")
    public String news(HttpServletRequest request, HttpServletResponse response,Model model){
        String username = request.getParameter("username");
        TUser user = userService.userLogin(username);
        if (null != user){
            model.addAttribute("user",user);
        }
        List<TNews> newsList = userService.getNews();
        model.addAttribute("newsList",newsList);
        List<TComment> commentList = userService.getComment();
        model.addAttribute("commentList",commentList);
        return "news";
    }

    @RequestMapping("/dianZanNew")
    @ResponseBody
    public String dianZanNew(HttpServletRequest request, HttpServletResponse response){
        String id = request.getParameter("id");
        userService.dianZanNew(id);
        return "success";
    }

    @RequestMapping("/pinglunnew")
    @ResponseBody
    public String pinglunnew(HttpServletRequest request, HttpServletResponse response){
        String newsId = request.getParameter("id");
        String talkInput = request.getParameter("talkInput");
        String username = request.getParameter("username");
        String userId = userService.selectIdByUsername(username);
        userService.addUserComment(userId,newsId,talkInput);
        return "success";
    }

    @RequestMapping("/shoucangnew")
    @ResponseBody
    public String shoucangnew(HttpServletRequest request, HttpServletResponse response){
        String newsId = request.getParameter("id");
        String username = request.getParameter("username");
        String userId = userService.selectIdByUsername(username);
        TCollect collect = userService.checkCollect(userId,newsId);
        if (null != collect){
            return "already";
        }else {
            userService.shoucangnew(userId,newsId);
            return "success";
        }
    }

    @RequestMapping("/firstPage")
    public String firstPage(HttpServletRequest request, HttpServletResponse response,Model model){
        String username = request.getParameter("username");
        TUser user = userService.userLogin(username);
        if (null != user){
            model.addAttribute("user",user);
        }
        return "firstPage";
    }

}
