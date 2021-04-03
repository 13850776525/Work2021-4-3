package com.msbkj.entity;

public class TFeatures {
    private Integer userId;

    private String sex;

    private String age;

    private String degree;

    private Integer commentId;

    private String newsContent;

    private String collectContent;

    public TFeatures() {

    }

    public TFeatures(Integer userId) {
        this.userId = userId;
        this.sex = "";
        this.age = "";
        this.degree = "";
        this.commentId = -1;
        this.newsContent = "";
        this.collectContent = "";
    }

    public TFeatures(Integer userId, String sex, String age, String degree) {
        this.userId = userId;
        this.sex = sex;
        this.age = age;
        this.degree = degree;
        this.commentId = -1;
        this.newsContent = "";
        this.collectContent = "";
    }



    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex == null ? null : sex.trim();
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age == null ? null : age.trim();
    }

    public String getDegree() {
        return degree;
    }

    public void setDegree(String degree) {
        this.degree = degree == null ? null : degree.trim();
    }

    public Integer getCommentId() {
        return commentId;
    }

    public void setCommentId(Integer commentId) {
        this.commentId = commentId;
    }

    public String getNewsContent() {
        return newsContent;
    }

    public void setNewsContent(String newsContent) {
        this.newsContent = newsContent == null ? null : newsContent.trim();
    }

    public String getCollectContent() {
        return collectContent;
    }

    public void setCollectContent(String collectContent) {
        this.collectContent = collectContent == null ? null : collectContent.trim();
    }

    @Override
    public String toString() {
        return "userId: " + userId + "; sex: " + sex + "; age: "+ age + "; degree: " + degree + "; commentId: " + commentId + "; news: " + newsContent + "; collect: " + collectContent;
    }
}