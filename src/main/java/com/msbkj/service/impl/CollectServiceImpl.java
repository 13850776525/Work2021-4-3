package com.msbkj.service.impl;


import com.msbkj.entity.TCollect;
import com.msbkj.mapper.TCollectMapper;
import com.msbkj.service.CollectService;
import java.util.List;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Created by Elvis on 2021/3/5.
 */
@Service(value = "collectService")
public class CollectServiceImpl implements CollectService {
    @Resource
    private TCollectMapper collectMapper;

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return collectMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(TCollect record) {
        return collectMapper.insert(record);
    }

    @Override
    public TCollect selectByPrimaryKey(Integer id) {
        return collectMapper.selectByPrimaryKey(id);
    }

    @Override
    public List<TCollect> selectAll() {
        return collectMapper.selectAll();
    }

    @Override
    public int updateByPrimaryKey(TCollect record) {
        return collectMapper.updateByPrimaryKey(record);
    }
}
