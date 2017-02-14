var React = require('react');
var MusicList = require('../components/MusicList')

var MusicListContainer = React.createClass({

  getInitialState: function(){
    return {entryList: []}
  }

  componentDidMount: function(){
    var url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function(){
      if (request.status === 200){
        var data = JSON.parse(request.responseText).feed;
        this.setState({entryList: data });
      }
    }.bind(this);
    request.send(null);
  },

  render: function(){ 
    return (<div>
      <h1>I am a header</h1>
      <MusicList entries = {this.state.entryList}/>
      </div>)
    
  }
});

module.exports = MusicListContainer;