package com.msbkj.service;

import com.msbkj.entity.*;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface UserService {
    int deleteByPrimaryKey(Integer id);

    int insert(TUser record);

    TUser selectByPrimaryKey(Integer id);

    List<TUser> selectAll();

    int updateByPrimaryKey(TUser record);

    public List<TUser> getProductInfo(String name,String price,Integer page,Integer limit);

    List<TUser> checkUserExit(String account);

    void addUser(String account, String sex, String pwd, String age, String degree);

    TUser login(String account,String pwd);

    TUser userLogin(String account);

    void updateUserInfo(String username,String degree,String height,String weight);

    List<TUser> getAnotherSex(String sex);

    TFriends isFriend(String userId,String id);

    void joinFriend(String userId,String id);

    String selectIdByUsername(String username);

    List<TNews> getNews();

    void dianZanNew(String id);

    List<TComment> getComment();

    void addUserComment(String userId,String newsId,String content);

    void shoucangnew(String userId,String newsId);

    TCollect checkCollect(String userId, String newsId);
}