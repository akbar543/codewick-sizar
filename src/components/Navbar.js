import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

function Navbar(){
  return (
    <Container>
      <nav>
        {/* <div className="container"> */}

        {/* <Link to='/home'><img src={logo} alt="logo" /></Link> */}
        <div className='logo'>
            <img src={logo} alt="logo" />
            <Link className='title' to='/home'>SIZAR</Link>
        </div>

        <ul>
            <li><Link className='li' to='/home'>Home</Link></li>
            <li><Link className='li' to='/home'>Benefits</Link></li>
            <li><Link className='li' to='/home'>Scope of work</Link></li>
            <li><Link className='li' to='/home'>Pricing</Link></li>
            <li><Link className='li' to='/home'>FAQs</Link></li>
        </ul>

        <Link  to='/home'><div className='btn'>
            <span className='btn-text'>Connect</span>
        </div>
        </Link>

        {/* </div> */}
      </nav>
    </Container>
  )
}

export default Navbar

const Container = styled.div`
    background-color: whitesmoke;
*{
    padding: 0;
    margin: 0;
    text-decoration: none;
}
nav{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 65px 0px 0px 0px;
}
.logo{
    display: flex;
    align-items: center;
    padding: 0px 190px 0 78px;
}
img{
    width: 45.255px;
    height: 53.364px;
}

.title{
    color: #000;
    font-family: Poppins;
    font-size: 48px;
    font-weight: 600;
    padding: 0 0 0 21.75px;
}
ul{
    display: flex;
    list-style: none;
    align-items: center;
    /* justify-content: center; */
}
.li{
    color: #000;
    font-size: 20px;
    /* font-style: normal; */
    font-weight: 600;
    /* line-height: normal; */
    margin: 0 94px 0 0;
}
.btn{
    width: 147px;
    height: 50px;
    border-radius: 30px;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 67px 0 163px;
}
.btn-text{
    color: #FFF;
    /* font-family: Poppins; */
    font-size: 20px;
    font-weight: 600;
    margin: 10px 30px;
}

`