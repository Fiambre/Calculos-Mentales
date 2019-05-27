import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf'

@Component({
  selector: 'app-calculos',
  templateUrl: './calculos.component.html',
  styleUrls: ['./calculos.component.css']
})
export class CalculosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  generarCalculos(cantidad: number, conSumas: boolean, conRestas: boolean){
    var doc = new jsPDF();

    var operaciones = Array();
    
    if(conSumas){
      operaciones.push("suma");
    }else if(conRestas){
      operaciones.push("resta");
    }

    doc.text("Calculos Mentales",100,10, "center");

    for(var i = 1; i <= 12; i++){
      for(var j= 0; j < 4; j++){

        var Operacion = operaciones[Math.floor(Math.random()*operaciones.length)];

        doc.text((j*50)+10, (i*10)+20, this.crearOperacion(Operacion));
      }
    }

    doc.save("Calculos.pdf");

  }

  crearOperacion(operacion: String){

    if(operacion == "suma"){
      return Math.floor(Math.random() * 10) + "+" + Math.floor(Math.random() * 10) + "="; 
    }else{

      var minuendo = Math.floor(Math.random() * 10);
      var sustraendo = Math.ceil(Math.random() * minuendo);

      return minuendo + "-" + sustraendo + "=";
    }
  }

}
