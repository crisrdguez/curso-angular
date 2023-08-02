import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector:'app-empleados',
    templateUrl:'./empleados.component.html',
    styleUrls:['./empleados.component.css']

})

export class EmpleadosComponent{

    @Input() empresaVariable:string = "Domusvi Caca S.A.";
    @Output() mensajeEmitter: EventEmitter<string> = new EventEmitter<string>();

    constructor(){}

    ngOnInit():void{
        console.log("ngOninit del componente empleados");
    }

    //Ejemplo para gestionar un evento de tipo click en el DOM y enviar un texto al componente padre

    enviarMensajeAlPadre():void{
        this.mensajeEmitter.emit(`Hola ${this.empresaVariable}. Alerta despachada desde un click de boton`);
    }

}
/*
*En el código de Angular que proporcionaste, la anotación @Input() se utiliza para marcar 
*la propiedad empresaVariable como una propiedad de entrada, lo que permite que el valor sea pasado 
*al componente desde su componente padre. De esta manera, el componente "EmpleadosComponent" 
*puede recibir el valor de empresaVariable desde otro componente y utilizarlo en su lógica interna o plantilla.
*@Input(): La anotación @Input() es un decorador en Angular que permite a una propiedad de un componente recibir valores desde su componente padre.
*/


