import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent {

  ///crear las variables
  //su proiedades
  nombre=""
  fecha=""
  horas=""
  sintomas=""
  formularioIncorrecto=false
///creamso
  @Output() nuevaCita=new EventEmitter<any>();

  ///crear un variable pra enviar informacion al padre
  
constructor(){

}

  ///metodo enviar
  enviarCita(){
    if(this.nombre.trim()==="" || this.fecha.trim()==="" ||this.horas.trim()==="" ||this.sintomas.trim()==="" ){
      this.formularioIncorrecto=true
      return
    }
    this.formularioIncorrecto=false

   const  cita:any={
      nombre:this.nombre,
      fecha:this.fecha,
      horas:this.horas,
      sintomas:this.sintomas
    }
   console.log(cita)

   ///que vas a emitr la cita
     this.nuevaCita.emit(cita)
   ///de esta clas su metod
   this.limpiar()
  }

  ///creamos la cita

  limpiar(){
    this.nombre=""
    this.fecha=""
    this.horas=""
    this.sintomas=""
    
  }
 
 
}
