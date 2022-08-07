import { Article } from "../models/article";
import { Banner } from "../models/banner";
import { Data } from "../models/data";

export interface AppState {
    data: Data[];
    article: Article[];
    banner: Banner[];
}