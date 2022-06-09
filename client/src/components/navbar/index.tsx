import React from 'react';
import { LgbtLogoNav } from '../../assets';
import { Header, Nav, NavLetters, NavHistory, NavPurpose, NavProjects, } from './style';



export const Navbar: React.ElementType = () => {
  return (
    <>
      <Header>
        <img src={LgbtLogoNav} alt="LGBT Logo" />
        <Nav>
          <NavLetters><a href="#Sigla">A sigla</a></NavLetters>
          <NavHistory><a href="#História">História</a></NavHistory>
          <NavPurpose><a href="#Causa">Conheça a causa</a></NavPurpose>
          <NavProjects><a href="#Projetos">Conheça projetos</a></NavProjects>
        </Nav>
      </Header>
    </>
  )
}
