import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';


function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars)
  return (
    <Container>
      <a href="google.com">
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        {cars && cars.map((car, index)=>(
          <p key={index} ><a href="google.com">{ car }</a></p>
        ))}
      </Menu>
 
      <RightMenu>
        <a href="google.com">Shop</a>
        <a href="google.com">Tesla Account</a>

      
          <CustomMenu  onClick = {()=>setBurgerStatus(true)}>

          </CustomMenu>

      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick = {()=>setBurgerStatus(false)}>

          </CustomClose>
        </CloseWrapper>
        {cars && cars.map((car, index)=>(
          <li key={index} ><a href="googe.com">{car} </a></li>
        ))}
        <li><a href="googe.com">Existing Inventory </a></li>
        <li><a href="googe.com">Used Inventory </a></li>
        <li><a href="googe.com">Trade-in </a></li>
        <li><a href="googe.com">Cybertruck </a></li>
        <li><a href="googe.com">Roadaster </a></li>
        <li><a href="googe.com">Existing Inventory </a></li>
        <li><a href="googe.com">Existing Inventory </a></li>
        <li><a href="googe.com">Existing Inventory </a></li>
      </BurgerNav>


    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  p{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;

  }
  @media (max-width: 768px){
    display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a{
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;

  }
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props=> props.show ? 'translateX(0)': 'translateX(100%)'};
  li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0,.2);

    a{
      font-weight: 600;
    }
  }
  
  transition: transform 0.2s ease-in-out;
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`