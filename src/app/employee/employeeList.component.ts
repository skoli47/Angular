import { Component, OnInit } from '@angular/core';
import { error } from 'selenium-webdriver';
import {IEmployee} from './employee'
import { EmployeeService } from './employee.service';
import { UserPreferenceService } from './userPreference.service';

@Component({
    selector:'employee-list',
    templateUrl:'./employeelist.component.html'
})
export class EmployeeListComponent implements OnInit{

    //Angular injects EmployeeService into EmployeeListComponent 
    //While creating instance of EmployeeListComponent, it automatically creates and instance of service and inject into class 
    //What is dependency injection:
    //It's a coding pattern in which a class receives its dependencies from an external source rather than creating them itself

    // Disadvantage if dependency injection not used:
    // code is difficult to maintain overtime
    //Everytime the processor class changes, the computer class may also need to be changed
    // Instances of dependencies created by a class that needs those dependencies are local to the class and cannot share data and logic
    // Hard to unit test

    //Advantage of dependency injection:
    // Create application that are easy to write and maintain over time as the application evolves
    // Easy to share data and functionality as the angular injector provides a singleton i.e a single instance of the service
    // Easy to write and maintain unit tests as the dependencies can be mocked  

    //Angular Injector:
    //Angular has heirarchial injector. Application will have one top "root injector" and every child will have one injector
    //Root Injector: Service available to all component including lazy loaded module components
    //Injector availability: Lets say we have ComponentX as parent component -- ComponentY and ComponentZ as child component
    //Service injected in ComponentX will be available in all child component (ComponentY & ComponentZ)

    //To inject service at root level- add service in provider section of ngModule in app.module.ts
    //To inject service at specific component level - add service in provider section of specific component

    //We have created seperate module all together i.e. testModule
    //We have registered "UserPreferenceService" in testModule--test.module.ts file
    //We have injectected testModule in app.module.ts in import section
    //Indirectly "UserPreferenceService" will be available for appmodule as testmodule has already injected in it
    constructor(private _UserPreferenceService : UserPreferenceService, private _employeeService:EmployeeService) {   
        this.employees = [];                                                                                                                                                                                                                              
    }

    get color(): string{
        return this._UserPreferenceService.colorPreference;
      }
    
      set color(value : string) {
        this._UserPreferenceService.colorPreference = value;
      }

    //IEmployee is interface. It is assigned to employees object to make it strongly typed object.
    //employees object is array type so IEmployee is declared as array
    
    employees : IEmployee[];
    statusMessage:string = "Loading data. Please wait...";

    ngOnInit(): void {
        //Notice to the subscribe() function we are passing an other arrow function as a parameter. 
        //This arrow function is called when the Observable emits an item. In our case the Observable emits an array of
        //IEmployee objects. res parameter receives the array of IEmployee objects, which we are then using to 
        //initialise employees property of the EmployeeListComponent class. 
        //We can specify upto 3 callback functions as parameters to the subscribe() method as shown below.
        this._employeeService.getEmployees().subscribe(
            (res) => {this.employees = res},
            (error) => { this.statusMessage = "Problem with server, please after some time"});

        //Callback method and its purpose
        //onNext-The Observable calls this method whenever the Observable emits an item. The emitted item is passed as a parameter to this method
        //onError-The Observable calls this method if there is an error
        //onCompleted-The Observable calls this method after it has emitted all items, i.e after it has called onNext for the final time
    }   

    selectedEmployeeCountRadioButton:string='All';

    sampleInput:string="";

    onEmployeeCountRadioButtonChange(selectedRadioButtonValue:string):void{
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }

   
    getEmployee() :void {
        this.employees = [
            {code:'emp101',name:'Tom',gender:'Male',annualSalary:232.232,dateOfBirth:'12/29/1989'},
            {code:'emp102',name:'Tom',gender:'Female',annualSalary:2323.454,dateOfBirth:'12/29/1989'},
            {code:'emp103',name:'Tom',gender:'Male',annualSalary:2324.454,dateOfBirth:'12/29/1989'},
            {code:'emp104',name:'Tom',gender:'Female',annualSalary:343.5343,dateOfBirth:'12/29/1989'},
            {code:'emp105',name:'Tom',gender:'Male',annualSalary:235.34343,dateOfBirth:'12/29/1989'}
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