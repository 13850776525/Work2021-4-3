package com.msbkj.service.impl;


import com.msbkj.entity.TFeatures;
import com.msbkj.mapper.TFeaturesMapper;
import com.msbkj.service.FeaturesService;
import java.util.List;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

@Service(value = "featuresService")
public class FeaturesServiceImpl implements FeaturesService {
    @Resource
    private TFeaturesMapper featuresMapper;

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return featuresMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(TFeatures record) {
        return featuresMapper.insert(record);
    }

    @Override
    public TFeatures selectByPrimaryKey(Integer id) {
        return featuresMapper.selectByPrimaryKey(id);
    }

    @Override
    public List<TFeatures> selectAll() {
        return featuresMapper.selectAll();
    }

    @Override
    public List<TFeatures> selectByConditions(String sex, String degree, String min, String max) {
        return featuresMapper.selectByConditions(sex, degree, min, max);
    }

    @Override
    public int updateByPrimaryKey(TFeatures record) {
        return featuresMapper.updateByPrimaryKey(record);
    }

    @Override
    public int updateByConditions(TFeatures record) {
        return featuresMapper.updateByConditions(record);
    }
}