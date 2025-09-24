import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Card from './components/Card';


function App() {

//function with elements to display 
//diplaying in array for loop
  const events = [
    //card 1
    {
      title: "First-Gen Panel Discussion",
      description: "Hear from students who were the first in their families to attend college",
      image: "/panel_first_gen.jpg"
    },
    //card 2 
    {
      title: "Mentorship Match Program",
      description: "Get paired with a mentor who's been through the process",
      image:"/mentorship_mentoring.jpg"
    },
    //card 3
    {
      title: "FAFSA/ISAFAA/CSS Help Night",
      description: "Get one-to-one help filling out your FAFSA form with financial aid experts",
      image: "/fafsa.jpg"
    },
    //card 4
    {
      title: "College Essay Bootcamp",
      description: "Work with mentors to craft a compeliing personal statement",
      image: "/essay bootcamp.jpg"
    },

    //card 5
    {
      title: "Community College Pathways",
      description: "Explore affordable options and transfer strategies",
      image: "/community_college.jpg"
    },
    //card 6
    {
      title: "Application Fee Waiver Guide",
      description: "Learn how to request fee waivers for college applications",
      image: "/fee_waiver.jpg"
    },
    //card 6
    {
      title: "Local College Fair and Virtual Tours",
      description: "Meet admission representatives from nearby colleges and universities",
      image: "/tours_college.jpg"
    },
    //card 7
    {
      title: "SAT/ACT Prep Resources", 
      description: "Free or low-cost prep materials and tutoring sessions",
      image: "/sat_actprep.jpg"
    },
    //card 8
    {
      title: "Financial Aid 101 Webinar", 
      description: "Understand grants, loans. work-study. and budgeting",
      image: "/financial_aid.jpg"
    },
    //card 9 
    {
      title: "Majors / Acamdemic Interest Pathways",
      description: "Meet alums with similar academic pursuits and learn how they intend to use their degree",
      image: "/major.jpg"
    },
    //card 10
    {
      title: "Parent Night Info",
      description: "Help families understand the college process and how to support their student",
      image: "/parents.jpg"
    }

  ];

  //return the individual cards
  return (
    //defining a grid for styling
     //loop through each card
     <>
     <div className="app-wrapper">
  
      <div className="heading">
        <h1 className="heading">FIRST GEN FORWARD: COLLEGE RESOURCES FOR TRAIlBLAZERS</h1>
      </div><div className='card-grid'>
        {events.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image} />
        ))}
      </div></div></>
  )

};

export default App
