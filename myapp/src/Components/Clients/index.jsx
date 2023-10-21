
import "./index.css";
// import client1 from "./ClientLogo1";
// import client2 from "./ClientLogo2";
import { motion } from 'framer-motion';
const Clients = () => {
    const transition = { type: 'spring', duration: 3}
    return (
      <div className="wh-wrapper" style={{backgroundColor: '#8E3CCB'}}>
        <div className="client-section wrapper">
        <motion.div
        initial={{x: "-100%"}}
        whileInView={{x: "0"}}
        transition={transition}
        className="client-title">
          Clients
          <div className="client-underline">
            <hr className="client-line" />
            <div className="client-circle"></div>
          </div>
        </motion.div>


        <div className="logos-container">
<div className="logos-slide1">
    <img className="logo-cls" src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/Asset%201.svg" alt="1" />
    <img className="logo-cls" src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/Asset%202.svg" alt="2" />
    <img className="logo-cls" src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/C-Logo1.png" alt="3" />
    <img className="logo-cls" src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/C-Logo10.png" alt="4" />
    <img className="logo-cls" src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/C-Logo11.png" alt="5" />
    <img className="logo-cls" src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/C-Logo12.png" alt="6" />
    <img className="logo-cls" src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/C-Logo13.png" alt="7" />
    <img className="logo-cls" src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/C-Logo14.png" alt="8" />
    <img className="logo-cls" src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/C-Logo15.png" alt="9" />
    <img className="logo-cls" src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/C-Logo16.png" alt="10" />

    <img className="logo-cls" src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/C-Logo17.png" alt="10" />
    <img className="logo-cls" src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/C-Logo18.png" alt="9" />
    <img className="logo-cls" src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/C-Logo19.png" alt="8" />
    <img className="logo-cls" src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/C-Logo2.png" alt="7" />
    <img className="logo-cls" src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/C-Logo3.png" alt="6" />
    <img className="logo-cls" src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/C-Logo4.png" alt="5" />
    <img className="logo-cls" src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/C-Logo5.png" alt="4" />
    <img className="logo-cls" src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/C-Logo6.png" alt="3" />
    <img className="logo-cls" src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/C-Logo7.png" alt="2" />
    <img className="logo-cls" src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/C-Logo8.png" alt="1" />

</div>

        </div>
        <div className="logos-container">
<div className="logos-slide2">
    <img className="logo-cls" src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/C-Logo17.png" alt="10" />
    <img className="logo-cls" src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/C-Logo18.png" alt="9" />
    <img className="logo-cls" src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/C-Logo19.png" alt="8" />
    <img className="logo-cls" src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/C-Logo2.png" alt="7" />
    <img className="logo-cls" src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/C-Logo3.png" alt="6" />
    <img className="logo-cls" src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/C-Logo4.png" alt="5" />
    <img className="logo-cls" src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/C-Logo5.png" alt="4" />
    <img className="logo-cls" src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/C-Logo6.png" alt="3" />
    <img className="logo-cls" src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/C-Logo7.png" alt="2" />
    <img className="logo-cls" src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/C-Logo8.png" alt="1" />

    <img className="logo-cls" src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/Asset%201.svg" alt="1" />
    <img className="logo-cls" src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/Asset%202.svg" alt="2" />
    <img className="logo-cls" src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/C-Logo1.png" alt="3" />
    <img className="logo-cls" src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/C-Logo10.png" alt="4" />
    <img className="logo-cls" src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/C-Logo11.png" alt="5" />
    <img className="logo-cls" src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/C-Logo12.png" alt="6" />
    <img className="logo-cls" src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/C-Logo13.png" alt="7" />
    <img className="logo-cls" src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/C-Logo14.png" alt="8" />
    <img className="logo-cls" src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/C-Logo15.png" alt="9" />
    <img className="logo-cls" src="https://raw.githubusercontent.com/Ramaswamy123/patco-production-project/ad5a2a426b88dffb770ceba384a65580577fc1a1/src/assests/C-Logo16.png" alt="10" />
</div>

        </div>
      </div>
      </div>
    );
  
}

export default Clients;