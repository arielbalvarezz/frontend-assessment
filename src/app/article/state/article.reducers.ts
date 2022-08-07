import { createReducer, on } from "@ngrx/store";
import { Article } from "src/app/models/article";
import { loadArticleSuccess } from "./article.actions";

export interface articleState {
    article: Article[];
}

export const articleInitialState: articleState = {
    article: [
        {
            image: 'article.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit diam ut dui molestie faucibus. Morbi ac ullamcorper enim, et aliquet lacus. Nulla consectetur quam nibh, in laoreet mi faucibus quis. Integer varius consectetur ornare.',
            link: '#',
            linkText: 'READ MORE'
        },
        {
            image: 'article.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit diam ut dui molestie faucibus. Morbi ac ullamcorper enim, et aliquet lacus.',
            link: '#',
            linkText: 'READ MORE'
        },
        {
            image: 'article.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit diam ut dui molestie faucibus. Morbi ac ullamcorper enim, et aliquet lacus. Nulla consectetur quam nibh, in laoreet mi faucibus quis.',
            link: '#',
            linkText: 'READ MORE'
        }
    ]
}

export const articleReducer = createReducer(
    articleInitialState,

    /**
     * Load Articles
     * 
     * @param state object - current app state
     * @param article object - new article object
     * @return object - new app state
     */
    on(loadArticleSuccess, (state, { article }) => ({ ...state, article: article }))
);