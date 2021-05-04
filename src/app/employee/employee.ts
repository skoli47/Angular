//It is common to prefix the interface name with capital letter 'I'.
//However, some interfaces in angular does not have the prefix.
//For example, OnInit interface

//Need to declare member as public as they are public by default

//A class that implements an interface must provide implmentation for all the interface members unless the members are
//marked as optional using the ? operator

//Use the 'implements' keyword to make a class implement an interface

//Typescript interfaces exist for developer convenience and are not used by angular at runtime. 
//During transpilation, no javascript code is generated for an interface. It is only used by Typescript for type
//checking during development

//To reduce the amount of code you have to write, consider using short-hand syntax to initialise class properties
//with constructor parameters
export interface IEmployee {
    code: string;
    name: string;
    gender: string;
    annualSalary: number;
    dateOfBirth: string;
    department?:string;   //To make department property optional we have added '?' symbol. So that child class it will be optional to implement

    //computeMonthSalary(annualSalary:number):number;
}

export class Employee implements IEmployee {

    constructor(public code: string = "", public name: string = "", public gender: string = "", 
    public annualSalary: number = 0, public dateOfBirth: string = ""){

    }

    computeMonthSalary(annualSalary:number) :number{
        return annualSalary/12;
    }
}