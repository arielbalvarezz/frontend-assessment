import { createReducer, on } from "@ngrx/store";
import { Banner } from "src/app/models/banner";
import { loadBannerSuccess } from "./banner.action";

export interface bannerState {
    banner: Banner[]
};

export const bannerInitialState: bannerState = {
    banner: [
        {
            imageMobile: 'mobile-banner.png',
            imageDesktop: 'desktop-banner.png',
            title: 'Hello Developer!',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            isActive: true
        }
    ]
};

export const bannerReducer = createReducer(
    bannerInitialState,

    /**
     * Load Banners
     * 
     * @param state object - current app state
     * @param banner object - new banner object
     * @return object - new app state
     */
    on(loadBannerSuccess, (state, { banner }) => ({ ...state, banner: banner }))
)