<?php
// require_once(PATH_DB);
// var_dump($_POST);    
// echo "bonjour";

    if(isset($_REQUEST['controller'])){
    // varrequire_once(PATH_DB);
    var_dump(json_decode($_POST["Nom"]));
    $data= json_decode($_POST["Nom"],true);
    $dataJson = file_get_contents(PATH_DB);
    $dataArray  = json_decode($dataJson,true);
    $dataArray["archive"][] = $data;
    file_put_contents(PATH_DB, json_encode($dataArray,JSON_PRETTY_PRINT));

}else{
    echo "Vous étes dans le MVS";
}