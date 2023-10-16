import styled from "styled-components"
import { SearchBar } from "./SearchBar"
import { Link } from "react-router-dom"

const Nav = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
`

export default function NavSearch() {
  return (
    <Nav>
        <Link to='/'><img height={140} src="/src/assets/logo/Group@3x.png" alt="marvel logo" /></Link>
        < SearchBar />
      </Nav>
  )
}
