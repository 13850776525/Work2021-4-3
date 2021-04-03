package com.msbkj.mapper;

import com.msbkj.entity.TNews;
import java.util.List;

public interface TNewsMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(TNews record);
//
//    TNews selectByPrimaryKeyAndFlag(Integer id);
//
//    List<TNews> selectAll();

    TNews selectByPrimaryKeyAndFlag(Integer id, String flag);

    List<TNews> selectAll(String flag);

    int updateByPrimaryKey(TNews record);
}