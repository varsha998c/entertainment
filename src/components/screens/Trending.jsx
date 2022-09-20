import axios from "axios";
import React, { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";
import SingleContent from "../includes/SingleContent/SingleContent";
import CustomPagination from "../pagination/CustomPagination";
import ReactPaginate from "react-paginate";

function Trending() {
    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 4;
    const pagesVisited = pageNumber * usersPerPage;
    const fetchTrending = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=e43eba67f2cc72984903d2f506d0bbb9&{page}=${page}`
        );
        console.log(data);
        setContent(data.results);
    };
    useEffect(() => {
        fetchTrending();
    }, [page]);
    const displayUsers = content
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .map((item) => (
            <SingleContent
                key={item.id}
                id={item.id}
                poster={item.poster_path}
                title={item.title || item.name}
                date={item.first_air_date || item.release_date}
                media_type={item.media_type}
                vote_average={item.vote_average}
            />
        ));
    const pageCount = Math.ceil(content.length / usersPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <>
            <div>
                <Heading>Trending</Heading>
                <Container className="trending">{displayUsers}</Container>
                <ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationButtons"}
                    previousLinkClassName={"previousButton"}
                    nextLinkClassName={"nextButton"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />
            </div>
            {/* <CustomPagination setPage={setPage} /> */}
        </>
    );
}

export default Trending;
const Heading = styled.h3`
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    padding: 4px;
    border-radius: 50%;
    color: #fff;
`;
const Container = styled.div`
    width: 94%;
    margin: 20px auto;
    display: flex;
    height: 80vh;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`;
