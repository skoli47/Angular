import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employeeList.component';
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe';
import { EmployeeCountComponent } from './employee/employeeCount.component';
import { SimpleComponent } from './others/simple.component';
import { EmployeeService } from './employee/employee.service';
import { HomeComponent } from './home/home.component';
import { pageNotFoundComponent } from './others/pageNotFound.component';
import { RouterModule, Routes } from '@angular/router';
import { UserPreferenceService } from './employee/userPreference.service';
import { testModule } from './test.module';

// ----Routing
// -- Set <base href="/src/"> in index.html
// -- Import RoutingModule and define
//  If user enters home in the url it will be redirected to home component
// if user enters empty path then redirect user to home component
// if user enters wrong path then redirect user to page not found component
// IMP Notes: Wild card routes should be at last as it matches any url. All other routes should be at top
// RouterLink changes are made in app.component.html page

const appRoutes:Routes = [
  {path:'home', component:HomeComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'employeelist', component:EmployeeListComponent},
  //Route with parameters
  {path:'employee/:code', component:EmployeeComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'**',component:pageNotFoundComponent}   //wild card routes
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeTitlePipe,
    EmployeeCountComponent,
    SimpleComponent,
    HomeComponent,
    pageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    testModule,
    //attached all routes to routermodule
    RouterModule.forRoot(appRoutes, {useHash:true})
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
