import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miprimeraApp';
  saludo="Hola, estoy practicando angular";
  nombreEmpresa='InfoTec S. A.';

  //Esta funcion se ejecutara cuando en el hijo se pulse el boton
  recibirMensajeDelHijo(evento:string){
    alert(evento);
  }
}
