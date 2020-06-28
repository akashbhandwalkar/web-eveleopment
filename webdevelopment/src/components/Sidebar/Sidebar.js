import React  from 'react';
import './Sidebar.scss';

const Sidebar = ({ history }) => {

    return(
        <div className="sidebar-container">
            <div className="option">
                <i className="fa fa-credit-card" aria-hidden="true"></i>
            </div>
        </div>
    );
};

export default Sidebar;