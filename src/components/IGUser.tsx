import React, { memo } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { useAppDispatch } from "hooks";
import { follow, unFollow } from "slices/friendSlice";

type TSize = "medium" | "small";

interface IGUserProps {
  size?: TSize;
  showFollow?: boolean;
  isFollowing?: boolean;
  account?: string;
  location?: string;
  avatar?: string;
  id?: number;
}

const IGUserContainer = styled.div`
  ${tw`
    flex
    items-center
    box-border
    h-[70ox]
    px-4
    py-2
  `}
`;

const Avatar = styled.div<{ size?: TSize }>`
  ${tw`
    overflow-hidden
    rounded-full
  `}
  ${({ size }) =>
    size === "medium"
      ? css`
          ${tw`h-[40px] w-[40px]`}
        `
      : css`
          ${tw`h-[60px] w-[60px]`}
        `}
`;

const AccountLocationContainer = styled.div`
  ${tw`
    ml-4
  `}
`;

const Account = styled.p`
  ${tw`
    font-bold
    text-sm
  `}
`;

const Location = styled.p`
  ${tw`
    text-gray-400
    text-xs
  `}
`;

const OutlineButton = styled.p`
  ${tw`
    ml-auto
    text-xs
    font-bold
    cursor-pointer
  `}
`;

const FollowButton = styled(OutlineButton)`
  ${tw`
    text-blue-400
  `}
`;

const FollowingButton = styled(OutlineButton)`
  ${tw`
    text-gray-700
  `}
`;

const IGUser: React.FC<IGUserProps> = memo(
  ({
    size = "small",
    showFollow = false,
    isFollowing = false,
    account,
    location,
    avatar,
    id,
  }) => {
    const dispatch = useAppDispatch();

    const followClickHandler = () => {
      if (id === undefined) return;
      if (isFollowing) {
        dispatch(unFollow(id));
      } else {
        dispatch(follow(id));
      }
    };

    return (
      <IGUserContainer>
        <Avatar
          style={{
            backgroundImage: `url(${avatar})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <AccountLocationContainer>
          <Account>{account}</Account>
          <Location>{location}</Location>
        </AccountLocationContainer>
        {showFollow &&
          (isFollowing ? (
            <FollowingButton onClick={followClickHandler}>
              FOLLOWING
            </FollowingButton>
          ) : (
            <FollowButton onClick={followClickHandler}>FOLLOW</FollowButton>
          ))}
      </IGUserContainer>
    );
  }
);

export default IGUser;
