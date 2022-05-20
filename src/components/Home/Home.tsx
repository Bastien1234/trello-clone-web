import React from 'react';
import './../../styles/main.scss';
import './home.scss';

// logo
import trelloLogo from './../../assets/svg/logo.svg';
import board from './../../assets/images/board.png';

function Home() {
    return (
        <section className='top-section'>
            <header className='header'>
                <img src={trelloLogo} alt='logo'/>
                <div>
                    <button className='button-1'>Se connecter</button>
                    <button className='button-2'>S'inscrire</button>
                </div>
            </header>
            <div className='section-1-container'>
                <div className='section-1'>
                    <h1 className='section-title'>Plus qu'un travail. C'est une manière de travailler ensemble.</h1>
                    <h3 className='section-subtitle'>Démarrez avec un tableau, des listes et des cartes Trello. Personnalisez et ajoutez d'autres fonctionnalités à mesure que le travail de votre équipe s'élargit. Gérez des projets, organisez des tâches et développez l'esprit d'équipe, le tout au même endroit.</h3>
                    <button className='button-3'>Commencez à agir &#8594;</button>
                </div>

                
            </div>

            <div className="board-image-container">
                <img src={board} alt="board logo" className="board-image"/>
            </div>

        </section>
    )
}

export default Home;
