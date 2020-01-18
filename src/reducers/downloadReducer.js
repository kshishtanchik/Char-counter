import { ActionTypes } from "./actionTypes";
const counter=str=>{
  let result={};
  debugger;
  const chars=str.split('');
  chars.forEach(ch=>{
    if(result[ch])
      result[ch]++
    else result[ch]=1;
  });
  return result;
}
const chars = {};

export const PageReducer = (state = chars, action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.DownloadAndParsePage:
      let result = "Не задан URL";
      if (payload.serchPath)
        fetch(payload.serchPath)
          .then(response => result=response.text().then(text=>counter(text)))
          .then(error => result= error);
      return result;
      break;
    default:
      return state;
  }

};
