import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Header = () => {
  return (
            // to be sticky added, position: 'sticky', top: 0, zIndex: '1000'
    <div className="container-fluid" style={{ backgroundColor: '#6ca04a', padding: '0', position: 'sticky', top: 0, zIndex: '1000' }}>
      {/* Navbar with dropdowns for HOME, ABOUT, NEWS aligned to the right */}
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#6ca04a', padding: '0' }}>
        <div className="d-flex justify-content-between w-100">
          {/* Logo on the left side */}
          <a href="https://pgparks.com" style={{ marginLeft: '0' }}>
            <img
              src={`${process.env.PUBLIC_URL}/image/dept_logo.png`}
              alt="PGParks Header"
              style={{ height: '90px', overflow: 'hidden', display: 'block' }}
            />
          </a>

          {/* Navbar items with dropdowns aligned to the right */}
          <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
            <ul className="navbar-nav" style={{ gap: '30px' }}>
              {/* Dropdown for HOME */}
              <li className="nav-item" >
                <Link className="nav-link" style={{ color: 'white' }} href="/">HOME</Link>
              </li>

              {/* Dropdown for Rentals */}
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownAbout" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: 'white'}}>
                  RENTALS
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownAbout">
                  <li><Link className="dropdown-item" href="#">Historic Venue</Link></li>
                  <li><Link className="dropdown-item" href="#">Memberships & Passes</Link></li>
                  <li><Link className="dropdown-item" href="#">Permits & Policies</Link></li>
                  <li><Link className="dropdown-item" href="/reservation">Reservation</Link></li>
                </ul>
              </li>

              {/* Dropdown for ABOUT */}
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownAbout" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'white' }}>
                  ACTIVITIES & EVENTS
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownAbout">
                  <li><Link className="dropdown-item" to="/events">Events</Link></li>
                  <li><Link className="dropdown-item" href="#">Sports</Link></li>
                  <li><Link className="dropdown-item" href="#">Nature & Outdoors</Link></li>
                </ul>
              </li>

              {/* Dropdown for Services */}
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownNews" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'white' }}>
                  SERVICES
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownNews">
                  <li><Link className="dropdown-item" href="#">Seniors</Link></li>
                  <li><Link className="dropdown-item" href="#">Adults</Link></li>
                  <li><Link className="dropdown-item" href="#">Teens & Pre-Teens</Link></li>
                  <li><Link className="dropdown-item" href="#">Children & Youth</Link></li>
                  <li><Link className="dropdown-item" href="#">Disability</Link></li>
                </ul>
              </li>

              {/* Dropdown for Services */}
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownNews" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'white' }}>
                  GET INVOLVED
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownNews">
                  <li><Link className="dropdown-item" href="#">Donations & Scholarships</Link></li>
                  <li><Link className="dropdown-item" href="#">Partnership</Link></li>
                  <li><Link className="dropdown-item" href="#">Online Community Engagement</Link></li>
                  <li><Link className="dropdown-item" href="#">Volunteer Opportunities</Link></li>
                </ul>
              </li>

              {/* Dropdown for NEWS */}
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownNews" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'white' }}>
                  NEWS
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownNews">
                  <li><Link className="dropdown-item" href="#">Media Kit</Link></li>
                  <li><Link className="dropdown-item" href="#">News Release</Link></li>
                  <li><Link className="dropdown-item" href="#">E-Newsletter</Link></li>
                </ul>
              </li>

              {/* Additional nav items */}
              <li className="nav-item" style={{ paddingRight: '100px' }}>
                <a className="nav-link" style={{ color: 'white' }} href="#">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
