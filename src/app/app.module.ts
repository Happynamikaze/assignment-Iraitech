import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Q1Component } from './q1/q1.component';
import { Q2Component } from './q2/q2.component';
import { XComponentClass } from './x/x.component';
import { YComponent } from './y/y.component';
import { HttpClientModule } from '@angular/common/http';
import { PhoneNumberFormComponent } from './phone-number-form/phone-number-form.component';
import { MainDivComponent } from './main-div/main-div.component';
import { TopRightComponent } from './main-div/top-right/top-right.component';
import { TopLeftComponent } from './main-div/top-left/top-left.component';
import { BottomLeftComponent } from './main-div/bottom-left/bottom-left.component';
import { BottomRightComponent } from './main-div/bottom-right/bottom-right.component';
import { CenterComponent } from './main-div/center/center.component';




@NgModule({
  declarations: [
    AppComponent,
    Q1Component,
    Q2Component,
    XComponentClass,
    YComponent,
    PhoneNumberFormComponent,
    MainDivComponent,
    TopRightComponent,
    TopLeftComponent,
    BottomLeftComponent,
    BottomRightComponent,
    CenterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

