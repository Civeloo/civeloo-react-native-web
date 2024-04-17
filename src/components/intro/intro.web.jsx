import React from 'react';
import "./intro.web.css";

export function Intro() {
    return (<div
        className="container">

        <div className="text">
            <h1>Civeloo Software Factory</h1>
            <p>Developing software since 2002</p>
        </div>

        <video
            className="video"
            autoPlay
            muted
            loop >
            <source src="https://cdn.pixabay.com/video/2016/08/22/4733-179738669_large.mp4" type="video/mp4" />
        </video>

    </div>);
}
