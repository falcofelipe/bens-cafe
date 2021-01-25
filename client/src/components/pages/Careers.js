import React from 'react';
import Button from 'react-bootstrap/Button';

const Careers = () => {
  return (
    <div className='mt-5'>
      <h3 className='lead'>This is the Careers page.</h3>
      <ul className='list'>
        <li>
          <strong>Waiter @ St. Kilda Road</strong>
          <i>Full-time icon</i>
          <p>
            Our company is currently looking for a full-time qualified waiter to
            help us in our St. Kilda Rd. venue. The ideal candidate would have
            perfect english communicational skills, at least 6 months of
            experience on being a waiter in high-end environments, and excellent
            presentation.
          </p>
          <Button>Apply for this position now</Button>
        </li>
        <li>
          <strong>Kitchen Staff @ St. Kilda Road</strong>
          <i>Part-time icon</i>
          <p>
            Our company is currently looking for a part-time kitchen staff to
            help us in our St. Kilda Rd. venue. The ideal candidate would have a
            passion for food and cooking, shown abilities to work very well in
            teams and follow orders, and impecable cleanliness.
          </p>
          <Button>Apply for this position now</Button>
        </li>
        <li>
          <strong>Functions manager @ Toorak Road</strong>
          <i>Part-time icon</i>
          <p>
            Our company is currently looking for a functions manager to help us
            in our Toorak Rd. venue. The ideal candidate would have more than
            five years of experience in the area and at least one year of
            experience as a functions manager. He/she would also have excellent
            communicational and leadership skills.
          </p>
          <Button>Apply for this position now</Button>
        </li>
      </ul>
    </div>
  );
};

export default Careers;
