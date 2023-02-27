import logo from "./everest.jpg";
import logo1 from "./eve2.jpg";
import logo2 from "./img3.png";
import logo3 from "./img4.png";
import logo4 from "./img5.png";
import logo5 from "./img6.png";

import Eventcard from './components/EventCard'
import Eventbox from './components/Eventbox'


import "./App.css";

function App() {
  return (
    <>
      {/* <Eventcard />
    <Eventcard />
    <Eventcard />
    <Eventcard />
    <Eventcard /> */}
      {/* <navnar> */}
      <nav className="navbar">
        <h1 className="logo">ADVENTURE</h1>
        <ul className="nav-links">
          <li className="active">
            <a href="#"></a>Home
          </li>
          <li>
            <a href="#"></a>Tours
          </li>
          <li>
            <a href="#"></a>Explore
          </li>
          <li>
            <a href="#"></a>About
          </li>
          <li className="ctn">
            <a href="#"></a>contect
          </li>
        </ul>
      </nav>
      <header>
        <div className="header-content">
          <h2>Explore<span>Colorful</span> World</h2>
          <div className="line"></div>
          <h1>A WONDERFUL GIFT</h1>
          <a href="#" className="ctn">
            Learn More
          </a>
        </div>
      </header>
      {/* ===EVENT==== */}
      <section className="events">
        <div className="title">
          <h1>
            <span>Upcoming</span>
            Event
          </h1>
          <div className="line"></div>
        </div>
        <div className="row">
          <Eventcard />
          <Eventcard />
          {/* <Eventcard /> */}
          {/* <div className="col"> */}
          {/* <div className="box">
      <img src={logo} className="rt" alt="logo" />
      <h4>Evrest Trek 2</h4>
      <p>
        {" "}
        Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book.
      </p>
      <div className="learn">
        <a href="#" className="ctn">
          learn More
        </a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="box">
      <img src={logo} className="rt" alt="logo" />
      <h4>Evrest Trek 2</h4>
      <p>
        {" "}
        Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book.
      </p>
      <div className="learn">
        <a href="#" className="ctn">
          learn More
        </a>
      </div>
    </div>
  </div> */}
        </div>
      </section>
      {/* ===section explore=== */}
      <section className="explore">
        <div className="explore-content">
          <h1>Explore The World</h1>
          <div className="line"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
            voluptas accusantium aperiam ea. Error veritatis est quasi deserunt
            dolore perspiciatis, minima eaque recusandae delectus repellendus
            ipsum beatae laboriosam odit praesentium.
          </p>
          <div className="learn3">
            <a href="#" className="ctn">
              learn More
            </a>
          </div>
        </div>
      </section>
      <section className="tours">
        <div className="row">
          <div className="col content-col">
            <h1>UPCOMING TOURS & DESTINATION</h1>
            <div className="line"></div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, temporibus maiores ullam deserunt sit rem aspernatur non deleniti placeat. Tempore numquam est repudiandae? Et provident voluptatum distinctio ducimus consequatur excepturi!</p>
            <div className="learn3">
              <a href="#" className="ctn">
                learn More
              </a>
            </div>
          </div>
          <div className="col image-col">
            <Eventbox />
            {/* <Eventbox />
            <Eventbox />
            <Eventbox /> */}
            {/* <div className="image-gallary">
              <img src={logo2} className="rh" alt="logo" />
              <img src={logo3} className="rh" alt="logo" />
              <img src={logo4} className="rh" alt="logo" />
              <img src={logo5} className="rh" alt="logo" />   
            </div> */}
          </div>
        </div>
      </section>
      {/* ==section footer== */}
      <section className="footer">
        <p>123 Fifth Avenue, NY 10160, New York, USA | Phone:-<span>800-123-456</span> | Email:- <span> Contect@example.com</span></p>
        <p>Copyright  @ 2023 Outdoor  Adventure</p>
      </section>
    </>
  );
}

export default App;
