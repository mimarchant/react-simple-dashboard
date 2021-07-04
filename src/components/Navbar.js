import React from 'react';
import { Layout } from "antd";
import {MenuOutlined} from '@ant-design/icons';
import '../assets/styles/Navbar.css';
import {Link} from 'react-router-dom';

const {Header} = Layout;
const NavBar = (props) => {
  return (
        <Header>
            <ul className='navList'>
                <li><MenuOutlined className='menuIcon' /></li>
                <li className='listItem'><Link to='/'>Dashboard</Link></li>
                <li className='listItem'><Link to='/people'>General</Link></li>
            </ul>
        </Header>
  );
};

export default NavBar;