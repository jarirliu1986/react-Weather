var React = require('react');
var {Link} = require('react-router');

var Example = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few locations to try out;</p>
      <ol>
        <li>
          <Link to='/?location=Newyork'>Newyork</Link>
        </li>
        <li>
          <Link to='/?location=London'>London</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Example;
