import IGContainer from "components/IGContainer";
import IGHeader from "components/IGHeader";
import IGUser from "components/IGUser";
import styled from "styled-components";
import tw from "twin.macro";

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
  {
    id: 5,
    location: "Singapore",
    account: "alvin_999",
    showFollow: true,
    isFollowing: true,
    avatar: "/images/avatars/a5.png",
  },
  {
    id: 6,
    location: "Singapore",
    account: "grace_999",
    showFollow: true,
    isFollowing: true,
    avatar: "/images/avatars/a6.png",
  },
  {
    id: 7,
    location: "Singapore",
    account: "rance_999",
    showFollow: true,
    isFollowing: true,
    avatar: "/images/avatars/a7.png",
  },
  {
    id: 8,
    location: "Singapore",
    account: "louis_999",
    showFollow: true,
    isFollowing: true,
    avatar: "/images/avatars/a8.png",
  },
  {
    id: 9,
    location: "Singapore",
    account: "bruce_999",
    showFollow: true,
    isFollowing: true,
    avatar: "/images/avatars/a9.png",
  },
  {
    id: 10,
    location: "Singapore",
    account: "gogo_999",
    showFollow: true,
    isFollowing: true,
    avatar: "/images/avatars/a10.png",
  },
];

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
  `}
`;

const IGUserContainer = styled.div`
  ${tw`
    -mt-1
  `}
`;

const Following: React.FC = () => {
  return (
    <>
      <IGHeader />
      <IGContainer className="pb-20">
        <Title>Following</Title>
        <IGUserListContainer>
          {friends.map((friend) => (
            <IGUserContainer key={friend.id}>
              <IGUser {...friend} />
            </IGUserContainer>
          ))}
        </IGUserListContainer>
      </IGContainer>
    </>
  );
};

export default Following;
