package com.msbkj.service;

import com.msbkj.entity.TAdvise;
import java.util.List;

public interface AdviseService {
    int deleteByPrimaryKey(Integer userId);

    int deleteAll();

    int insert(TAdvise record);

    TAdvise selectByPrimaryKey(Integer userId);

    List<TAdvise> selectAll();

    int updateByPrimaryKey(TAdvise record);
}