import logo from "../everest.jpg";

const EventCard = () => {
    return <div className="col">
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
  </div>   
   
  
}

export default EventCard