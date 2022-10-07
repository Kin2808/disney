import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  selectUserName,
  setSignIn,
  setSignOut,
} from "../Redux/Reducer/UserReducer";
import { useSelector, useDispatch } from "react-redux";
import { auth, provider } from "../firebase";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  //KEEP USER EXIST WHEN REFRESH PAGE
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setSignIn({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        // navigate("/home");
      }
    });
  }, []);

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      let user = result.user;
      dispatch(
        setSignIn({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
      navigate("/home");
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      navigate("/");
    });
  };

  return (
    <Nav>
      <Link to="/home">
        <Logo src="/images/logo.svg" alt="logo" />
      </Link>

      {!userName ? (
        <LoginContainer>
          <Login onClick={signIn}>Login</Login>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <div>
              <img src="/images/home-icon.svg" alt="home-icon" />
              <Link to="/home">
                <span>HOME</span>
              </Link>
            </div>
            <div>
              <img src="/images/search-icon.svg" alt="search-icon" />
              <Link to="/search">
                <span>SEARCH</span>
              </Link>
            </div>
            <div>
              <img src="/images/watchlist-icon.svg" alt="watchlist-icon" />
              <span>WATCHLIST</span>
            </div>
            <div>
              <img src="/images/original-icon.svg" alt="original-icon" />
              <span>ORIGINALS</span>
            </div>
            <div>
              <img src="/images/movie-icon.svg" alt="movie-icon" />
              <span>MOVIES</span>
            </div>
            <div>
              <img src="/images/series-icon.svg" alt="series-icon" />
              <span>SERIES</span>
            </div>
          </NavMenu>
          <UserImg
            onClick={signOut}
            src="https://whatsondisneyplus.com/wp-content/uploads/2021/06/luca-avatar-WODP.png"
          />
        </>
      )}
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;

  @media screen and (max-device-width: 480px) {
    justify-content: space-between;
  }
  @media screen and (min-device-width: 768px) and (max-device-width: 1200px) {
    justify-content: space-between;
  }
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin-left: 25px;

  div {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }

    &:hover {
      span:after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
  @media screen and (max-device-width: 480px) {
    display: none;
  }
  @media screen and (min-device-width: 768px) and (max-device-width: 1200px) {
    display: none;
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;

const Login = styled.div`
  border: 1px solid #f9f9f9;
  border-radius: 10px;
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  transition: all 250ms;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
