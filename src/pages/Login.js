import React from "react";
import Banner from "../components/Login/Banner";
import Adverstise from "../components/Login/Adverstise";
import Devices from "../components/Login/Devices";
import DownloadNow from "../components/Login/DownloadNow";
import GridTheme from "../components/Login/GridTheme";
import GroupWatch from "../components/Login/GroupWatch";
import MarvelStudio from "../components/Login/MarvelStudio";
import Stream from "../components/Login/Stream";
import Footer from "../components/Footer";

function Login() {
  return (
    <>
      <Banner />
      <DownloadNow />
      <GroupWatch />
      <GridTheme />
      <Stream />
      <MarvelStudio />
      <Adverstise />
      <Devices />
      <Footer />
    </>
  );
}

export default Login;
