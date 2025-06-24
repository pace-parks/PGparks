import React from 'react';
import './App.css'; // Import your styles if needed

const Footer = () => {
  const year = new Date().getFullYear();
  const copyRightYear = ` ©Copyright ${year}   |  The Maryland-National Capital Park And Planning Commission`
  return (
    <footer
    className="text-center"
    id="footer"
    style={{ backgroundColor: "#343a40", padding: "10px 0" }}
  >
    <div className="container-fluid">
      <div className="row">
        {/* Column 1 */}
        <div className="col-lg-4 col-md-4 d-flex justify-content-start" style={{paddingLeft: "3rem"}}>
          <img
           src="/image/dept_logo.png"
            alt="Logo"
            style={{ maxWidth: "35%" }}
          />
        </div>

        {/* Column 2 */}
        <div className="col-lg-4 col-md-4">
          <h4 style={{ color: "white", fontWeight: "bold" }}>Contact Us</h4>
          <p style={{ color: "white" }}>
            6600 Kenilworth Avenue, Riverdale, MD 20737 <br />
            Phone: (301) 699-2255 &nbsp;|&nbsp; Maryland Relay 7-1-1 <br />
            <a
              href="mailto:customerservice@pgparks.com"
              style={{ color: "white", textDecoration: "none" }}
            >
              customerservice@pgparks.com
            </a>
          </p>
        </div>

        {/* Column 3 */}
        <div className="col-lg-4 col-md-4 d-flex just justify-content-end" style={{paddingRight: "3rem"}}> 
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/pgparks">
            <i
              className="bi bi-twitter-x"
              style={{ fontSize: "30px", color: "white" }}
            ></i>
          </a>
          &nbsp;&nbsp; &nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/pgparks">
            <i
              className="bi bi-facebook"
              style={{ fontSize: "30px", color: "white" }}
            ></i>
          </a>
          &nbsp;&nbsp; &nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/pgparks/">
            <i
              className="bi bi-instagram"
              style={{ fontSize: "30px", color: "white" }}
            ></i>
          </a>
          &nbsp;&nbsp; &nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@pgparks">
            <i
              className="bi bi-youtube"
              style={{ fontSize: "30px", color: "white" }}
            ></i>
          </a>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="row">
        <div
          className="footer-thumb"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <ul
            id="menu-footer-menu"
            className="menu footer-1stsec"
            style={{
              listStyle: "none",
              paddingLeft: "0",
              marginBottom: "0",
              display: "flex",
              gap: "15px",
              color: "white",
            }}
          >
            <li>
              <a href="https://www.pgparks.com/website-feedback" style={{ color: "inherit" }}>
                Website Feedback
              </a>
            </li>
            |
            <li>
              <a href="https://www.pgparks.com/holiday-schedule" style={{ color: "inherit" }}>
                Holiday Schedule
              </a>
            </li>
            |
            <li>
              <a href="https://www.pgparks.com/activities-events/events" style={{ color: "inherit" }}>
                Events
              </a>
            </li>
            |
            <li>
              <a href="https://www.pgparks.com/contact" style={{ color: "inherit" }}>
                Contact
              </a>
            </li>
            |
            <li>
              <a
                href="https://www.pgparks.com/employment-opportunities"
                style={{ color: "inherit" }}
              >
                Employment Opportunities
              </a>
            </li>
            |
            <li>
              <a
                href="https://www.mncppc.org/124/Privacy-Policy"
                className="ext_link"
                style={{ color: "inherit" }}
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Copyright */}
      <div
        className="row"
        style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <p style={{ color: "white", marginTop: "10px" }}>
          {copyRightYear} 
        </p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
