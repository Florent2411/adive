import { combineReducers } from 'redux';
import { jobsReducer } from "./reducers/jobsReducer";
import { blogsReducer } from "./reducers/blogsReducer"
import { trainingsReducer } from "./reducers/trainingsReducer"
import { faqsReducer } from "./reducers/faqsReducer"
import { categoriesReducer } from "./reducers/categoriesReducer"
import { tagsReducer } from "./reducers/tagsReducer"
import { recentBlogsReducer } from "./reducers/recentBlogsReducer"

const rootReducer = combineReducers({
  jobs: jobsReducer,
  blogs: blogsReducer,
  trainings: trainingsReducer,
  faqs: faqsReducer,
  categories: categoriesReducer,
  tags: tagsReducer,
  recent_blogs: recentBlogsReducer,
});

export default rootReducer;