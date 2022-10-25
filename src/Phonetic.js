import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetic row">
        <div className=" col">
          <ReactAudioPlayer src={props.phonetic.audio} controls />
        </div>
        <div className="text col">{props.phonetic.text}</div>
      </div>
    );
  } else {
    return null;
  }
}
