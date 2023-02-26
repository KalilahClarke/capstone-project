//DEPENDENCIES
import { useState } from "react";

//CSS
import "./OurTeam.css";

const OurTeam = () => {
  const [team, setTeam] = useState([
    "samantha",
    "tom",
    "kalilah",
    "adnan",
    "sabrina",
    "gigi",
    "tim",
    "amber",
  ]);
  const [learnMore, setLearnMore] = useState({
    sam: false,
    tom: false,
    kalilah: false,
    adnan: false,
    sabrina: false,
    gigi: false,
    tim: false,
    amber: false,
  });

  const STAFFBIOS = {
    sam: "I am a Nuyorican. While redesigning the website for my current employer I realized I had an interest in and enjoyed web development. After being referred to Pursuit by a friend, I decided it was time to bring my passion for helping others and interest in building useful and innovative websites into the world of tech.",
    tom: "I’m a lifelong technophile, having been lucky enough to get a computer and NES into my home at the age of 2.  I’m glad to have found Pursuit, as the structure and pacing were exactly what I was looking for and failing to find through traditional school and personal study.",
    kalilah:
      "In school my favorite subject was Mathematics because I loved problem solving, I viewed math as a puzzle. I began my career as a Full-Stack Developer because of an Alumni Fellow who recognized those same qualities in web-development. I currently work as an Educator and Supervisor training others to optimally support and communicate with Middle School students  and though I love it, Pursuit has broken the ceiling as I pursue self development.",
    adnan:
      "’m from West Africa,  Accra Ghana. I moved here to pursue a lifelong dream of being a developer and help solve world problems through creativity and problem solving. I currently work as a storage manager. I began my journey as a full stack web-development with pursuit which has been a great experience with the skills I have acquired, which I will use in helping solve world problems through tech.",
    sabrina:
      "I am  currently a professional services’ Provider at the Mexican Consulate in New York and also I am studying Web Development in pursuit where I learned JavaScript, HTML, React, CSS and  Postgres. My biggest dream is to become a Web Developer and work for a big company where I can put my skills to use and gain more experience in coding.",
    gigi: "Gigi,orem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed ipsum at urna tincidunt pharetra ut a turpis. Vivamus vulputate ligula in accumsan accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    tim: "Tim,orem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed ipsum at urna tincidunt pharetra ut a turpis. Vivamus vulputate ligula in accumsan accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    amber:
      "Amber,orem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed ipsum at urna tincidunt pharetra ut a turpis. Vivamus vulputate ligula in accumsan accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  };

  const STAFFIMGLINKS = {
  
    sam: "https://ca.slack-edge.com/TCVA3PF24-U02LP2TBD8D-66655ad951d8-512",
    tom:'https://media.licdn.com/dms/image/D4E35AQEo7vsjBAnTOA/profile-framedphoto-shrink_400_400/0/1672963908117?e=1676397600&v=beta&t=6w_YDxwoouSHX9B530mxfraDpRMDjC53PH_xTmhcvho',  
    kalilah:"https://media.licdn.com/dms/image/C5603AQFIoVA0ltC1Fg/profile-displayphoto-shrink_400_400/0/1592177861401?e=1681344000&v=beta&t=bTi7VatrBY12b7wt9MSZoF3Z2Bdrb1NOhRjxFuEl0cM",
    adnan:"https://ca.slack-edge.com/TCVA3PF24-U02LBBUQM39-804e6eb0aa9f-512",  
    sabrina:"https://ca.slack-edge.com/TCVA3PF24-U02M4L7LAV7-07a20f756bae-512",
    gigi:"https://ca.slack-edge.com/TCVA3PF24-U022L8PJX8B-edc76878813b-192", 
    tim: "https://ca.slack-edge.com/TCVA3PF24-U022H04SBPF-6e9b68170b60-512",
    amber: "https://ca.slack-edge.com/TCVA3PF24-U04CMRUKB6U-8ad816fd1907-512",
  }

  const handleLearnMore = (teamMate) => {
    return learnMore[teamMate] ? (
      <>
        <p className="bio">{STAFFBIOS[teamMate]}</p>
        <div
          onClick={() =>
            setLearnMore({ ...learnMore, [teamMate]: !learnMore[teamMate] })
          }
        >
          <button className="underline">View Less</button>
        </div>
      </>
    ) : (
      <div
        onClick={() =>
          setLearnMore({ ...learnMore, [teamMate]: !learnMore[teamMate] })
        }
      >
        <button className="underline">Learn More</button>
      </div>
    );
  };

  return (
    <div>
      <div className="teamwork">
        <div>{"Our Team"}</div>
        <div>{"Supporting Our Community"}</div>
        <div>{"One Volunteer at a Time"}</div>
      </div>
      <div className="quotes">
        <div>
          "{"As you grow older, you will discover that you have two hands —"}
        </div>
        <div>{"one for helping yourself, the other for helping others."}"</div>
        <div>{"— Audrey Hepburn"}</div>
      </div>
      <div className="our-team">
        <div className="team">
          <a href={`/our-page/${team[0]}`}>
            <img
              className="our-team-img"
              src={STAFFIMGLINKS.sam}
              alt="Samantha Figueroa"
            />
          </a>
          <p className="name"> Samantha Figueroa</p>
          <p className="position"> President of Engineering</p>
          {handleLearnMore("sam")}
        </div>
        <div className="team">
          <a href={`/our-page/${team[1]}`}>
            <img
              className="our-team-img"
              src={STAFFIMGLINKS.tom}
              alt="Tom LaTulipe"
            />
          </a>
          <p className="name">Tom LaTulipe</p>
          <p className="position"> VP of Engineering</p>
          {handleLearnMore("tom")}
        </div>
        <div className="team">
        <a href={`/our-page/${team[2]}`}>
          <img
            className="our-team-img"
            src={STAFFIMGLINKS.kalilah}
            alt="Kalilah Clarke"
          />
          </a>
          <p className="name">Kalilah Clarke</p>
          <p className="position">
            Director of Engineering-User Facing Technologies
          </p>
          {handleLearnMore("kalilah")}
        </div>
        <div className="team">
          <a href={`/our-page/${team[3]}`}>
          <img
            className="our-team-img"
            src={STAFFIMGLINKS.adnan}
            alt="Adnan Abubakar Adams"
            />
            </a>
          <p className="name">Adnan Abubakar Adams</p>
          <p className="position">Senior Principal Engineer</p>
          {handleLearnMore("adnan")}
        </div>
        {/* <div className="team">
        <a href={`/our-page/${team[4]}`}>
          <img
            className="our-team-img"
            src={STAFFIMGLINKS.sabrina}
            alt="Sabrina"
          />
          </a>
          <p className="name">Sabrina Escobar Flores</p>
          <p className="position">Mobile/Tablet Front-End Developer</p>
          {handleLearnMore("sabrina")}
        </div>
        <div className="team">
          <a href={`/our-page/${team[5]}`}>
            <img
              className="our-team-img"
              src={STAFFIMGLINKS.gigi}
              alt="Gigi Scarsborough"
            />
          </a>
          <p className="name">Gigi Scarborough</p>
          <p className="position">Chief Technology Officer</p>
          {handleLearnMore("gigi")}
        </div> */}
        {/* <div className="team">
          <a href={`/our-page/${team[6]}`}>
            <img
              className="our-team-img"
              src={STAFFIMGLINKS.tim}
              alt="Tim McKiernan"
            />
          </a>
          <p className="name">Tim McKiernan</p>
          <p className="position">Chief Innovation Officer</p>
          {handleLearnMore("tim")}
        </div> */}
        {/* <div className="team">
          <a href={`/our-page/${team[7]}`}>
            <img
              className="our-team-img"
              src={STAFFIMGLINKS.amber}
              alt="Amber Bennet"
            />
          </a>
          <p className="name">Amber Bennet</p>
          <p className="position">Technical Consultant</p>
          {handleLearnMore("amber")}
        </div> */}
      </div>
    </div>
  );
};

export default OurTeam;
