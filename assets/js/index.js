'use strict'

const jsonHref = {
	href: '',
	nombreArchivo: '',
	extension: ''
};

const obtenerNombreArchivoUrl = function(){
	const splittedHref = _.split( jsonHref.href, '/' );

	if( _.endsWith( window.location.href.toString(), '.html' ) || _.endsWith( window.location.href.toString(), '.php' ) ){
		var archivo;

		if(
			(_.endsWith( splittedHref[3], '.html' ) || _.endsWith( splittedHref[3], '.php' )) 
			&& ( !_.endsWith( splittedHref[4], '.html' ) || !_.endsWith( splittedHref[4], '.php' ) )
		){
			archivo = splittedHref[3];
		} else if(
			(_.endsWith( splittedHref[4], '.html' ) || _.endsWith( splittedHref[4], '.php' )) 
			&& ( !_.endsWith( splittedHref[3], '.html' ) || !_.endsWith( splittedHref[3], '.php' ) )
		){
			archivo = splittedHref[4];
		}

		if( _.endsWith( archivo, '.php' ) ){
			jsonHref.extension = 'php';
		}else if( _.endsWith( archivo, '.html' ) ){
			jsonHref.extension = 'html';
		}else {
			jsonHref.extension = _.split( archivo, '.' );
			jsonHref.extension = jsonHref.extension[ jsonHref.extension.length - 1 ];
		}

		return _.truncate(archivo, {
	  		'length': archivo.lastIndexOf('.'),
	  		'omission': ''
		});
	}else{
		jsonHref.extension = 'html';
		return 'index';
	}
};

/* ============ WINDOW ON-LOAD ============*/
$(window).on('load',function(){
	console.log("Ventana Cargada...");

	jsonHref.href = window.location.href;
	jsonHref.nombreArchivo = obtenerNombreArchivoUrl();
});
/* ============ WINDOW ONLOAD ============*/


/* ============ DOCUMENT ON-READY ============*/
$(document).ready(function(){
	$.ajaxSetup({
		async: false,
		cache: false
	});
	// =======================================
	switch( jsonHref.nombreArchivo ){
		// ==== DASHBOARD ADMIN ====
		case 'dashboard.admin':

		break;
		// ==== DASHBOARD ADMIN ====

		// ==== INICIAR SESION ====
		case 'iniciarsesion':

		break;
		// ==== INICIAR SESION ====

		// ==== INDEX ====
		default:
			$('.navbar-app').load('./htmlComponents/navbar.tienda.html');
			$('.subnavbar').load('./htmlComponents/subnavbar.tienda.html');
		break;
		// ==== INDEX ====
	}
	// =======================================
});
/* ============ DOCUMENT ON-READY ============*/