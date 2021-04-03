package com.msbkj.mapper;

import com.msbkj.entity.TAdmin;
import java.util.List;

public interface TAdminMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(TAdmin record);

    TAdmin selectByPrimaryKey(Integer id);

    List<TAdmin> selectAll();

    int updateByPrimaryKey(TAdmin record);
}