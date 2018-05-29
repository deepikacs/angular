import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Enterdata1Component } from './enterdata1/enterdata1.component';
import { PageNotFoundComponent } from './not-found.component';
import { EnterDataComponent } from './enter-data/enter-data.component';
import { MyserviceService } from './myservice.service';

const appRoutes: Routes = [
  { path: '', redirectTo: 'enterdata1', pathMatch: 'full' },
  { path: 'enterdata1', component: Enterdata1Component },
  { path: 'enter-data', component: EnterDataComponent },
  { path: '**', component: PageNotFoundComponent }
  ];


@NgModule({
  declarations: [
    AppComponent,
    Enterdata1Component,
    PageNotFoundComponent,
    EnterDataComponent
  ],
  imports: [
    RouterModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
