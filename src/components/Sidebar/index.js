import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarRoute, SidebarBtnWrap } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Piece of Cake</SidebarLink>
                <SidebarLink to="/">Desserts</SidebarLink>
                <SidebarLink to="/">Full Menu</SidebarLink>
                <SidebarLink to="/">Sign in</SidebarLink>
            </SidebarMenu>
            <SidebarBtnWrap>
                <SidebarRoute to="/">Order Now</SidebarRoute>
            </SidebarBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
