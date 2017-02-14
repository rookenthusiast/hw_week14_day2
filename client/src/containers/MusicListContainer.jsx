var React = require('react');
var MusicList = require('../components/MusicList')

var MusicListContainer = React.createClass({

  getInitialState: function(){
    return {entryList: [], focusLabel: null}
  },

  componentDidMount: function(){
    console.log("component Mounted!")
    var url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function(){
      if (request.status === 200){
        var data = JSON.parse(request.responseText).feed.entry;
        this.setState({entryList: data});
      }
    }.bind(this);
    request.send(null);
  },

  setFocusLabel: function(label){
    this.setState({focusLabel: label});
  },

  render: function(){ 
    console.log(this.state.entryList)
    return (<div>
      <h1>I am a header</h1>
      <MusicList entries = {this.state.entryList} selectLabel = {this.setFocusLabel}/>
      </div>)
    
  }
});

module.exports = MusicListContainer;