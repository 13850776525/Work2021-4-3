package com.msbkj.mapper;

import com.msbkj.entity.TAdvise;
import java.util.List;

public interface TAdviseMapper {
    int deleteByPrimaryKey(Integer userId);

    int deleteAll();

    int insert(TAdvise record);

    TAdvise selectByPrimaryKey(Integer userId);

    List<TAdvise> selectAll();

    int updateByPrimaryKey(TAdvise record);
}