import React from 'react';
import Project from './Project';


export default function ProjectsList(){
  //prj_heading,prj_details,prj_techStack,prj_live_link,prj_code_link,prj_video_link
  let renderarr=[];
  let prjList=[
    {
      "prj_heading":"Title1",
      "prj_details":"Battleship game between the user and the computer using Test Driven Development. The user and the computer take turns to “fire” at the opponent’s grid. The first player to sink all of the opponent’s ships wins the game.",
      "prj_techStack":["react","javascript","tailwind"],
      "prj_live_link":"#",
      "prj_code_link":"#",
      "prj_image":"../assets/gitimg.jpg",
    }
  ];

  prjList.map((prj)=>{
    console.log(prj);
    renderarr.push(<Project {...prj}/>);
  })
  console.log(renderarr);
  return (
    <div className="Project_container flex min-h-[100dvh] flex-col flex-wrap content-center bg-background  md:px-6 lg:px-8 ">
     <p className='lg:text-4xl font-semibold m-4'>Projects</p> 
     {renderarr}
    </div>
  )
}