package com.msbkj.controller;

import com.msbkj.entity.TFeatures;
import com.msbkj.entity.TUser;
import com.msbkj.service.AdviseService;
import com.msbkj.service.FeaturesService;
import com.msbkj.service.UserService;
import com.msbkj.utils.CommonUtil;
import com.msbkj.utils.R;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Elvis on 2021/3/5.
 */
@RestController
@RequestMapping(value = "/user")
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private FeaturesService featuresService;
    @Autowired
    private AdviseService adviseService;

    @RequestMapping("/add")
    public R add(TUser user){
        userService.insert(user);
        // 转化degree并构造Features
        TFeatures f = new TFeatures(user.getId(), user.getSex(), user.getAge(), CommonUtil.converDegree(user.getDegree()));
        featuresService.insert(f);
        return R.ok("新增成功");
    }

    @RequestMapping("/delete")
    public R delete(Integer id){
        userService.deleteByPrimaryKey(id);
        featuresService.deleteByPrimaryKey(id);
        adviseService.deleteByPrimaryKey(id);
        return R.ok("删除成功");
    }

    @RequestMapping("/update")
    public R update(TUser user){
        userService.updateByPrimaryKey(user);
        TFeatures f = new TFeatures(user.getId(), user.getSex(), user.getAge(), CommonUtil.converDegree(user.getDegree()));
        featuresService.updateByConditions(f);
        return R.ok("更新成功");
    }

    @RequestMapping("/getAll")
    public R getAll(){
        return R.ok().put("data", userService.selectAll());
    }

    @RequestMapping("/getOne/{id}")
    public R getOne(@PathVariable("id") Integer id){
        return R.ok().put("data", userService.selectByPrimaryKey(id));
    }
}
