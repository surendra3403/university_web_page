import React, { useState } from "react";
import "./App.css"; // Import CSS
import { FaBars, FaWindowClose, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHeart, FaTimes } from "react-icons/fa";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: ''
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    // Validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile is required';
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      // More comprehensive email validation
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }
    
    if (Object.keys(newErrors).length === 0) {
      // Send email to your address
      const subject = 'Contact Form Submission - College Website';
      const body = `New contact form submission received:

Name: ${formData.name}
Mobile: ${formData.mobile}
Email: ${formData.email}

Submitted on: ${new Date().toLocaleString()}`;
      
      const mailtoLink = `mailto:surendrapodapati02@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailtoLink);
      
      // Reset form
      setFormData({ name: '', mobile: '', email: '' });
      setShowContactModal(false);
      alert('Thank you for contacting us! Email has been prepared for sending.');
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div>
      {/* Main Section */}
      <section id="home" className="mainsection">
        <nav>
          <a href="/">
            <img
              src="https://kiranmai123890.github.io/csstask/images/logo.png"
              alt="logo"
            />
          </a>
          <div className={`nav-link ${menuOpen ? "active" : ""}`} id="navLinks">
            <FaWindowClose className="fa" onClick={() => setMenuOpen(false)} />
            <ul>
              <li><a href="#home" onClick={() => setMenuOpen(false)}><b>HOME</b></a></li>
              <li><a href="#about" onClick={() => setMenuOpen(false)}><b>ABOUT</b></a></li>
              <li><a href="#course" onClick={() => setMenuOpen(false)}><b>COURSE</b></a></li>
              <li><a href="#blog" onClick={() => setMenuOpen(false)}><b>BLOG</b></a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)}><b>CONTACT</b></a></li>
            </ul>
          </div>
          <FaBars className="fa" onClick={() => setMenuOpen(true)} />
        </nav>

        <div className="text-box">
          <h1>India top 4th University</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Tenetur nesciunt perspiciatis illum eos, similique non.
          </p>
          <a href="#" className="mainPage-button">Visit to know more</a>
        </div>
      </section>

      {/* Courses Section */}
      <section id="course" className="course">
        <h1>Courses we Offer</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <div className="cours-col">
            <h3>Intermediate</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
          <div className="cours-col">
            <h3>Degree</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
          <div className="cours-col">
            <h3>BTech</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
        </div>
      </section>

      {/* Campus Section */}
      <section className="campus">
        <h1>Our Campus Located In</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="row">
          <div className="campus-row">
            <img src="https://st4.depositphotos.com/11328482/38574/i/450/depositphotos_385740936-stock-photo-couple-beautiful-students-standing-university.jpg" alt="" />
            <div className="layer"><h3>Kandukur</h3></div>
          </div>
          <div className="campus-row">
            <img src="https://www.iul.ac.in/hostel/HostelAdmin/Image/20200611212553680IUL_8074.JPG" alt="" />
            <div className="layer"><h3>Ongole</h3></div>
          </div>
          <div className="campus-row">
            <img src="https://media.istockphoto.com/id/1097864144/photo/day-at-the-campus.jpg?s=612x612&w=0&k=20&c=UIHQBd7Za6I_4PcONyuzyDmAIB0IrD1uyjndjhtD6rw=" alt="" />
            <div className="layer"><h3>Nellor</h3></div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="facilities">
        <h1>Our Facilities</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="row">
          <div className="facilities-col">
            <img src="https://images.tech.co/wp-content/uploads/2015/08/libraries.jpg" alt="" />
            <h3>Library</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
          <div className="facilities-col">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/58/Furen-high-school-playground-wuxi-china.jpg" alt="" />
            <h3>Play Ground</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
          <div className="facilities-col">
            <img src="https://5.imimg.com/data5/SELLER/Default/2022/6/ZD/HZ/MZ/77938156/digital-classroom-solutions-smart-classroom.jpg" alt="" />
            <h3>Classes</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
          <div className="facilities-col">
            <img src="https://www.aurora.ac.in/images/canteen.jpg" alt="" />
            <h3>Canteen</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="blog" className="testimonial">
        <h1>What Our Student Says</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="test-col">
          <img src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=" alt="" />
          <div>
            <p>Lorem ipsum dolor sit amet consectetur...</p>
            <h3>Anitha</h3>
          </div>
        </div>
        <div className="test-col">
          <img src="https://t3.ftcdn.net/jpg/05/13/31/64/360_F_513316492_ABGWM9UazRQOpx0HCQArhhUobwScxaRJ.jpg" alt="" />
          <div>
            <p>Lorem ipsum dolor sit amet consectetur...<br /><b>contact:</b> 9876543210</p>
            <h3>Krishna</h3>
          </div>
        </div>
        <div className="test-col">
          <img src="https://artriva.com/media/k2/items/cache/c889234799e865bbe90cee71f6cd2e53_XL.jpg" alt="" />
          <div>
            <p>Lorem ipsum dolor sit amet consectetur...</p>
            <h3>Sumanth</h3>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="cta">
        <h1>Enroll for Our Various Online Courses <br />Anywhere From The AP</h1>
        <a href="#" className="mainPage-button" onClick={(e) => { e.preventDefault(); setShowContactModal(true); }}><b>CONTACT US</b></a>
      </section>

      {/* Footer */}
      <section id="about" className="footer">
        <h4>ABOUT US</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        <div className="icons">
          <FaFacebook /> <FaTwitter /> <FaInstagram /> <FaLinkedin />
        </div>
        <p>Made with <FaHeart /> by Easy Tutorials</p>
      </section>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Contact Us</h2>
              <FaTimes 
                className="close-btn" 
                onClick={() => setShowContactModal(false)}
              />
            </div>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="mobile">Mobile *</label>
                <input
                  type="tel"
                  id="mobile"
                  value={formData.mobile}
                  onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                  className={errors.mobile ? 'error' : ''}
                />
                {errors.mobile && <span className="error-message">{errors.mobile}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
