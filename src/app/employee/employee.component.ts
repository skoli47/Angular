import { style } from '@angular/animations';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'selenium-webdriver';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';
import { UserPreferenceService } from './userPreference.service';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  //ActivatedRoute is used to capture the route parameter. Here in our case we are going to capture "code" parameter from URL
  constructor(private _UserPreferenceService: UserPreferenceService,
    private _employeeService: EmployeeService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) {
    this.employee = {} as IEmployee;
  }

  backToEmployeeList(): void {
    this._router.navigate(['employeelist']);
  }

  get color(): string {
    return this._UserPreferenceService.colorPreference;
  }

  set color(value: string) {
    this._UserPreferenceService.colorPreference = value;
  }

  employee: IEmployee;
  statusMessage: string = "";

  ngOnInit(): void {
    let empCode: string = this._activatedRoute.snapshot.params['code'];
    this._employeeService.getEmployeeByCode(empCode)
      .subscribe(res => {
        if (res == null) {
          this.statusMessage = "Employee you are looking for does not exist";
          this.employee = {} as IEmployee;
        }
        else {
          this.employee = res
        }
      },
        error => {
          console.log(error)
          this.statusMessage = "Problem with service, please try again after some time"
        })
  }


  firstname: string = "Tom"
  lastname: string = "Hopkins"
  gender: string = "Male"
  age: number = 20
  showDetails: boolean = false;

  name: string = "Tom"

  toggleDetails(): void {
    this.showDetails = !this.showDetails
  }

  ClassesToApply: string = "color";

  applyboldClass: boolean = true;
  applyItalicClass: boolean = true;
  isBold: Boolean = true;
  btnFontSize: number = 40;

  isItalic: boolean = true;

  addStyle() {
    let styles = {
      'font-size.px': this.btnFontSize,
      'font-style': this.isItalic ? 'italic' : 'normal',
      'font-weight': this.isBold ? 'bold' : 'normal'
    }
    return styles;
  }

  addClasses() {
    let classes = {
      italicClass: this.applyboldClass,
      boldClass: this.applyItalicClass
    }
    return classes;
  }

  onClick(): void {
    console.log('Button Clicked');
  }



}
