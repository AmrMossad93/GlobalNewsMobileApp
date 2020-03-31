import {Injectable} from '@angular/core';
import {DataService} from './data.service';
import {ICategory} from '../Models/category';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    category = {} as ICategory;

    constructor(public dataService: DataService) {
    }

    getCategory() {
        return this.dataService.get('api/Category');
    }

    getCategoryNewsById(id) {
        return this.dataService.get('api/News/' + id);
    }
}
