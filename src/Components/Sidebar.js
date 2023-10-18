import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import {
  faPercentage,
  faUser,
  faUserCircle,
  faCircleQuestion,
  faWallet,
  faCube,
  faChartLine,
  faCircleNodes,
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <>
    <div className="w-64 max-w-50 h-screen bg-[#040440] text-white flex flex-col p-4">
      {/* Logo and Name */}
      <div className="mb-6 ml-2 flex items-center">
        <FontAwesomeIcon icon={faCircleNodes} size='lg' className="mr-4 fa-xs active" />
        <div>
          <p className="text-xl font-bold">Dashboard</p>
        </div>
      </div>
      <br />

      {/* Menu Items */}
      <ul className="flex flex-col flex-grow">
      {menuItems.map((menuItem, index) => (
        <li key={index} className="mb-2 sidebar">
          <NavLink
            to={menuItem.path}
            exact={menuItem.path === '/dashboard'} // Make Dashboard link exact
            className={`flex items-center w-full p-2 rounded-lg transition duration-300 ${
              menuItem.name === 'Dashboard' ? 'bg-[#2D2D69]' : 'hover:bg-your-hover-color'
            } active-link`}
          >
            <FontAwesomeIcon icon={menuItem.icon} className="mr-5 fa-s" />
            {menuItem.name}
            {menuItem.name !== 'Dashboard' && (
              <FaAngleRight className="ml-auto icon" />
            )}
          </NavLink>
        </li>
      ))}
    </ul>

      {/* User Info Container */}
      <div className="mt-auto flex items-center bg-[#2D2D69] rounded">
        {/* Circular Picture */}
        <div className="w-9 h-8 bg-gray-300 rounded-full mr-2 mb-3 ml-1 mt-1">
          {/* You can add an image or an icon here */}
          <img src='/profilepic.jpeg' className='rounded-full'/>
        </div>
        <div className='mr-14'>
          <p className="text-m evano">Evano</p>
          <p className="text-xs">Project Manager</p>
        </div>
        <FaAngleDown/>
        {/* <FontAwesomeIcon icon={FaAngleDown} className="fa-xs ml-2" /> */}
      </div>
    </div>
</>
  );
};

// Define your menu items with paths
const menuItems = [
  { name: 'Dashboard', icon: faChartLine, path: '/' },
  { name: 'Product', icon: faCube, path: '/product' },
  { name: 'Customer', icon: faUserCircle, path: '/customer' },
  { name: 'Income', icon: faWallet, path: '/income' },
  { name: 'Promote', icon: faPercentage, path: '/promote' },
  { name: 'Help', icon: faCircleQuestion, path: '/help' },
];

export default Sidebar;
