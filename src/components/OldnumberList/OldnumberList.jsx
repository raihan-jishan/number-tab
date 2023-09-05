/*
    title: "NumberList.js file"
    desc: "simple numberList component about lists " 
    date: 04 - 8 - 2023.
*/
// import all important files and modules
import React from "react"; 
import { AiOutlineUser, AiOutlineHeart, AiOutlineTag, AiOutlineHeart } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import "../../css/numbers.css";
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
import { People } from "../../DATA/People";
const OldNumberList = (props) => {
  return (
    // loading skeleton theme
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="data-table"> 
      {People.map((data) => {
        return (
            <>
            {/* mui card */}
            <Card
              sx={{
                maxWidth: 345,
                bgcolor: grey[900],
                color: "white",
                margin: "20px",
              }}
            >
              <CardHeader
                className="userAvater"
                avatar={
                  <Avatar aria-label="user-details" className="avater-pic">
                    <AiOutlineUser size={60} />
                  </Avatar>
                }
                title={data.name}
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
                  {data.name}
                </Typography>
                {/* 2nd Typography */}
                <Typography variant="h4" color="AppWorkspace" sx={{margin:'20px'}}>
                  {data.number}
                </Typography>
                {/* badge */}
                <Badge badgeContent={1} color="info" sx={{ margin: "10px" }}>
                  <AiOutlineTag size={30} /> {data.type}
                </Badge>
                {/* close */}
              </CardContent>
              <CardActions disableSpacing>
                {/* delete button */}
                <IconButton aria-label="delete a note" sx={{ color: "white" }}>
                  <AiOutlineHeart size={40} />
                </IconButton>
                <IconButton aria-label="delete a note" sx={{ color: "white" }}>
                  <FaShare size={40} />
                </IconButton>
              </CardActions>
            </Card>
            {/* close */}
          </>
        );
      })}
      </div>
    </SkeletonTheme>
  );
};

export default OldNumberList;
