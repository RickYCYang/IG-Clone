import IGContainer from "components/IGContainer";
import IGHeader from "components/IGHeader";
import IGUser from "components/IGUser";
import styled from "styled-components";
import tw from "twin.macro";
import { useAppSelector } from "hooks";

const Title = styled.h3`
  ${tw`
      my-8 
      font-bold 
      text-2xl 
      px-4 
      box-border
  `}
`;

const IGUserListContainer = styled.div`
  ${tw`
    shadow-xl
    mt-8
    mx-2
    box-border
    p-8
  `}
`;

const IGUserContainer = styled.div`
  ${tw`
    m-0
  `}
`;

const Following: React.FC = () => {
  const friendReducer = useAppSelector((state) => state.friendReducer);
  const friends = friendReducer.friends;
  return (
    <>
      <IGHeader />
      <IGContainer className="pb-20">
        <Title>Following</Title>
        <IGUserListContainer>
          {friends.map((friend) => (
            <IGUserContainer key={friend.id}>
              <IGUser {...friend} showFollow />
            </IGUserContainer>
          ))}
        </IGUserListContainer>
      </IGContainer>
    </>
  );
};

export default Following;
