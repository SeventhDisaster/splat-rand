import { WEAPON_LIST } from "../data/weapons"
import { SETTINGS } from "./settings";

let previousWeaponId : number;
let previousWeaponCategory : 'shooter' | 'blaster' | 'charger' | 'roller' | 'brush' | 'slosher' | 'splatling' | 'dualie' | 'brella' | 'splatana' | 'stringer';

export const getWeapon = () => {
  let filteredWeaponList = [...WEAPON_LIST];

  /* Modify filtered weapon list though methods here */
  if(SETTINGS.filteredWeaponIDs.length) {
    if(SETTINGS.useFilter === 'blacklist') {
      filteredWeaponList = WEAPON_LIST.filter(w => !SETTINGS.filteredWeaponIDs.includes(w.id))
    } else if(SETTINGS.useFilter === 'whitelist') {
      filteredWeaponList = WEAPON_LIST.filter(w => SETTINGS.filteredWeaponIDs.includes(w.id))
    }
  }

  if(SETTINGS.preventRepeatWeapon) {
    filteredWeaponList = filteredWeaponList.filter(w => previousWeaponId !== w.id)
  }

  if(SETTINGS.preventRepeatCategory) {
    filteredWeaponList = filteredWeaponList.filter(w => previousWeaponCategory !== w.category)
  }

  const chosenWeapon = filteredWeaponList[Math.floor(Math.random() * filteredWeaponList.length)]

  previousWeaponId = chosenWeapon.id;
  previousWeaponCategory = chosenWeapon.category;  

  return chosenWeapon
}