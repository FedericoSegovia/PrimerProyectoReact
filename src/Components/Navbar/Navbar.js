import React from 'react'
import { IconLogo, Menu, MenuItem, MenuItemLink, NavbarContainer, NavbarWrapper } from './Navbar.elements';
import { Gi3DGlasses } from "react-icons/gi";
const Navbar = () => {
  return (
    <>
    <NavbarContainer>
        <NavbarWrapper>
          <IconLogo>
            <Gi3DGlasses size = {"2em"}/>
            FANTECH
          </IconLogo>
        <Menu>
         <MenuItem>
        <MenuItemLink>
            INICIO
          </MenuItemLink>
         </MenuItem>
         <MenuItem>
        <MenuItemLink>
            PRODUCTOS
          </MenuItemLink>
         </MenuItem>
         <MenuItem>
        <MenuItemLink>
            CONTACTO
          </MenuItemLink>
         </MenuItem>
        </Menu>   
        </NavbarWrapper>
    </NavbarContainer>
    
    </>
    
  );
};

export default Navbar;