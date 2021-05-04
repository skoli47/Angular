//Component Lifecycle hooks
//Angular create the component
//Renders the component
//Create and renders the component children
//Checks when the component data-bound properties change
//Destroys the component before removing it from the DOM

//To tap into and react when these life cycle events occur,angular
//offers several lifecycle hooks
//--ngOnChanges
//--ngOnInit
//--ngDoCheck
//----ngAfterContentInit
//----ngAfterContentChecked
//----ngAfterViewInit
//----ngAfterViewChecked
//--ngOnDestroy

//ngOnChanges	
//---Executes, every time the value of an input property changes. The hook method receives a SimpleChanges object containing current and previous property values. This is called before ngOnInit

//ngOnInit	
//---Executes after the constructor and after ngOnChange hook for the first time. It is most commonly used for component initialisation and retrieving data from a database

//ngOnDestroy	
//---Executes just before angular destroys the component and generally used for performing cleanup

import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from "@angular/core";
//SimpleChanges is an Angular/Core feature that can be used to see the changes and a few more details of the declared
// property names in a component. And also it needs to be used in the Angular ngOnChange method to see the values changes 
//and to do relevant things.

@Component({
    selector: 'simple',
    template: 'You have entered : {{SimpleInput}}'
})
export class SimpleComponent {
    @Input() SimpleInput: string = "";

    ngOnChanges(changes:SimpleChanges){
        for(let propertyName in changes){
            let change = changes[propertyName];
            let current = JSON.stringify(change.currentValue);
            let previous = JSON.stringify(change.previousValue);
            console.log(propertyName + ': currentValue = ' + current + ', previousValue = ' + previous);
           // console.log(`${propertyName} : currentValue = ${current} , previousValue = ${previous}`);
        }
    }
}