package com.msbkj.mapper;

import com.msbkj.entity.TFeatures;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TFeaturesMapper {
    int deleteByPrimaryKey(Integer userId);

    int insert(TFeatures record);

    TFeatures selectByPrimaryKey(Integer userId);

    List<TFeatures> selectAll();

    List<TFeatures> selectByConditions(@Param("sex") String sex, @Param("degree") String degree, @Param("min") String min, @Param("max") String max);

    int updateByPrimaryKey(TFeatures record);

    int updateByConditions(TFeatures record);
}