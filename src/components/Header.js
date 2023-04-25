import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
 
  NavItem,
 
} from "reactstrap";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Navbar className="bg-primary text-white">
        <div className="container">
          <NavbarBrand>
            <img src="assets/images/logo.png" height="30" width="41" />
          </NavbarBrand>

          <Nav>
            <NavItem>
              <NavLink
                to="/staffs"
                style={{ color: "white", textDecoration: "none" }}
              >
                <span className="fa fa-users fa-lg"></span> Nhan vien
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/department"
                style={{ color: "white", textDecoration: "none" }}
              >
                <span className="fa fa-users fa-lg"> </span> Phong Ban
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/salary"
                style={{ color: "white", textDecoration: "none" }}
              >
                <span className="fa fa-users fa-lg"> </span> Bang Luong
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
}
