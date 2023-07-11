<?php
	error_reporting(E_ALL);
	ini_set('display_errors', true);

	if(isset($_POST) && !empty($_POST)){
		require_once '../modelo/database.model.php';

		$correo = null;
		$contra = null;

		if(isset($_POST['correo_electronico']) && !empty($_POST['correo_electronico'])){
			$correo = trim( $_POST['correo_electronico'] );
			$todobien = true;

			if( strpos($correo, '@') == false ){
				$todobien = false;
			}

			if(!$todobien){
				header('location: ../iniciarsesion.html?error=novaliddata_email');
			}else{
				$correo = filter_var($correo, FILTER_SANITIZE_EMAIL);
			}
		}else{
			header('location: ../iniciarsesion.html?error=novaliddata');
		}

		if(isset($_POST['contra']) && !empty($_POST['contra'])){
			$contra = trim( $_POST['contra'] );
			$contra = hash('sha512', $contra);
		}else{
			header('location: ../iniciarsesion.html?error=novaliddata');
		}

		
	}
?>