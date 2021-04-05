package com.msbkj.service;

import com.msbkj.entity.*;

import java.util.List;

public interface UserService {
    int deleteByPrimaryKey(Integer id);

    int insert(TUser record);

    TUser selectByPrimaryKey(Integer id);

    List<TUser> selectAll();

    int updateByPrimaryKey(TUser record);

    public List<TUser> getProductInfo(String name,String price,Integer page,Integer limit);

    public List<TAdmin> getAdminInfo(String name, String price, Integer page, Integer limit);

    public List<TNews> getNewInfo(String name, String price, Integer page, Integer limit);

    public List<TCollect> getCollectInfo(String name, String price, Integer page, Integer limit);

    public List<TComment> getCommentInfo(String name, String price, Integer page, Integer limit);

    public List<TAnnouce> getAnnouceInfo(String name, String price, Integer page, Integer limit);
}