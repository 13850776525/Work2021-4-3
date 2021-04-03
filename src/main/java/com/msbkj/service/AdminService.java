package com.msbkj.service;

import com.msbkj.entity.TAdmin;
import java.util.List;

/**
 * Created by Elvis on 2021/3/3.
 */
public interface AdminService {
    int deleteByPrimaryKey(Integer id);

    int insert(TAdmin record);

    TAdmin selectByPrimaryKey(Integer id);

    List<TAdmin> selectAll();

    int updateByPrimaryKey(TAdmin record);
}
