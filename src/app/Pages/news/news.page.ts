import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../Services/category.service';
import {ICategory} from '../../Models/category';
import {Router} from '@angular/router';

@Component({
    selector: 'app-news',
    templateUrl: './news.page.html',
    styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
    categories: ICategory[];

    constructor(private categoryService: CategoryService, private route: Router) {
    }

    ngOnInit() {
        this.getAllCategories();
    }

    getAllCategories() {
        this.categoryService.getCategory().subscribe(res => {
            this.categories = res as ICategory[];
        });
    }
}
