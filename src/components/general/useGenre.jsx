import React from "react";

function useGenre(selected) {
    if (selected.length < 1) return "";

    const GenreIds = selected.map((item) => item.id);
    return GenreIds.reduce((acc, curr) => acc + "," + curr);
}

export default useGenre;
