import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import SingleContent from "../../includes/SingleContent/SingleContent";
import Genres from "../../includes/Genres";
import useGenre from "../../general/useGenre";

function Movies() {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 4;
    const pagesVisited = pageNumber * usersPerPage;
    const [selected, setSelected] = useState([]);
    const [genres, setGenres] = useState([]);
    const genreforURL = useGenre(selected);

    const fetchMovies = () => {
        const { data } = axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=e43eba67f2cc72984903d2f506d0bbb9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
        );
        console.log(data);
        setContent(data.results);
        setNumOfPages(data.total_pages);
    };
    useEffect(() => {
        fetchMovies();
    }, [page, genreforURL]);

    const displayUsers = content
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .map((item) => (
            <SingleContent
                key={item.id}
                id={item.id}
                poster={item.poster_path}
                title={item.title || item.name}
                date={item.first_air_date || item.release_date}
                media_type="movies"
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
                <Heading>Movies</Heading>
                <Genres
                    type="movie"
                    selected={selected}
                    setSelected={setSelected}
                    genres={genres}
                    setGenres={setGenres}
                    setPage={setPage}
                />
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
        </>
    );
}

export default Movies;
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
