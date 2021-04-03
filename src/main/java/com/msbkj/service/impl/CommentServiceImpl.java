package com.msbkj.service.impl;

import com.msbkj.entity.TComment;
import com.msbkj.mapper.TCommentMapper;
import com.msbkj.service.CommentService;
import java.util.List;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

/**
 * Created by Elvis on 2021/3/5.
 */
@Service(value = "commentService")
public class CommentServiceImpl implements CommentService {
    @Resource
    private TCommentMapper commentMapper;

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return commentMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(TComment record) {
        return commentMapper.insert(record);
    }

    @Override
    public TComment selectByPrimaryKey(Integer id) {
        return commentMapper.selectByPrimaryKey(id);
    }

    @Override
    public List<TComment> selectAll() {
        return commentMapper.selectAll();
    }

    @Override
    public int updateByPrimaryKey(TComment record) {
        return commentMapper.updateByPrimaryKey(record);
    }
}
