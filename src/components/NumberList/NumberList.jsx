/*
    title: "NumberList.js file"
    desc: "simple numberList component about lists " 
    date: 04 - 8 - 2023.
*/
// import all important files and modules
import React, { useContext, useState } from "react";
import { AiOutlineDelete, AiOutlineUser, AiOutlineTag } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import "../../css/alertBox.css";
import "../../css/numbers.css";
import DeletePic from "../../assets/Delete.svg";
import noteContext from "../../context/noteContext";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// mui components
import {
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  CardActions,
  Badge,
} from "@mui/material";
import { grey } from "@mui/material/colors"; 
const NumberList = (props) => {
  // context
  const context = useContext(noteContext);
  const { deleteNote } = context;
  // useState hook
  const [click, setClick] = useState(false);
  // get data by props
  const { data } = props;
  // handle Click open tab
  const handleClick = () => {
    setClick(!click);
  };
  // handleClose close tab
  const handleClose = () => {
    setClick(false);
  };
  return (
    // loading skeleton theme
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      {/* alert box */}
      {click ? (
        <div className="alertContainer">
          <div className="image-delete">
            <img src={DeletePic} alt="" />
          </div>
          <h2>
            You Want to Delete
            <span className="title center"> {data.title} </span>Note{" "}
          </h2>
          <div className="submit-btn btn-primary  p-5">
            <button
              onClick={() => {
                deleteNote(data._id);
              }}
            >
              <i class="fa-regular fa-circle-check"></i> OK
            </button>
            <button onClick={handleClose}>
              <i class="fa-regular fa-circle-xmark"></i> Close
            </button>
          </div>
        </div>
      ) : null}
      {/* close */}
      {/* mui card */}
      <Card sx={{ maxWidth: 345, bgcolor: grey[900], color: "white", margin:'20px' }}>
        <CardHeader
          className="userAvater"
          avatar={
            <Avatar aria-label="user-details" className="avater-pic">
              <AiOutlineUser size={60} />
            </Avatar>
          }
          title={data.title}
          subheader={new Date(data.date).toLocaleString()}
        />
        {/* card image media */}
        <CardMedia
          component="img"
          height="194"
          image="https://images.unsplash.com/photo-1517061493161-6f312d1c36d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5ld3MlMjBwYXBlciUyMGJsdXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt="Paella dish"
        />
        {/* card context */}
        <CardContent>
          {/* Typography */}
          <Typography variant="h4" color="AppWorkspace">
            {data.title}
          </Typography>
          {/* 2nd Typography */}
          <Typography variant="h4" color="Background" sx={{margin:'20px'}}>
            {data.description}
          </Typography>
          {/* badge */}
          <Badge badgeContent={1} color="info" sx={{ margin: "10px" }}>
            <AiOutlineTag size={30} /> {data.tag}
          </Badge>
          {/* close */}
        </CardContent>
        <CardActions disableSpacing>
          {/* delete button */}
          <IconButton aria-label="delete a note" sx={{ color: "white" }}>
            <AiOutlineDelete size={40} onClick={handleClick} />
          </IconButton>
          <IconButton aria-label="delete a note" sx={{ color: "white" }}>
            <FaShare size={40} onClick={handleClick} />
          </IconButton>
        </CardActions>
      </Card>
      {/* close */}
    </SkeletonTheme>
  );
};

export default NumberList;
