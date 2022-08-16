import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-listar-citas',
  templateUrl: './listar-citas.component.html',
  styleUrls: ['./listar-citas.component.css']
})
export class ListarCitasComponent  {

 @Input() listaCitas:any
 ///emit un mensaje
 //any puede ser flexive al valor que ingresas
 @Output() idEmiter:any=new EventEmitter<any>();
 
eliminar(id:any){

this.idEmiter.emit(id)

}

}
