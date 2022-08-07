import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs';
import data from './data/data.json';
import { Data } from '../models/data';
import { loadDataListSuccess, toggleData } from './state/data-list.actions';
import { getDataList } from './state/data-list.selector';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {

  // Getting data.json object
  dataList: {
    title: string; 
    content: string;
  }[] = data;
  
  newDataList: Observable<Data[]> | undefined;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.loadDataList();
    this.newDataList = this.store.select(getDataList);
  }

  loadDataList(): void {
    // Data Initialization
    const data = this.dataList.map((data, i) => ({
      id: i,
      title: data.title,
      content: data.content,
      isOpen: (i == 0) // Setting isOpen true for first array element from data
        ? true
        : false,
      isPreviousOpen: false
    }));

    // Saving data.json object to app state
    this.store.dispatch(loadDataListSuccess({ data }));
  }

  toggleData(data: Data): void {
    this.store.dispatch(toggleData({ data: { 
      ...data,
      isOpen: !data.isOpen, // Switch isOpen value
      isPreviousOpen: false
    } }));
  }
}
