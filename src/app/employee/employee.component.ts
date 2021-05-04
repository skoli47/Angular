import { style } from '@angular/animations';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  firstname: string= "Tom"
  lastname: string = "Hopkins"
  gender: string = "Male"
  age: number= 20
  showDetails:boolean = false;

  name : string = "Tom"

  toggleDetails():void{
    this.showDetails = !this.showDetails
  }

  ClassesToApply:string = "color";

  applyboldClass:boolean= true;
  applyItalicClass:boolean=true;
  isBold:Boolean= true;
  btnFontSize:number=40;

  isItalic:boolean=true;

  addStyle(){
    let styles = {
      'font-size.px':this.btnFontSize,
      'font-style': this.isItalic ? 'italic' : 'normal',
      'font-weight' : this.isBold ? 'bold' : 'normal'
    }
    return styles;
  }

  addClasses(){
    let classes= {
      italicClass : this.applyboldClass,
      boldClass: this.applyItalicClass
    }
    return classes;
  }

  onClick(): void {
    console.log('Button Clicked');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
