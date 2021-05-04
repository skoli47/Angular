import { Injectable } from "@angular/core";

@Injectable()
export class UserPreferenceService{
    constructor(){
        console.log("New Instance Created!");
    }

    colorPreference: string ="orange";

}