function descuento(){

const ticket = 200;
let cantidad =  document.getElementById("quantity").value;
let categoria = document.getElementById("category");
let opciones = categoria.options[categoria.selectedIndex].text;
let numero = parseInt(cantidad);
let precio=0;
 
  if (isNaN(numero)){
    alert("Por favor ingresar la cantidad de tickets");
} else {
  switch (opciones) {
      case "Estudiante":
             precio = ticket * 0.2 * parseInt(cantidad);
             document.getElementById("totales").innerHTML="Total a Pagar: $" + precio;
             break;
      
    case "Trainee":
      precio = ticket * 0.5 * parseInt(cantidad);
      document.getElementById("totales").innerHTML="Total a Pagar: $" + precio;
                  break;
    
    case "Junior":
      precio = ticket * 0.75 * parseInt(cantidad);
      document.getElementById("totales").innerHTML="Total a Pagar: $" + precio;
                  break;
                  default:
                    break;
         
  }
}
}

  
                //  document.getElementById("precio").innerHTML = descuento();
