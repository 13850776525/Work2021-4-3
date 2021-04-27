package com.msbkj.entity;

import java.util.Date;

public class talk {
    private Integer id;


    private String meid;

    private String heid;

    private String content;

    private Date times;

    private String talkid;

    public String getTalkid() {
        return talkid;
    }

    public void setTalkid(String talkid) {
        this.talkid = talkid;
    }

    public talk(Integer id, String meid, String heid, String content, Date times, String talkid) {
        this.id = id;
        this.meid = meid;
        this.heid = heid;
        this.content = content;
        this.times = times;
        this.talkid = talkid;
    }

    public Integer getId() {
        return id;
    }



    public void setId(Integer id) {
        this.id = id;
    }

    public String getMeid() {
        return meid;
    }

    public void setMeid(String meid) {
        this.meid = meid;
    }

    public String getHeid() {
        return heid;
    }

    public void setHeid(String heid) {
        this.heid = heid;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getTimes() {
        return times;
    }

    public void setTimes(Date times) {
        this.times = times;
    }

    public talk() {
    }



}
