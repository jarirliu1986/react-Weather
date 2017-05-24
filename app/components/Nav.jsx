var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
  return (
    <div>
      <h3>Nav Component</h3>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
      <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</IndexLink>
      <IndexLink to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</IndexLink>
    </div>
  );
};
// var Nav = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <h3>Nav Component</h3>
//         <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
//         <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</IndexLink>
//         <IndexLink to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</IndexLink>
//       </div>
//     );
//   }
// });

module.exports = Nav;
