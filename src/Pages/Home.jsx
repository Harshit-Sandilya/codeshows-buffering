import "../Styles/Home.css";
import home from "../images/home.png";
import event from "../images/events.png";
import blogs from "../images/blogs.png";
import login from "../images/login.png";
import Vector from "../images/Vector.png";
import code from "../images/code.png";
import fb from "../images/fb.png";
import twitter from "../images/twitter.png";
import g from "../images/g.png";
import lin from "../images/in.png";
import v2 from "../images/v2.png";
import ellipse from "../images/Ellipse 1.png";
import Robo from "../images/robot.png";
import bore from "../images/bore.png";
import logo from "../images/logo .png";
export default function Home() {
  return (
    <>
      <div className="navbar">
        <div className="logo">CodeShows</div>
        <div className="menu">
          <div className="home">
            <img className="h" src={home} alt=""></img>
            <p>Home</p>
          </div>
          <div className="events">
            <img className="h" src={event} alt=""></img>
            <p>Event</p>
          </div>
          <div className="blogs">
            <img className="h" src={blogs} alt=""></img>
            <p>blogs</p>
          </div>
          <div className="login">
            <img className="h" src={login} alt=""></img>
            <p>login</p>
          </div>
        </div>
      </div>
      <img className="blob1" src={Vector}></img>
      <div className="big">
        <div className="first">
          <p>
            Hey Folks! This is an initiative by the students of the college to
            build a coding club that will serve the purpose of providing the
            environment for coders to flourish and shine. We will create a
            platform which allows students to gain assistance and mentorship to
            enhance their coding ability. Our aim is to propagate the enthusiasm
            for coding in the institute and especially amongst freshmen.
            Moreover, the best skilled coders will be there to guide you through
            the process. This endeavour is not just for creating a culture for
            competitive coding but we also will mentor you in technologies like
            Machine Learning , Web Development , Android App Development and
            many more. So come forward and be a part of CodeShows family.
          </p>
          <div className="icons">
            <img className="fb" src={fb} alt=""></img>
            <img className="twitter" src={twitter} alt=""></img>
            <img className="g" src={g} alt=""></img>
            <img className="in" src={lin} alt=""></img>
          </div>
        </div>
        <img className="codeimg" src={code} alt=""></img>
      </div>
      <img className="v2" src={v2} alt=""></img>
      <div className="team">
        <div className="members">
          <div className="title">Founders</div>
          <div className="members-card">
            <img className="ellipse" src={ellipse} alt=""></img>
            <p>Satyam</p>
          </div>
          <div className="indicator"></div>
        </div>
        <div className="members">
          <div className="title">2019-2020</div>
          <div className="members-card">
            <img className="ellipse" src={ellipse} alt=""></img>
            <p>Shivam</p>
          </div>
          <div className="indicator"></div>
        </div>
        <div className="members">
          <div className="title">2018-2019</div>
          <div className="members-card">
            <img className="ellipse" src={ellipse} alt=""></img>
            <p>Sundaram</p>
          </div>
          <div className="indicator"></div>
        </div>
      </div>
      <div className="project">
        <p className="project-title">PROJECTS</p>
        <div className="project-list">
          <div className="project-tile">
            <img src={Robo} className="project-img"></img>
            <div className="image-overlay">
              <div className="tb">Telegram Bot</div>
              <div className="content">
                et magnis dis parturient montes nascetur ridiculus mus mauris
                vitae ultricies leo integer malesuada nunc vel risus commodo
                viverra maecenas accumsan lacus vel facilisis volutpat
              </div>
            </div>
          </div>
          <div className="project-tile">
            <img src={bore} className="project-img"></img>
            <div className="image-overlay">
              <div className="days">100 Days of Code</div>
              <div className="content2">
                et magnis dis parturient montes nascetur ridiculus mus mauris
                vitae ultricies leo integer malesuada nunc vel risus commodo
                viverra maecenas accumsan lacus vel facilisis volutpat
              </div>
            </div>
          </div>
          <div className="explore">Explore More</div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-logo">
          <img src={logo} className="logo-img"></img>
          <div className="show">CodeShows </div>
          <div className="cp">All rights reserved</div>
        </div>
        <div className="footer-text">
          Address: et magnis dis parturient montes nascetur ridiculus mus mauris
          vitae ultricies leo integer malesuada nunc vel risus commodo viverra
          maecenas accumsan lacus vel facilisis volutpat
        </div>
        <div className="footer-icons">
          <div className="icons">
            <img className="fb" src={fb} alt=""></img>
            <img className="twitter" src={twitter} alt=""></img>
            <img className="g" src={g} alt=""></img>
            <img className="in" src={lin} alt=""></img>
          </div>
        </div>
      </div>
    </>
  );
}
