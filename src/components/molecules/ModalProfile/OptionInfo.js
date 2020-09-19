import Text from "../../atoms/Text";
import Birth from "../../atoms/Icon/Birth";
import Univ from "../../atoms/Icon/Univ";
import AreaIcon from "../../atoms/Icon/Area";
import Heart from "../../atoms/Icon/Heart";
import Edit from "../../atoms/Icon/Edit";
import styled, { css } from "styled-components";
import React, { useState } from "react";
import {
  University,
  Area,
  Interest,
} from "../../molecules/ModalProfile/Contents";
function OptionInfo(props) {
  const [editBirth, setEditBirth] = useState(false);
  const onChangeBirthHandler = (e) => {
    props.setBirth(e.target.value);
  };

  return (
    <Wrapper>
      <Title>
        <Text weight={600} level={3} color="#232735">
          추가 정보
        </Text>
      </Title>
      <Div>
        <DivTitle>
          <Birth
            style={{
              width: "0.88rem",
              height: "0.88rem",
              marginRight: "0.32rem",
            }}
            fill="#d3d4d8"
          ></Birth>
          <Text weight={600} level={3} color="#232735">
            생일
          </Text>
        </DivTitle>
        <Content>
          <ToggleSwitchWrapper>
            <Toggle
              toggled={props.birthSecurity}
              onClick={props.setBirthSecurity}
            >
              <ToggleBall toggled={props.birthSecurity}></ToggleBall>
              <RippleBg visible={props.birthSecurity}></RippleBg>
            </Toggle>
          </ToggleSwitchWrapper>
          {editBirth && (
            <Input
              placeholder="YYYY.MM.DD"
              type="date"
              value={props.birth}
              onChange={onChangeBirthHandler}
              width="21.5rem"
              marginRight="2.4rem"
            ></Input>
          )}
          {!editBirth && (
            <Row marginRight="2.4rem" paddingLeft="1rem">
              <Text level={3} color="#232735" align="left" width="20.5rem">
                {props.birth}
              </Text>
            </Row>
          )}
          <ButtonWrapper onClick={() => setEditBirth(!editBirth)}>
            <Edit
              style={{ width: "0.8rem", height: "0.8rem" }}
              fill="#232735"
            ></Edit>
          </ButtonWrapper>
        </Content>
      </Div>
      <Div>
        <DivTitle>
          <Univ
            style={{
              width: "0.88rem",
              height: "0.8rem",
              marginRight: "0.32rem",
            }}
            fill="#d3d4d8"
          ></Univ>
          <Text weight={600} level={3} color="#232735">
            학력
          </Text>
        </DivTitle>
        <University
          UniversitySecurity={props.UniversitySecurity}
          setUniversitySecurity={props.setUniversitySecurity}
          setUniversity={props.setUniversity}
          university={props.university}
          setMajor={props.setMajor}
          major={props.major}
        ></University>
      </Div>
      <Div>
        <DivTitle>
          <AreaIcon
            style={{
              width: "0.72rem",
              height: "0.8rem",
              marginRight: "0.32rem",
            }}
            fill="#d3d4d8"
          ></AreaIcon>
          <Text weight={600} level={3} color="#232735">
            활동지역
          </Text>
        </DivTitle>
        <Area
          areaSecurity={props.areaSecurity}
          setAreaSecurity={props.setAreaSecurity}
          setArea={props.setArea}
          area={props.area}
          zIndex={2000}
        ></Area>
      </Div>
      <Div>
        <DivTitle>
          <Heart
            style={{
              width: "0.92rem",
              height: "0.8rem",
              marginRight: "0.32rem",
            }}
            fill="#d3d4d8"
          ></Heart>
          <Text weight={600} level={3} color="#232735">
            관심분야
          </Text>
        </DivTitle>
        <Interest
          interestSecurity={props.interestSecurity}
          setInterestSecurity={props.setInterestSecurity}
          setInterest={props.setInterest}
          interest={props.interest}
          zIndex={1999}
        ></Interest>
      </Div>
    </Wrapper>
  );
}

export default OptionInfo;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 3.2rem;
`;

const Row = styled.div`
  ${(props) => css`
    width: fit-content;
    text-align: center;
    padding-bottom: 0.2rem;
    margin-right: ${props.marginRight};
    padding-left: ${props.paddingLeft};
  `}
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  width: 100%;
  height: fit-content;
  margin-bottom: 1rem;
  box-sizing: border-box;
`;

const DivTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  justify-content: left;
  width: 100%;
  height: 1.5rem;
  padding-left: 1rem;
`;

const Title = styled.div`
  justify-content: left;
  align-items: center;
  display: flex;
  width: 100%;
  height: 1.2rem;
  margin-top: 1rem;
  margin-bottom: 0.3rem;
  padding-bottom: 0.32rem;
`;
const Content = styled.div`
  justify-content: left;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 1.2rem;
  margin: 0.3rem 0;
  padding-left: 0.5rem;
  box-sizing: border-box;
`;
const Input = styled.input`
  ${(props) => css`
    background-color: #f0f1f3;
    border-radius: 0.32rem;
    border: none;
    box-sizing: border-box;
    width: ${props.width};
    outline: none;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 0.64rem;
    align-items: center;
    height: 1.2rem;
    maxlength: ${props.maxLength};
    padding-left: 1rem;
    margin-right: ${props.marginRight};
  `}
`;
const ButtonWrapper = styled.button`
  width: fit-content;
  height: fit-content;
  background-color: transparent;
  border: none;
  margin: unset;
  padding: unset;
  outline: none;
`;
const Toggle = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  transform: translate3d(0, 0, 0);
  background-color: #f0f1f3;
  height: 1.1rem;
  width: 2rem;
  border-radius: 2rem;
  padding: 0.08rem;
  border: none;
  margin-right: 0.84rem;
`;
const ToggleBall = styled.div`
  z-index: 2;
  border-radius: 50%;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s cubic-bezier(1, 0.19, 0.15, 0.7);
  transition-delay: 0.1s;
  will-change: transform;
  background-color: #ffffff;
  border: 1px solid #f0f1f3;
  height: 1rem;
  width: 1rem;
  transform: ${(props) =>
    props.toggled ? `translateX(0.9rem)` : "translateX(0rem)"};
  &:active {
    background-color: #f0f1f3;
  }
`;
const RippleBg = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: radial-gradient(circle, #c8acee 10%, transparent 10.01%);
  background-repeat: no-repeat;
  background-position: 50%;
  pointer-events: none;
  transition: transform 0.5s, opacity 0.3s ease;
  transform: ${(props) => (props.visible ? "scale(10, 10)" : "scale(0, 0)")};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  position: absolute;
  z-index: 1;
`;

const ToggleSwitchWrapper = styled.div`
  diplay: flex;
  flex-direction: column;
`;