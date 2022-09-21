import styled from 'styled-components';
import { Weapon } from '../data/weapons';
import { SETTINGS } from '../util/settings';

type WeaponDisplayProps = {
  weapon: Weapon,
  displaySub?: boolean;
  displaySpecial?: boolean;
}

const WeaponDisplay = ({weapon, displaySub=true, displaySpecial=true} : WeaponDisplayProps )  => {  
  return (
    <WeaponBox>
      <h2>{SETTINGS.language === 'jp' ? weapon.name.jp : weapon.name.en}</h2>
      <WeaponContainer>
        <img src={weapon.imgUrl + '.png'} alt={SETTINGS.language === 'jp' ? weapon.name.jp : weapon.name.en} height="150px"/>
        <>
          {
            displaySub &&
            <img className="sub" src={weapon.sub.imgUrl + '.png'} alt={SETTINGS.language === 'jp' ? weapon.sub.name.jp : weapon.sub.name.en} height="50px"/>
          }
        </>
        <>
          {
            displaySpecial &&
            <img className="special" src={weapon.special.imgUrl + '.png'} alt={SETTINGS.language === 'jp' ? weapon.special.name.jp : weapon.special.name.en} height="50px"/>
          }
        </>
      </WeaponContainer>
    </WeaponBox>
  )
}

const WeaponBox = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  color: white;
  background: rgb(30,26,40);
  background: linear-gradient(351deg, rgba(30,26,40,1) 0%, rgba(16,16,17,1) 100%);

  h2 {
    color: white;
    font-weight: bold;
    margin-bottom: .5rem;
  }
`

const WeaponContainer = styled('span')`
  position: relative;
  display: flex;
  padding: 1rem;
  background-color: rgba(255, 255, 255, .03);
  border-radius: 50%;

  .sub {
    position: absolute;
    bottom: 0px;
    left: 0px
  }

  .special {
    position: absolute;
    bottom: 0px;
    right: 0px
  }
`

export default WeaponDisplay