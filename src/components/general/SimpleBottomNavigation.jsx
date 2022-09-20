import { React, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import MovieIcon from "@mui/icons-material/Movie";
import SearchIcon from "@mui/icons-material/Search";
import TvIcon from "@mui/icons-material/Tv";
import styled from "@material-ui/core/styles/styled";
import { makeStyles } from "@mui/material";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { useNavigate } from "react-router-dom";

export default function SimpleBottomNavigation() {
    const [value, setValue] = useState(0);
    const navigate = useNavigate();
    const style = {
        backgroundColor: "#2d313a",
        position: "fixed",
        bottom: "0",
        width: "100%",
    };
    return (
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            style={style}
        >
            <BottomNavigationAction
                style={{ color: "white" }}
                label="Trending"
                icon={<WhatshotIcon />}
                onClick={() => {
                    navigate("/");
                }}
            />
            <BottomNavigationAction
                style={{ color: "white" }}
                label="Movies"
                icon={<MovieIcon />}
                onClick={() => {
                    navigate("/movies");
                }}
            />
            <BottomNavigationAction
                style={{ color: "white" }}
                label="TV Series"
                icon={<TvIcon />}
                onClick={() => {
                    navigate("/series");
                }}
            />
            <BottomNavigationAction
                style={{ color: "white" }}
                label="Search"
                icon={<SearchIcon />}
                onClick={() => {
                    navigate("/search");
                }}
            />
        </BottomNavigation>
    );
}
