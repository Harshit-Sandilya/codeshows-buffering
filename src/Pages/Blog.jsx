import "../Styles/Blog.css";
import homes from "../images/home.png";
import events from "../images/events.png";
import blog from "../images/blogs.png";
import logins from "../images/login.png";
import gradientImage from "../images/Gradient.png";

export default function Blog() {
  return (
    <>
      <div className="navbars">
        <div className="logos">CodeShows</div>
        <div className="menus">
          <div className="homes">
            <img className="ho" src={homes} alt=""></img>
            <p>Home</p>
          </div>
          <div className="event">
            <img className="ho" src={events} alt=""></img>
            <p>Event</p>
          </div>
          <div className="blog">
            <img className="ho" src={blog} alt=""></img>
            <p>blogs</p>
          </div>
          <div className="logins">
            <img className="ho" src={logins} alt=""></img>
            <p>login</p>
          </div>
        </div>
      </div>
      <img className="gradient" src={gradientImage}></img>
      <div className="background-overlay"></div>
      <div className="hero">Curated for you by our team</div>
      <div className="jatin">
        <div className="box1"></div>
        <div className="box2"></div>
        <div className="box3"></div>
        <div className="box4"></div>
      </div>
    </>
  );
}
