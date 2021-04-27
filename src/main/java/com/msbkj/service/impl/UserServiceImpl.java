package com.msbkj.service.impl;


import com.msbkj.entity.*;
import com.msbkj.mapper.TUserMapper;
import com.msbkj.service.UserService;
import java.util.List;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

@Service(value = "userService")
public class UserServiceImpl implements UserService {
    @Resource
    private TUserMapper userMapper;

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return userMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(TUser record) {
        return userMapper.insert(record);
    }

    @Override
    public TUser selectByPrimaryKey(Integer id) {
        return userMapper.selectByPrimaryKey(id);
    }

    @Override
    public List<TUser> selectAll() {
        return userMapper.selectAll();
    }

    @Override
    public int updateByPrimaryKey(TUser record) {
        return userMapper.updateByPrimaryKey(record);
    }

    @Override
    public List<TUser> getProductInfo(String name,String price,Integer page, Integer limit) {
        return userMapper.getProductInfo(name,price,page,limit);
    }

    @Override
    public List<TUser> checkUserExit(String account) {
        return userMapper.checkUserExit(account);
    }

    @Override
    public void addUser(String account, String sex, String pwd, String age, String degree) {
        userMapper.addUser(account,sex,pwd,age,degree);
    }

    @Override
    public TUser login(String account, String pwd) {
        return userMapper.login(account,pwd);
    }

    @Override
    public TUser userLogin(String account) {
        return userMapper.userLogin(account);
    }

    @Override
    public void updateUserInfo(String username, String degree, String height, String weight) {
        userMapper.updateUserInfo(username,degree,height,weight);
    }

    @Override
    public List<TUser> getAnotherSex(String sex) {
        return userMapper.getAnotherSex(sex);
    }

    @Override
    public TFriends isFriend(String userId, String id) {
        return userMapper.isFriend(userId,id);
    }

    @Override
    public void joinFriend(String userId, String id) {
        userMapper.joinFriend(userId,id);
    }

    @Override
    public String selectIdByUsername(String username) {
        return userMapper.selectIdByUsername(username);
    }

    @Override
    public List<TNews> getNews() {
        return userMapper.getNews();
    }

    @Override
    public void dianZanNew(String id) {
        userMapper.dianZanNew(id);
    }

    @Override
    public List<TComment> getComment() {
        return userMapper.getComment();
    }

    @Override
    public void addUserComment(String userId, String newsId, String content) {
        userMapper.addUserComment(userId,newsId,content);
    }

    @Override
    public void shoucangnew(String userId, String newsId) {
        userMapper.shoucangnew(userId,newsId);
    }

    @Override
    public TCollect checkCollect(String userId, String newsId) {
        return userMapper.checkCollect(userId,newsId);
    }

    @Override
    public List<TAdmin> getAdminInfo(String name, String price, Integer page, Integer limit) {
        return userMapper.getAdminInfo(name,price,page,limit);
    }

    @Override
    public List<TNews> getNewInfo(String name, String price, Integer page, Integer limit) {
        return userMapper.getNewInfo(name,price,page,limit);
    }

    @Override
    public List<TCollect> getCollectInfo(String name, String price, Integer page, Integer limit) {
        return userMapper.getCollectInfo(name,price,page,limit);
    }

    @Override
    public List<TComment> getCommentInfo(String name, String price, Integer page, Integer limit) {
        return userMapper.getCommentInfo(name,price,page,limit);
    }

    @Override
    public List<TAnnouce> getAnnouceInfo(String name, String price, Integer page, Integer limit) {
        return userMapper.getAnnouceInfo(name,price,page,limit);
    }

    @Override
    public int maxUserId() {
        return userMapper.maxUserId();
    };

    @Override
    public int getIdByUserName(String username) {
        return userMapper.getIdByUserName(username);
    };

    @Override
    public List<talk> getTalk(String heid,String meid) {
        return userMapper.getTalk(heid,meid);
    };

    @Override
    public void addTalk(String talkid, String heid, String meid,String concent) {
        userMapper.addTalk(talkid,heid,meid,concent);
    }
}