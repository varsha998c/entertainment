import React, { useEffect, useState } from "react";
import { TextField } from "@material-ui/core";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import { Tabs } from "@mui/material";
import { Tab } from "@mui/material";
import ReactPaginate from "react-paginate";
import axios from "axios";
import SingleContent from "../../includes/SingleContent/SingleContent";

function Search() {
    const [type, setType] = useState(0);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [content, setContent] = useState();
    const [nouOfPages, setNumOfPages] = useState();
    const usersPerPage = 4;
    const [pageNumber, setPageNumber] = useState(0);
    const fetchSearch = () => {
        const { data } = axios.get(`
        https://api.themoviedb.org/3/search/${
            type ? "tv" : "movie"
        }?api_key=e43eba67f2cc72984903d2f506d0bbb9&language=en-US&query=${search}&page=${page}&include_adult=false`);
        setContent(data.results);
        setNumOfPages(data.total_pages);
    };
    useEffect(() => {
        window.scroll(0, 0);
        fetchSearch();
    }, [type, page]);
    const pageCount = Math.ceil(content / usersPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <Containers>
            <div
                style={{ display: "flex", margin: "15px 0" }}
                className="searchContainer"
            >
                <TextField
                    id="filled-basic"
                    label="Search"
                    variant="filled"
                    textColor="primary"
                    onClick={(e) => setSearch(e.target.value)}
                />
                <Button
                    variant="contained"
                    style={{ marginLeft: 10 }}
                    onClick={fetchSearch}
                >
                    <SearchIcon />
                </Button>
            </div>
            <Tabs
                value={type}
                onChange={(event, newValue) => {
                    setType(newValue);
                    setPage(1);
                }}
                style={{ padding: 10, display: "flex" }}
                textColor="primary"
                indicatorColor="primary"
            >
                <Tab style={{ width: "50%" }} label="Search Movies" />
                <Tab style={{ width: "50%" }} label="Search Series" />
            </Tabs>
            <Div className="trending">
                {content &&
                    content.map((item) => (
                        <SingleContent
                            key={item.id}
                            id={item.id}
                            poster={item.poster_path}
                            title={item.title || item.name}
                            date={item.first_air_date || item.release_date}
                            media_type={type ? "tv" : "movie"}
                            vote_average={item.vote_average}
                        />
                    ))}
                {search &&
                    !content &&
                    (type ? (
                        <Comment>No Series Found</Comment>
                    ) : (
                        <Comment>No Movies Found</Comment>
                    ))}
            </Div>
            {/* <ReactPaginate
                previousLabel={"<"}
                nextLabel={">"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationButtons"}
                previousLinkClassName={"previousButton"}
                nextLinkClassName={"nextButton"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            /> */}
        </Containers>
    );
}

export default Search;
const Containers = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    /* align-items: center; */
`;
const Div = styled.div`
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;
const Comment = styled.h2`
    text-align: center;
    width: 100%;
    margin: 60px auto;
`;
