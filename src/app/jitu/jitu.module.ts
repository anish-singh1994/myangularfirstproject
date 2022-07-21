import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinghComponent } from './singh/singh.component';
import { KumarComponent } from './kumar/kumar.component';
import { LaptopComponent } from './laptop/laptop.component';
import { PhoneComponent } from './phone/phone.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    SinghComponent,
    KumarComponent,
    LaptopComponent,
    PhoneComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[SinghComponent, KumarComponent,LaptopComponent,PhoneComponent]
})
export class JituModule { }
