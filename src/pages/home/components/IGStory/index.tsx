import React from "react";
import { useGetIGStoriesQuery } from "services/homeServices";
import styled from "styled-components";
import tw from "twin.macro";
import Item from "./Item";
import Loading from "components/Loading";

const IGStoryContainer = styled.div`
  ${tw`
    w-full
    h-[100px]
    box-border
    flex
    items-center
    overflow-x-auto
    overflow-y-hidden
    shadow-md
    lg:my-8
  `}
`;

const LoadingContainer = styled.div`
  ${tw`
    flex
    justify-center
    w-full
  `}
`;

const IGStory: React.FC = () => {
  const { data, isLoading } = useGetIGStoriesQuery("all");

  return (
    <IGStoryContainer className="no-scrollbar">
      {isLoading && (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      )}
      {!isLoading &&
        data?.map((item) => (
          <Item key={item.id} name={item.name} avatar={item.avatar} />
        ))}
    </IGStoryContainer>
  );
};

export default IGStory;
