import React, { useState } from 'react';
import './workspace.scss';

// Import logos
import trelloLogo from './../../assets/svg/logo.svg';
import tableaux from './../../assets/svg/tableaux.png';
import settings from './../../assets/svg/settings.png';
import accueil from './../../assets/svg/accueil.png';
import help from './../../assets/svg/help.png';
import cross from './../../assets/svg/cancel.png';
import arrow from './../../assets/svg/right-arrow.png'
import workspaceScreenshot from './../../assets/images/workspace.png';

const testDB = ["Foot", "Hokey"]





function Workspace() {

    const [showNewTableau, setShowNewTableau] = useState(false);

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
                                           width: 160,
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

                            <div onClick={() => setShowNewTableau(true)} className="create-button">
                                <p>Créer un tableau</p>
                            </div>
                       </div>
                       {
                        showNewTableau ? 

                        <div className='create-tableau'>
                           <div className='new-tableau-textholder'>
                                <h4 className='new-tableau-text'>Créer un tableau</h4>
                                <img 
                                    src={cross} 
                                    style={{height: 17, width: 17, marginRight: 15, cursor: "pointer"}}
                                    onClick={() => setShowNewTableau(false)}/>
                           </div>

                           <img src={workspaceScreenshot} style={{height: 120, width: 210}}/>

                           <div>
                           <div  className='new-tableau-textholder'>
                           <h4 className='new-tableau-text'>Titre du tableau</h4>
                                <img src={arrow} style={{height: 17, width: 17, marginRight: 15}}/>
                           </div>
                            
                            <input className='new-tableau-input'></input>
                           </div>
                        </div> : null


                       }
                       
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Workspace
