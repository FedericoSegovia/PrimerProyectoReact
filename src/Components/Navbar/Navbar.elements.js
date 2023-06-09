import styled from "styled-components";

export const NavbarContainer = styled.div`
width: 100%;
height: 80px;
position: sticky;
top:0;
z-index:99;
background-color: #49426C;
`;
export const NavbarWrapper= styled.div`
margin:auto;
width: 100%;
max-width: 1300px;
height:100%;
align-items:center;
display:flex;
flex-wrap:wrap;
justify-content: space-between;
`;

export const IconLogo= styled.div`
display: flex;
flex-wrap:wrap;
justify-content:flex-start;
align-items:center;
font-family:"Tilt Warp";
font-size: 1.2rem;
color: #ebc08b;
`;

export const Menu = styled.ul`
height:100%;
display:flex;
justify-content:center;
align-items: center;
`;

export const MenuItem = styled.li`
height:100%;
padding: 0.5rem 1.5rem;
display:flex;
justify-content:center;
align-items:center;
font-size:1.2rem;
font-family: "Tilt Warp";
font-weight:400;

&:hover{
background-color: #343257;
border-bottom: 0.3rem solid #ebc08b;
transition: 0.4s ease-in;
}
`;

export const MenuItemLink = styled.a`
text-decoration:none;
color: #ebc08b;
`;




