package com.msbkj.utils;

/**
 * Created by Elvis on 2021/3/6.
 */
public class CommonUtil {
    // 转化学历水平，数值化
    public static String converDegree(String degree) {
        String result = "";
        if (degree.equals("小学")) {
            result = "1";
        } else if (degree.equals("初中") || degree.equals("中专")) {
            result = "2";
        } else if (degree.equals("高中") || degree.equals("大专")) {
            result = "3";
        } else if (degree.equals("本科") || degree.equals("硕士")) {
            result = "4";
        } else if (degree.equals("博士") || degree.equals("博后") || degree.equals("博士后")) {
            result = "5";
        } else {
            result = "6";
        }
        return result;
    }
}
