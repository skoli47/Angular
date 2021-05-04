import { Injectable } from "@angular/core";
import { IEmployee } from "./employee";
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, retryWhen, delay, take } from 'rxjs/operators';

@Injectable()  //This indicates that this class is injectable 
export class EmployeeService{

    constructor(private _httpClient:HttpClient){
    }

    //Observable is an asynchronous pattern. In the Observable pattern we have an Observable and an Observer. Observer observes the Observable. In many implementations an Observer is also called as a Subscriber.
    //An Observable can have many Observers (also called Subscribers).
    //Observable emits items or notifications over time to which an Observer (also called Subscriber) can subscribe.
    //When a subscriber subscribes to an Observable, the subscriber also specifies a callback function.
    //This subscriber callback function is notified as and when the Observable emits items or notifications.
    //Within this callback function we write code to handle data itmes or notifications received from the Observable.
   //Here in our case : EmployeeListComponent subscribe to the observable returned by angular EmployeeService


   //Difference between Promise & Observable
   // 1-Promise - Emits a single value
   // 1-Observable - Emits multiple values over a period of time
   // 2-Promise - Not Lazy. An api endpoint will be called even if we use "then" for promise
   // 2-Observable - Lazy. An api endpoint is not called until we subscribe to the observable
   // 3-Observable - Can be cancelled by using the unsubscribe() method
   // 4-Observable - Observable provides operators like map, forEach, filter, reduce, retry, retryWhen etc. 

    getEmployees(): Observable<IEmployee[]>{
        return this._httpClient.get<IEmployee[]>("https://localhost:44303/api/employees")
        .pipe(
            retryWhen(errors => errors.pipe(delay(1000), take(5))),
            catchError(this.handleError));
    }

    getEmployeeByCode(empcode: string):Observable<IEmployee>{
        return this._httpClient.get<IEmployee>("https://localhost:44303/api/employees/" +  empcode)
                    .pipe(retry(1), catchError(this.handleError));
    }

    handleError(error: Response){
        console.error(error);
        return throwError(error);
    }
}