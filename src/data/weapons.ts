export interface Weapon {
  id: number;
  name: {
    en: string;
    jp?: string;
  };
  category: 'shooter' | 'blaster' | 'charger' | 'roller' | 'brush' | 'slosher' | 'splatling' | 'dualie' | 'brella' | 'splatana' | 'stringer'
  imgUrl: string;
  sub: SubWeapon;
  special: SpecialWeapon;
}

export interface SubWeapon {
  id: number;
  name: {
    en: string;
    jp: string;
  };
  imgUrl: string;
}

export interface SpecialWeapon {
  id: number;
  name: {
    en: string;
    jp: string;
  };
  imgUrl: string;
}

export const SUB_LIST : SubWeapon[] = [
  {
    id: 1,
    name: {
      en: 'Splat Bomb',
      jp: 'スプラッシュボム',
    },
    imgUrl: `${process.env.PUBLIC_URL + '/images/subs/S3_Weapon_Sub_Splat_Bomb_Flat'}`, 
  },
  {
    id: 2,
    name: {
      en: 'Suction Bomb',
      jp: 'キューバンボム',
    },
    imgUrl: `${process.env.PUBLIC_URL + '/images/subs/S3_Weapon_Sub_Suction_Bomb_Flat'}`, 
  },
  {
    id: 3,
    name: {
      en: 'Burst Bomb',
      jp: 'クイックボム',
    },
    imgUrl: `${process.env.PUBLIC_URL + '/images/subs/S3_Weapon_Sub_Burst_Bomb_Flat'}`, 
  },
  {
    id: 4,
    name: {
      en: 'Curling Bomb',
      jp: 'カーリングボム',
    },
    imgUrl: `${process.env.PUBLIC_URL + '/images/subs/S3_Weapon_Sub_Curling_Bomb_Flat'}`, 
  },
  {
    id: 5,
    name: {
      en: 'Autobomb',
      jp: 'ロボットボム',
    },
    imgUrl: `${process.env.PUBLIC_URL + '/images/subs/S3_Weapon_Sub_Autobomb_Flat'}`, 
  },
  {
    id: 6,
    name: {
      en: 'Ink Mine',
      jp: 'トラップ',
    },
    imgUrl: `${process.env.PUBLIC_URL + '/images/subs/S3_Weapon_Sub_Ink_Mine_Flat'}`, 
  },
  {
    id: 7,
    name: {
      en: 'Toxic Mist',
      jp: 'ポイズンミスト',
    },
    imgUrl: `${process.env.PUBLIC_URL + '/images/subs/S3_Weapon_Sub_Toxic_Mist_Flat'}`, 
  },
  {
    id: 8,
    name: {
      en: 'Point Sensor',
      jp: 'ポイントセンサー',
    },
    imgUrl: `${process.env.PUBLIC_URL + '/images/subs/S3_Weapon_Sub_Point_Sensor_Flat'}`, 
  },
  {
    id: 9,
    name: {
      en: 'Splash Wall',
      jp: 'スプラッシュシールド',
    },
    imgUrl: `${process.env.PUBLIC_URL + '/images/subs/S3_Weapon_Sub_Splash_Wall_Flat'}`, 
  },
  {
    id: 10,
    name: {
      en: 'Sprinkler',
      jp: 'スプリンクラー',
    },
    imgUrl: `${process.env.PUBLIC_URL + '/images/subs/S3_Weapon_Sub_Sprinkler_Flat'}`, 
  },
  {
    id: 11,
    name: {
      en: 'Squid Beakon',
      jp: 'ジャンプビーコン',
    },
    imgUrl: `${process.env.PUBLIC_URL + '/images/subs/S3_Weapon_Sub_Squid_Beakon_Flat'}`, 
  },
  {
    id: 12,
    name: {
      en: 'Fizzy Bomb',
      jp: 'タンサンボム',
    },
    imgUrl: `${process.env.PUBLIC_URL + '/images/subs/S3_Weapon_Sub_Fizzy_Bomb_Flat'}`, 
  },
  {
    id: 13,
    name: {
      en: 'Torpedo',
      jp: 'トーピード',
    },
    imgUrl: `${process.env.PUBLIC_URL + '/images/subs/S3_Weapon_Sub_Torpedo_Flat'}`, 
  },
  {
    id: 14,
    name: {
      en: 'Angle Shooter',
      jp: 'ラインマーカー',
    },
    imgUrl: `${process.env.PUBLIC_URL + '/images/subs/S3_Weapon_Sub_Angle_Shooter_Flat'}`, 
  },
]

