import Marquee from "react-fast-marquee";
export default function TechStack(props){
    /* 
    <a href="#" className="techstack">item1</a>
                <a href="#" className="techstack">item2</a>
                <a href="#" className="techstack">item3</a>
            */
    const {lst}=props;
    let renderlst=[]
    console.log(lst)
    lst.map((item)=>{
        renderlst.push(<a href="#" className="techstack">{item}</a>)
    })
    //bg-sky-200
    return(
            
            <Marquee className="max-w-96   bg-opacity-90 rounded-md mb-3 " pauseOnHover>
             {renderlst}
            </Marquee>
            
       
    )
}