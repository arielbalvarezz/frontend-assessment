import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Banner } from '../models/banner';
import { getBanners } from './state/banner.selector';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, OnDestroy {

  banners: Observable<Banner[]> | undefined;
  bannerLength = 0;
  subscription: Subscription | undefined;

  constructor(private store: Store) { }

  ngOnInit(): void {
    // Get all banners
    this.banners = this.store.select(getBanners);

    // Get banner length
    this.subscription = this.banners.subscribe(banners => {
      this.bannerLength = banners.length;
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
