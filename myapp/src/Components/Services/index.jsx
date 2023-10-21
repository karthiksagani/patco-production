import { motion } from "framer-motion";
import "./index.css"

const Service = [
    {
        id: 1,
        title: "Explainer videos",
        content: "Unveil your brand's potential with our captivating explainer videos. Engaging visuals, seamless animations, and strategic storytelling that educates and inspires action. Elevate your brand with Patco Productions. Let's bring your story to life."
    },
    {
        id: 2,
        title: "Motion graphics",
        content: "Captivating motion graphics that bring your brand to life. Enhance your content with dynamic visuals, engaging animations, and seamless transitions. Elevate your message with our expert motion graphics services."
    },
    {
        id: 3,
        title: "3D/VFX",
        content: "Experience the power of 3D VFX. Mind-blowing visual effects, realistic simulations, and immersive virtual worlds. Take your visuals to new dimensions with cutting-edge 3D VFX."
    },
    {
        id: 4,
        title: "Live shoot",
        content: "Immersive live shoots that capture the essence of the moment. Expertly crafted visuals, dynamic camera work, and captivating storytelling. Experience the magic of live shoots with us."
    },
    {
        id: 5,
        title: "Video editing",
        content: "Precise video editing that brings your story to life. Enhance your footage, add captivating effects, and deliver a polished final product. Elevate your videos with our expert editing services. "
    },
    {
        id: 6,
        title: "Content writing",
        content: "Compelling content that captivates and engages. From website copy to blog posts, we craft words that leave a lasting impression. Ignite your brand with our expert content writing."
    },
    {
        id: 7,
        title: " Social media CREatives",
        content: "Engaging social media content that sparks conversations and drives results. Stand out, connect with your audience, and make an impact with our strategic social media solutions."
    },
]
    

    const Services = () => {
      const transition = { type: "spring", duration: 3 };
      return (
        <div className="wh-wrapper" style={{backgroundColor: '#8e3ccb'}}>
          <div className="service-section wrapper" id="services">
          <motion.div
            initial={{ x: "-100%" }}
            whileInView={{ x: "0" }}
            transition={transition}
            className="service-title"
          >
            our services
            <div className="service-underline">
              <hr className="service-line" />
              <div className="service-circle"></div>
            </div>
          </motion.div>
          <div className="service-contents">
            {Service.map(({ title, content, id }) => {
              return (
                <div key={id} className="service-content">
                  <div className="content-title">{title}</div>
                  <hr className="service-content-line" />
                  <div className="content-para">{content}</div>
                </div>
              );
            })}
          </div>
          <div className="service-background">Services</div>
        </div>
        </div>
      );
    };
    
    export default Services;