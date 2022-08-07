import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { DataListComponent } from './data-list/data-list.component';
import { BannerComponent } from './banner/banner.component';
import { ArticleComponent } from './article/article.component';

import { dataReducer } from './data-list/state/data-list.reducer';
import { articleReducer } from './article/state/article.reducers';
import { bannerReducer } from './banner/state/banner.reducers';

@NgModule({
  declarations: [
    AppComponent,
    DataListComponent,
    BannerComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ 
      data: dataReducer,
      article: articleReducer,
      banner: bannerReducer
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
