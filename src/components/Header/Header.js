import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import  './Header.scss';



const Header = props => {
  // <Link /> and <NavLink /> are similar but different ...
  return (
    <header>
      <h1>REASTy</h1>
      <nav>
        <ul>
          <li>
            <Link data-testid="homelink" to="/">Home</Link>
          </li>
          <li>
            <NavLink data-testid="classiclink" activeClassName="here" to="/pageHistory">History</NavLink>
          </li>
          <li>
            <NavLink data-testid="renderlink" activeClassName="here" to="/help">Help</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
// export default function  Header(){
//     return (<header className="App-header"><h1>RESTy</h1></header>);
// };
