import styled from "styled-components"
import { SearchBar } from "./SearchBar"
import { Link } from "react-router-dom"
import { setNone } from "../store/modules/characters/sagas"
import { useDispatch } from "react-redux"

const Nav = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
`
const NavSearch = () => {
  const dispatch = useDispatch()
  const logo = "/assets/logo/Group@3x.png"
  
  return (
    <Nav>
        <Link to='/' onClick={() => dispatch(setNone())}><img height={140} src={logo} alt="marvel logo" /></Link>
        < SearchBar ishome={false}/>
      </Nav>
  )
}
export default NavSearch;