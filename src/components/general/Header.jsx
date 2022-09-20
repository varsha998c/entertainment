import React from "react";
import styled from "styled-components";
import { FcFilmReel } from "react-icons/fc";

function Header() {
    return (
        <Container>
            <Section>
                <ImgContainer>
                    <FcFilmReel />
                </ImgContainer>

                <Heading onClick={() => window.scrollTo(0, 0)}>
                    entertainment hub
                </Heading>
                <ImgContainer>
                    <FcFilmReel />
                </ImgContainer>
            </Section>
        </Container>
    );
}

export default Header;
const Container = styled.div`
    width: 100%;
    height: 70px;
    cursor: pointer;
    display: flex;
    position: fixed;
    justify-content: center;
    text-transform: uppercase;
    background-color: #39445a;
    padding-bottom: 15px;
    box-shadow: 0px 1px 5px #000;
    font-family: "Montserrat", sans-serif;

    z-index: 100;
`;
const Section = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const ImgContainer = styled.div`
    font-size: 40px;
    &:first-child {
        margin-right: 10px;
    }
`;
const Heading = styled.h1`
    font-size: 35px;
    color: #fff;
    letter-spacing: 0.6rem;
`;
