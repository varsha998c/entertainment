import React, { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { img_500, unavailable } from "../../config/config";
import YouTubeIcon from "@mui/icons-material/YouTube";

function ContentModal({ children, media_type, id }) {
    const [content, setContent] = useState([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [video, setVideo] = useState();
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
    };
    const styles = {
        width: "90%",
        height: "80%",

        backgroundColor: "#39445a",
        border: "2px solid #282c34",
        borderRadius: 10,
        color: "white",
        // boxShadow: theme.shadows[5],
        // padding: theme.spacing(2, 4, 3),
    };
    // const useStyles = makeStyles((theme) => ({
    //     modal: {
    //         display: "flex",
    //         alignItems: "center",
    //         justifyContent: "center",
    //     },
    //     paper: {
    //         width: "90%",
    //         height: "80%",

    //         backgroundColor: "#39445a",
    //         border: "2px solid #282c34",
    //         borderRadius: 10,
    //         color: "white",
    //         boxShadow: theme.shadows[5],
    //         padding: theme.spacing(2, 4, 3),
    //     },
    // }));
    // const classes = useStyles();
    const fetchData = () => {
        const { data } = axios.get(
            `https://api.themoviedb.org/3/${media_type}/${id}?api_key=e43eba67f2cc72984903d2f506d0bbb9&language=en-US`
        );
        setContent(data, "++++++++++++++++++");
    };
    // const fetchVideo = async () => {
    //     const { data } = await axios.get(
    //         `https://api.themoviedb.org/3/${media_type}/${id}/video?api_key=e43eba67f2cc72984903d2f506d0bbb9&language=en-US`
    //     );
    //     setVideo(data.results[0]?.key);
    // };
    useEffect(() => {
        fetchData();
        // fetchVideo();
    }, []);

    return (
        <div>
            <Button onClick={handleOpen} className="media">
                {children}
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    {content && (
                        <Box sx={style}>
                            <div className={styles}>
                                <div className="contentModal">
                                    <img
                                        className="image"
                                        src={
                                            content.poster_path
                                                ? `${img_500}/${content.poster_path}`
                                                : unavailable
                                        }
                                        alt={content.title || content.name}
                                    />
                                    <img
                                        className="image"
                                        src={
                                            content.poster_path
                                                ? `${img_500}/${content.backdrop_path}`
                                                : unavailable
                                        }
                                        alt={content.title || content.name}
                                    />
                                    <div className="about">
                                        <span className="title">
                                            {content.title || content.name}(
                                            {(
                                                content.first_air_date ||
                                                content.release_date ||
                                                "______"
                                            ).substring(0, 4)}
                                            )
                                        </span>
                                        {content.tagline && (
                                            <i className="tagline">
                                                {content.tagline}
                                            </i>
                                        )}
                                        <span className="description">
                                            {content.overview}
                                        </span>
                                        <div></div>
                                        <Button
                                            variant="container"
                                            startIcon={<YouTubeIcon />}
                                            color="danger"
                                            target="_blank"
                                            href={`https://www.toutube.com/watch?v=${video}`}
                                        >
                                            Watch the Trailer
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Box>
                    )}
                </Fade>
            </Modal>
        </div>
    );
}

export default ContentModal;
