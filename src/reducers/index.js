import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { PageReducer } from "./downloadReducer";

export const rootReducer = combineReducers({
  chars: PageReducer,
  form: formReducer
});
