package com.msbkj.service;

import com.msbkj.entity.TUser;
import java.util.List;

public interface UserService {
    int deleteByPrimaryKey(Integer id);

    int insert(TUser record);

    TUser selectByPrimaryKey(Integer id);

    List<TUser> selectAll();

    int updateByPrimaryKey(TUser record);
}