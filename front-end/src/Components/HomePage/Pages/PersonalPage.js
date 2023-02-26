//Dependencies
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

//CSS
import "./PersonalPage.css";

const PersonalPage = () => {
  const navigate = useNavigate()
  const {staffMember} = useParams();

  const [ourTeam, setOurTeam] = useState({
    samantha:"Samantha Figueroa",
    tom:"Tom LaTulipe",
    kalilah:"Kalilah Clarke",
    adnan:"Adnan Abubakar Adams",
    sabrina:"Sabrina Escobar Flores",
    gigi:"Gigi Scarborough",
    tim:"Tim McKiernan",
    anber:"Amber Bennett",
});
const [email, setEmail] = useState({
    samantha: "samanthafigueroa@pursuit.org",
    tom: "tomlatulipe@pursuit.org",
    kalilah: "kalilahclarke@pursuit.org",
    adnan: "abubakaradnanadams@pursuit.org",
    sabrina: "sabrinaescobarflores@pursuit.org",
    gigi: "gigi@pursuit.org",
    tim: "tim@pursuit.org",
    amber: "amber.bennett@bettercloud.com",
})

  const [linkedIn, setLinkedIn] = useState({
    samantha: "https://www.linkedin.com/in/samantha-figueroa-fs/",
    tom: "https://www.linkedin.com/in/tom-latulipe-a6835120/",
    kalilah: "https://www.linkedin.com/in/kalilah-clarke-36876530/",
    adnan: "https://www.linkedin.com/in/adnan-abubakar-adams/",
    sabrina: "https://www.linkedin.com/in/sabrina-escobar-flores-9b57b011a/",
    gigi: "https://www.linkedin.com/in/gigimscarborough/",
    tim: "https://www.linkedin.com/in/tim-mckiernan/",
    amber: "https://www.linkedin.com/in/positivelyamber/",
  });

  const [gitHub, setGitHub] = useState({
    samantha: "https://github.com/samfigueroa92",
    tom: "https://github.com/Tetracell",
    kalilah: "https://github.com/KalilahClarke",
    adnan: "https://github.com/AdnanAbubakarAdams",
    sabrina: "https://github.com/Sabrinaescobar",
    gigi: "https://github.com/gigimscarborough",
    tim: "https://github.com/mckiernantim",
    amber: "https://github.com/PositivelyAmber",
  });
  const [personalWebsite, setPersonalWebsite] = useState({
    samantha: "",
    tom: "",
    kalilah: "",
    adnan: "",
    sabrina: "",
    gigi:"https://gigiscarborough.com/",
    tim:"https://mckiernantim.github.io/",
    amber: "",
  });
  const [personalImage, setPersonalImage] = useState({
    samantha: 'https://media-exp1.licdn.com/dms/image/C4E03AQECVVt3NEUc1w/profile-displayphoto-shrink_800_800/0/1640218996877?e=1675296000&v=beta&t=qOh5-OgIT3EZnw_kJaYrY2c-Ddvz7-0xc3nEKRBLuSE',
    tom:'https://media-exp1.licdn.com/dms/image/C4D03AQEUYyUqQXTZpQ/profile-displayphoto-shrink_400_400/0/1643244593566?e=1675296000&v=beta&t=ur66cryss1OIU3nw_bMOp5ERKJIC8_hdIQM7F983yfY',
    kalilah:'https://media-exp1.licdn.com/dms/image/C5603AQFIoVA0ltC1Fg/profile-displayphoto-shrink_400_400/0/1592177861401?e=1675296000&v=beta&t=TEdjqDhB8fGSMsbFlbTc1FN8ekSzc9W1j9svTORhncQ',
    adnan:'https://media-exp1.licdn.com/dms/image/C4E03AQFJEhy2edlYUA/profile-displayphoto-shrink_100_100/0/1642775834996?e=1675296000&v=beta&t=byFj6POCv_FA3C8R4cn_2YJWC9t-GZlrGwKcrHZxHSM',
    sabrina:'https://media-exp1.licdn.com/dms/image/C4D03AQEzyzcsTrOxIA/profile-displayphoto-shrink_400_400/0/1642653227709?e=1675296000&v=beta&t=NP8cFNa1PUlQQyA5o9rw7FShxRr9Xg4RICU9L8AVSmk',
    gigi:'https://media-exp1.licdn.com/dms/image/C5603AQGPbCBiLuyDNw/profile-displayphoto-shrink_100_100/0/1600368314591?e=1675296000&v=beta&t=YQqpGSjhzjLK-2KVZ7UiQofkxNritSFmpRXpyBVy_yc',
    tim:'https://media-exp1.licdn.com/dms/image/C4D03AQEWmXUHScBZkQ/profile-displayphoto-shrink_400_400/0/1581017635510?e=1675296000&v=beta&t=zz8K7_ZDPyoOiXg56wcIUflKCijsbzsNpQ55IOm67No',
    amber:'https://media-exp1.licdn.com/dms/image/C5603AQFVQE55R7tcAA/profile-displayphoto-shrink_400_400/0/1601486381610?e=1675296000&v=beta&t=E-aQajVlSTPpHVqZxu7AEh1S7Uma34D4ddMUGxmCBS8'
  })
  const [skills, setskills] = useState({
    samantha: ["javascript","react","html","css","postgres","heroku","github"],
    tom: ["javascript","react","html","css","postgres","heroku","github"],
    kalilah: ["javascript","react","html","css","postgres","heroku","github"],
    adnan: ["javascript","react","html","css","postgres","heroku","github"],
    sabrina: ["javascript","react","html","css","postgres","heroku","github"],
    gig:["javascript","react","html","css","postgres","heroku","github"],
    tim: ["javascript","react","html","css","postgres","heroku","github"],
    amber: ["javascript","react","html","css","postgres","heroku","github"]
  })

  const [skillImages, setSkillImages] = useState({
    javascript: "",
    react:"",
    html:"",
    css: "",
    postgress: "",
    heroku: "",
    github:"",
    java: "",
    ruby: "",
    spring:"",
    openAPI:"",
    python: "",
    sql:"",
    redux:"",
    agilemethodologies:""
  })

  return (
    <div className ='personal'>
      <div className="upper">

      <div className = "personal-page">
        <a href= {personalWebsite[staffMember.toLowerCase()]} >
          <img className = "image"src={personalImage[staffMember.toLowerCase()]} alt={`${staffMember}'s Website`}/>  
        </a>
        <h3 className="staff-name">{ourTeam[staffMember]}</h3>

        <div className = 'linked'>
        <a href={linkedIn[staffMember.toLowerCase()]}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png"alt={`${staffMember}'s LinkedIn`}/>
        </a>
        <a href={gitHub[staffMember.toLowerCase()]}>
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt={`${staffMember}'s Github`}/>
        </a>
        </div>
      </div>
      <div className="grid">
      <div className='team-skills'>
        <h2 className="skills">Skills</h2>
        <img src = ""/>
      </div>
      <div className="contact">
        <h2 className="contact-form">Contact Form</h2>
        <form className="bottom-center" action={`https://formsubmit.co/${email[staffMember]}`} method ="Post">
        <p>Interested in working with me or just want to say hello? Don't hesitate to send a message!</p>
        <input type="hidden" name= "subject" value ="GoldenSolutions Contact"/>
        <label>Your Name:<input className ='email'type='name' align="left" required/></label>
        <label>Your Email: <input className ='email'type='email' align="left" required/></label>
        <label>Your Message: <textarea name='message' rows="4" cols="50" required></textarea></label>
        <br></br>
        <button className="talktoyousoon" onClick = {()=>navigate("/our-team")}>Talk To You Soon ...</button>
        </form>
      </div>
      </div>
      </div>
    </div>
  );
};

export default PersonalPage;
