import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Text from "../../atoms/Text";
import Icondown from "../../atoms/Icon/Filter/Down";
import ItemWrapper from "../Filter/FilterItem";
function EditUserFilter(props) {
  const iconStyle = {
    width: "0.6rem",
    height: "0.4rem",
    margin: "0 0 0 0.3rem",
  };
  const [clicked, setClicked] = useState(false);
  const [item, setItem] = useState("");
  const icon = <Icondown style={iconStyle} fill="#232735"></Icondown>;
  const setSelected = (item) => {
    if (item) {
      props.onClick(item.title);
    } else {
      props.onClick("");
    }
    setItem(item);
  };

  const openMenu = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    if (!item && props.value) {
      setSelected({ title: props.value });
    }
  }, [props.value]);

  return (
    <FilterWrapper onClick={() => openMenu()}>
      <Text line={props.line} level={1} color="#232735">
        {item ? item.title : props.title}
      </Text>
      {icon}
      {clicked && (
        <DropdownMenuWrapper
          top={props.type === "area" ? "1.6rem" : "1.4rem"}
          left="0rem"
          zIndex={props.zIndex}
        >
          {props.data.map((value, index) => (
            <ItemWrapper
              key={index}
              item={value}
              setSelected={setSelected}
              width="19.2rem"
              height="1.2rem"
            ></ItemWrapper>
          ))}
        </DropdownMenuWrapper>
      )}
    </FilterWrapper>
  );
}

export default EditUserFilter;

const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const DropdownMenuWrapper = styled.div`
  ${(props) => css`
    width: 19.2rem;
    height: fit-content;
    border: none;
    border-radius: 0.4rem;
    background-color: #ffffff;
    flex-direction: column;
    justify-content: center;
    display: flex;
    align-items: left;
    flex: none;
    position: absolute;
    top: ${props.top};
    left: ${props.left};
    box-shadow: 0rem 0.2rem 0.5rem rgba(0, 0, 0, 0.1),
      0.7rem 0 0.5rem rgba(0, 0, 0, 0.1);
    z-index: ${props.zIndex};
  `}
`;
const FilterWrapper = styled.div`
  width: 20rem;
  height: 1.2rem;
  font-family: inherit;
  border: none;
  background-color: #f0f1f3;
  border-radius: 0.32rem;
  padding: 0 0.6rem 0 0.8rem;
  margin-right: 2.3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  box-sizing: border-box;
`;
