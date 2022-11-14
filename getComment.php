<?php
// 添加评论
	
	header("content-type","text/html;charset=utf-8");
	date_default_timezone_set("Asia/Shanghai");
	
	//一、接收前端传来的数据
	$goodsId = $_GET["goodsId"];
	$pagecount = $_GET["pagecount"]; //每页的条数
	$pageIndex = $_GET["pageIndex"]; //页码
	
	//二、保存数据
	include("./conndb.php");
	$firstIndex = ($pageIndex-1)*$pagecount;
	//2、执行SQL语句
	$sqlStr = "select * from  comment_table where goodsId = '$goodsId' limit $firstIndex,$pagecount";
	
	$result = mysql_query($sqlStr,$conn);

	//3、关闭数据库
	mysql_close($conn);
	
	//查询列数
	$query_cols = mysql_num_fields($result);
	
    //查询行数
    $query_num =mysql_num_rows($result);
   
    $str="[";
   
   $query_row = mysql_fetch_array($result);//游标下移,拿出结果集中的某一行，返回值是拿到的行；
   while($query_row){
	   $str = $str.'{ "id":"'.$query_row[0].'","goodsId":"'.$query_row[1].'"
	   ,"vipName":"'.$query_row[2].'","commentTime":"'.$query_row[3].'"
	   ,"content":"'.$query_row[4].'",
     "commentImg":"'.$query_row[5].'",
     "commentContent":"'.$query_row[6].'"
    }';
	   
	   $query_row = mysql_fetch_array($result);
	   if($query_row){
		   $str = $str.",";
	   }
   }
   $str = $str."]";
	
   echo $str;	

?>