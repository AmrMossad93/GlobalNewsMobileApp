import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {NewsPage} from './news.page';
import {NewsDetailsComponent} from './news-details/news-details.component';

const routes: Routes = [
    {
        path: '',
        component: NewsPage
    },
    {
        path: ':id',
        component: NewsDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NewsPageRoutingModule {
}
