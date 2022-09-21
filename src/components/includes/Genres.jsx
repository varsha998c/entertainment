import axios from "axios";
import React, { useEffect } from "react";
import { Chip } from "@mui/material";

function Genres({ selected, setSelected, genres, setGenres, setPage, type }) {
    const handleAdd = (genre) => {
        setSelected([...selected, genre]);
        setGenres(genres.filter((item) => item.id !== genre.id));
        setPage(1);
    };
    const handleRemove = (genre) => {
        setSelected(setSelected.filter((selected) => selected.id !== genre.id));
        setGenres([...genres, genre]);
        setPage(1);
    };
    const fetchGenres = () => {
        const { data } = axios.get(
            `https://api.themoviedb.org/3/genre/${type}/list?api_key=e43eba67f2cc72984903d2f506d0bbb9&languaage=en-US}`
        );
        setGenres(data.genres);
    };
    console.log(genres, "generes");
    useEffect(() => {
        fetchGenres();
    }, []);

    return (
        <>
            <div style={{ padding: "6px 0" }}>
                {selected &&
                    selected?.map((genre) => (
                        <Chip
                            label={genre.name}
                            size="small"
                            color="primary"
                            clickable
                            key={genre.id}
                            style={{ margin: 2 }}
                            onDelete={() => handleRemove(genre)}
                        />
                    ))}
                {genres &&
                    genres?.map((genre) => (
                        <Chip
                            label={genre.name}
                            size="small"
                            clickable
                            color="primary"
                            key={genre.id}
                            style={{ margin: 2 }}
                            onClick={() => handleAdd(genre)}
                        />
                    ))}
            </div>
        </>
    );
}

export default Genres;
