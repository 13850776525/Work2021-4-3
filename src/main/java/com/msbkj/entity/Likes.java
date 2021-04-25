package com.msbkj.entity;

import org.omg.CORBA.PRIVATE_MEMBER;

public class Likes {
    private Integer id;
    private Integer userId;
    private Integer newsId;

    public Likes() {
    }

    public Likes(Integer id, Integer userId, Integer newsId) {
        this.id = id;
        this.userId = userId;
        this.newsId = newsId;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getNewsId() {
        return newsId;
    }

    public void setNewsId(Integer newsId) {
        this.newsId = newsId;
    }
}
