import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Examen-Codeicus';

  nombre;
  apellido;
  email;
  direccion;
  CP;

  productos_habilitados = [
    { id: 1, cod: "PROD-A", name: "Monitor", stock: 100 },
    { id: 2, cod: "PROD-B", name: "Gabinete", stock: 10 },
    { id: 3, cod: "PROD-C", name: "Procesador", stock: 0 }
  ];
  productos_seleccionados= [];

  verificarStock(prd) {
    if(prd.stock==0){
      alert("No hay Stock disponible");
    }    
    else{
      this.productos_seleccionados.push(prd);
    }
  }

  eliminarStock(){
    this.productos_seleccionados.splice(0);
  }

  validarForm(){
    this.nombre = document.getElementById("nombre");    
    this.apellido = document.getElementById("apellido");    
    this.email = document.getElementById("email");    
    this.direccion = document.getElementById("direccion"); 
    this.CP = document.getElementById("CP");
    //No utilicé el metodo de bootstrap ya que al apretar el btn de enviar formulario recargaba por ser el estilo del form
    
    //ACA GENERO LA FUNCION AL ESTILO DEL EJERCICIO 2 DONDE SE FIJA SI ES CORRECTO O NO EL FORM pero de distinta forma
    if(this.productos_seleccionados.length){ 
      if(this.nombre.value == ''|| this.apellido.value == ''||this.email.value == ''||this.direccion.value==''||this.CP.value==''){
        alert("Complete los campos del formulario")
      }else{
        alert("MUCHAS GRACIAS POR UTILIZAR EL SERVICIO")
      }
    }else{
      alert("No hay productos seleccionados");
    }
  }
}

