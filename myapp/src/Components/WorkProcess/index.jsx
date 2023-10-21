import { motion } from "framer-motion";

import "./index.css"

const workingprocess = [
    {
        id: 1,
        heading:"Scripting and Story boarding:",
        para:"Crafting compelling scripts and detailed storyboards that breathe life into your vision. With our Transforming ideas into captivating stories through expert scripting and meticulous storyboarding. Every word and frame is carefully crafted to captivate and engage your audience. Trust us to bring your vision to life with precision and creativity. Elevate your project with our comprehensive scripting and storyboarding services.",
    },
    {
        id: 2,
        heading:"Pre-production and Shoot:",
        para:"We focus on key elements to ensure a seamless shoot or video production. Our experienced team conducts thorough location scouting to find captivating settings that align with your creative vision. With a team of skilled professionals and state-of-the-art equipment, we ensure a seamless and high-quality production experience. During production, we meticulously execute the plans and creative concepts developed during pre-production.",
    },
    {
        id: 3,
        heading:"Post production:",
        para:"In the post-production phase, we bring together all the elements to polish and enhance your video, ensuring a seamless and captivating final product. Our skilled team utilises advanced editing, color grading, animation, and sound integration techniques to elevate your footage. We strive for excellence, continuously refining and polishing your video until it reaches its full potential. Let us transform your raw footage into a polished masterpiece.",
    },
]

const WorkProcess = () => {
    const transition = { type: 'spring', duration: 3}
  const isIpad = window.innerWidth <= 1025 ? true : false;
  const isMob = window.innerWidth <= 768 ? true : false;

  return (
    <div id="workprocess" className="wh-wrapper" style={{backgroundColor: '#D93B5B'}} >
      <div className='workprocess-section wrapper' id="work-process" > 
<motion.div
initial={{x: -150}}
whileInView={{x: 0}}
transition={transition}
className="workprocess-title">Our creative video production process
    <div className="workprocess-underline">
        <hr className='workprocess-line' /><div className="workprocess-circle"></div>
    </div>
</motion.div>
<div className="workprocess-contents">
  {
    workingprocess.map(({heading, para, id})=>{
      return(
<div key={id} className="workprocess-content">
<motion.div
initial={{top: "20rem"}}
whileInView={{top: isMob? "-2rem" : isIpad? "-3rem" : "-3.5rem"}}
transition={{ type: "spring", stiffness: 100 }}
className="background-circle"></motion.div>

  <h1 className="workprocess-content-heading">
{heading} 
  </h1>
  <h4 className="workprocess-content-para">
    {para}
  </h4>
</div>
      )
    })
  }
</div>
<div className="workprocess-background">
            process
        </div>
</div>
    </div>
  )
}


export default WorkProcess;