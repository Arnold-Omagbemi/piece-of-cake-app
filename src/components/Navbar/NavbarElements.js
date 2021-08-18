import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom';
import { FaBirthdayCake } from 'react-icons/fa';


export const Nav = styled.nav`
 background: transparent;
 height: 80px;
 display: flex;
 justify-content: center;
 font-weight: 700;
`;

export const NavLink = styled(Link)`
 color: #fff;
 font-size: 2rem;
 display: flex;
 align-items: center;
 text-decoration: none;
 cursor: pointer;

 @media screen and (max-width: 600px) {
    font-size: 1.5rem;
}

@media screen and (max-width: 400px) {
    font-size: 1.5rem;
    position: absolute;
    top: 10px;
    left: 25px;
}

`;

export const NavIcon = styled.div`
display: block;
position: absolute;
top: -3%;
right: 0;
cursor: pointer;
color: #fff;


p {
   transform: translate(-175%, 100%);
   font-weight: bold;
}

@media screen and (max-width: 600px) {
    top: -1%;
}

`;

export const Bars = styled(FaBirthdayCake)`
font-size: 2rem;
transform: translate(-50%, -15%);
`;
