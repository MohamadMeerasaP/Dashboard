import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp, faDollarSign, faFileLines, faMoneyBill, faNoteSticky, faSearch, faShoppingBag, faUpDown, faWallet } from '@fortawesome/free-solid-svg-icons';
import BarChart from './Chart/Barcharts';
import PieChart from './Chart/Piechart';
import Table from './Chart/Table';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

const Dashboard = () => {
  return (
    <div className="ml-50 p-2.5" style={{backgroundColor:"#F5F6F8"}}>
      {/* First Row */}
      <div className="flex justify-between items-center">
        <div className='ml-5 mt-3'>
          <p className='text-2xl font-bold'>Hello Shahrukh <span role="img" aria-label="hand emoji">👋,</span></p>
        </div>
        <div className=" bg-white flex items-center px-1 mt-3 p-2 rounded-lg">
        <FontAwesomeIcon icon={faSearch} className="text-gray-600 mr-2 ml-2" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-full"
          />
        </div>
      </div>
      <br/>

      {/* Second Row */}
      {/* <div className="flex mt-4">
        <Card title="Earning" value="$1,000" icon="icon-earning" percent="25%" />
        <Card title="Order" value="50" icon="icon-order" percent="10%" />
        <Card title="Income" value="$800" icon="icon-income" percent="15%" />
        <Card title="Total Sales" value="$5,000" icon="icon-sales" percent="20%" />
      </div> */}
      <div className="grid grid-cols-4 gap-8 mt-4 mb-2 text-black">
          <div className="overflow-hidden text-black bg-white rounded-lg">
            <div className="flex w-full mt-3 mb-3 h-20 cardh">
              {/* Left Column */}
              <div className="flex items-center ml-5">
                <div className="bg-green-200 h-14 w-14 rounded-full flex items-center justify-center mr-2 hw">
                  <FontAwesomeIcon icon={faDollarSign} className="text-green-500 text-2xl size" />
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col w-3/4 ml-2">
                <div className="flex flex-col items-start cards">
                  <span className="text-xs font-semibold text-[#C9C9C9]">Earning</span>
                  <span className="text-xl font-bold">$198k</span>
                <span className="text-[10px]">
                  <span>
                    <FontAwesomeIcon icon={faArrowUp} className="text-green-500" />{" "}
                    <span className="text-green-500">37.8% {''}</span>
                  </span>
                  this month
                </span>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden text-black bg-white rounded-lg">
            <div className="flex w-full mt-3 mb-3 h-20 cardh">
              {/* Left Column */}
              <div className="flex items-center ml-5">
                <div className="bg-purple-200 h-14 w-14 rounded-full flex items-center justify-center mr-2 hw">
                  <FontAwesomeIcon icon={faFileLines} className="text-[#8E2CC9] text-2xl size" />
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col w-3/4 ml-2">
                <div className="flex flex-col items-start cards">
                  <span className="text-xs font-semibold text-[#C9C9C9]">Orders</span>
                  <span className="text-xl font-bold">$2.4k</span>
                <span className="text-[10px]">
                  <span>
                    <FontAwesomeIcon icon={faArrowDown} className="text-red-500" />{" "}
                    <span className="text-red-500">2%{''} </span>
                  </span>
                  this month
                </span>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden text-black bg-white rounded-lg">
            <div className="flex w-full mt-3 mb-3 h-20 cardh">
              {/* Left Column */ }
              <div className="flex items-center ml-5">
                <div className="bg-[#CCF2FF] h-14 w-14 rounded-full flex items-center justify-center mr-3 hw">
                  <FontAwesomeIcon icon={faWallet} className="text-[#215B9C] text-2xl size" />
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col w-3/4 ml-2">
                <div className="flex flex-col items-start cards">
                  <span className="text-xs font-semibold text-[#C9C9C9]">Balance</span>
                  <span className="text-xl font-bold">$2.4k</span>
                <span className="text-[10px]">
                  <span>
                    <FontAwesomeIcon icon={faArrowDown} className="text-red-500" />{" "}
                    <span className="text-red-500">2%{''} </span>
                  </span>
                  this month
                </span>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden text-black bg-white rounded-lg">
            <div className="flex w-full mt-3 mb-3 h-20 cardh">
              {/* Left Column */}
              <div className="flex items-center ml-5">
                <div className="bg-[#FFB1D9] h-14 w-14 rounded-full flex items-center justify-center mr-3 hw">
                  <FontAwesomeIcon icon={faShoppingBag} className="text-red-500 text-2xl size" />
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col w-3/4 ml-2">
                <div className="flex flex-col items-start cards">
                  <span className="text-xs font-semibold text-[#C9C9C9]">Total Sales</span>
                  <span className="text-xl font-bold">$89k</span>
                <span className="text-[10px]">
                  <span>
                    <FontAwesomeIcon icon={faArrowUp} className="text-green-500" />{" "}
                    <span className="text-green-500">11%{''} </span>
                  </span>
                  this week
                </span>
                </div>
              </div>
            </div>
          </div>
      </div>
      

      {/* Third Row */}
      <div className="mt-4 flex">
  <div className="w-3/4 mr-4">
    <div className="overflow-hidden text-black bg-white rounded-lg">
      <div className="float-left ml-5 mt-2">
        <p className="font-extrabold text-xl mb-1">Overview</p>
        <p className="text-gray-500 text-xs text-[#c8c8c8]">Monthly Earning</p>
      </div>
      <BarChart />
    </div>
  </div>
  <div className="w-1/4">
    <div className="overflow-hidden text-black bg-white rounded-lg pie">
      <PieChart />
    </div>
  </div>
</div>

      {/* Fourth Row */}
      <div className="mt-4">
      <div className="overflow-hidden text-black bg-white rounded-lg pie">
      <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Title</th>
          <th scope='col'>Status</th>
          <th scope='col'>Position</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>John Doe</p>
                <p className='text-muted mb-0'>john.doe@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Software engineer</p>
            <p className='text-muted mb-0'>IT department</p>
          </td>
          <td>
            <MDBBadge color='success' pill>
              Active
            </MDBBadge>
          </td>
          <td>Senior</td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
              Edit
            </MDBBtn>
          </td>
        </tr>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Alex Ray</p>
                <p className='text-muted mb-0'>alex.ray@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Consultant</p>
            <p className='text-muted mb-0'>Finance</p>
          </td>
          <td>
            <MDBBadge color='primary' pill>
              Onboarding
            </MDBBadge>
          </td>
          <td>Junior</td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
              Edit
            </MDBBtn>
          </td>
        </tr>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Kate Hunington</p>
                <p className='text-muted mb-0'>kate.hunington@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Designer</p>
            <p className='text-muted mb-0'>UI/UX</p>
          </td>
          <td>
            <MDBBadge color='warning' pill>
              Awaiting
            </MDBBadge>
          </td>
          <td>Senior</td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
              Edit
            </MDBBtn>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>
      </div>
      </div>
    </div>
  );
};


export default Dashboard;
