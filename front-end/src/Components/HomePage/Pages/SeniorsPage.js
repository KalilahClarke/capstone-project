//Dependencies
import { useNavigate } from "react-router-dom";

//CSS
import "./SeniorsPage.css";

//BOOTSTRAP
import Button from "react-bootstrap/Button";

const SeniorsPage = () => {
  const navigate = useNavigate();

  return (
    <div>
    <div className="senior-page">
      <div className='senior-paragraph'>
      <h2 className ='seniors'>Seniors</h2>
      <div>
        <h5><b>How does it work?</b></h5>
        <p>
          As a company we value all of our clients and volunteers safety and because of this we require a background check. Once verified both clients and volunteers have access to their personal dashboard. When you need support, the dashboard is available to request assistance using the request form. When accepted you will receive a notification of who will be assisting you. Once the service has been provided you can review and rate your volunteer and even create your own favorite's list.
        </p>
      </div>
      <img className='none'src="https://us.123rf.com/450wm/rumkavodki/rumkavodki2010/rumkavodki201000254/158148260-woman-helping-to-elderly-lady-with-shopping-cartoon-characters-of-volunteer-and-old-woman-at-decorat.jpg?ver=6" />
      <div>
        <h5><b>How do I apply?</b></h5>
        <p>
          All you have to do is click the signup button down below, sign up with your google email and complete the required information. Once you have completed the sign-up form you will be notified via email for some additional information. Once a background check has been completed your account will be verified and you can begin submitting requests and get help from one of our friendly volunteers.
        </p>
      </div>
      <div>
        <h5><b>What are the benefits?</b></h5>
        <p>
          As a client, you're able to meet new people within your neighborhood as well as receive additional support in your daily life. Whether it is help grocery shopping, electronic help, or even just someone to accompany you to the park. GoldenSolutions is here to help in your daily life and so are our volunteers.
        </p>
      </div>
      <Button className='button' onClick={() => navigate("/sign-up")}>SIGN UP NOW</Button>
      </div>
      <img className='senior-image'src="https://us.123rf.com/450wm/rumkavodki/rumkavodki2010/rumkavodki201000254/158148260-woman-helping-to-elderly-lady-with-shopping-cartoon-characters-of-volunteer-and-old-woman-at-decorat.jpg?ver=6" />
    </div>
    </div>
  );
};

export default SeniorsPage;
