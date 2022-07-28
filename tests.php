<?php 

$file = fopen(('./js/app.js'),"r") or die('Unable to open');

echo fread($file,filesize('./js/app.js'))
?>