
import "./index.css"

const Navbar = () => (
   
<nav className="bgContainer" >
    <div>
        <img className="logo" height="50px" width="70px" src="https://www.patcoproductions.com/static/media/main-logo.4a0c6870c1196606138f.png" alt="patco" />
    </div>  
    <div >
        <ul className="anchorElements" >
            <li className="item" > <a className="anchorEl" id="navitem1" href="#home" > HOME </a> </li>
            <li className="item" > <a className="anchorEl" id="navitem2" href="#aboutus" > ABOUT US </a> </li>
            <li className="item" > <a className="anchorEl" id="navitem3" href="#workprocess" > WORK PROCESS </a> </li>
            <li className="item" > <a className="anchorEl" id="navitem4" href="#ourwork" > OUR WORK </a> </li>
            <li className="item" > <a className="anchorEl" id="navitem5" href="#services" > SERVICES </a> </li>
            <li className="item" > <a className="anchorEl" id="navitem6" href="#contactus" > CONTACT US </a> </li>
        </ul>   
    </div>
</nav>
)  

export default Navbar;