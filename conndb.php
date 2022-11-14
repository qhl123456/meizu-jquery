<?php
	$conn = mysql_connect("localhost","root","root");
	if(!$conn){
		die("数据库连接失败：".mysql_error());
	}
	
	//2）、选择数据库（找目的地）
	if(!mysql_select_db("2019",$conn)){
		die("数据库选择失败".mysql_error());
    	}

	// mysql_query("set character set 'utf8'");//读库
	mysql_query("set names 'utf8'");//写库
    
?>