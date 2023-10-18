import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';

function ResponsiveExample() {
  return (
    <Table>
      <thead>
        <tr>
          <th className='text-left'>Product Name</th>
          <th>Stock</th>
          <th>Price</th>
          <th>Sales</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className="d-flex align-items-start">
              <img alt="" src="/profilepic.jpeg" width={50} />
              <div className="ml-2 mt-2">
                <div className='text-left'>Abstract 3D</div>
                <div className='text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              </div>
            </div>
          </td>
          <td>32 in Stock</td>
          <td>$45.99</td>
          <td>20</td>
        </tr>
        <tr>
          <td>
            <div className="d-flex align-items-start">
              <img alt="" src="/profilepic.jpeg" width={50} />
              <div className="ml-2 mt-2">
                <div className='text-left'>Sarphens Illustrations</div>
                <div className='text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              </div>
            </div>
          </td>
          <td>32 in Stock</td>
          <td>$45.99</td>
          <td>20</td>
        </tr>
        <tr>
          <td>
            <div className="d-flex align-items-start">
              <img alt="" src="/profilepic.jpeg" width={50} />
              <div className="ml-2 mt-2">
                <div className='text-left'>Laptop</div>
                <div className='text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              </div>
            </div>
          </td>
          <td>32 in Stock</td>
          <td>$45.99</td>
          <td>20</td>
        </tr>
        <tr>
          <td>
            <div className="d-flex align-items-start">
              <img alt="" src="/profilepic.jpeg" width={50} />
              <div className="ml-2 mt-2">
                <div className='text-left'>Desktop</div>
                <div className='text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              </div>
            </div>
          </td>
          <td>32 in Stock</td>
          <td>$45.99</td>
          <td>20</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default ResponsiveExample;
