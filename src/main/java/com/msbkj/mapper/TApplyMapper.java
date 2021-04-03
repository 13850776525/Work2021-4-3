package com.msbkj.mapper;

import com.msbkj.entity.TApply;
import java.util.List;

public interface TApplyMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(TApply record);

    TApply selectByPrimaryKey(Integer id);

    List<TApply> selectAll();

    int updateByPrimaryKey(TApply record);
}