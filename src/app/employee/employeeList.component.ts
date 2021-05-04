import { Component, OnInit } from '@angular/core';

@Component({
    selector:'employee-list',
    templateUrl:'./employeelist.component.html'
})
export class EmployeeListComponent implements OnInit{
    constructor() { }

    ngOnInit(): void {
    }   
    employees:any[]= [
        {code:'emp101',name:'Tom',gender:'Male',annualSalary:'5852.52',dateofbirth:'12/29/1989'},
        {code:'emp102',name:'Tom',gender:'Female',annualSalary:'6854.254',dateofbirth:'12/29/1989'},
        {code:'emp103',name:'Tom',gender:'Female',annualSalary:'234.454',dateofbirth:'12/29/1989'},
        {code:'emp104',name:'Tom',gender:'Male',annualSalary:'2324.4',dateofbirth:'12/29/1989'}
    ]

    getEmployee() :void {
        this.employees = [
            {code:'emp101',name:'Tom',gender:'Male',annualSalary:'232.232',dateofbirth:'12/29/1989'},
            {code:'emp102',name:'Tom',gender:'Female',annualSalary:'2323.454',dateofbirth:'12/29/1989'},
            {code:'emp103',name:'Tom',gender:'Male',annualSalary:'2324.454',dateofbirth:'12/29/1989'},
            {code:'emp104',name:'Tom',gender:'Female',annualSalary:'343.5343',dateofbirth:'12/29/1989'},
            {code:'emp105',name:'Tom',gender:'Male',annualSalary:'235.34343',dateofbirth:'12/29/1989'}
        ]
    }

    trackByEmployeeCode(index:number, employee:any): string{
        return employee.code;   
    }

    getTotalEmployeeCount() : number{
        return this.employees.length;
    }

    getTotalMaleEmployeeCount() : number{
        return this.employees.filter(x=>x.gender === "Male") .length;
    }

    getTotalFemaleEmployeeCount() : number{
        return this.employees.filter(x=>x.gender === "Female") .length;
    }
}