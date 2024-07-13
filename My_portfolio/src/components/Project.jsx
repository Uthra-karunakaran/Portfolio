import TechStack from "./TechStack"
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import ImageViewer from "./ImageViewer";

export default function Project(props) {
    const {prj_heading,prj_details,prj_techStack,prj_live_link,prj_code_link,prj_image}=props
    console.log(prj_techStack)
    return (
        <div className='prj_block  max-w-xs md:max-w-xl lg:max-w-4xl xl:max-w-6xl'>
        <div className="prj_text flex flex-col gap-6">
            <h1 className='lg:text-5xl text-zinc-900 font-bold mb-2'>{prj_heading}</h1>
            <p className='lg:text-2xl text-neutral-700 leading-relaxed font-normal'>{prj_details}</p>
            <TechStack lst={prj_techStack}/>
            <a href={prj_live_link} className="prjlink linkShadow">Visit Website <span className="ml-2"><FaExternalLinkAlt style={{ fontSize: '25px' }}/></span></a>
            <a href={prj_code_link} className="prjlink linkShadow">View Code <span className="ml-2"><FaCode style={{ fontSize: '25px' }}/></span></a>
        </div>
        <div className="prj_image m-2">
           <ImageViewer/>
        </div>
        </div>
    )
  }
  ///  **** important  <img src="./src/assets/gitimg.jpg" alt="image" />