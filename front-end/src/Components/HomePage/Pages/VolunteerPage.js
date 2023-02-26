//Dependencies
import { useNavigate } from "react-router-dom";

//CSS
import "./VolunteerPage.css";

//BOOTSTRAP
import Button from "react-bootstrap/Button";

const VolunteerPage = () => {
  const navigate = useNavigate()

  return (
    <div>
    <div className="volunteer-page">
      <div className ='volunteer-paragraph'>
      <h2 className='volunteers'>Volunteers</h2>
     
      <div>
        <h5><b>What does a volunteer do?</b></h5>
        <p>
           As a volunteer you will be able to accept open requests from seniors in your area from your dashboard. Requests will vary depending on what a senior needs help with. It could simply be a request to pick up some groceries or help putting up some shelves. Tasks that are  
        </p>
      </div>
      <div>
        <h5><b>How do I apply?</b></h5>
        <p>
         As an organization we take our clients and our volunteers safety seriously. To become a volunteer just click the signup button below. Once you have completed the sign-up form you will be notified via email for some additional information. Once a background check has been completed your account will be verified and you can begin accepting requests to help seniors near you.
        </p>
        <img className = "none" src ="https://static.vecteezy.com/system/resources/previews/006/795/116/original/volunteer-man-walking-in-park-with-elderly-disabled-or-handicapped-woman-in-wheelchair-help-and-support-to-senior-people-with-health-problems-banner-for-5th-december-cartoon-illustration-vector.jpg"/>
      </div>
      <div>
        <h5><b>What are the benefits?</b></h5>
        <p>
        Growing up we are told to expand our circle of friends and get to know people of all ages. As a volunteer you have access to older friends! Additionally, there's also nothing better than doing a good deed and seeing a smile on another persons face. If that's not enough we also have incentivized volunteering. Our volunteers receive monthly thank you gifts from us, GoldenSolutions. The more you help, the more gifts you'll get <i className="fa-regular fa-face-grin-wink"></i>! We appreciate all of your support as we support our senior clients one volunteer at a time. 
        </p>
      </div>
      <Button className='button' onClick={() => navigate("/sign-up")}>SIGN UP NOW</Button>
      </div>
      <img className ='volunteer-image'src="https://static.vecteezy.com/system/resources/previews/006/795/116/original/volunteer-man-walking-in-park-with-elderly-disabled-or-handicapped-woman-in-wheelchair-help-and-support-to-senior-people-with-health-problems-banner-for-5th-december-cartoon-illustration-vector.jpg" />
    </div>
    </div>
  );
};

export default VolunteerPage;
