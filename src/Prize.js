import React from 'react';
import { Link } from 'react-router-dom';

const Prize = ()=>{
    const achievements = [
        {
          title: "Brainathon",
          description:
            "Proposed and championed the winning idea that secured first place for our team in the Brainathon competition, conducted at the Vitapp tech fest. Our innovative approach and problem-solving skills set us apart.",
          image: './brainathon.png' 
        },
        {
          title: "SharkTank",
          description:
          "Secured victory by pitching an innovative idea with a working prototype in the SharkTank competition at the Vitapp tech fest. Our creative approach and dedication led to an inspiring journey.",
          image: './sharktank.png'
        },
        {
          title: "Start-Up Contest",
          description:
            "Assembled a dynamic team and pitched a visionary start-up idea that earned us a remarkable third-place finish in the Start-Up Contest. Our creativity and dedication were recognized, leading to an inspiring journey.",
          image: "./pitch.png"},
          {
              title: "Speed Code",
              description:
              "Secured an impressive second position in the highly competitive Speed Code contest, a 30-question challenge held over three intense hours by the NGC Club. My problem-solving skills and fast-paced coding prowess were put to the test and proved victorious.",
              image: './Speed code.jpg' 
            },
            {
                title: "MSME Women's Hackathon",
            description:
              "Participated in the MSME Women's Hackathon and advanced to the second round. Proposed an innovative idea with a well-structured budget plan, showcasing creativity and problem-solving skills.",
            image: "./MSME.png" 
          },
            {
                title: "RRR Code Tech",
                description:
                "Achieved a top-ten position in the RRR Code Tech competition conducted by the NGC Club at VIT-AP. This highly competitive event saw participation from over 200 teams, including external participants.",
                image: "none" 
            },
            {
              title: "Bug Rush",
              description:
                "Played a pivotal role in our team's impressive third-place finish in the Bug Rush competition. My keen eye for detail and expertise in identifying HTML, CSS, and JavaScript bugs helped resolve challenges in the NGC-organized event at VIT-AP.",
              image: "none" 
            }
        ];
    return(
        <>
        <Link to="/" ><h4 className='mt-5 ms-3'>RAMYA PANDITI/Achievements</h4></Link> 
        <div className='d-flex flex-wrap px-5 py-5 justify-content-center align-items-center '>

         {achievements.map((a,i)=>{
             
             return <>
            <div key={i} className='prize-box d-flex flex-column border border-light rounded my-3 mx-3 col-lg-5 p-4 col-sm-10 justify-content-center align-items-center gap-3'>
                <h3 >
            <i className='fa-solid fa-trophy mx-2'>
            </i>
                    {a.title}</h3>
                <img src={a.image} alt='No certificate at the moment'></img>
                <p>{a.description}</p>
            </div>

            </>
         })}
         </div> 
        </>
    )
}
export default Prize;
    
    
    
    
    
  