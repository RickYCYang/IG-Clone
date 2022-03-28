import styled from "styled-components";
import tw from "twin.macro";

const IGContainer = styled.main`
  ${tw`
    max-w-[1024px]
    m-0
    m-auto
  `}
  @media only screen and (max-width: 1024px) {
    max-width: 100%;
  }
`;

export default IGContainer;
