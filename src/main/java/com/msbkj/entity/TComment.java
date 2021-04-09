package com.msbkj.entity;

public class TComment {
    private Integer id;

    private String flag;

    private Integer newsId;

    private Integer userId;

    private String content;

    private String times;

    private String username;

    public TComment() {
    }

    public TComment(Integer id, String flag, Integer newsId, Integer userId, String content, String times) {
        this.id = id;
        this.flag = flag;
        this.newsId = newsId;
        this.userId = userId;
        this.content = content;
        this.times = times;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFlag() {
        return flag;
    }

    public void setFlag(String flag) {
        this.flag = flag == null ? null : flag.trim();
    }

    public Integer getNewsId() {
        return newsId;
    }

    public void setNewsId(Integer newsId) {
        this.newsId = newsId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content == null ? null : content.trim();
    }

    public String getTimes() {
        return times;
    }

    public void setTimes(String times) {
        this.times = times == null ? null : times.trim();
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}