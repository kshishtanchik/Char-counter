import React, { Component } from "react";
import { connect } from "react-redux";
import { ActionTypes } from "./reducers/actionTypes";
import SearchForm from "./components/form";
import  CharList  from "./components/charList";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {

  loadString =   url => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/' ;
     fetch(proxyUrl+url.serchPath).then(response =>{
       if(response.ok)
         return response.text().then(text =>this.props.onStartParse(text));
       else {
         response.text().then(this.props.onErrorFetch(response.statusText))
       }
     })
         .catch(error=>{
           console.log(error.toString());
           debugger;
           this.props.onErrorFetch(error.toString())
         });
  };

  render() {
    const {chars}=this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <SearchForm onSubmit={this.loadString} />
          {chars.errorFetch&&<p>Ошибка запроса: {chars.errorFetch}</p>}
          {!chars.errorFetch&&<CharList/>}
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    chars: state.chars
  };
};

const mapDispatchToProps = dispatch => ({
  onStartParse: text =>
    dispatch({ type: ActionTypes.DownloadAndParsePage, payload: text }),
  onErrorFetch:error=>
      dispatch({type:ActionTypes.ErrorFetch,payload: error})
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
