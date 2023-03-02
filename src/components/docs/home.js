import React from "react";
import { Docs } from "../../DATA/Docs";
const home = () => {
  return (
    <main class="main">
      <div class="container">
        <h1>All The Hand Writing Images </h1>
        <div class="videos">
          {Docs.map((item) => {
            return (
              <div class="video">
                <img src={item.Image_To_Url} alt="" />
                <p>{item.desc}</p>
                <a
                  rel="noreferrer"
                  href={item.Image_To_Url}
                  target="_blank"
                  className="docsBtn"
                >
                  View The Image {item.icon}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default home;
