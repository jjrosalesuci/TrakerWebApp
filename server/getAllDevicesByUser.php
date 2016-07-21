<?php

 //Obtener parametros 
 $postdata = file_get_contents("php://input");
 $request = json_decode($postdata);
 $userId = $request->userId;

 //Buscar en la base	 
	 
 $item = new StdClass();
 $item->id = '1';
 $item->code = '1231';
 $item->registration = 'AKER';
 $item->brand= 'VW';
 $item->model= 'GOL';
 $item->active= false;
 $item->time= '22/05/12025 10:25 AM';
 
 $item2 = new StdClass();
 $item2->id = '2';
 $item2->code = '1231';
 $item2->registration = 'AK2';
 $item2->brand= 'YUMBO';
 $item2->model= 'MILESTONE';
 $item2->active= true;
 $item2->lat= 2232;
 $item2->lon= 34343; 
 $item2->time= '22/05/12025 10:25 AM';
 
 $array = null;
 $array[]= $item;
 $array[]= $item2;
 
 sleep(1);
 
 echo json_encode(array('success'=>true,'data'=>$array)); 
?>