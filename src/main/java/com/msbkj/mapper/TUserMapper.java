package com.msbkj.mapper;

import com.msbkj.entity.*;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface TUserMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(TUser record);

    TUser selectByPrimaryKey(Integer id);

    List<TUser> selectAll();

    int updateByPrimaryKey(TUser record);

    public List<TUser> getProductInfo(@Param("name") String name, @Param("sex") String price, @Param("page") Integer page, @Param("limit") Integer limit);

    List<TUser> checkUserExit(@Param("account") String account);

    void addUser(@Param("account") String account, @Param("sex") String sex, @Param("pwd") String pwd, @Param("age") String age, @Param("degree") String degree);

    TUser login(@Param("account") String account, @Param("pwd") String pwd);

    TUser userLogin(@Param("account") String account);

    void updateUserInfo(@Param("username") String username, @Param("degree") String degree, @Param("height") String height, @Param("weight") String weight);

    List<TUser> getAnotherSex(@Param("sex") String sex);

    TFriends isFriend(@Param("userId") String userId, @Param("id") String id);

    void joinFriend(@Param("userId") String userId, @Param("id") String id);

    String selectIdByUsername(@Param("username") String username);

    List<TNews> getNews();

    void dianZanNew(@Param("id") String id);

    List<TComment> getComment();

    void addUserComment(@Param("userId") String userId, @Param("newsId") String newsId, @Param("content") String content);

    void shoucangnew(@Param("userId") String userId, @Param("newsId") String newsId);

    TCollect checkCollect(@Param("userId") String userId, @Param("newsId") String newsId);

    public List<TAdmin> getAdminInfo(@Param("name") String name, @Param("sex") String price, @Param("page") Integer page, @Param("limit") Integer limit);

    public List<TNews> getNewInfo(@Param("name") String name, @Param("sex") String price, @Param("page") Integer page, @Param("limit") Integer limit);

    public List<TCollect> getCollectInfo(@Param("name") String name, @Param("sex") String price, @Param("page") Integer page, @Param("limit") Integer limit);

    public List<TComment> getCommentInfo(@Param("name") String name, @Param("sex") String price, @Param("page") Integer page, @Param("limit") Integer limit);

    public List<TAnnouce> getAnnouceInfo(@Param("name") String name, @Param("sex") String price, @Param("page") Integer page, @Param("limit") Integer limit);

    public int maxUserId();

    public int getIdByUserName(String username);

    public List<talk> getTalk(@Param("heid") String heid, @Param("meid") String meid);

    void addTalk(@Param("talkid") String talkid,@Param("heid") String heid, @Param("meid") String meid, @Param("content") String content);


}