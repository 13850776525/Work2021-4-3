package com.msbkj.service.impl;


import com.msbkj.entity.*;
import com.msbkj.mapper.TUserMapper;
import com.msbkj.service.UserService;
import java.util.List;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

@Service(value = "userService")
public class UserServiceImpl implements UserService {
    @Resource
    private TUserMapper userMapper;

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return userMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(TUser record) {
        return userMapper.insert(record);
    }

    @Override
    public TUser selectByPrimaryKey(Integer id) {
        return userMapper.selectByPrimaryKey(id);
    }

    @Override
    public List<TUser> selectAll() {
        return userMapper.selectAll();
    }

    @Override
    public int updateByPrimaryKey(TUser record) {
        return userMapper.updateByPrimaryKey(record);
    }

    @Override
    public List<TUser> getProductInfo(String name,String price,Integer page, Integer limit) {
        return userMapper.getProductInfo(name,price,page,limit);
    }

    @Override
    public List<TAdmin> getAdminInfo(String name, String price, Integer page, Integer limit) {
        return userMapper.getAdminInfo(name,price,page,limit);
    }

    @Override
    public List<TNews> getNewInfo(String name, String price, Integer page, Integer limit) {
        return userMapper.getNewInfo(name,price,page,limit);
    }

    @Override
    public List<TCollect> getCollectInfo(String name, String price, Integer page, Integer limit) {
        return userMapper.getCollectInfo(name,price,page,limit);
    }

    @Override
    public List<TComment> getCommentInfo(String name, String price, Integer page, Integer limit) {
        return userMapper.getCommentInfo(name,price,page,limit);
    }

    @Override
    public List<TAnnouce> getAnnouceInfo(String name, String price, Integer page, Integer limit) {
        return userMapper.getAnnouceInfo(name,price,page,limit);
    }

}