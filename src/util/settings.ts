export interface Settings {
  language: 'en' | 'jp';
  useFilter: 'blacklist' | 'whitelist';
  filteredWeaponIDs: number[];
  includeHeroShot: boolean;
  preventRepeatWeapon: boolean;
  preventRepeatCategory: boolean;
}

export let SETTINGS : Settings = {
  language: 'en',
  useFilter: "blacklist",
  filteredWeaponIDs: [],
  includeHeroShot: false,
  preventRepeatWeapon: false,
  preventRepeatCategory: false
}

/**
 * @param settings Remember to pass in the full new settings object
 */
export const setLocalSettings = (settings : Settings) => {
  SETTINGS = settings;
  window.localStorage.setItem('randomsplatconfig', JSON.stringify(settings))
}

const getLocalSettings = () => {
  const storage = window.localStorage.getItem('randomsplatconfig');
  if(storage) {
    SETTINGS = JSON.parse(storage);
  }
  setDefaultLanguageFromURL()
}

const setDefaultLanguageFromURL = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const languageParameter = urlParams.get('lang');

  if(languageParameter === 'jp') {
    SETTINGS.language = 'jp'
    setLocalSettings(SETTINGS)
  }
}

getLocalSettings(); // Run once to initialize