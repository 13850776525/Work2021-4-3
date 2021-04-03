package com.msbkj.entity;

public class TAdvise {
    private Integer userId;

    private String adviseFriends;

    public TAdvise(Integer userId, String adviseFriends) {
        this.userId = userId;
        this.adviseFriends = adviseFriends;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getAdviseFriends() {
        return adviseFriends;
    }

    public void setAdviseFriends(String adviseFriends) {
        this.adviseFriends = adviseFriends == null ? null : adviseFriends.trim();
    }
}