// import React from "react";
// import { useNavigate } from "react-router-dom";

// const HomePage = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="home-container">
//       <h1>Welcome to the Home Page</h1>
//       <button onClick={() => navigate("/signin")} className="auth-button">Sign In</button>
//       <button onClick={() => navigate("/signup")} className="auth-button">Sign Up</button>
//     </div>
//   );
// };

// export default HomePage;



import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    // <div className="homepage-container">
      <div className="content-card">
        <div className="logo-container">
          <img 
            src="/images/Logo.png"  
            alt="EventHub Logo" 
          />
        </div>

        <div className="content-section">
          <h1>Welcome to EventHub!!</h1>
          <p>
            Never miss an important event again with EventHub! Add, track, and manage your events 
            effortlessly—all in one place. Whether it's a meeting, a birthday, or a personal task, 
            EventHub helps you stay organized and on top of your schedule.
          </p>
          <div className="button-group">
            <Link to="/login">
              <button className="primary-btn">Sign In</button>
            </Link>
            <Link to="/signup">
              <button className="secondary-btn">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default HomePage;