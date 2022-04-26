<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  require_once dirname(dirname(__FILE__))."/config/constantes.php";

  
  //
  require_once dirname(dirname(__FILE__))."/config/orm.php";
  //inclusion des roles
  
  //Chargement du router
  require_once dirname(dirname(__FILE__))."/config/router.php"; 
  // var_dump(dirname(dirname(__FILE__)));
// echo '<pre>';
// var_dump($_SERVER);
// echo '</pre>';
















?>