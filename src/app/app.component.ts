import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ///tipo de datos cambiable
  listaCitas:any=[]
   
  agregarCita(cita:any){
    console.log("soy el padre")
   this.listaCitas.push(cita)
   console.log(this.listaCitas)
  }
  filtrar(id:any){
        ///eliminame la un elemntos desde la posicion id
    this.listaCitas.splice(id,1)
    console.log(this.listaCitas)
  }

}
