import { useState } from 'react';
import WeaponDisplay from '../components/WeaponDisplay';
import { Weapon } from '../data/weapons';
import { getWeapon } from '../util/gacha';
import styled from 'styled-components';

import styles from '../modules/gacha.module.css'
import ConfigurationWindow from '../components/ConfigurationWindow';
import { setLocalSettings, SETTINGS, Settings } from '../util/settings';


const Home = () => {
    const [selectedWeapon, setSelectedWeapon] = useState<Weapon | null>(null)
    const [isConfiguring, setIsConfiguring] = useState<boolean>(false)
    
    const rollForWeapon = () => {
        const weapon = getWeapon();
        setSelectedWeapon(weapon);
    }

    const configure = () => {
        setIsConfiguring(true);
    }

    const saveConfig = (config: Settings) => {
        setIsConfiguring(false);
        setLocalSettings(config)        
    }

    const toggleLanguage = () => {
        const configClone = structuredClone(SETTINGS)
        configClone.language = SETTINGS.language === 'jp' ? 'en' : 'jp';
        setLocalSettings(configClone)
        document.location.reload();
    }

    return (
        <div>
            <VersionDisplay>
               Updated: 7.0.0 - Fresh Season 2023 Weapons Added
            </VersionDisplay>
            <LanguageToggleContainer onClick={toggleLanguage}>
                <img className="special" src={SETTINGS.language === 'jp' ? `${process.env.PUBLIC_URL + '/images/flags/united-kingdom.png'}` : `${process.env.PUBLIC_URL + '/images/flags/japan.png'}`} alt={SETTINGS.language === 'jp' ? 'Change language to Japanese' : 'Change language to English'} height="30px"/>
            </LanguageToggleContainer>
            <Header>
                <h1>{SETTINGS.language === 'jp' ? 'スプラトゥーン3武器ランダマイザー' :  'Splatoon 3 Weapon Randomizer'}</h1>
            </Header>
            <ConfigureButtonContainer>
                <button onClick={configure} style={{background: 'transparent', border: 'none'}}>
                    <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 764.2 764.59" height={"40px"}>
                        <path className="cls-1" d="M587.24,589.1H177.24V176.1h410v413Zm-199.28-12.96v.02c4.83,0,9.66,.06,14.49-.01,14.37-.21,24.4-9.96,24.99-24.4,.2-4.99,0-10,.14-14.99,.28-10.13,5.05-17.46,14.29-21.55,9.41-4.16,17.9-2,25.32,4.77,3.44,3.14,6.61,6.58,9.96,9.83,10.2,9.9,25.28,10.12,35.5,.31,7.57-7.26,14.99-14.7,22.29-22.24,9.63-9.93,9.56-24.63-.03-34.59-3.35-3.48-6.88-6.78-10.3-10.19-7.1-7.08-8.85-15.38-5.33-24.72,3.35-8.85,11.5-14.36,21.27-14.53,4.83-.09,9.67,.09,14.49-.11,13.38-.56,22.21-7.98,23.3-21.26,.97-11.91,1.01-23.99,.2-35.92-.97-14.21-9.85-21.63-24.08-21.87-5.49-.09-11.03,.11-16.47-.48-9.32-1-15.63-6.42-18.72-15.1-3.09-8.69-1.57-16.74,5.05-23.48,3.38-3.45,6.91-6.76,10.31-10.19,10.2-10.28,10.38-24.9,.28-35.26-7.21-7.4-14.55-14.67-21.97-21.85-10.14-9.8-25.44-9.71-35.52,.09-3.46,3.37-6.75,6.93-10.28,10.22-7.28,6.8-15.76,8.51-24.89,4.58-8.78-3.78-14-10.5-14.24-20.42-.12-4.83,.03-9.67-.12-14.49-.49-16.29-10.72-26.2-26.99-26.22-9-.01-17.99-.04-26.99,0-13.15,.07-23.03,8.24-24.84,21.24-.87,6.22-.57,12.61-.69,18.93-.19,10.13-5.32,16.98-14.32,20.88-9.19,3.98-17.59,2.07-24.85-4.69-3.53-3.29-6.84-6.83-10.3-10.2-9.54-9.28-24.56-9.81-34.39-.78-8.22,7.55-16.2,15.37-23.9,23.45-9.17,9.62-8.75,24.26,.52,33.8,3.02,3.11,6.06,6.2,9.18,9.19,7.6,7.29,10.28,15.97,6.34,25.84-3.99,9.99-11.85,14.82-22.65,14.84-5.33,.01-10.68-.09-15.98,.29-13.15,.95-22.67,11.23-22.78,24.47-.09,9.83-.08,19.66,0,29.49,.09,12.91,9.47,23.23,22.39,24.36,5.79,.51,11.65,.42,17.47,.48,10.31,.1,17.46,5.15,21.38,14.38,4,9.39,1.86,17.92-5.19,25.2-3.24,3.35-6.66,6.54-9.91,9.88-9.9,10.17-9.93,24.68,.03,34.88,7.22,7.39,14.55,14.67,21.95,21.87,10.09,9.81,25.3,9.76,35.51-.02,3.25-3.11,6.4-6.32,9.58-9.5,7.35-7.33,16.3-9.16,25.62-5.24,8.83,3.72,14.16,11.82,14.18,21.55,.01,5-.12,10,.05,14.99,.48,13.82,10.92,24.14,24.64,24.43,5,.1,10,.02,14.99,.02Z"/><path d="M383.69,764.51c-9.95,0-19.9,.17-29.85-.03-27.3-.56-48.08-21.12-49.04-48.62-.35-9.94-.08-19.9-.1-29.85-.04-19.37-10.66-35.5-28.23-42.9-18.54-7.81-36.36-4.16-50.99,10.42-6.34,6.32-12.61,12.72-19.08,18.91-20.32,19.47-50.6,19.56-70.68,.03-14.74-14.33-29.33-28.83-43.7-43.53-19.83-20.29-19.76-49.18-.06-69.43,6.47-6.65,13.27-13,19.73-19.66,14.04-14.5,18.3-31.48,10.34-50.16-7.82-18.35-22.05-28.41-42.57-28.62-11.6-.12-23.25,.05-34.78-.96C18.96,457.87,.3,437.33,.11,411.63c-.14-19.57-.15-39.14,.02-58.7,.23-26.34,19.17-46.81,45.35-48.7,10.57-.76,21.21-.56,31.82-.59,21.5-.05,37.15-9.66,45.09-29.55,7.85-19.66,2.51-36.93-12.63-51.45-6.22-5.97-12.27-12.12-18.28-18.3-18.47-19-19.29-48.13-1.04-67.28,15.32-16.08,31.21-31.66,47.57-46.68,19.56-17.96,49.46-16.91,68.46,1.56,6.89,6.71,13.47,13.74,20.5,20.3,14.46,13.47,31.17,17.26,49.46,9.34,17.92-7.76,28.11-21.4,28.5-41.56,.24-12.58-.35-25.3,1.38-37.69C309.92,16.46,329.58,.2,355.76,.06c17.91-.1,35.82-.04,53.73-.02,32.38,.04,52.75,19.76,53.72,52.19,.29,9.61,0,19.24,.23,28.85,.48,19.74,10.86,33.12,28.34,40.64,18.16,7.82,35.04,4.41,49.54-9.12,7.03-6.56,13.56-13.64,20.46-20.34,20.06-19.5,50.52-19.68,70.7-.18,14.78,14.29,29.39,28.77,43.74,43.49,20.1,20.62,19.75,49.73-.56,70.19-6.78,6.83-13.78,13.42-20.52,20.28-13.18,13.42-16.22,29.45-10.06,46.75,6.15,17.28,18.7,28.06,37.26,30.05,10.84,1.16,21.85,.76,32.79,.95,28.33,.48,46.01,15.25,47.94,43.54,1.62,23.73,1.55,47.79-.39,71.49-2.16,26.45-19.74,41.21-46.38,42.32-9.6,.4-19.23,.05-28.85,.22-19.46,.35-35.68,11.3-42.34,28.93-7.02,18.58-3.54,35.1,10.6,49.2,6.81,6.79,13.84,13.37,20.51,20.29,19.1,19.83,19.23,49.1,.06,68.86-14.54,15-29.3,29.8-44.38,44.26-20.35,19.52-50.37,19.08-70.67-.63-6.66-6.47-12.97-13.32-19.82-19.57-14.77-13.48-31.66-17.78-50.4-9.49-18.39,8.14-27.9,22.73-28.45,42.89-.27,9.94,.13,19.91-.27,29.84-1.18,28.73-21.14,48.15-49.74,48.57-9.62,.14-19.24,.02-28.85,.02v-.03Zm-.31-223.04c87.89,.05,159.75-71.28,159.95-158.78,.2-87.58-71.53-159.62-159.04-159.74-88.14-.12-159.28,70.76-159.43,158.83-.15,88.24,70.72,159.63,158.52,159.69Z"/>
                    </svg>
                </button>
            </ConfigureButtonContainer>
            <CenterContainer>
                <GachaButtonC type="button" disabled></GachaButtonC> 
                <GachaButton type="button" onClick={rollForWeapon}>{selectedWeapon ? SETTINGS.language === 'jp' ? '次！' : 'Next!' : SETTINGS.language === 'jp' ? 'IKZ！' : 'Let\'s go!'}</GachaButton>
                <GachaButtonA className={styles.floatA} type="button" disabled></GachaButtonA>
                <GachaButtonB className={styles.floatB } type="button" disabled></GachaButtonB >
            </CenterContainer>
            {
                selectedWeapon &&
                <WeaponDisplay weapon={selectedWeapon}></WeaponDisplay>
            }
            {
                isConfiguring && 
                <ConfigurationWindow save={saveConfig}/>

            }
        </div>
    )
}

