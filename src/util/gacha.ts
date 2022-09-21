import { WEAPON_LIST } from "../data/weapons"

export const getWeapon = () => {
  const filteredWeaponList = [...WEAPON_LIST];

  /* Modify filtered weapon list though methods here */

  return filteredWeaponList[Math.floor(Math.random() * filteredWeaponList.length)]
}