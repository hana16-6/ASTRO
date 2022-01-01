import React from "react";
import video from "./produc.mp4";

export const IframVideo = (props) => {
  return props.trigger ? (
    <div className="video-pop-up shadow p-4">
      {props.children}
      <iframe
        height="400"
        width="850"
        src={video}
        frameborder="0"
        title="video"
        style={{ marginTop: "10px" }}
      >
        watch
      </iframe>
    </div>
  ) : (
    ""
  );
};
