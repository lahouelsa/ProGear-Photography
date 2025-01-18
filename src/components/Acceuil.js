// Acceuil.js
import React from 'react';
import './Acceuil.css';
import {Link} from "react-router-dom"

function Acceuil() {
  return (
    <div className="containern">
      <section className="social-icons"><br></br>
      <button class="bt"><Link className="btn" to="/loginclient">Open</Link></button> <br/>
        <a href="#"><img src="images/github-fill.png" alt="GitHub" /></a>
        <a href="#"><img src="images/instagram-fill.png" alt="Instagram" /></a>
        <a href="#"><img src="images/telegram-fill.png" alt="Telegram" /></a>
        <a href="https://drive.google.com/file/d/1u2ZQxyamKsgJ4JxO-kYbytfxaaEkOT_a/view?usp=sharing" target="_blank">
          <img src="images/drive-fill.png" alt="Google Drive" />
        </a>
      </section>
    </div>
  );
}

export default Acceuil;

