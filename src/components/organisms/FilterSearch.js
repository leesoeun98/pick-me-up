import styled from "styled-components";
import Search from "../molecules/Input/Search";
import Filters from "../molecules/Filter/FilterGroup";
import Wrapper from "../atoms/FilterSearch";

function FilterSearch(props) {
  return (
    <Wrapper>
      <InnerWrapper>
        <Filters
          height="1.6rem"
          width="fit-content"
          line="1.08rem"
          level={3}
          type={props.type}
          setCategory={props.setCategory}
          setField={props.setField}
          setRegion={props.setRegion}
          setProjectType={props.setProjectType}
        ></Filters>
        <Search setQuery={props.setQuery}></Search>
      </InnerWrapper>
    </Wrapper>
  );
}

export default React.memo(FilterSearch);

const InnerWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 48rem;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;