/**
 * @param id ID of sub weapon
 * * 1 = Splat Bomb
 * * 2 = Suction Bomb
 * * 3 = Burst Bomb
 * * 4 = Curling Bomb
 * * 5 = Auto Bomb
 * * 6 = Ink Mine
 * * 7 = Toxic Mist
 * * 8 = Point Sensor
 * * 9 = Splash Wall
 * * 10 = Sprinkler
 * * 11 = Squid Beakon
 * * 12 = Fizzy Bomb
 * * 13 = Torpedo
 * * 14 = Angle Shooter
 * @returns The sub that matches the ID
 */
export const getSub = (id: number) : SubWeapon => {
  return SUB_LIST.find(sub => sub.id === id) ||   {
    id: 0,
    name: {
      en: 'Error',
      jp: 'Error',
    },
    imgUrl: 'Error', 
  }
}

export const SPECIAL_LIST : SpecialWeapon[] = [
  {
    id: 1,
    name: {
      en: 'Big Bubbler',
      jp: 'グレートバリア',
    },
    imgUrl: `${process.env.PUBLIC_URL + '/images/specials/S3_Weapon_Special_Big_Bubbler'}`, 
  },
  {
    id: 2,
    name: {
      en: 'Booyah Bomb',
      jp: 'ナイスダマ',
    },
    imgUrl: `${process.env.PUBLIC_URL + '/images/specials/S3_Weapon_Special_Booyah_Bomb'}`, 
  },
  {
    id: 3,
    name: {
      en: 'Crab Tank',
      jp: 'カニタンク',
    },
    imgUrl: `${process.env.PUBLIC_URL + '/images/specials/S3_Weapon_Special_Crab_Tank'}`, 
  },
  {
    id: 4,
    name: {
      en: 'Ink Storm',
      jp: 'アメフラシ',
    },
    imgUrl: `${process.env.PUBLIC_URL + '/images/specials/S3_Weapon_Special_Ink_Storm'}`, 
  },
  {
    id: 5,
    name: {
      en: 'Ink Vac',
      jp: 'キューインキ',
    },
    imgUrl: `${process.env.PUBLIC_URL + '/images/specials/S3_Weapon_Special_Ink_Vac'}`, 
  },
  {
    id: 6,
    name: {
      en: 'Inkjet',
      jp: 'ジェットパック',
    },
    imgUrl: `${process.env.PUBLIC_URL + '/images/specials/S3_Weapon_Special_Inkjet'}`, 
  },
  {
    id: 7,
    name: {
      en: 'Killer Wail 5.1',
      jp: 'メガホンレーザー5.1ch',
    },
    imgUrl: `${process.env.PUBLIC_URL + '/images/specials/S3_Weapon_Special_Killer_Wail_5.1'}`, 
  },
  {
    id: 8,
    name: {
      en: 'Reefslider',
      jp: 'サメライド',
    },
    imgUrl: `${process.env.PUBLIC_URL + '/images/specials/S3_Weapon_Special_Reefslider'}`, 
  },
  {
    id: 9,
    name: {
      en: 'Tacticooler',
      jp: 'エナジースタンド',
    },
    imgUrl: `${process.env.PUBLIC_URL + '/images/specials/S3_Weapon_Special_Tacticooler'}`, 
  },
  {
    id: 10,
    name: {
      en: 'Tenta Missiles',
      jp: 'マルチミサイル',
    },
    imgUrl: `${process.env.PUBLIC_URL + '/images/specials/S3_Weapon_Special_Tenta_Missiles'}`, 
  },
  {
    id: 11,
    name: {
      en: 'Triple Inkstrike',
      jp: 'トリプルトルネード',
    },
    imgUrl: `${process.env.PUBLIC_URL + '/images/specials/S3_Weapon_Special_Triple_Inkstrike'}`, 
  },
  {
    id: 12,
    name: {
      en: 'Trizooka',
      jp: 'ウルトラショット',
    },
    imgUrl: `${process.env.PUBLIC_URL + '/images/specials/S3_Weapon_Special_Trizooka'}`, 
  },
  {
    id: 13,
    name: {
      en: 'Ultra Stamp',
      jp: 'ウルトラハンコ',
    },
    imgUrl: `${process.env.PUBLIC_URL + '/images/specials/S3_Weapon_Special_Ultra_Stamp'}`, 
  },
  {
    id: 14,
    name: {
      en: 'Wave Breaker',
      jp: 'ホップソナー',
    },
    imgUrl: `${process.env.PUBLIC_URL + '/images/specials/S3_Weapon_Special_Wave_Breaker'}`, 
  },
  {
    id: 15,
    name: {
      en: 'Zipcaster',
      jp: 'ショクワンダー',
    },
    imgUrl: `${process.env.PUBLIC_URL + '/images/specials/S3_Weapon_Special_Zipcaster'}`, 
  },
]

