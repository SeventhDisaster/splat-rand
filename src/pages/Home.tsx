import { useState } from 'react';
import WeaponDisplay from '../components/WeaponDisplay';
import { Weapon } from '../data/weapons';
import { getWeapon } from '../util/gacha';
import styled from 'styled-components';

import styles from '../modules/gacha.module.css'


const Home = () => {
    
    
    const [selectedWeapon, setSelectedWeapon] = useState<Weapon | null>(null)
    
    const rollForWeapon = () => {
        const weapon = getWeapon();
        setSelectedWeapon(weapon);
        console.log(weapon);
        
    }

    return (
        <div>
            <Header>
                <h1>Splatoon 3 Weapon Randomizer</h1>
            </Header>
            {
                selectedWeapon &&
                <WeaponDisplay weapon={selectedWeapon}></WeaponDisplay>
            }
            <CenterContainer>
                <GachaButton type="button" onClick={rollForWeapon}>{selectedWeapon ? 'Next' : 'Roll'}</GachaButton>
                <GachaButtonA className={styles.floatA} type="button" disabled></GachaButtonA>
                <GachaButtonB className={styles.floatB } type="button" disabled></GachaButtonB >
            </CenterContainer>
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
    border: none;
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
    pointer-events: none;
    box-shadow: 1px 1px 10px #42ffc6;
    position: absolute;
    border: 3px solid #42ffc6;
    background-color: transparent;
    font-weight: bold;
    border-radius: 5rem;
    padding: 3rem 8rem;
    font-size: 2rem;
`

const GachaButtonB = styled('button')`
    pointer-events: none;
    box-shadow: 1px 1px 15 px #ff9df8;
    position: absolute;
    border: 3px solid #fb9ef5;
    background-color: transparent;
    font-weight: bold;
    border-radius: 5rem;
    padding: 3rem 8rem;
    font-size: 2rem;
`

export default Home