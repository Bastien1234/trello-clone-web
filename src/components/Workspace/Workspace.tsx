import React from 'react';
import './workspace.scss';

// Import logos
import trelloLogo from './../../assets/svg/logo.svg';
import tableaux from './../../assets/svg/tableaux.png';
import settings from './../../assets/svg/settings.png';
import accueil from './../../assets/svg/accueil.png';
import help from './../../assets/svg/help.png';

const testDB = ["Foot", "Hokey"]





function Workspace() {
    return (
        <div className='workspace-main-container'>
            <header className='workspace-header'>
                <div className='workspace-header-div-left'>
                    <img src={trelloLogo} alt='logo' style={{backgroundColor: "white", borderRadius: 5}}/>
                    <button className='button-4'>Espaces de travail &darr;</button>
                    <button className='button-4'>Récent &darr;</button>
                    <button className='button-4'>Favoris &darr;</button>
                    <button className='button-4'>Modèles &darr;</button>
                    <button className='button-4'>Créer</button>
                </div>

                <div className='workspace-header-div-right'>
                    <input placeholder="Parcourir" />
                    <p>BC</p>
                </div>
            </header>

            <div className='home-container-main'>
                <div className='home-container'>
                    <div className='home-container-left'>
                        <div className='left-side-button'>
                            <img src={tableaux} className='left-side-button-img'/>
                            <p>Tableaux</p>
                        </div>
                        <div className='left-side-button'>
                        <img src={accueil} className='left-side-button-img'/>
                            <p>Acceuil</p>
                        </div>
                        <div className='left-side-button'>
                        <img src={settings} className='left-side-button-img'/>
                            <p>Paramètres</p>
                        </div>
                        <div className='left-side-button'>
                        <img src={help} className='left-side-button-img'/>
                            <p>Au secours !</p>
                        </div>
                    </div>

                    <div className='home-container-right'>
                       <h1>VOS ESPACES DE TRAVAIL</h1>

                       <div style={{
                           display: "flex",
                           flexDirection: "row",

                       }}>
                           {
                               testDB.map((el, idx) => {
                                   return(
                                       <div style={{
                                           backgroundColor: "rgb(6, 95, 157",
                                           borderRadius: 10,
                                           width: 120,
                                           height: 90,
                                           marginRight: 15,
                                           display: "flex",
                                           justifyContent: "flex-start",
                                           alignItems: "flex-start",
                                           cursor: "pointer"
                                       }}>
                                           <p style={{
                                               color: "white",
                                               fontWeight: "bold",
                                               marginLeft: 10
                                           }}>{el}</p>
                                       </div>
                                   )
                               })
                           }

                            <div className="create-button">
                                <p>Créer un tableau</p>
                            </div>
                       </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Workspace
