import React from "react";
import { Docs } from "../../DATA/Docs";
import "../../css/button.css";
import Button from "../Button/Button";
const home = () => {
  return (
    <main class="main">
      <div class="container">
        <h1>All The Hand Writing Images </h1>
        <div class="videos">
          {Docs.map((item) => {
            return (
              <div class="video">
                <img src={item.Image_To_Url} alt="" loading="lazy" />
                <p>{item.desc}</p>
                {/* button componnet */}

                <Button className="docsBtn view">
                  <a rel="noreferrer" href={item.Image_To_Url} target="_blank">
                    View The Image {item.icon}
                  </a>
                </Button>
                {/*  end there  */}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default home;
