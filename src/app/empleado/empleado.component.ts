import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  private id=1;
  name="Cris";
  surname="RR";
  age=3;
  

  getId(){
    return this.id;
  }
  constructor(){}

  ngOnInit(): void {
      
  }

  
  getPuesto(value:String){

  }

  
}
