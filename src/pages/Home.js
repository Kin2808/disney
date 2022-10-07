import React, { useEffect } from "react";
import styled from "styled-components";
import db from "../firebase";

import Footer from "../components/Footer";
import ImgSlider from "../components/ImgSlider";
import Viewers from "../components/Viewers";
import Original from "../components/Movies/Original";
import Popular from "../components/Movies/Popular";
import Trending from "../components/Movies/Trending";
import New from "../components/Movies/New";
import Kids from "../components/Movies/Kids";
import Hollywood from "../components/Movies/Hollywood";

import { useDispatch } from "react-redux";
import { setDisneyMovies, setMovies } from "../Redux/Reducer/MovieReducer";

function Home() {
  const dispatch = useDispatch();

  let populars = [];
  let originals = [];
  let hollywoods = [];
  let newTos = [];
  let trendings = [];
  let kidsTvs = [];

  useEffect(() => {
    db.collection("Movies").onSnapshot((snapshot) => {
      let temp = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      dispatch(setMovies(temp));
    });
  }, []);

  useEffect(() => {
    db.collection("Movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "popular":
            populars = [...populars, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
          case "hollywood":
            hollywoods = [...hollywoods, { id: doc.id, ...doc.data() }];
            break;
          case "newTo":
            newTos = [...newTos, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trendings = [...trendings, { id: doc.id, ...doc.data() }];
            break;
          case "kidsTv":
            kidsTvs = [...kidsTvs, { id: doc.id, ...doc.data() }];
            break;
          default:
            break;
        }
      });
      dispatch(
        setDisneyMovies({
          popular: populars,
          hollywood: hollywoods,
          original: originals,
          newTo: newTos,
          trending: trendings,
          kidsTv: kidsTvs,
        })
      );
    });
  }, []);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Original />
      <Popular />
      <Trending />
      <New />
      <Kids />
      <Hollywood />
      <Footer />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow: hidden;

  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;
