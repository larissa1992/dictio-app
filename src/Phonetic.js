import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetic row">
        <div className=" col-4">
          <ReactAudioPlayer src={props.phonetic.audio} controls />
        </div>
        <div className="text col-3">{props.phonetic.text}</div>
      </div>
    );
  } else {
    return null;
  }
}
