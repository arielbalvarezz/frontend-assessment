import { createAction, props } from "@ngrx/store";
import { Banner } from "src/app/models/banner";

export const loadBannerSuccess = createAction(
    '[banner] load banner success',
    props<{ banner: Banner[] }>()
);