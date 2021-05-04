import { Component, Input } from "@angular/core";

@Component({
    selector:'employee-count',
    templateUrl:'./employeeCount.component.html'
})

export class EmployeeCountComponent  {
    @Input() 
    all: number = 0;

    @Input() 
    male: number = 0;

    @Input() 
    female:number = 0;
}