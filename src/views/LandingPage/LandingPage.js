import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function LandingPage() {
  return (
    <div className="landingPage">
      <Link to="/pokemon">
        <img src="https://fontmeme.com/permalink/210213/cf386625e046741661c108ec110e8dd3.png" />
        <img src="https://fontmeme.com/permalink/210213/4e78adebf701eeac4f27736ba96b3d3d.png" />
        <img src="https://fontmeme.com/permalink/210213/dabd971ed138cccc7c995dab17ea2a08.png" />
      </Link>
    </div>
  );
}
