package com.msbkj.service;

import com.msbkj.entity.TAnnouce;
import java.util.List;

public interface AnnouceService {
    int deleteByPrimaryKey(Integer id);

    int insert(TAnnouce record);

    TAnnouce selectByPrimaryKey(Integer id);

    List<TAnnouce> selectAll();

    int updateByPrimaryKey(TAnnouce record);
}