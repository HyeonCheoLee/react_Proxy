import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component{
  render(){
    return (
      <div>
        <input type='button' value='get data' onClick={
          function(){
           fetch('/data.json')  //proxy를 사용하면 build했을때 이부분에 도메인관련 조치를 할 필요가 없음.  CORS 이슈 해결
           .then(result=>result.json()) 
           .then(json=>console.log(json))
          }.bind(this)
        }>
        </input>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
