<?php
	header("Content-Type:text/html;charset=utf-8");
	$vipName   = $_REQUEST['vipName'];
	
	//2、数据保存在数据库中
	include("./conndb.php");
	
	$sqlstr = "select *
				from goodsInfo g,shoppingCart s,goodstype as gt
			   where g.goodsId = s.goodsId
			     and gt.typeId = g.typeId   
			     and s.vipName = '$vipName'";

	$result = mysql_query($sqlstr,$conn);//执行查询的sql语句后，有返回值，返回的是查询结果
		
	if(!$result){
		die("SQL语句执行失败".mysql_error());
	}
			
	//查询列数
	 $query_cols = mysql_num_fields($result);
	 //echo "列数：".$query_cols;
	//查询行数
    $query_num =mysql_num_rows($result);
    //echo "行数：".$query_num;
	
	$str="[";
	
	
	$query_row = mysql_fetch_array($result);//游标下移,拿出结果集中的某一行，返回值是拿到的行；
	while($query_row){
		$str = $str.'{ 
      "goodsId":"'.$query_row[0].'",
      "goodsName":"'.$query_row[1].'",
      "typeId":"'.$query_row[2].'",
      "goodsPrice":"'.$query_row[3].'" ,
      "goodsCount":"'.$query_row[16].'",
      "goodsDesc":"'.$query_row[5].'",
      "goodsImg":"'.$query_row[6].'",
      "goodsOldPrice":"'.$query_row[7].'"
      ,"goodsTitle":"'.$query_row[8].'",
      "goodsInfoImg":"'.$query_row[9].'",
      "isHas":"'.$query_row[10].'",
      "goodsColor":"'.$query_row[11].'",
      "goodsBanner":"'.$query_row[12].'",
      "goodsType":"'.$query_row[13].'",
      "goodsSelectColor":"'.$query_row[17].'"
      }';
		
		
		$query_row = mysql_fetch_array($result);
		if($query_row){
			$str = $str.",";
		}
	}
	$str = $str."]";
	//4、关闭数据库
	mysql_close($conn);
	
	//3、给客户端返回商品的json数组！
	echo $str;
?>
