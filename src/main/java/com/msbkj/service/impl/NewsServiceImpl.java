package com.msbkj.service.impl;

import com.msbkj.entity.TNews;
import com.msbkj.mapper.TNewsMapper;
import com.msbkj.service.NewsService;
import java.util.List;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Created by Elvis on 2021/3/5.
 */

@Service(value = "newsService")
public class NewsServiceImpl implements NewsService{
    @Resource
    private TNewsMapper newsMapper;
    @Override
    public int deleteByPrimaryKey(Integer id) {
        return newsMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(TNews record) {
        return newsMapper.insert(record);
    }

    @Override
    public TNews selectByPrimaryKeyAndFlag(Integer id, String flag) {
        return newsMapper.selectByPrimaryKeyAndFlag(id, flag);
    }

    @Override
    public List<TNews> selectAll(String flag) {
        return newsMapper.selectAll(flag);
    }

    @Override
    public int updateByPrimaryKey(TNews record) {
        return newsMapper.updateByPrimaryKey(record);
    }
}
