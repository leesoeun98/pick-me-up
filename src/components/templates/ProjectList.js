import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import styled from "styled-components";
import ProjectBlock from "../organisms/ProjectBlock";
import NoResult from "../molecules/NoResult";
import MoreListButton from "../molecules/Button/MoreList";
import Skeleton from "../_skeletons/project/ProjectBlock";

function ProjectList(props) {
  const { category, field, region, projectType, query, sort, reload } = props;
  const [project, setProject] = useState([]);
  const [limit, setLimit] = useState(10);
  const { isLoading, dataNum } = getProjectList(
    category,
    field,
    region,
    projectType,
    query,
    sort,
    setProject,
    limit,
    reload
  );

  const renderBlocks = project.map((item, index) => (
    <ProjectBlock key={index} item={item}></ProjectBlock>
  ));

  const loadMoreHandler = useCallback(() => {
    setLimit(limit + 10);
  }, [limit]);

  if (isLoading) {
    return (
      <Wrapper>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </Wrapper>
    );
  }

  if (!isLoading && project.length === 0) {
    return (
      <Wrapper>
        <NoResult></NoResult>
      </Wrapper>
    );
  }

  return (
    <>
      <Wrapper>{!isLoading && project.length > 0 && renderBlocks}</Wrapper>
      <MoreWrapper>
        <MoreInnerWrapper>
          {project.length < dataNum && (
            <MoreListButton
              text="더 불러오기"
              onClick={loadMoreHandler}
            ></MoreListButton>
          )}
        </MoreInnerWrapper>
      </MoreWrapper>
    </>
  );
}

export default React.memo(ProjectList);

const getProjectList = (
  category,
  field,
  region,
  projectType,
  query,
  sort,
  setProject,
  limit,
  reload
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataNum, setDataNum] = useState(0);
  const sortColumn = {
    최신순: "createdDate",
    댓글순: "commentsNum",
    조회순: "viewNum",
  };

  let body = {
    page: 0,
    size: limit,
    sortColumn: sortColumn[sort],
    category: category,
    huntingField: field,
    region: region,
    projectCategory: projectType,
    keyword: query,
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await axios.post(
          `${process.env.API_HOST}/projects/list`,
          body
        );
        setProject(result.data.pagelist);
        setDataNum(result.data.nrOfElements);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [category, field, region, projectType, query, sort, limit, reload]);
  return { isLoading, dataNum };
};

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  margin: 0 0 2rem 0;
  porsition: relative;
`;

const MoreInnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  max-width: 92%;
  width: 48rem;
  height: 2rem;
  position: relative;
  justify-content: center;
  align-itmes: center;
`;
const MoreWrapper = styled.div`
  background-color: transparent;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2rem;
  box-sizing: border-box;
  display: flex;
  padding: 0 1.8rem 0 0;
`;
