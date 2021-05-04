import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "employeeTitle"
})
export class EmployeeTitlePipe implements PipeTransform{
    transform(value:string, gender:string): string{
        return gender.toLowerCase() == "male" ? "Mr." + value : "Miss." + value;
    }
}