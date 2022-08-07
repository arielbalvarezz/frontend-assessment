import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { getArticles } from './state/article.selector';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  articles: Observable<Article[]> | undefined;

  constructor(private store: Store) { }

  ngOnInit(): void {
    // Get all articles
    this.articles = this.store.select(getArticles);
  }

}
