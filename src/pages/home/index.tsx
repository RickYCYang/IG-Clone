import IGContainer from "components/IGContainer";
import IGHeader from "components/IGHeader";
import styled from "styled-components";
import tw from "twin.macro";
import IGStory from "./components/IGStory";
import IGPostList from "./components/IGPostList";
import IGProfile from "./components/IGProfile";

const Container = styled.div`
  ${tw`
    flex
    justify-center
  `}
`;

const StoryContainer = styled.div`
  ${tw`
    w-full
    lg:w-[600px]
  `}
`;

const ProfileContainer = styled.div`
  ${tw`
    hidden
    lg:block
    lg:w-[424px]
  `}
`;

const Home: React.FC = () => {
  return (
    <>
      <IGHeader />
      <IGContainer>
        <Container>
          <StoryContainer>
            <IGStory />
            <IGPostList />
          </StoryContainer>
          <ProfileContainer>
            <IGProfile />
          </ProfileContainer>
        </Container>
      </IGContainer>
    </>
  );
};

export default Home;
