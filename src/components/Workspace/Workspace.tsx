import React from 'react';
import './workspace.scss';

// Import logos
import bellIcon from './../../assets/svg/bell.png';
import infoIcon from './../../assets/svg/info.png';


function Workspace() {
    return (
        <div>
            <header className='workspace-header'>
                <div className='workspace-header-div-left'>
                    <button className='button-4'>logo 1</button>
                    <button className='button-4'>logo 2</button>
                    <button className='button-4'>Espaces de travail &darr;</button>
                    <button className='button-4'>Récent &darr;</button>
                    <button className='button-4'>Favoris &darr;</button>
                    <button className='button-4'>Modèles &darr;</button>
                    <button className='button-4'>Créer</button>
                </div>

                <div className='workspace-header-div-right'>
                    <input placeholder="Parcourir" />
                    <img src={infoIcon} alt='info icon' className='workspace-info-icon'/>
                    <img src={bellIcon} alt='bell icon'  className='workspace-bell-icon'/>
                    <p>BC</p>
                </div>
            </header>
        </div>
    )
}

export default Workspace
