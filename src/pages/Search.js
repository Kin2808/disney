import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectAllMovies } from "../Redux/Reducer/MovieReducer";
import { Link } from "react-router-dom";

function Search() {
  const movies = useSelector(selectAllMovies);
  const [filter, setFilter] = useState("");

  return (
    <Container>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />
      <Grid>
        {movies &&
          movies
            .filter((val) => {
              if (filter === "") {
                return val;
              } else if (
                val.Title.toLowerCase().includes(filter.toLowerCase())
              ) {
                return val;
              }
            })
            ?.map((item) => (
              <Wrap key={item.id}>
                <Link to={`/detail/${item.id}`}>
                  <img src={item.CardImg} alt={item.title} />
                </Link>
              </Wrap>
            ))}
      </Grid>
    </Container>
  );
}

export default Search;

const Container = styled.div`
  padding: 0 calc(3.5vw + 5px);

  input {
    display: flex;
    margin: 20px auto;
    height: 40px;
    border-radius: 10px;
    border: none;
    text-align: center;
    width: 21rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Wrap = styled.div`
  cursor: pointer;
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;

  box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px,
    rgb(0 0 0/73%) 0px 16px 10px -10px;
  transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;

    &:hover {
      transform: scale(1.02);
      box-shadow: rgb(0 0 0/80%) 0px 26px 30px -10px,
        rgb(0 0 0/73%) 0px 16px 10px -10px;
    }
  }
`;
