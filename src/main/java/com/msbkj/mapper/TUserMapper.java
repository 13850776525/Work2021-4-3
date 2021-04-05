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

    public List<TAdmin> getAdminInfo(@Param("name") String name, @Param("sex") String price, @Param("page") Integer page, @Param("limit") Integer limit);

    public List<TNews> getNewInfo(@Param("name") String name, @Param("sex") String price, @Param("page") Integer page, @Param("limit") Integer limit);

    public List<TCollect> getCollectInfo(@Param("name") String name, @Param("sex") String price, @Param("page") Integer page, @Param("limit") Integer limit);

    public List<TComment> getCommentInfo(@Param("name") String name, @Param("sex") String price, @Param("page") Integer page, @Param("limit") Integer limit);

    public List<TAnnouce> getAnnouceInfo(@Param("name") String name, @Param("sex") String price, @Param("page") Integer page, @Param("limit") Integer limit);


}