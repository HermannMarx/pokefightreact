import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import AudioPlayer from 'react-audio-element';

export default function LandingPage() {
  return (
    <div>
      <Link to="/pokemon">
        <div className="landingPage">
          <img
            className="img-welcome"
            src="https://fontmeme.com/permalink/210213/cf386625e046741661c108ec110e8dd3.png"
          />
          <img
            className="img-title"
            src="https://fontmeme.com/permalink/210213/4e78adebf701eeac4f27736ba96b3d3d.png"
          />
          <img
            className="img-press"
            src="https://fontmeme.com/permalink/210213/dabd971ed138cccc7c995dab17ea2a08.png"
          />
        </div>
      </Link>
      <AudioPlayer src="https://www.youtube.com/watch?v=wrCUQuJsDYI" controls />
    </div>
  );
}
