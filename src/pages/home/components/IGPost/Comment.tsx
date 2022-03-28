import styled from "styled-components";
import tw from "twin.macro";

interface CommentProps {
  account: string;
  likes: number;
  description: string;
  hashTags: string;
  createTime: string;
}

const CommentContainer = styled.div`
  ${tw`
    px-4
  `}
`;

const IconContainer = styled.div`
  ${tw`
    flex 
    justify-between 
    box-border 
    my-4 
  `}
`;

const IconLeftInnerContainer = styled.div`
  ${tw`
    flex
  `}
`;

const IconWrapper = styled.span`
  ${tw`
    h-[28px] w-[28px]
  `}
`;

const IconLike: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  );
};

const IconComment: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    </svg>
  );
};

const IconShare: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
      />
    </svg>
  );
};

const IconTag: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
      />
    </svg>
  );
};

const Likes = styled.p`
  ${tw`
    text-sm 
    font-bold 
    mb-2
  `}
`;

const Description = styled.p`
  ${tw`
    text-sm
  `}
`;

const Account = styled.span`
  ${tw`
    text-sm 
    font-bold 
    inline-block 
    mr-1
  `}
`;

const HashTags = styled.p`
  ${tw`
    text-blue-900 
    text-sm
  `}
`;

const ViewComment = styled.p`
  ${tw`
    text-gray-400 
    text-xs 
    font-medium	
    mt-2
  `}
`;

const CreateTime = styled.p`
  ${tw`
    text-gray-400 
    text-[10px] 
    mt-1
  `}
`;

const Comment: React.FC<CommentProps> = ({
  account,
  likes,
  description,
  hashTags,
  createTime,
}) => {
  return (
    <CommentContainer>
      <IconContainer>
        <IconLeftInnerContainer>
          <IconWrapper className="mr-2">
            <IconLike />
          </IconWrapper>
          <IconWrapper className="mr-2">
            <IconComment />
          </IconWrapper>
          <IconWrapper>
            <IconShare />
          </IconWrapper>
        </IconLeftInnerContainer>
        <IconWrapper>
          <IconTag />
        </IconWrapper>
      </IconContainer>
      <Likes>{likes} likes</Likes>
      <Description>
        <Account>{account}</Account>
        {description}
      </Description>
      <HashTags>{hashTags}</HashTags>
      <ViewComment>View all 999 comments</ViewComment>
      <CreateTime>{createTime}</CreateTime>
    </CommentContainer>
  );
};

export default Comment;
