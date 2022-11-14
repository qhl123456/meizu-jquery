<?php
	header("Content-Type:text/html;charset=utf-8");
	//1、接受客户端的数据（用户输入的数据）
	$vipName   = $_REQUEST['vipName'];
	$goodsId   = $_REQUEST['goodsId'];
	$goodsCount = $_REQUEST['goodsCount'];
	
	//2、数据保存在数据库中
	include("./conndb.php");
	
	//3）、传输数据（过桥）
	$sqlstr = "update shoppingCart set goodsCount='".$goodsCount."' where vipName='".$vipName."' and goodsId='".$goodsId."'";
	//echo($sqlstr);
	
	if(!mysql_query($sqlstr,$conn)){
		die("执行更新SQL语句失败".mysql_error());
		echo "0";
	}
	
	//4）、关闭连接（拆桥）
	mysql_close($conn);
	
	//3、给客户端返回（响应）一个注册成功！
	echo 1; //1：表示修改成功,0：表示修改失败
?>