const Header = styled('div')`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 3rem;

    h1 {
        font-weight: bold;
        color: white !important;
    }
`
const CenterContainer = styled('div')`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 1rem;
`

const GachaButton = styled('button')`
    position: relative;
    z-index: 2;
    border: none;
    min-width: 20rem;
    font-weight: bold;
    background-color: #b4ff44;
    color: black;
    border-radius: 5rem;
    padding: 2rem 6rem;
    font-size: 2rem;
    cursor: pointer;
    transition: .05s ease;

    :hover {
        filter: brightness(.9);
    }
    :active {
        filter: brightness(.6);
    }
`

const GachaButtonA = styled('button')`
    z-index: 3;
    pointer-events: none;
    box-shadow: 1px 1px 10px #42ffc6;
    position: absolute;
    border: 3px solid #42ffc6;
    background-color: transparent;
    font-weight: bold;
    border-radius: 5rem;
    padding: 3rem 10rem;
    font-size: 2rem;
`

const GachaButtonB = styled('button')`
    z-index: 4;
    pointer-events: none;
    box-shadow: 1px 1px 15px #ff8ff8;
    position: absolute;
    border: 3px solid #fb9ef5;
    background-color: transparent;
    font-weight: bold;
    border-radius: 5rem;
    padding: 3rem 10rem;
    font-size: 2rem;
`

const GachaButtonC = styled('button')`
    pointer-events: none;
    position: absolute;
    border: none;
    transform: translateX(-10px) translateY(10px);
    background-color: #637e3a;
    font-weight: bold;
    border-radius: 5rem;
    padding: 3rem 10rem;
    font-size: 2rem;
`

const ConfigureButtonContainer = styled('div')`
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const LanguageToggleContainer = styled('div')`
    position: absolute;
    cursor: pointer;
    top: .5rem;
    right: 1rem;
`

const VersionDisplay = styled('div')`
    position: absolute;
    color: #8fffb6;
    bottom: .5rem;
    left: 1rem;
`

export default Home