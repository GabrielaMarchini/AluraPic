import { CardModule } from './../../shared/components/card/card.module';
import { FilterByDescription } from './filter-by-description.pipe';
import { NgModule } from '@angular/core';

import { PhotosComponent } from './photos/photos.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { CommonModule } from '@angular/common';
import { PhotoModule } from '../photo/photo.module';

@NgModule({
    declarations: [
        
        PhotosComponent,
        LoadButtonComponent,
        FilterByDescription
    ],

     imports: 
     [CommonModule, 
        PhotoModule,
        CardModule
     ]

})
export class PhotoListModule {}