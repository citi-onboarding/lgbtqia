import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 110px;
  background-color: #FFF;
  box-shadow: 0 -6px 25px rgba(0, 0, 0, 0.24);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #222222;
  font-size: 20px;
  padding-left: 114.96px;
  position: fixed;
  z-index: 999;
`

export const Nav = styled.div`
  color: #222222;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  a:hover {
    color: #EF548C;
    font-weight: bold;
  }
  a {
    cursor: pointer;
    transition: all 0.25s ease 0s;
    color: #222222;
  }
`

export const NavLetters = styled.p`
  width: 153px;
  height: 18.73px;
  margin-right: 21.18px;
  text-align: center;
`

export const NavHistory = styled.p`
  width: 107px;
  height: 18.73px;
  margin-right: 55.12px;
  text-align: center;
`

export const NavPurpose = styled.p`
  width: 170.26px;
  height: 18.73px;
  margin-right: 55.12px;
  text-align: center;
`

export const NavProjects = styled.p`
  width: 186.11px;
  height: 18.73px;
  margin-right: 104.77px;
  text-align: center; 
`



