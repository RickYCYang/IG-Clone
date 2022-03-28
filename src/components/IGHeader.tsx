import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";

const HeaderOuterContainer = styled.header`
  ${tw`
    sticky 
    top-0 
    bg-white 
    border-b-[1px] 
    border-gray-300
  `}
`;

const HeaderInnerContainer = styled.div`
  ${tw`
    flex
    justify-between
    items-center
    h-[60px]
    px-2
    box-border
    lg:max-w-[1024px]
    lg:mx-auto
    lg:px-0
  `}
`;

const Icon = styled.img`
  ${tw`
    w-[100px]
    cursor-pointer
  `}
`;

const NavContainer = styled.div`
  ${tw`
    flex 
    items-center
  `}
`;

const NavIcon = styled.span`
  ${tw`
    h-6 w-6 cursor-pointer
  `}
`;

const NavIconBack = styled(NavIcon)`
  ${tw`
    rounded-full 
    bg-gray-900 
    text-white 
    font-bold 
    flex 
    justify-center 
    items-center
  `}
`;

const HomeSVG: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  );
};

const PeopleSVG: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );
};

const IGHeader: React.FC = () => {
  const go = useNavigate();

  return (
    <>
      <HeaderOuterContainer>
        <HeaderInnerContainer>
          <Icon src="/images/logo.svg" onClick={() => go("/")} />
          <NavContainer>
            <NavIcon className="mr-4" onClick={() => go("/")}>
              <HomeSVG />
            </NavIcon>
            <NavIcon className="mr-4" onClick={() => go("/following")}>
              <PeopleSVG />
            </NavIcon>
            <NavIconBack onClick={() => go("/")}>B</NavIconBack>
          </NavContainer>
        </HeaderInnerContainer>
      </HeaderOuterContainer>
    </>
  );
};

export default IGHeader;
