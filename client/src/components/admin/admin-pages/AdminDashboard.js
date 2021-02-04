import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';

import AdminModals from '../admin-layout/AdminModals';

const AdminDashboard = () => {
  return (
    <Fragment>
      <section id='admin-modals' className='pt-3 pb-3 bg-light'>
        <AdminModals />
      </section>
      <section id='admin-tables' className='bg-primary pt-3 pb-4'>
        <Container>
          <div className='row'>
            <div className='col-xl-7'>
              <div className='card bg-light mb-3'>
                <div className='card-header'>
                  <h4>Recent positions</h4>
                </div>
                <table id='recent-positions' className='table table-striped'>
                  <thead className='thead-dark'>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Job Type</th>
                      <th>Venue</th>
                      <th>Description</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>5</td>
                      <td>Job 5</td>
                      <td>Full-time</td>
                      <td>St. Kilda</td>
                      <td>This is the fifth job to be posted</td>
                      <td>
                        <a href='' className='btn btn-secondary'>
                          <i className='fas fa-angle-double-right'></i> Details
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Job 4</td>
                      <td>Part-time</td>
                      <td>St. Kilda</td>
                      <td>This is the fourth job to be posted</td>
                      <td>
                        <a href='' className='btn btn-secondary'>
                          <i className='fas fa-angle-double-right'></i> Details
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Job 3</td>
                      <td>Full-time</td>
                      <td>Toorak Rd.</td>
                      <td>This is the third job to be posted</td>
                      <td>
                        <a href='' className='btn btn-secondary'>
                          <i className='fas fa-angle-double-right'></i> Details
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Job 2</td>
                      <td>Contract</td>
                      <td>High St.</td>
                      <td>This is the second job to be posted</td>
                      <td>
                        <a href='' className='btn btn-secondary'>
                          <i className='fas fa-angle-double-right'></i> Details
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Job 1</td>
                      <td>Full-time</td>
                      <td>Toorak Rd.</td>
                      <td>This is the first job to be posted</td>
                      <td>
                        <a href='' className='btn btn-secondary'>
                          <i className='fas fa-angle-double-right'></i> Details
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className='col-xl-5'>
              <div className='card mb-3 bg-light'>
                <div className='card-header'>
                  <h4>About Section</h4>
                </div>
                <table id='about-table' className='table table-striped'>
                  <thead className='thead-dark'>
                    <tr>
                      <th>Catchphrase</th>
                      <th>Main</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>This is the catchphrase</td>
                      <td>This is the main description</td>
                      <td>
                        <a href='' className='btn btn-secondary'>
                          <i className='fas fa-angle-double-right'></i> Details
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='card bg-light'>
                <div className='card-header'>
                  <h4>Venues Section</h4>
                </div>
                <table id='venues-table' className='table table-striped'>
                  <thead className='thead-dark'>
                    <tr>
                      <th>#</th>
                      <th>Location</th>
                      <th>Description</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>St. Kilda Rd.</td>
                      <td>This is the St. Kilda venue.</td>
                      <td>
                        <a href='' className='btn btn-secondary'>
                          <i className='fas fa-angle-double-right'></i> Details
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Toorak Rd.</td>
                      <td>This is the Toorak Rd. venue.</td>
                      <td>
                        <a href='' className='btn btn-secondary'>
                          <i className='fas fa-angle-double-right'></i> Details
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>High St.</td>
                      <td>This is the High St. venue.</td>
                      <td>
                        <a href='' className='btn btn-secondary'>
                          <i className='fas fa-angle-double-right'></i> Details
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Fragment>
  );
};

export default AdminDashboard;
