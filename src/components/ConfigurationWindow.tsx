import { useState } from "react";
import styled from "styled-components"
import { WEAPON_LIST } from "../data/weapons";
import { SETTINGS, Settings } from "../util/settings";

type ConfigurationWindowProps = {
  save(config: Settings): void;
}

type PageOption = 'general' | 'weapons'

const ConfigurationWindow = ({save} : ConfigurationWindowProps) => {
  const [selectedPage, setSelectedPage] = useState<PageOption>('general')

  /* Config Settings */
  const [useFilter, setUseFilter] = useState(SETTINGS.useFilter);
  const [filteredWeaponIds, setFilteredWeaponIds] = useState<number[]>(SETTINGS.filteredWeaponIDs)
  const [preventRepeatWeapon, setPreventRepeatWeapon] = useState(SETTINGS.preventRepeatWeapon)
  const [preventRepeatCategory, setPreventRepeatCategory] = useState(SETTINGS.preventRepeatCategory)

  /* Prevent clicks inside the config from closing and saving */
  const clickWithinBounds = (event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event?.stopPropagation();
    event?.preventDefault();
  }

  const selectPage = (page : PageOption) => {
    setSelectedPage(page)
  }

  const toggleWeapon = (id: number) => {
    if(filteredWeaponIds.includes(id)) {
      const removed = filteredWeaponIds.filter(wid => wid !== id);
      setFilteredWeaponIds(removed);
    } else {
      setFilteredWeaponIds([...filteredWeaponIds, id])
    }
  }

  const performSave = () => {
    save({
      language: SETTINGS.language,
      useFilter: useFilter,
      filteredWeaponIDs: filteredWeaponIds,
      includeHeroShot: false,
      preventRepeatWeapon: preventRepeatWeapon,
      preventRepeatCategory: preventRepeatCategory
    })
  }

  const resetAllSettingsToDefault = () => {
    setUseFilter('blacklist');
    setFilteredWeaponIds([]);
    setPreventRepeatWeapon(false)
    setPreventRepeatCategory(false);
  }

  return (
    <Container onClick={performSave}>
      <PageContainer onClick={(e) => clickWithinBounds(e)}>
        <PageSelector>
          <Page className={selectedPage === 'general' ? 'active' : ''} onClick={() => selectPage('general')}>{SETTINGS.language === 'jp' ? '一般設定' : 'General'}</Page>
          <Page className={selectedPage === 'weapons' ? 'active' : ''} onClick={() => selectPage('weapons')}>{SETTINGS.language === 'jp' ? '武器' : 'Weapons'}</Page>
        </PageSelector>
        {
          selectedPage === 'general' &&
          <PageContent>
            <GeneralSettingList>
              <div onClick={() => {setPreventRepeatWeapon(!preventRepeatWeapon)}}>
                <input checked={preventRepeatWeapon} type="checkbox" id="preventWeapon" readOnly/>
                <label htmlFor="preventWeapon">{SETTINGS.language === 'en' ? `Prevent the same weapon from being selected twice in a row` : `二回連続で同じ武器を選びません`}</label>
              </div>
              <div onClick={() => {setPreventRepeatCategory(!preventRepeatCategory)}}>
                <input checked={preventRepeatCategory} type="checkbox" id="preventCategory" readOnly/>
                <label htmlFor="preventCategory">{SETTINGS.language === 'en' ? `Prevent the same weapon type from being selected twice in a row` : `二回連続で同じ武器タイプを選びません「例えば二回連続シューターは来ない」`}</label>
              </div>
            </GeneralSettingList>
            <div className="column warn" style={{'marginTop': '1rem'}} onClick={resetAllSettingsToDefault}>
              <label htmlFor="blacklist">{SETTINGS.language === 'jp' ? 'デフォルトにリセット' : 'Reset all'}</label>
            </div>
          </PageContent>
        }
        {
          selectedPage === 'weapons' &&
          <PageContent>
            <div className="row even margin wide" style={{'marginBottom': '1rem'}}>
              <div className={useFilter === 'blacklist' ? 'column' : 'disabled column' } onClick={() => {setUseFilter('blacklist')}}>
                <input checked={useFilter === 'blacklist'} type="radio" id="blacklist" name="filterMode" value="blacklist" readOnly style={{'display': 'none'}}/>
                <label htmlFor="blacklist">{SETTINGS.language === 'jp' ? 'ブラックリスト' : 'Blacklist'}</label>
              </div>
              <div className={useFilter === 'whitelist' ? 'column' : 'disabled column'} onClick={() => {setUseFilter('whitelist')}}>
                <input checked={useFilter === 'whitelist'} type="radio" id="whitelist" name="filterMode" value="whitelist" readOnly style={{'display': 'none'}}/>
                <label htmlFor="whitelist">{SETTINGS.language === 'jp' ? 'ホワイトリスト' : 'Whitelist'}</label>
              </div>
            </div>
            <WeaponSelection>
            {
              WEAPON_LIST.sort((wa, wb) => [wa.category, wa.id] > [wb.category, wb.id] ? 1 : -1).map((weapon) => {
                return <WeaponCheckbox className={
                  useFilter === 'blacklist' ?
                  filteredWeaponIds.includes(weapon.id) ? 'blacklisted' : ''
                  : filteredWeaponIds.includes(weapon.id) ? '' : 'disabled'
                } 
                key={weapon.id} onClick={() => {toggleWeapon(weapon.id)}}>
                  <div className="tooltip">
                    <img src={weapon.imgUrl + '.png'} alt={SETTINGS.language === 'jp' ? weapon.name.jp : weapon.name.en} height="40px"/>
                    <span className="tooltiptext">{SETTINGS.language === 'jp' ? weapon.name.jp : weapon.name.en}</span>
                  </div>
                  <input style={{display: 'none'}} checked={filteredWeaponIds.includes(weapon.id)} type="checkbox" id={weapon.name.en} name="weaponList" value={weapon.id} readOnly/>
                  <label style={{display: 'none'}} htmlFor={weapon.name.en}>{SETTINGS.language === 'en' ? `${weapon.name.en}` : `${weapon.name.jp}`}</label>
                </WeaponCheckbox>
              })
            }
            </WeaponSelection>
            <div className="column warn" style={{'marginTop': '1rem'}} onClick={() => {setFilteredWeaponIds([])}}>
              <label htmlFor="blacklist">{SETTINGS.language === 'jp' ? 'レセット' : 'Reset weapons'}</label>
            </div>
          </PageContent>
        }
        <PageSelector>
        <Page onClick={performSave}>{SETTINGS.language === 'jp' ? '閉る' : 'Close'}</Page>
        </PageSelector>
      </PageContainer>
    </Container>
  )
}

