package com.msbkj.service.impl;



import com.msbkj.entity.TAdvise;
import com.msbkj.mapper.TAdviseMapper;
import com.msbkj.service.AdviseService;
import java.util.List;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

@Service(value = "adviseService")
public class AdviseServiceImpl implements AdviseService {
    @Resource
    private TAdviseMapper adviseMapper;

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return adviseMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int deleteAll() {
        return adviseMapper.deleteAll();
    }

    @Override
    public int insert(TAdvise record) {
        return adviseMapper.insert(record);
    }

    @Override
    public TAdvise selectByPrimaryKey(Integer id) {
        return adviseMapper.selectByPrimaryKey(id);
    }

    @Override
    public List<TAdvise> selectAll() {
        return adviseMapper.selectAll();
    }

    @Override
    public int updateByPrimaryKey(TAdvise record) {
        return adviseMapper.updateByPrimaryKey(record);
    }
}