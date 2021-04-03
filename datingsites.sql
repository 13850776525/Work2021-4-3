/*
Navicat MySQL Data Transfer

Source Server         : tencent
Source Server Version : 50650
Source Host           : 49.235.35.133:3306
Source Database       : datingsites

Target Server Type    : MYSQL
Target Server Version : 50650
File Encoding         : 65001

Date: 2021-03-22 12:39:14
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `t_admin`
-- ----------------------------
DROP TABLE IF EXISTS `t_admin`;
CREATE TABLE `t_admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_admin
-- ----------------------------
INSERT INTO `t_admin` VALUES ('1', 'root', 'root');
INSERT INTO `t_admin` VALUES ('3', 'root1', '123');

-- ----------------------------
-- Table structure for `t_advise`
-- ----------------------------
DROP TABLE IF EXISTS `t_advise`;
CREATE TABLE `t_advise` (
  `user_id` int(11) NOT NULL,
  `advise_friends` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_advise
-- ----------------------------
INSERT INTO `t_advise` VALUES ('2', '3;');
INSERT INTO `t_advise` VALUES ('3', '2;');

-- ----------------------------
-- Table structure for `t_annouce`
-- ----------------------------
DROP TABLE IF EXISTS `t_annouce`;
CREATE TABLE `t_annouce` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) DEFAULT NULL,
  `admin_id` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_annouce
-- ----------------------------
INSERT INTO `t_annouce` VALUES ('1', '会员消息', '1');

-- ----------------------------
-- Table structure for `t_apply`
-- ----------------------------
DROP TABLE IF EXISTS `t_apply`;
CREATE TABLE `t_apply` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id1` int(11) DEFAULT NULL,
  `user_id2` int(11) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_apply
-- ----------------------------

-- ----------------------------
-- Table structure for `t_collect`
-- ----------------------------
DROP TABLE IF EXISTS `t_collect`;
CREATE TABLE `t_collect` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `news_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_collect
-- ----------------------------
INSERT INTO `t_collect` VALUES ('1', '1', '3');
INSERT INTO `t_collect` VALUES ('2', '2', '1');
INSERT INTO `t_collect` VALUES ('3', '3', '3');
INSERT INTO `t_collect` VALUES ('4', '2', '2');
INSERT INTO `t_collect` VALUES ('6', '1', '2');
INSERT INTO `t_collect` VALUES ('7', '1', '2');
INSERT INTO `t_collect` VALUES ('8', '1', '2');
INSERT INTO `t_collect` VALUES ('9', '1', '2');
INSERT INTO `t_collect` VALUES ('10', '1', '4');

-- ----------------------------
-- Table structure for `t_comment`
-- ----------------------------
DROP TABLE IF EXISTS `t_comment`;
CREATE TABLE `t_comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `flag` varchar(255) DEFAULT NULL,
  `news_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `times` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_comment
-- ----------------------------
INSERT INTO `t_comment` VALUES ('1', '0', '4', '1', '评论1', '2021年3月5日13:03:55');
INSERT INTO `t_comment` VALUES ('3', '2', '2', '1', '评论5', '2021年3月6日22:17:18');
INSERT INTO `t_comment` VALUES ('5', '0', '4', '1', '评论5', '2021年3月6日22:17:18');

-- ----------------------------
-- Table structure for `t_features`
-- ----------------------------
DROP TABLE IF EXISTS `t_features`;
CREATE TABLE `t_features` (
  `user_id` int(11) NOT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `age` varchar(255) DEFAULT NULL,
  `degree` varchar(255) DEFAULT NULL,
  `news_content` text,
  `collect_content` text,
  `comment_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_features
-- ----------------------------
INSERT INTO `t_features` VALUES ('1', '男', '23', '4', '消息2', '消息4', '2');
INSERT INTO `t_features` VALUES ('2', '男', '21', '3', '你好你好鸭', '星座狮子座', '1');
INSERT INTO `t_features` VALUES ('3', '女', '23', '3', 'hello world', '星座', '1');

-- ----------------------------
-- Table structure for `t_friends`
-- ----------------------------
DROP TABLE IF EXISTS `t_friends`;
CREATE TABLE `t_friends` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id1` int(11) DEFAULT NULL,
  `user_id2` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_friends
-- ----------------------------

-- ----------------------------
-- Table structure for `t_news`
-- ----------------------------
DROP TABLE IF EXISTS `t_news`;
CREATE TABLE `t_news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `flag` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `times` varchar(255) DEFAULT NULL,
  `likes` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_news
-- ----------------------------
INSERT INTO `t_news` VALUES ('1', '0', '1', '消息1', '2021年3月5日17:00:45', '4');
INSERT INTO `t_news` VALUES ('2', '0', '2', '消息2', '2023年1月5日17:00:45', '4');
INSERT INTO `t_news` VALUES ('3', '0', '2', '消息3', '2021年3月5日17:00:45', '56');
INSERT INTO `t_news` VALUES ('4', '0', '3', '消息4', '2021年3月5日11:00:45', '12');
INSERT INTO `t_news` VALUES ('6', '0', '3', 'hello world', '2021年3月6日21:39:48', '44');

-- ----------------------------
-- Table structure for `t_user`
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `age` varchar(255) DEFAULT NULL,
  `height` varchar(255) DEFAULT NULL,
  `weight` varchar(255) DEFAULT NULL,
  `degree` varchar(255) DEFAULT NULL,
  `conditions` varchar(255) DEFAULT NULL,
  `annouce` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES ('1', 'u1', '1', '/img3', '男', '23', '184', '74', '硕士', '0', '消息3');
INSERT INTO `t_user` VALUES ('2', 'u2', '12', '/img1', '男', '21', '174', '62', '本科', '0', '消息1');
INSERT INTO `t_user` VALUES ('3', 'u1', '123', '/img2', '女', '23', '163', '46', '大专', '1', '消息1');
