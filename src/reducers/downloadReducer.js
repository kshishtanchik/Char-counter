import { ActionTypes } from "./actionTypes";

const counter=str=>{
  let result={};
  const chars=str.split('');
  chars.forEach(ch=>{
    if(result[ch])
      result[ch]++
    else result[ch]=1;
  });
  const fin=Object.keys(result).map(key=>({char:key,count:result[key]}));

  return fin;
}
const chars = [];

export const PageReducer = (state = chars, action) => {
  const {type, payload} = action;
  switch (type) {
    case ActionTypes.DownloadAndParsePage:
      const charArray=counter(payload);
      return charArray;
      break;
    case ActionTypes.ErrorFetch:
      return {...state,"errorFetch":payload};
      break;
    default:
      return state;
      break;
  }

};
