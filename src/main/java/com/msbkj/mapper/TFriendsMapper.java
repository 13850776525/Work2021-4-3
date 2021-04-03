package com.msbkj.mapper;

import com.msbkj.entity.TFriends;
import java.util.List;

public interface TFriendsMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(TFriends record);

    TFriends selectByPrimaryKey(Integer id);

    List<TFriends> selectAll();

    int updateByPrimaryKey(TFriends record);
}