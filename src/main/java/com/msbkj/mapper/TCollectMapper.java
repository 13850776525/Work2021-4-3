package com.msbkj.mapper;

import com.msbkj.entity.TCollect;
import java.util.List;

public interface TCollectMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(TCollect record);

    TCollect selectByPrimaryKey(Integer id);

    List<TCollect> selectAll();

    int updateByPrimaryKey(TCollect record);
}