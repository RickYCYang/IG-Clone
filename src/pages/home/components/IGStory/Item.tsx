import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const ItemContainer = styled.div`
  ${tw`
    text-center
  `}
`;

const Avatar = styled.div`
  ${tw`
    w-[56px]
    h-[56px]
    p-[3px]
    ring-2
    ring-red-500
    border-2
    border-white
    rounded-full
    mx-[11px]
    overflow-hidden
  `}
`;

const Name = styled.p`
  ${tw`
    text-xs
    mt-1
  `}
`;

interface ItemProps {
  name: string;
  avatar: string;
}

const Item: React.FC<ItemProps> = ({ name, avatar }) => {
  return (
    <ItemContainer>
      <Avatar
        style={{
          backgroundImage: `url(${avatar})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <Name>{name}</Name>
    </ItemContainer>
  );
};

export default Item;
