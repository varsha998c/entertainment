import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { img_300, unavailable } from "../../../config/config";

function SingleContent({ id, poster, title, date, media_type, vote_average }) {
    return (
        <Container>
            <Badge
                badgeContent={vote_average}
                color={vote_average > 6 ? "primary" : "secondary"}
            />
            <Img
                src={poster ? `${img_300}/${poster}` : unavailable}
                alt={title}
            />
            <Title>{title}</Title>
            <Span className="subTitle">
                {media_type === "tv" ? "TV Series" : "Movies"}
                <Span className="subTitle">{date}</Span>
            </Span>
        </Container>
    );
}

export default SingleContent;
const Container = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 520px;
    padding: 5px;
    margin: 5px 0;
    background-color: #282c34;
    border-radius: 10px;
    position: relative;
    margin-bottom: 20px;
    font-family: "Montserrat", sans-serif;
    &:hover {
        background-color: #fff;
        color: #000;
    }
`;
const Img = styled.img`
    display: block;
    border-radius: 10px;
`;
const Title = styled.h4`
    width: 100%;
    text-align: center;
    font-size: 17px;
    padding: 8px 0;
`;
const Span = styled.span`
    display: flex;
    justify-content: space-between;
    padding-bottom: 3px;
    padding: 0 2px;
`;
