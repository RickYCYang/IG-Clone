import styled from "styled-components";
import tw from "twin.macro";
import IGUser from "components/IGUser";
import { useAppSelector } from "hooks";

const IGProfileContainer = styled.div`
  ${tw`
    mt-8 
    ml-8 
    shadow-lg 
    box-border 
    p-2
  `}
`;

const FollowingTitle = styled.p`
  ${tw`
    font-bold 
    text-gray-400 
    mt-4 
    mx-4 
    mb-3 
    text-sm
  `}
`;

const IGUserContainer = styled.div`
  ${tw`
    -mt-2
  `}
`;

const IGProfile: React.FC = () => {
  const friendReducer = useAppSelector((state) => state.friendReducer);
  const friends = friendReducer.friends.slice(0, 9);

  return (
    <IGProfileContainer>
      <IGUser
        account="rickyang2910"
        location="新北市板橋區"
        avatar="/images/avatar.png"
        size="medium"
      />
      <FollowingTitle>You are following</FollowingTitle>
      {friends.map((friend) => (
        <IGUserContainer key={friend.id}>
          <IGUser {...friend} showFollow />
        </IGUserContainer>
      ))}
    </IGProfileContainer>
  );
};

export default IGProfile;
