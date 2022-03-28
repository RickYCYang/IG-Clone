import styled from "styled-components";
import tw from "twin.macro";
import IGUser from "components/IGUser";

const friends = [
  {
    id: 1,
    location: "Singapore",
    account: "max_999",
    showFollow: true,
    isFollowing: true,
    avatar: "/images/avatars/a1.png",
  },
  {
    id: 2,
    location: "Singapore",
    account: "fm_999",
    showFollow: true,
    isFollowing: true,
    avatar: "/images/avatars/a2.png",
  },
  {
    id: 3,
    location: "Singapore",
    account: "joanne_999",
    showFollow: true,
    isFollowing: true,
    avatar: "/images/avatars/a3.png",
  },
  {
    id: 4,
    location: "Singapore",
    account: "focus_999",
    showFollow: true,
    isFollowing: true,
    avatar: "/images/avatars/a4.png",
  },
];

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
          <IGUser {...friend} />
        </IGUserContainer>
      ))}
    </IGProfileContainer>
  );
};

export default IGProfile;
