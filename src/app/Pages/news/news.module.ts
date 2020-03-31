import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {NewsPageRoutingModule} from './news-routing.module';

import {NewsPage} from './news.page';
import {AngularMaterialModule} from '../../angular-material.module';
import {NewsDetailsComponent} from './news-details/news-details.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AngularMaterialModule,
        NewsPageRoutingModule
    ],
    declarations: [NewsPage, NewsDetailsComponent]
})
export class NewsPageModule {
}
