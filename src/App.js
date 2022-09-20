import logo from "./logo.svg";
import "./App.css";
import "../src/assets/css/style.css";
import styled from "styled-components";
import Header from "./components/general/Header";
import SimpleBottomNavigation from "./components/general/SimpleBottomNavigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./components/screens/Movies/Movies";
import Series from "./components/screens/Series";
import Search from "./components/screens/search/Search";
import Trending from "./components/screens/Trending";

function App() {
    return (
        <BrowserRouter>
            <div style={{ height: "100vh" }}>
                <Header />
                <Container>
                    <Routes>
                        <Route path="/" element={<Trending />} />
                        <Route path="/movies" element={<Movies />} />
                        <Route path="/series" element={<Series />} />
                        <Route path="/search" element={<Search />} />
                    </Routes>
                </Container>
                <SimpleBottomNavigation />
            </div>
        </BrowserRouter>
    );
}

export default App;
const Container = styled.div`
    min-height: 70vh;
    background-color: #39445a;
    color: #fff;
    padding-top: 105px;
    padding-bottom: 40px;
`;
