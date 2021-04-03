package com.msbkj.service;

import com.msbkj.entity.TFeatures;
import java.util.List;

public interface FeaturesService {
    int deleteByPrimaryKey(Integer userId);

    int insert(TFeatures record);

    TFeatures selectByPrimaryKey(Integer userId);

    List<TFeatures> selectAll();

    List<TFeatures> selectByConditions(String sex, String degree, String min, String max);

    int updateByPrimaryKey(TFeatures record);

    int updateByConditions(TFeatures record);
}