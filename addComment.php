<?php
// 添加评论
	
	header("content-type","text/html;charset=utf-8");
	date_default_timezone_set("Asia/Shanghai");
	
	//一、接收前端传来的数据
	$goodsId = $_POST["goodsId"];
	$vipName = $_POST["vipName"];
	$content = $_POST["content"];
	$commentTime = date('Y-m-d H:i:s', time());
	
	//二、保存数据
	include("./conndb.php");
	
	//2、执行SQL语句
	$sqlStr = "insert into comment_table(goodsId,vipName,content,commentTime)
              values('$goodsId','$vipName','$content','$commentTime')";
		
	$result = mysql_query($sqlStr,$conn);
	
	//3、关闭数据库
	mysql_close($conn);
	
	//三、给前端响应
    if($result==1){
		echo "success";//表示注册成功
	}else{
		echo "fail";//表示注册失败
	}

?>