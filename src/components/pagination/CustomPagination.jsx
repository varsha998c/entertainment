import { Pagination } from "@mui/material";
import React from "react";

function CustomPagination({ setPage, numOfPages = 10 }) {
    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    };
    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
            }}
        >
            <Pagination
                count={numOfPages}
                onClick={(e) => handlePageChange(e.target.texContent)}
            />
        </div>
    );
}

export default CustomPagination;
