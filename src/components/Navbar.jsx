import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
`;

const HeaderTop = styled.div`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  gap: 20px;
`;

const SearchBox = styled.div`
  & > input {
    width: 150px;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    padding: 4px 6px;
    text-align: center;
    transition: opacity 0.3s, padding 0.3s;
    &::placeholder {
      opacity: 1;
      transition: opacity 0.3s, padding 0.3s;
    }
    &:focus {
      outline: none;
      padding-left: 0px;
      &::placeholder {
        opacity: 0;
      }
    }
  }
`;

const Logo = styled.div`
  width: 300px;
  height: 50px;
  margin-bottom: 20px;
  & > a > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MenuArea = styled.div`
  & > ul {
    display: flex;
    gap: 20px;
  }
`;

const LoginAuth = styled.div`
  cursor: pointer;
  display: flex;
  gap: 10px;
`;

const menuList = [
  "여성",
  "남성",
  "추천",
  "브랜드",
  "발매",
  "랭킹",
  "세일",
  "무탠 슈퍼세일",
];

const Navbar = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();
  const onCheckEnter = (e) => {
    if (e.key === "Enter") navigate(`?q=${e.target.value}`);
  };

  return (
    <Wrapper>
      <HeaderTop>
        <SearchBox>
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="제품검색" onKeyUp={onCheckEnter} />
        </SearchBox>
        {authenticate ? (
          <LoginAuth onClick={() => setAuthenticate(false)}>
            <FontAwesomeIcon icon={faUser} />
            <span>로그인</span>
          </LoginAuth>
        ) : (
          <LoginAuth onClick={() => navigate("/login")}>
            <FontAwesomeIcon icon={faUser} />
            <span>로그인</span>
          </LoginAuth>
        )}
      </HeaderTop>
      <Logo>
        <Link to={"/"}>
          <img
            src="https://news.nateimg.co.kr/orgImg/mw/2020/08/22/2020082114368021238_2.jpg"
            alt="musinsa"
          />
        </Link>
      </Logo>
      <MenuArea>
        <ul>
          {menuList.map((menu, index) => (
            <li key={index}>
              <a href="#">{menu}</a>
            </li>
          ))}
        </ul>
      </MenuArea>
    </Wrapper>
  );
};

export default Navbar;
