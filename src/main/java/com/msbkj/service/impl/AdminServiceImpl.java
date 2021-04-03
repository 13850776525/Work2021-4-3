package com.msbkj.service.impl;

import com.msbkj.entity.TAdmin;
import com.msbkj.mapper.TAdminMapper;
import com.msbkj.service.AdminService;
import java.util.List;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Created by Elvis on 2021/3/3.
 */
@Service(value = "adminService")
public class AdminServiceImpl implements AdminService{
    @Resource
    private TAdminMapper adminMapper;

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return adminMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(TAdmin record) {
        return adminMapper.insert(record);
    }

    @Override
    public TAdmin selectByPrimaryKey(Integer id) {
        return adminMapper.selectByPrimaryKey(id);
    }

    @Override
    public List<TAdmin> selectAll() {
        return adminMapper.selectAll();
    }

    @Override
    public int updateByPrimaryKey(TAdmin record) {
        return adminMapper.updateByPrimaryKey(record);
    }
}
