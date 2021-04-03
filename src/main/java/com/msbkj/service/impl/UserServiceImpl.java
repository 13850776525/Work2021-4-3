package com.msbkj.service.impl;


import com.msbkj.entity.TUser;
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
}