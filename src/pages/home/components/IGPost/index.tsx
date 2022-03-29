import IGUser from "components/IGUser";
import Comment from "./Comment";
import styled from "styled-components";
import tw from "twin.macro";

export interface IGPostProps {
  id: number;
  account: string;
  location: string;
  avatar: string;
  photo: string;
  likes: number;
  description: string;
  hashTags: string;
  createTime: string;
}

const IGPostContainer = styled.div`
  ${tw`
    shadow-md
    pb-4
    lg: mb-8
  `}
`;

const IGPost: React.FC<IGPostProps> = ({
  account,
  location,
  avatar,
  photo,
  likes,
  description,
  hashTags,
  createTime,
}) => {
  return (
    <IGPostContainer>
      <IGUser account={account} location={location} avatar={avatar} />
      <img src={photo} />
      <Comment
        account={account}
        likes={likes}
        description={description}
        hashTags={hashTags}
        createTime={createTime}
      />
    </IGPostContainer>
  );
};

export default IGPost;
