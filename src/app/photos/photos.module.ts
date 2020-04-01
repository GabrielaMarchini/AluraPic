import { PhotoFormModule } from './photo-form/photo-form.module';

import { CardModule } from './../shared/components/card/card.module';
import { PhotoModule } from './photo/photo.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoListModule } from './photo-list/photo-list.module';


@NgModule({ 
       
    imports: [
        CommonModule,
        PhotoModule,
        PhotoFormModule,
        PhotoListModule,
        CardModule
               
    
    ]
    
    })
    export class PhotosModule  {}


