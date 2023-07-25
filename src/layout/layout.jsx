import { Nav, Wrapper } from "./styled";
import { NavLink, Outlet } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <Wrapper>
      <Nav>
        <NavLink to="/">Каталог</NavLink>
      </Nav>
      <main>
        <Outlet />
      </main>
    </Wrapper>
  );
}
