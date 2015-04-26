function Chat(mensaje){
	this.mensaje  = mensaje;
}

Chat.mensajes = []; //arreglo vacio

Chat.enviar = function(e){
	e.preventDefault();
	var mensaje = document.getElementById('mensaje').value;
	var chat = new Chat(mensaje);
	if( mensaje.length == 0) {
		alert("Ingresar por favor un mensaje");
	}else{
	Chat.mensajes.push(chat);
	Chat.cancelar(e);
	Chat.mostrar();
	Chat.guardar();
	}
};

Chat.cancelar = function(e){
	e.preventDefault();
	var mensaje = document.getElementById('mensaje');
	mensaje.value = '';
};

Chat.mostrar = function(){
	var cuadro = '';
	Chat.mensajes.map(function(elemento, indice){
	cuadro = cuadro + '<article>'
		   + '<h3><p>' + elemento.mensaje 
		   + '</h3></p>' + '</article>';
	});	
	document.getElementById('cuadro').innerHTML = cuadro;
};

Chat.guardar = function(){
	var mensajes = Chat.mensajes;
	var mensajesEncode = JSON.stringify(mensajes);
	localStorage.setItem('mensajes', mensajesEncode);
}

Chat.obtenerMensaje = function(){
	if (mensajesEncode != null) {
	var mensajesEncode = localStorage.getItem('mensajes');
	var mensajes = JSON.parse(mensajesEncode);
	Chat.mensajes = mensajes;}else{
		console.log("Nulo!");
	}
};

Chat.obtenerMensaje();
Chat.mostrar();