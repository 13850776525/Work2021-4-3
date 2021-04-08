<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2020/8/12 0012
  Time: 15:44
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html class="x-admin-sm">
<head>
    <meta charset="UTF-8">
    <title>后台登录-X-admin2.2</title>
    <meta name="renderer" content="webkit|ie-comp|ie-stand">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport"
          content="width=device-width,user-scalable=yes, minimum-scale=0.4, initial-scale=0.8,target-densitydpi=low-dpi"/>
    <meta http-equiv="Cache-Control" content="no-siteapp"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/X-admin/css/font.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/X-admin/css/xadmin.css">
    <script src="${pageContext.request.contextPath}/layui/layui.js" charset="utf-8"></script>
    <script src="${pageContext.request.contextPath}/js/jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/X-admin/js/xadmin.js"></script>

</head>
<body class="index">
<!-- 顶部开始 -->
<div class="container layui-bg-green">
    <div class="logo layui-bg-green">
        <a href="./index.html">乡村旅游管理系统</a></div>
    <div class="left_open layui-bg-green">
        <a><i title="展开左侧栏" class="iconfont">&#xe699;</i></a>
    </div>

    <ul class="layui-nav right layui-bg-green">
        <li class="layui-nav-item">
            <span>账号：${account}</span>&nbsp&nbsp
            <span>等级：管理员</span>&nbsp&nbsp
        </li>
        <li class="layui-nav-item to-index">
            <a href="/">后台首页</a></li>
    </ul>
</div>

<div class="left-nav">
    <div id="side-nav">
        <ul id="nav">
            <li>
                <a href="javascript:;">
                    <i class="iconfont left-nav-li" lay-tips="会员管理">&#xe6b8;</i>
                    <cite>列表管理</cite>
                    <i class="iconfont nav_right">&#xe697;</i></a>
                <ul class="sub-menu">
                    <li>
                        <a onclick="xadmin.add_tab('统计页面','../X-admin/welcome1.html')">
                            <i class="iconfont">&#xe6a7;</i>
                            <cite>统计页面</cite></a>
                    </li>

                    <li>
                        <a href="javascript:;">
                            <i class="iconfont">&#xe70b;</i>
                            <cite>会员管理</cite>
                            <i class="iconfont nav_right">&#xe697;</i></a>
                        <ul class="sub-menu">
                            <li>
                                <a onclick="xadmin.add_tab('会员列表(静态表格)','../jsp/member-list.jsp')">
                                    <i class="iconfont">&#xe6a7;</i>
                                    <cite>会员列表(静态表格)</cite></a>
                            </li>
                            <li>
                                <a onclick="xadmin.add_tab('会员删除','member-del.html')">
                                    <i class="iconfont">&#xe6a7;</i>
                                    <cite>会员删除</cite></a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href="javascript:;" onclick="xadmin.add_tab('会员列表(静态表格)','../jsp/view-list.jsp')">
                            <i class="iconfont">&#xe723;</i>
                            <cite>乡村风景</cite>
                            <i class="iconfont nav_right">&#xe697;</i></a>
                    </li>

                    <li>
                        <a href="javascript:;" onclick="xadmin.add_tab('会员列表(静态表格)','../jsp/story-list.jsp')">
                            <i class="iconfont">&#xe723;</i>
                            <cite>乡村故事</cite>
                            <i class="iconfont nav_right">&#xe697;</i></a>
                    </li>

                    <li>
                        <a href="javascript:;" onclick="xadmin.add_tab('会员列表(静态表格)','../jsp/eat-list.jsp')">
                            <i class="iconfont">&#xe723;</i>
                            <cite>乡村特产</cite>
                            <i class="iconfont nav_right">&#xe697;</i></a>
                    </li>

                    <li>
                        <a href="javascript:;" onclick="xadmin.add_tab('会员列表(静态表格)','../jsp/news-list.jsp')">
                            <i class="iconfont">&#xe723;</i>
                            <cite>乡村热点</cite>
                            <i class="iconfont nav_right">&#xe697;</i></a>
                    </li>
                 </ul>
            </li>

        </ul>
    </div>
</div>
<!-- <div class="x-slide_left"></div> -->
<!-- 左侧菜单结束 -->
<!-- 右侧主体开始 -->
<div class="page-content">
    <div class="layui-tab tab" lay-filter="xbs_tab" lay-allowclose="false">
        <ul class="layui-tab-title">
            <li class="home">
                <i class="layui-icon">&#xe68e;</i>我的桌面
            </li>
        </ul>
        <%--        <div class="layui-unselect layui-form-select layui-form-selected" id="tab_right">--%>
        <%--            <dl>--%>
        <%--                <dd data-type="this">关闭当前</dd>--%>
        <%--                <dd data-type="other">关闭其它</dd>--%>
        <%--                <dd data-type="all">关闭全部</dd></dl>--%>
        <%--        </div>--%>
        <div class="layui-tab-content">
            <div class="layui-tab-item layui-show">
                <iframe src='${pageContext.request.contextPath}/jsp/welcome1.jsp' frameborder="0" scrolling="yes"
                        class="x-iframe" id="iframe"></iframe>
            </div>
        </div>
        <div id="tab_show"></div>
    </div>
</div>
<div class="page-content-bg"></div>
<style id="theme_style"></style>
<!-- 右侧主体结束 -->
<!-- 中部结束 -->

</body>

</html>