/**
 * 
 * @param id ID of Special weapon
 * * 1 = Big Bubbler
 * * 2 = Booyah Bomb
 * * 3 = Crab Tank
 * * 4 = Ink Storm
 * * 5 = Ink Vac
 * * 6 = Inkjet
 * * 7 = Killer Wail 5.1
 * * 8 = Reefslider
 * * 9 = Tacticooler
 * * 10 = Tenta Missiles
 * * 11 = Triple Inkstrike
 * * 12 = Trizooka
 * * 13 = Ultra Stamp
 * * 14 = Wave Breaker
 * * 15 = Zipcaster
 * @returns The special that matches the ID
 */
export const getSpecial = (id: number) : SpecialWeapon => {
  return SPECIAL_LIST.find(special => special.id === id) || {
    id: 0,
    name: {
      en: 'Error',
      jp: 'Error',
    },
    imgUrl: 'Error', 
  }
}

export const WEAPON_LIST : Weapon[] = [
  {
    id: 1,
    name: {
      en: '.52 Gal',
      jp: '.52ガロン',
    },
    category: 'shooter',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_.52_Gal_Flat'}`,
    sub: getSub(9),
    special: getSpecial(7),
  },
  {
    id: 2,
    name: {
      en: '.96 Gal',
      jp: '.96ガロン',
    },
    category: 'shooter',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_.96_Gal_Flat'}`,
    sub: getSub(10),
    special: getSpecial(5),
  },
  {
    id: 3,
    name: {
      en: 'Aerospray MG',
      jp: 'プロモデラーMG',
    },
    category: 'shooter',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Aerospray_MG_Flat'}`,
    sub: getSub(12),
    special: getSpecial(8),
  },
  {
    id: 4,
    name: {
      en: 'Ballpoint Splatling',
      jp: 'クーゲルシュライバー',
    },
    category: 'splatling',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Ballpoint_Splatling_Flat'}`,
    sub: getSub(12),
    special: getSpecial(6),
  },
  {
    id: 5,
    name: {
      en: 'Bamboozler 14 Mk I',
      jp: '14式竹筒銃・甲',
    },
    category: 'charger',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Bamboozler_14_Mk_I_Flat'}`,
    sub: getSub(5),
    special: getSpecial(7),
  },
  {
    id: 6,
    name: {
      en: 'Blaster',
      jp: 'ホットブラスター',
    },
    category: 'blaster',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Blaster_Flat'}`,
    sub: getSub(5),
    special: getSpecial(1),
  },
  {
    id: 7,
    name: {
      en: 'Bloblobber',
      jp: 'オーバーフロッシャー',
    },
    category: 'blaster',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Bloblobber_Flat'}`,
    sub: getSub(10),
    special: getSpecial(4),
  },
  {
    id: 8,
    name: {
      en: 'Carbon Roller',
      jp: 'カーボンローラー',
    },
    category: 'roller',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Carbon_Roller_Flat'}`,
    sub: getSub(5),
    special: getSpecial(15),
  },
  {
    id: 9,
    name: {
      en: 'Clash Blaster',
      jp: 'クラッシュブラスター',
    },
    category: 'blaster',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Clash_Blaster_Flat'}`,
    sub: getSub(1),
    special: getSpecial(12),
  },
  {
    id: 10,
    name: {
      en: 'Classic Squiffer',
      jp: 'スクイックリンα',
    },
    category: 'charger',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Classic_Squiffer_Flat'}`,
    sub: getSub(8),
    special: getSpecial(1),
  },
  {
    id: 11,
    name: {
      en: 'Dapple Dualies',
      jp: 'スパッタリー',
    },
    category: 'dualie',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Dapple_Dualies_Flat'}`,
    sub: getSub(11),
    special: getSpecial(9),
  },
  {
    id: 12,
    name: {
      en: 'Dark Tetra Dualies',
      jp: 'クアッドホッパーブラック',
    },
    category: 'dualie',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Dark_Tetra_Dualies_Flat'}`,
    sub: getSub(5),
    special: getSpecial(8),
  },
  {
    id: 13,
    name: {
      en: 'Dualie Squelchers',
      jp: 'デュアルスイーパー',
    },
    category: 'dualie',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Dualie_Squelchers_Flat'}`,
    sub: getSub(1),
    special: getSpecial(14),
  },
  {
    id: 14,
    name: {
      en: 'Dynamo Roller',
      jp: 'ダイナモローラー',
    },
    category: 'roller',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Dynamo_Roller_Flat'}`,
    sub: getSub(10),
    special: getSpecial(9),
  },
  {
    id: 15,
    name: {
      en: 'E-liter 4K',
      jp: 'リッター4K',
    },
    category: 'charger',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_E-liter_4K_Flat'}`,
    sub: getSub(6),
    special: getSpecial(14),
  },
  {
    id: 16,
    name: {
      en: 'E-liter 4K Scope',
      jp: '4Kスコープ',
    },
    category: 'charger',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_E-liter_4K_Scope_Flat'}`,
    sub: getSub(6),
    special: getSpecial(14),
  },
  {
    id: 16,
    name: {
      en: 'Explosher',
      jp: 'エクスプロッシャー',
    },
    category: 'slosher',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Explosher_Flat'}`,
    sub: getSub(8),
    special: getSpecial(4),
  },
  {
    id: 17,
    name: {
      en: 'Flingza Roller',
      jp: 'ヴァリアブルローラー',
    },
    category: 'roller',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Flingza_Roller_Flat'}`,
    sub: getSub(6),
    special: getSpecial(10),
  },
  {
    id: 18,
    name: {
      en: 'Glooga Dualies',
      jp: 'ケルビン525',
    },
    category: 'dualie',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Glooga_Dualies_Flat'}`,
    sub: getSub(9),
    special: getSpecial(2),
  },
  {
    id: 19,
    name: {
      en: 'Goo Tuber',
      jp: 'ソイチューバー',
    },
    category: 'charger',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Goo_Tuber_Flat'}`,
    sub: getSub(13),
    special: getSpecial(10),
  },
  {
    id: 20,
    name: {
      en: 'H-3 Nozzlenose',
      jp: 'H3リールガン',
    },
    category: 'shooter',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_H-3_Nozzlenose_Flat'}`,
    sub: getSub(8),
    special: getSpecial(9),
  },
  {
    id: 21,
    name: {
      en: 'Heavy Splatling',
      jp: 'バレルスピナー',
    },
    category: 'splatling',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Heavy_Splatling_Flat'}`,
    sub: getSub(10),
    special: getSpecial(14),
  },
  {
    id: 22,
    name: {
      en: 'Hero Shot Replica',
      jp: 'ヒーローシューター レプリカ',
    },
    category: 'shooter',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Hero_Shot_Replica_Flat'}`,
    sub: getSub(2),
    special: getSpecial(12),
  },
  {
    id: 23,
    name: {
      en: 'Hydra Splatling',
      jp: 'ハイドラント',
    },
    category: 'splatling',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Hydra_Splatling_Flat'}`,
    sub: getSub(5),
    special: getSpecial(2),
  },
  {
    id: 24,
    name: {
      en: 'Inkbrush',
      jp: 'パブロ',
    },
    category: 'brush',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Inkbrush_Flat'}`,
    sub: getSub(1),
    special: getSpecial(7),
  },
  {
    id: 25,
    name: {
      en: 'Jet Squelcher',
      jp: 'ジェットスイーパー',
    },
    category: 'shooter',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Jet_Squelcher_Flat'}`,
    sub: getSub(14),
    special: getSpecial(5),
  },
  {
    id: 26,
    name: {
      en: 'L-3 Nozzlenose',
      jp: 'L3リールガン',
    },
    category: 'shooter',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_L-3_Nozzlenose_Flat'}`,
    sub: getSub(4),
    special: getSpecial(3),
  },
  {
    id: 27,
    name: {
      en: 'Luna Blaster',
      jp: 'ノヴァブラスター',
    },
    category: 'blaster',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Luna_Blaster_Flat'}`,
    sub: getSub(1),
    special: getSpecial(4),
  },
  {
    id: 28,
    name: {
      en: 'Mini Splatling',
      jp: 'スプラスピナー',
    },
    category: 'splatling',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Mini_Splatling_Flat'}`,
    sub: getSub(3),
    special: getSpecial(13),
  },
  {
    id: 29,
    name: {
      en: 'N-ZAP \'85',
      jp: 'N-ZAP85',
    },
    category: 'shooter',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_N-ZAP_\'85_Flat'}`,
    sub: getSub(2),
    special: getSpecial(9),
  },
  {
    id: 30,
    name: {
      en: 'Nautilus 47',
      jp: 'ノーチラス47',
    },
    category: 'splatling',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Nautilus_47_Flat'}`,
    sub: getSub(8),
    special: getSpecial(4),
  },
  {
    id: 31,
    name: {
      en: 'Octobrush',
      jp: 'ホクサイ',
    },
    category: 'brush',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Octobrush_Flat'}`,
    sub: getSub(2),
    special: getSpecial(15),
  },
  {
    id: 32,
    name: {
      en: 'REEF-LUX 450',
      jp: 'LACT-450',
    },
    category: 'stringer',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_REEF-LUX_450_Flat'}`,
    sub: getSub(4),
    special: getSpecial(10),
  },
  {
    id: 33,
    name: {
      en: 'Range Blaster',
      jp: 'ロングブラスター',
    },
    category: 'blaster',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Range_Blaster_Flat'}`,
    sub: getSub(2),
    special: getSpecial(14),
  },
  {
    id: 34,
    name: {
      en: 'Rapid Blaster',
      jp: 'ラピッドブラスター',
    },
    category: 'blaster',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Rapid_Blaster_Flat'}`,
    sub: getSub(6),
    special: getSpecial(11),
  },
  {
    id: 35,
    name: {
      en: 'Rapid Blaster Pro',
      jp: 'Rブラスターエリート',
    },
    category: 'blaster',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Rapid_Blaster_Pro_Flat'}`,
    sub: getSub(7),
    special: getSpecial(5),
  },
  {
    id: 36,
    name: {
      en: 'Slosher',
      jp: 'バケットスロッシャー',
    },
    category: 'slosher',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Slosher_Flat'}`,
    sub: getSub(1),
    special: getSpecial(11),
  },
  {
    id: 37,
    name: {
      en: 'Sloshing Machine',
      jp: 'スクリュースロッシャー',
    },
    category: 'slosher',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Sloshing_Machine_Flat'}`,
    sub: getSub(12),
    special: getSpecial(2),
  },
  {
    id: 38,
    name: {
      en: 'Splash-o-matic',
      jp: 'シャープマーカー',
    },
    category: 'shooter',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Splash-o-matic_Flat'}`,
    sub: getSub(3),
    special: getSpecial(3),
  },
  {
    id: 39,
    name: {
      en: 'Splat Brella',
      jp: 'パラシェルター',
    },
    category: 'brella',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Splat_Brella_Flat'}`,
    sub: getSub(10),
    special: getSpecial(11),
  },
  {
    id: 40,
    name: {
      en: 'Splat Charger',
      jp: 'スプラチャージャー',
    },
    category: 'charger',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Splat_Charger_Flat'}`,
    sub: getSub(1),
    special: getSpecial(5),
  },
  {
    id: 41,
    name: {
      en: 'Splat Dualies',
      jp: 'スプラマニューバー',
    },
    category: 'dualie',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Splat_Dualies_Flat'}`,
    sub: getSub(2),
    special: getSpecial(3),
  },
  {
    id: 42,
    name: {
      en: 'Splat Roller',
      jp: 'スプラローラー',
    },
    category: 'roller',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Splat_Roller_Flat'}`,
    sub: getSub(4),
    special: getSpecial(1),
  },
  {
    id: 43,
    name: {
      en: 'Splatana Stamper',
      jp: 'ジムワイパー',
    },
    category: 'splatana',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Splatana_Stamper_Flat'}`,
    sub: getSub(3),
    special: getSpecial(15),
  },
  {
    id: 44,
    name: {
      en: 'Splatana Wiper',
      jp: 'ドライブワイパー',
    },
    category: 'splatana',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Splatana_Wiper_Flat'}`,
    sub: getSub(13),
    special: getSpecial(13),
  },
  {
    id: 45,
    name: {
      en: 'Splatterscope',
      jp: 'スプラスコープ',
    },
    category: 'charger',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Splatterscope_Flat'}`,
    sub: getSub(1),
    special: getSpecial(5),
  },
  {
    id: 46,
    name: {
      en: 'Splattershot',
      jp: 'スプラシューター',
    },
    category: 'shooter',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Splattershot_Flat'}`,
    sub: getSub(2),
    special: getSpecial(12),
  },
  {
    id: 47,
    name: {
      en: 'Splattershot Jr.',
      jp: 'わかばシューター',
    },
    category: 'shooter',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Splattershot_Jr._Flat'}`,
    sub: getSub(1),
    special: getSpecial(1),
  },
  {
    id: 48,
    name: {
      en: 'Splattershot Pro',
      jp: 'プライムシューター',
    },
    category: 'shooter',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Splattershot_Pro_Flat'}`,
    sub: getSub(14),
    special: getSpecial(3),
  },
  {
    id: 49,
    name: {
      en: 'Sploosh-o-matic',
      jp: 'ボールドマーカー',
    },
    category: 'shooter',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Sploosh-o-matic_Flat'}`,
    sub: getSub(4),
    special: getSpecial(13),
  },
  {
    id: 50,
    name: {
      en: 'Squeezer',
      jp: 'ボトルガイザー',
    },
    category: 'shooter',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Squeezer_Flat'}`,
    sub: getSub(9),
    special: getSpecial(12),
  },
  {
    id: 51,
    name: {
      en: 'Tenta Brella',
      jp: 'キャンピングシェルター',
    },
    category: 'brella',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Tenta_Brella_Flat'}`,
    sub: getSub(11),
    special: getSpecial(5),
  },
  {
    id: 52,
    name: {
      en: 'Tri-Slosher',
      jp: 'ヒッセン',
    },
    category: 'slosher',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Tri-Slosher_Flat'}`,
    sub: getSub(7),
    special: getSpecial(6),
  },
  {
    id: 53,
    name: {
      en: 'Tri-Stringer',
      jp: 'トライストリンガー',
    },
    category: 'stringer',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Tri-Stringer_Flat'}`,
    sub: getSub(7),
    special: getSpecial(7),
  },
  {
    id: 54,
    name: {
      en: 'Undercover Brella',
      jp: 'スパイガジェット',
    },
    category: 'brella',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Undercover_Brella_Flat'}`,
    sub: getSub(6),
    special: getSpecial(8),
  },
]
