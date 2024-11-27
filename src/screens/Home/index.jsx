import * as React from "react";
import Container from "../../components/Container";
import Axios from "axios";
import { Outlet, useNavigate, Navigate } from "react-router-dom";
import Loading from "../../components/Loading";
import { useDummyRequest } from "../../utils/request";
import { Link, useLocation } from "react-router-dom";
import { FC } from "react";
import "./styles.scss";
import NavbarBaseV1 from "./Navbar";
import CardAccount from "./CardAccount";

const Navbar = (setAuthenticated) => {
  return (
    <>
      <Container topNav={false} background={true}>
        <div className="home-page w-100 d-flex flex-column align-items-center">
          <CardAccount setAuthenticated={setAuthenticated} />
          <NavbarBaseV1 />
          <Outlet />
        </div>
      </Container>
    </>
  );
};

export default Navbar;
