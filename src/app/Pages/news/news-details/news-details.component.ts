import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CategoryService} from '../../../Services/category.service';
import {INews} from '../../../Models/news';

@Component({
    selector: 'app-news-details',
    templateUrl: './news-details.component.html',
    styleUrls: ['./news-details.component.scss'],
})
export class NewsDetailsComponent implements OnInit {
    newsID;
    newsData: INews;

    constructor(private route: ActivatedRoute, private categoryService: CategoryService) {
        this.newsID = this.route.snapshot.params.id;
    }

    ngOnInit() {
        this.getNews();
    }

    getNews() {
        this.categoryService.getCategoryNewsById(this.newsID).subscribe(res => {
            this.newsData = res as INews;
        });
    }
}
