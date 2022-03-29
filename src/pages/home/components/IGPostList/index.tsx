import IGPost from "../IGPost";
import { IGPostProps } from "../IGPost";
import { useGetIGPostsQuery } from "services/homeServices";
import Loading from "components/Loading";
import styled from "styled-components";
import tw from "twin.macro";

const LoadingContainer = styled.div`
  ${tw`
    flex
    justify-center
    w-full
    mt-20
  `}
`;

const IGPostList: React.FC = () => {
  const { data, isLoading } = useGetIGPostsQuery("all");
  return (
    <>
      {isLoading && (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      )}
      {!isLoading &&
        data?.map((post: IGPostProps) => <IGPost key={post.id} {...post} />)}
    </>
  );
};

export default IGPostList;
