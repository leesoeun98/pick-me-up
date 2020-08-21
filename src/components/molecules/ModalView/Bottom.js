import styled from "styled-components";
import { useState } from "react";
import Text from "../../atoms/Text";
import Comment from "../../organisms/Comment/Comment";
import CommentWrite from "../../organisms/Comment/CommentWrite";

export default function ModalBottom(props) {
  const [loadMoreVisible, setLoadMoreVisible] = useState(false);

  return (
    <Bottom>
      <Div>
        <Text level={4} weight={500} color="#9c69e2">
          {props.commentsNum}
        </Text>
        &nbsp;
        <Text level={4} weight={500} color="#232735">
          {props.commentsNum === 0 ? "Comment" : "Comments"}
        </Text>
      </Div>
      {props.comments.map((item, index) => (
        <Comment
          comment={item.content}
          date={item.createdDate}
          userInfo={item.user}
          id={item.id}
          key={index}
        ></Comment>
      ))}
      {loadMoreVisible && (
        <ButtonWrapper>
          <MoreButton>
            <Text level={1} weight={500} color=" #8b90a0">
              더보기
            </Text>
          </MoreButton>
        </ButtonWrapper>
      )}
      <CommentWrite></CommentWrite>
    </Bottom>
  );
}

const Div = styled.div`
  height: 1.6rem;
  align-items: center;
  display: flex;
  flex-direction: row;
`;
const Bottom = styled.div`
  width: 100%;
  height: fit-content;
  background-color: #ffffff;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  padding: 1rem 1rem 1rem 1rem;
  border-top: 0.07rem solid #d3d4d8;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 1rem 0 0 0;
`;

const MoreButton = styled.button`
  background-color: transparent;
  border: none;
`;
