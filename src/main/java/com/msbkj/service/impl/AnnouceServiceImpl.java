package com.msbkj.service.impl;


import com.msbkj.entity.TAnnouce;
import com.msbkj.entity.TNews;
import com.msbkj.mapper.TAnnouceMapper;
import com.msbkj.service.AnnouceService;
import java.util.List;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Created by Elvis on 2021/3/5.
 */

@Service(value = "annouceService")
public class AnnouceServiceImpl implements AnnouceService {
    @Resource
    private TAnnouceMapper annouceMapper;
    @Override
    public int deleteByPrimaryKey(Integer id) {
        return annouceMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(TAnnouce record) {
        return annouceMapper.insert(record);
    }

    @Override
    public TAnnouce selectByPrimaryKey(Integer id) {
        return annouceMapper.selectByPrimaryKey(id);
    }

    @Override
    public List<TAnnouce> selectAll() {
        return annouceMapper.selectAll();
    }

    @Override
    public int updateByPrimaryKey(TAnnouce record) {
        return annouceMapper.updateByPrimaryKey(record);
    }
}
