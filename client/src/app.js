var React = require('react');
var ReactDOM = require('react-dom');
var MusicListContainer = require('./containers/MusicListContainer');

window.onload = function(){
  ReactDOM.render(
    <MusicListContainer />,
    document.getElementById('app')
  );
}