const Container = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.4);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  cursor: pointer;

  color: white;
`

const PageContainer = styled('div')`
  pointer-events: '';
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  width: 90%;
  height: 90%;
  border-radius: 2rem;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: auto;
`

const PageSelector = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;

  .active {
    background-color: rgba(255, 255, 255, 0.4);
    border-bottom: 2px solid white !important;
  }
`

const Page = styled('button')`
  flex: 1 1 100%;
  padding: 2rem 2rem;
  display: flex;
  background: transparent;
  border: none;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  transition: .2s ease;
  cursor: pointer;

  :hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`

const PageContent = styled('div')`
  flex: 1 1 100%;
  padding: 2rem;
  display: flex;
  overflow-x: hidden;
  overflow-y: scroll;
  flex-direction: column;
  align-items: center;
`

const GeneralSettingList = styled('div')`
  display: flex;
  flex: 1 1 100%;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-evenly;
`

const WeaponSelection = styled('div')`
  flex: 1 1 100%;
  display: flex;
  flex-direction: row;
  align-content: space-around;
  justify-content: space-evenly;
  gap: 1rem;
  padding: 2rem 0;
  flex-wrap: wrap;
  max-width: 100%;
`

const WeaponCheckbox = styled('div')`
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid white;
  box-shadow: 0px 0px 5px white;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);;

  :hover {
    cursor: pointer;
  }
`

export default ConfigurationWindow