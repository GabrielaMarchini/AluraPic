import { HomeRoutingModule } from './home.rounting.module';
import { RouterModule } from '@angular/router';
import { VMessageModule } from './../shared/components/vmessage/vmessage.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SignInComponent } from './signin/signin.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import { SignUpComponent } from './signup/signup.component';
import { HomeComponent } from './home.component';
import { SignUpService } from './signup/signup.service';


@NgModule({
    declarations: [ SignInComponent,
                   SignUpComponent,
                   HomeComponent
        ],
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            VMessageModule,
            RouterModule,
            HomeRoutingModule
        ],
        providers: [
            SignUpService
        ]
        
        
})
export class HomeModule { }