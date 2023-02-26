//DEPENDENCIES
import { useNavigate } from "react-router-dom";

//COMPONENTS
import Testimonials from "./Testimonials";

//CSS
import "./Home.css";

//BOOTSTRAP
import Button from "react-bootstrap/Button";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="home">
        <div className="info">
          <div>
            <h1>How it works...</h1>
            <br/>
            <p>
            As you grow you become wiser and have many life experiences. Getting older is a normal part of life with it's up's and down's. You may also find that basic everday tasks become a little bit more difficult and you could use some help.
              <br />
              <img
            className="home__mobileimg"
            src="https://www.lifeopedia.com/wp-content/uploads/2016/05/iStock_000069165823_Large.jpg"
            alt="Computer Help"
          />
              <br />
            That's where we come in! Our goal at GoldenSolutions is to relieve some of the stress and anxiety of these situations by connecting seniors, who need an extra hand with everyday tasks, with local, friendly volunteers who are willing and able to lend their time and skills. 
              <br />
              <br />
            Immediate families and friends may not always be available to offer help. But New York has thousands of helpful individuals just a button click away ready to lend a hand. Together, we can continue to foster a sense of community! 
            <br/>
            <br/>
            All of our users are verified after a rigrous background check. With a few simple and straightforward steps, you will seamlessly be connected with someone who best meets your needs.
            </p>
          </div>
          <Button onClick={() => navigate("/sign-up")}>SIGN UP NOW</Button>
        </div>
        <div className="gallery">
          <img
            className="big-image"
            src="https://www.lifeopedia.com/wp-content/uploads/2016/05/iStock_000069165823_Large.jpg"
            alt="Computer Help"
          />
          <img
            className="image1"
            src="https://sdscf.org/wp-content/uploads/2019/03/shutterstock_288532283.jpg"
            alt="Groceries"
          />
          <img
            className="image2"
            src="https://www.communityplace.org/wp-content/uploads/2021/12/group-of-retired-seniors-painting.jpg"
            alt="Painting"
          />
          <img
            className="image3"
            src="https://aginginplace.org/wp-content/uploads/Group-of-people-planting-vegetable.jpg"
            alt="Planting"
          />
        </div>
        <div className="blurbs">
          <section className="support">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1189/1189206.png"
              alt="support-icon"
            />
            <h4>Support</h4>
            <p>Everyone needs a little help sometimes!</p>
          </section>
          <section className="community">
            <img
              src="https://icons.veryicon.com/png/o/business/classic-icon/community-12.png"
              alt="community-icon"
            />
            <h4>Community</h4>
            <p>Get to know new people or help old friends!</p>
          </section>
          <section className="safety">
            <img
              src="https://icons.veryicon.com/png/o/miscellaneous/3vjia-icon-line/safety-guarantee-3.png"
              alt="safety-icon"
            />
            <h4>Safety Guaranteed</h4>
            <p>All users are checked and verified!</p>
          </section>
        </div>
        <div className="bottom-banner">
          <h1>Get help from local volunteers!</h1>
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default Home;
