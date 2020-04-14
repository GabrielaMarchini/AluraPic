import { PhotoListComponent } from './photo-list.component';
import { SearchComponent } from './search/search.component';
import { CardModule } from './../../shared/components/card/card.module';
import { FilterByDescription } from './filter-by-description.pipe';
import { NgModule } from '@angular/core';

import { PhotosComponent } from './photos/photos.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { CommonModule } from '@angular/common';
import { PhotoModule } from '../photo/photo.module';
import { DarkenOnHoverModule } from 'src/app/shared/components/directives/darken-on-hover/darken-on-hover.module';

@NgModule({
    declarations: [
        PhotoListComponent,
        PhotosComponent,
        LoadButtonComponent,
        FilterByDescription,
        SearchComponent
    ],

     imports: [
     
         CommonModule, 
        PhotoModule,
        CardModule,
        DarkenOnHoverModule
     ]

})
export class PhotoListModule {}