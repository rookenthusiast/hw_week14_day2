var React = require('react');

var MusicList = React.createClass({
  render: function(){ 
    console.log(this.props.entrylist)
    var list = this.props.entryList.map(function(label, index){
      return <li value={index} key={index}>{label.im.artist.label}</li>
    })
    return (
      <ul id="artist-names">
      {list}
      </ul>
      );
  }

});

module.exports = MusicList;