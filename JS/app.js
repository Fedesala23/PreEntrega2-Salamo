//Mensaje para poner en contexto al usuario//
alert('Vamos a crear una Playlist con tus canciones favoritas.')
alert('Comenzaremos creando un usuario.')

//Declaré la variable para el nombre//
let ingresarNombre = prompt('¿Cómo es tu nombre?');

//Aplique la condicion de que si hay numeros o espacio vacio se repite la accion con el bucle while//
if ((/^[0-9]+$/.test(ingresarNombre) === true) || (ingresarNombre ==='')){
while((/^[0-9]+$/.test(ingresarNombre) === true) || (ingresarNombre=== '')){
    alert("Error, escribe tu nombre.");
    ingresarNombre = prompt('¿Cómo es tu nombre?');
}
} else {
    alert("Bienvenido " + ingresarNombre);
}

//Repeti la condicion en el password//
let registrarPass = prompt('Crea una contraseña');

if (registrarPass ===''){
while(registrarPass=== ''){
    alert("Error");
    registrarPass = prompt('Crea una contraseña');
}
} else {
    alert("Contraseña guardada")
}

//Cree una funcion para ingresar la contraseña con un bucle for tener dos intentos para escribir bien la contraseña//
const login = () =>{
    ingresar = false;

    for( let i = 2 ; i > 0; i--){
        let passingresada = prompt('Ingresa la contraseña creada. ' + i + ' intentos.')
        if(passingresada === registrarPass){
            alert('Contraseña correcta.');
            ingresar = true;
            break
        }else{
            alert('¡Contraseña incorrecta!');
        }
    }
    return ingresar;
}
//Declare la funcion con la condicion de que si la contraseña era incorrecta se cerraba//
if(login()){
    //Objeto para crear la playlist y la cantidad de canciones
    const playlist = {
        nombre: '',
        canciones: []
      };
      
      // Solicitar el nombre de la playlist
      playlist.nombre = prompt('Ingrese el nombre de la playlist:');

      if (playlist.nombre ===''){
        while(playlist.nombre === ''){
            alert('Ingresa un nombre a la playlist');
            playlist.nombre = prompt('Ingrese el nombre de la Playlist');
        }
        } else{
            alert('Nombre de la playlist: ' + playlist.nombre);
        }
      
      // Solicitar la cantidad de canciones a agregar
      const cantidadCanciones = parseInt(prompt('Ingrese la cantidad de canciones que desea agregar:'));
      
      // Función para agregar canciones
      function agregarCanciones(cantidad) {
        for (let i = 0; i < cantidad; i++) {
          const nombreCancion = prompt(`Ingrese el nombre de la canción ${i + 1}:`);
        
          playlist.canciones.push(nombreCancion);
      
          // Mostrar la playlist actualizada
          alert(`Playlist actual:\nNombre: ${playlist.nombre}\nCanciones: ${playlist.canciones.join('\n')}`);
        }
      
        // Mostrar el resultado final
        alert(`¡Playlist creada con éxito!\nNombre: ${playlist.nombre}\nCanciones: ${playlist.canciones.join('\n')}`);
      }
      
      // Agregar canciones
      agregarCanciones(cantidadCanciones);
}else{
    alert('La contraseña es incorrecta, se cerró la sesión.')
}