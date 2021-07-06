import React from "react";
import "./assets/sass/main.scss";
import hero from "./assets/img/hero1.png";
import workspace from "./assets/img/workspace.png";
import background1 from "./assets/img/chizma2.svg";
import background3 from "./assets/img/Bloobs1.png";
import hero4 from "./assets/img/Illustration.png";
import bg from "./assets/img/Bloobs.png";
import avatar from "./assets/img/avatar.png";

import Section1 from "./pages/Section1";
import Section2 from "./pages/Section2";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="main">
      <Section1
        right={true}
        img={hero}
        bg={background1}
        count={1}
        first={true}
        title="We Deliver The Best Product for You"
        titr="Creative Agency"
        description="  Design is the creation of a plan or convention for the
              construction of an object or a system as in architectural
              blueprints, engineering drawings, business processes,"
      />
      <Section2 />
      <Section1
        right={false}
        img={workspace}
        bg={background3}
        count={3}
        title="We Loves To Design
Your Creative Ideas"
        titr="Design Things"
        description="A creative concept is an overarching “Big Idea” that captures audience interest, influences their emotional response and inspires them to take action.It is a unifying theme that can be used across all campaign messages"
      />
      <Section1
        right={true}
        img={hero4}
        bg={bg}
        count={4}
        title="We Believe Success 
Lies On Teamwork"
        titr="Our Teamwork "
        description="Good teamwork means a synergistic way of working with each person committed and working towards a shared goal. ... It is therefore a necessity that leaders facilitate and build the teamwork skills of their people if they are"
      />
      <Section1
        right={false}
        img={avatar}
        count={5}
        title="Thats What Our 
Client Says About Us"
        titr="Testimonial"
        ts={true}
        description="“ Heartiest congratulations to the team for Future projects. I extend thankful wishes and wish the team best of luck for the future assignments to come. Your effort is gladly ”"
      />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
