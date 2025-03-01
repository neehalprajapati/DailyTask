import { Link } from 'react-router-dom';
import './Navbar.css'
import { useState } from 'react';
// import { Icon } from "@chakra-ui/react"
// import { Switch } from "@/components/ui/switch"
// import { FaMoon, FaSun } from "react-icons/fa"

const Navbar = () => {

  const [menu, setMenu] = useState('Home')
  const [toggleMode, setToggleMode] = useState(true)


  return (
    <>
      <header className={`p-3 text-bg-dark ${toggleMode ? 'text-black' : 'text-white'}`}>
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0" >
              <li onClick={() => { setMenu('Home') }}><Link to='/' className={`nav-link px-4 ${menu === 'Home' ? 'text-secondary' : 'text-white'}  navcomponents`}>Home </Link></li>
              <li onClick={() => { setMenu('Alltask') }}><Link to='./Alltask' className={`nav-link px-4 ${menu === 'Alltask' ? 'text-secondary' : 'text-white'} navcomponents`}>All Tasks</Link></li>
              <li onClick={() => { setMenu('Completed') }}><Link to='./Completed' className={`nav-link px-4 ${menu === 'Completed' ? 'text-secondary' : 'text-white'} navcomponents`}>Completed Task</Link></li>
              <li onClick={() => { setMenu('Deleted') }}><Link to='./Deleted' className={`nav-link px-4 ${menu === 'Deleted' ? 'text-secondary' : 'text-white'} navcomponents`}>Deleted Task</Link></li>
            </ul>
            <div className="form-check form-switch toggleSwitch">
              {/* <Switch
                colorPalette="blue"
                size="lg"
                trackLabel={{
                  on: (
                    <Icon color="yellow.400">
                      <FaSun />
                    </Icon>
                  ),
                  off: (
                    <Icon color="gray.400">
                      <FaMoon />
                    </Icon>
                  ),
                }}
              /> */}
              <p>Dark Mode</p>
            </div>


            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
              <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
            </form>

            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">Login</button>
              <button type="button" className="btn btn-warning">Sign-up</button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}



export default Navbar;