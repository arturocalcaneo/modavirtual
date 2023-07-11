<?php
	session_start();

	$_SESSION['usuario'] = array();
	unset( $_SESSION['usuario'] );

	session_destroy();
	header('location: iniciarsesion.html?logout=successful');
?>