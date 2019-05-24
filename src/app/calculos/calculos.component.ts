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

  generarCalculos(){
    var doc = new jsPDF();

    doc.text("Calculos Mentales",100,10, "center");

    for(var i = 1; i <= 12; i++){
      for(var j= 0; j < 4; j++){
        doc.text((j*50)+10, (i*10)+20, this.crearOperacion());
      }
    }

    doc.save("Calculos.pdf");

  }

  crearOperacion(){

    if(Math.floor(Math.random() * 2) == 0){
      return Math.floor(Math.random() * 10) + "+" + Math.floor(Math.random() * 10) + "="; 
    }else{

      var minuendo = Math.floor(Math.random() * 10);
      var sustraendo = Math.ceil(Math.random() * minuendo);

      return minuendo + "-" + sustraendo + "=";
    }
  }

}
