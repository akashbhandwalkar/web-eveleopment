import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Header.scss';

const Header = ({ history }) => {
    const [currentRoute, setCurrentRoute] = useState('javascript');
    history.listen((location, action) => {
        switch(location.pathname) {
            case '/css':
                setCurrentRoute('css');
                break;
            case '/javascript':
                setCurrentRoute('javascript');
                break;
            case '/blogs':
                setCurrentRoute('blogs');
                break;
            default:
                setCurrentRoute('javascript');
        }
    });

    const getClassName = (route) => {
       return route === currentRoute ? 'active' : '';
    }

    return(
        <nav>
        <ul>
          <li>
            U
          </li>
          <li className={getClassName('javascript')}>
            <Link to="/">JavaScript</Link>
          </li>
          <li className={getClassName('css')}>
            <Link to="/css">CSS</Link>
          </li>
          <li className={getClassName('blogs')}>
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>
      </nav>
    );
};

export default withRouter(Header);
