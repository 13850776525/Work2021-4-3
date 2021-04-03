package com.msbkj.mapper;

import com.msbkj.entity.TComment;
import java.util.List;

public interface TCommentMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(TComment record);

    TComment selectByPrimaryKey(Integer id);

    List<TComment> selectAll();

    int updateByPrimaryKey(TComment record);
}