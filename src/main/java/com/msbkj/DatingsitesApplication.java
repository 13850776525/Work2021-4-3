package com.msbkj;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EnableTransactionManagement   //开启事务管理
@EnableScheduling  //开启定时任务
@MapperScan("com.msbkj.mapper")//与dao层的@Mapper二选一，会将包中接口都注解成Mapper。
public class DatingsitesApplication {

	public static void main(String[] args) {
		SpringApplication.run(DatingsitesApplication.class, args);
	}

}
