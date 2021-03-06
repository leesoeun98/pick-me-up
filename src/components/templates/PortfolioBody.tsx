import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Colors from "@colors";
import UserState from "@src/types/User";
import FilterSearch from "../organisms/FilterSearch";
import Filter from "../molecules/Filter/Filter";
import { ALIGN } from "../molecules/Filter/ItemData";
import PortfolioList from "./PortfolioList";
import WriteButton from "../molecules/Button/Write";
import TopButton from "../molecules/Button/Top";
import ModalWrite from "../organisms/ModalWrite";

type BodyProps = {
  isModalVisible: boolean;
  reload: number;
  setReload: React.Dispatch<React.SetStateAction<number>>;
};

function PortfolioBody(props: BodyProps) {
  const [category, setCategory] = useState("");
  const [recruitmentField, setRecruitmentField] = useState("");
  const [sort, setSort] = useState("최신순");
  const [query, setQuery] = useState("");
  const [isWriteVisible, setIsWriteVisible] = useState(false);
  const isSignedIn = useSelector(
    (state: { user: UserState }) => state.user.isSignedIn
  );
  const align = "최신순";

  return (
    <>
      <FilterSearch
        page="portfolio"
        setCategory={setCategory}
        setRecruitmentField={setRecruitmentField}
        setQuery={setQuery}
      ></FilterSearch>
      <Wrapper>
        <InnerWrapper>
          <AlignFilterWrapper>
            <Filter
              width="6rem"
              height="1.6rem"
              line="1.08rem"
              level={3}
              defaultText={align}
              data={ALIGN}
              onClick={setSort}
            ></Filter>
          </AlignFilterWrapper>
          <PortfolioList
            category={category}
            recruitmentField={recruitmentField}
            query={query}
            sort={sort}
            reload={props.reload}
          ></PortfolioList>
        </InnerWrapper>
        <TopButton></TopButton>
        {isSignedIn && !isWriteVisible && !props.isModalVisible && (
          <WriteButton onClick={() => setIsWriteVisible(true)}></WriteButton>
        )}
        {isWriteVisible && (
          <ModalWrite
            page="portfolio"
            isVisible={isWriteVisible}
            onClose={() => setIsWriteVisible(false)}
            reload={props.reload}
            setReload={props.setReload}
          ></ModalWrite>
        )}
      </Wrapper>
    </>
  );
}

export default React.memo(PortfolioBody);

const Wrapper = styled.div`
  background-color: ${Colors.LIGHT_PURPLE};
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-height: 30rem;
`;

const InnerWrapper = styled.div`
  margin: 0 4rem 0 4rem;
  max-width: 92%;
  width: 48rem;
  align-items: center;
  box-sizing: border-box;
`;

const AlignFilterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 1.2rem 0 1.2rem 1rem;
  box-sizing: border-box;
`;
