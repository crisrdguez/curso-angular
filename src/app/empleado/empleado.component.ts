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
  
  //property binding
  disabledProperty=false;

  //propiedad registrado
  userRegistradoProperty=false;

  cambioRegistroUsuario(){
    this.userRegistradoProperty=true;
  }

  //Event binding
  eventBinding=true;

  cambioEventBiending(){
    this.eventBinding=false;
  }

  ventanaEmergente(){
    alert("Acabas de ganar la lotería!");
  }

  //Ejemplo juntando interpolacion, property binding y event binding

  //otra propiedad
  textoRegistro = "No hay nadie registrado";

  registrarEmpleado(){
    
    if(this.textoRegistro=="No hay nadie registrado"){
      this.textoRegistro = "Acabas de registrar un empleado";
    }else{
      this.textoRegistro = "No hay nadie registrado";
    }
  }

  //Otro ejemplo, para pasar un argumento por parametro
  textoCiudad="No hay seleccionada ninguna ciudad";

  cambiaCiudad(event:Event){
    //alert(event.target);
    this.textoCiudad="La ciudad es " + (<HTMLInputElement>event.target).value;//hacemos un cast
  }

  //Two Way Binding
  empresa1="Google";
  empresa2="Amazon";

  
  cambiaEmpresa(event:Event){
    this.empresa1=(<HTMLInputElement>event.target).value;
  }

  getId(){
    return this.id;
  }
  constructor(){}

  ngOnInit(): void {
      
  }

  
  getPuesto(value:String){

  }

  
}
