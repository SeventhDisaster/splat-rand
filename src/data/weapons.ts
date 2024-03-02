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

enum Sub {
  SplatBomb = 1,
  SuctionBomb = 2,
  BurstBomb = 3,
  CurlingBomb = 4,
  AutoBomb = 5,
  InkMine = 6,
  ToxicMist = 7,
  PointSensor = 8,
  SplashWall = 9,
  Sprinkler = 10,
  SquidBeakon = 11,
  FizzyBomb = 12,
  Torpedo = 13,
  AngleShooter = 14
}

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
export const getSub = (id: number | Sub) : SubWeapon => {
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
  {
    id: 16,
    name: {
      en: 'Kraken Royale',
      jp: 'テイオウイカ',
    },
    imgUrl: `${process.env.PUBLIC_URL + '/images/specials/S3_Weapon_Special_Kraken_Royale'}`, 
  },
  {
    id: 17,
    name: {
      en: 'Super Chump',
      jp: 'デコイチラシ',
    },
    imgUrl: `${process.env.PUBLIC_URL + '/images/specials/S3_Weapon_Special_Super_Chump'}`, 
  },
  {
    id: 18,
    name: {
      en: 'Splattercolor Screen',
      jp: 'スミナガシート',
    },
    imgUrl: `${process.env.PUBLIC_URL + '/images/specials/S3_Weapon_Special_Splattercolor_Screen'}`, 
  },
  {
    id: 19,
    name: {
      en: 'Triple Splashdown',
      jp: 'スーパーチャクチ',
    },
    imgUrl: `${process.env.PUBLIC_URL + '/images/specials/S3_Weapon_Special_Triple_Splashdown'}`, 
  },
]

enum Special {
  BigBubbler = 1,
  BooyahBomb = 2,
  CrabTank = 3,
  InkStorm = 4,
  InkVac = 5,
  Inkjet = 6, 
  KillerWail = 7,
  Reefslider = 8,
  Tacticooler = 9,
  TentaMissiles = 10,
  TripleInkstrike = 11,
  Trizooka = 12,
  UltraStamp = 13,
  WaveBreaker = 14,
  Zipcaster = 15,
  KrakenRoyale = 16,
  SuperChump = 17,
  SplattercolorScreen = 18,
  TripleSplashdown = 19
}

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
 * * 16 = Kraken Royale
 * * 17 = Super Chump
 * * 18 = Splattercolor Screen
 * * 19 = Triple Splashdown
 * @returns The special that matches the ID
 */
export const getSpecial = (id: number | Special) : SpecialWeapon => {
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
    sub: getSub(Sub.SplashWall),
    special: getSpecial(Special.KillerWail),
  },
  {
    id: 2,
    name: {
      en: '.96 Gal',
      jp: '.96ガロン',
    },
    category: 'shooter',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_.96_Gal_Flat'}`,
    sub: getSub(Sub.Sprinkler),
    special: getSpecial(Special.InkVac),
  },
  {
    id: 3,
    name: {
      en: 'Aerospray MG',
      jp: 'プロモデラーMG',
    },
    category: 'shooter',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Aerospray_MG_Flat'}`,
    sub: getSub(Sub.FizzyBomb),
    special: getSpecial(Special.Reefslider),
  },
  {
    id: 4,
    name: {
      en: 'Ballpoint Splatling',
      jp: 'クーゲルシュライバー',
    },
    category: 'splatling',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Ballpoint_Splatling_Flat'}`,
    sub: getSub(Sub.FizzyBomb),
    special: getSpecial(Special.Inkjet),
  },
  {
    id: 5,
    name: {
      en: 'Bamboozler 14 Mk I',
      jp: '14式竹筒銃・甲',
    },
    category: 'charger',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Bamboozler_14_Mk_I_Flat'}`,
    sub: getSub(Sub.AutoBomb),
    special: getSpecial(Special.KillerWail),
  },
  {
    id: 6,
    name: {
      en: 'Blaster',
      jp: 'ホットブラスター',
    },
    category: 'blaster',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Blaster_Flat'}`,
    sub: getSub(Sub.AutoBomb),
    special: getSpecial(Special.BigBubbler),
  },
  {
    id: 7,
    name: {
      en: 'Bloblobber',
      jp: 'オーバーフロッシャー',
    },
    category: 'slosher',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Bloblobber_Flat'}`,
    sub: getSub(Sub.Sprinkler),
    special: getSpecial(Special.InkStorm),
  },
  {
    id: 8,
    name: {
      en: 'Carbon Roller',
      jp: 'カーボンローラー',
    },
    category: 'roller',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Carbon_Roller_Flat'}`,
    sub: getSub(Sub.AutoBomb),
    special: getSpecial(Special.Zipcaster),
  },
  {
    id: 9,
    name: {
      en: 'Clash Blaster',
      jp: 'クラッシュブラスター',
    },
    category: 'blaster',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Clash_Blaster_Flat'}`,
    sub: getSub(Sub.SplatBomb),
    special: getSpecial(Special.Trizooka),
  },
  {
    id: 10,
    name: {
      en: 'Classic Squiffer',
      jp: 'スクイックリンα',
    },
    category: 'charger',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Classic_Squiffer_Flat'}`,
    sub: getSub(Sub.PointSensor),
    special: getSpecial(Special.BigBubbler),
  },
  {
    id: 11,
    name: {
      en: 'Dapple Dualies',
      jp: 'スパッタリー',
    },
    category: 'dualie',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Dapple_Dualies_Flat'}`,
    sub: getSub(Sub.SquidBeakon),
    special: getSpecial(Special.Tacticooler),
  },
  {
    id: 12,
    name: {
      en: 'Dark Tetra Dualies',
      jp: 'クアッドホッパーブラック',
    },
    category: 'dualie',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Dark_Tetra_Dualies_Flat'}`,
    sub: getSub(Sub.AutoBomb),
    special: getSpecial(Special.Reefslider),
  },
  {
    id: 13,
    name: {
      en: 'Dualie Squelchers',
      jp: 'デュアルスイーパー',
    },
    category: 'dualie',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Dualie_Squelchers_Flat'}`,
    sub: getSub(Sub.SplatBomb),
    special: getSpecial(Special.WaveBreaker),
  },
  {
    id: 14,
    name: {
      en: 'Dynamo Roller',
      jp: 'ダイナモローラー',
    },
    category: 'roller',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Dynamo_Roller_Flat'}`,
    sub: getSub(Sub.Sprinkler),
    special: getSpecial(Special.Tacticooler),
  },
  {
    id: 15,
    name: {
      en: 'E-liter 4K',
      jp: 'リッター4K',
    },
    category: 'charger',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_E-liter_4K_Flat'}`,
    sub: getSub(Sub.InkMine),
    special: getSpecial(Special.WaveBreaker),
  },
  {
    id: 16,
    name: {
      en: 'E-liter 4K Scope',
      jp: '4Kスコープ',
    },
    category: 'charger',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_E-liter_4K_Scope_Flat'}`,
    sub: getSub(Sub.InkMine),
    special: getSpecial(Special.WaveBreaker),
  },
  {
    id: 17,
    name: {
      en: 'Explosher',
      jp: 'エクスプロッシャー',
    },
    category: 'slosher',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Explosher_Flat'}`,
    sub: getSub(Sub.PointSensor),
    special: getSpecial(Special.InkStorm),
  },
  {
    id: 18,
    name: {
      en: 'Flingza Roller',
      jp: 'ヴァリアブルローラー',
    },
    category: 'roller',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Flingza_Roller_Flat'}`,
    sub: getSub(Sub.InkMine),
    special: getSpecial(Special.TentaMissiles),
  },
  {
    id: 19,
    name: {
      en: 'Glooga Dualies',
      jp: 'ケルビン525',
    },
    category: 'dualie',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Glooga_Dualies_Flat'}`,
    sub: getSub(Sub.SplashWall),
    special: getSpecial(Special.BooyahBomb),
  },
  {
    id: 20,
    name: {
      en: 'Goo Tuber',
      jp: 'ソイチューバー',
    },
    category: 'charger',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Goo_Tuber_Flat'}`,
    sub: getSub(Sub.Torpedo),
    special: getSpecial(Special.TentaMissiles),
  },
  {
    id: 21,
    name: {
      en: 'H-3 Nozzlenose',
      jp: 'H3リールガン',
    },
    category: 'shooter',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_H-3_Nozzlenose_Flat'}`,
    sub: getSub(Sub.PointSensor),
    special: getSpecial(Special.Tacticooler),
  },
  {
    id: 22,
    name: {
      en: 'Heavy Splatling',
      jp: 'バレルスピナー',
    },
    category: 'splatling',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Heavy_Splatling_Flat'}`,
    sub: getSub(Sub.Sprinkler),
    special: getSpecial(Special.WaveBreaker),
  },
  {
    id: 23,
    name: {
      en: 'Hero Shot Replica',
      jp: 'ヒーローシューター レプリカ',
    },
    category: 'shooter',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Hero_Shot_Replica_Flat'}`,
    sub: getSub(Sub.SuctionBomb),
    special: getSpecial(Special.Trizooka),
  },
  {
    id: 24,
    name: {
      en: 'Hydra Splatling',
      jp: 'ハイドラント',
    },
    category: 'splatling',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Hydra_Splatling_Flat'}`,
    sub: getSub(Sub.AutoBomb),
    special: getSpecial(Special.BooyahBomb),
  },
  {
    id: 25,
    name: {
      en: 'Inkbrush',
      jp: 'パブロ',
    },
    category: 'brush',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Inkbrush_Flat'}`,
    sub: getSub(Sub.SplatBomb),
    special: getSpecial(Special.KillerWail),
  },
  {
    id: 26,
    name: {
      en: 'Jet Squelcher',
      jp: 'ジェットスイーパー',
    },
    category: 'shooter',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Jet_Squelcher_Flat'}`,
    sub: getSub(Sub.AngleShooter),
    special: getSpecial(Special.InkVac),
  },
  {
    id: 27,
    name: {
      en: 'L-3 Nozzlenose',
      jp: 'L3リールガン',
    },
    category: 'shooter',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_L-3_Nozzlenose_Flat'}`,
    sub: getSub(Sub.CurlingBomb),
    special: getSpecial(Special.CrabTank),
  },
  {
    id: 28,
    name: {
      en: 'Luna Blaster',
      jp: 'ノヴァブラスター',
    },
    category: 'blaster',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Luna_Blaster_Flat'}`,
    sub: getSub(Sub.SplatBomb),
    special: getSpecial(Special.Zipcaster),
  },
  {
    id: 29,
    name: {
      en: 'Mini Splatling',
      jp: 'スプラスピナー',
    },
    category: 'splatling',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Mini_Splatling_Flat'}`,
    sub: getSub(Sub.BurstBomb),
    special: getSpecial(Special.UltraStamp),
  },
  {
    id: 30,
    name: {
      en: 'N-ZAP \'85',
      jp: 'N-ZAP85',
    },
    category: 'shooter',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_N-ZAP_\'85_Flat'}`,
    sub: getSub(Sub.SuctionBomb),
    special: getSpecial(Special.Tacticooler),
  },
  {
    id: 31,
    name: {
      en: 'Nautilus 47',
      jp: 'ノーチラス47',
    },
    category: 'splatling',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Nautilus_47_Flat'}`,
    sub: getSub(Sub.PointSensor),
    special: getSpecial(Special.InkStorm),
  },
  {
    id: 32,
    name: {
      en: 'Octobrush',
      jp: 'ホクサイ',
    },
    category: 'brush',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Octobrush_Flat'}`,
    sub: getSub(Sub.SuctionBomb),
    special: getSpecial(Special.Zipcaster),
  },
  {
    id: 33,
    name: {
      en: 'REEF-LUX 450',
      jp: 'LACT-450',
    },
    category: 'stringer',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_REEF-LUX_450_Flat'}`,
    sub: getSub(Sub.CurlingBomb),
    special: getSpecial(Special.TentaMissiles),
  },
  {
    id: 34,
    name: {
      en: 'Range Blaster',
      jp: 'ロングブラスター',
    },
    category: 'blaster',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Range_Blaster_Flat'}`,
    sub: getSub(Sub.SuctionBomb),
    special: getSpecial(Special.WaveBreaker),
  },
  {
    id: 35,
    name: {
      en: 'Rapid Blaster',
      jp: 'ラピッドブラスター',
    },
    category: 'blaster',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Rapid_Blaster_Flat'}`,
    sub: getSub(Sub.InkMine),
    special: getSpecial(Special.TripleInkstrike),
  },
  {
    id: 36,
    name: {
      en: 'Rapid Blaster Pro',
      jp: 'Rブラスターエリート',
    },
    category: 'blaster',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Rapid_Blaster_Pro_Flat'}`,
    sub: getSub(Sub.ToxicMist),
    special: getSpecial(Special.InkVac),
  },
  {
    id: 37,
    name: {
      en: 'Slosher',
      jp: 'バケットスロッシャー',
    },
    category: 'slosher',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Slosher_Flat'}`,
    sub: getSub(Sub.SplatBomb),
    special: getSpecial(Special.TripleInkstrike),
  },
  {
    id: 38,
    name: {
      en: 'Sloshing Machine',
      jp: 'スクリュースロッシャー',
    },
    category: 'slosher',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Sloshing_Machine_Flat'}`,
    sub: getSub(Sub.FizzyBomb),
    special: getSpecial(Special.BooyahBomb),
  },
  {
    id: 39,
    name: {
      en: 'Splash-o-matic',
      jp: 'シャープマーカー',
    },
    category: 'shooter',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Splash-o-matic_Flat'}`,
    sub: getSub(Sub.BurstBomb),
    special: getSpecial(Special.CrabTank),
  },
  {
    id: 40,
    name: {
      en: 'Splat Brella',
      jp: 'パラシェルター',
    },
    category: 'brella',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Splat_Brella_Flat'}`,
    sub: getSub(Sub.Sprinkler),
    special: getSpecial(Special.TripleInkstrike),
  },
  {
    id: 41,
    name: {
      en: 'Splat Charger',
      jp: 'スプラチャージャー',
    },
    category: 'charger',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Splat_Charger_Flat'}`,
    sub: getSub(Sub.SplatBomb),
    special: getSpecial(Special.InkVac),
  },
  {
    id: 42,
    name: {
      en: 'Splat Dualies',
      jp: 'スプラマニューバー',
    },
    category: 'dualie',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Splat_Dualies_Flat'}`,
    sub: getSub(Sub.SuctionBomb),
    special: getSpecial(Special.CrabTank),
  },
  {
    id: 43,
    name: {
      en: 'Splat Roller',
      jp: 'スプラローラー',
    },
    category: 'roller',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Splat_Roller_Flat'}`,
    sub: getSub(Sub.CurlingBomb),
    special: getSpecial(Special.BigBubbler),
  },
  {
    id: 44,
    name: {
      en: 'Splatana Stamper',
      jp: 'ジムワイパー',
    },
    category: 'splatana',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Splatana_Stamper_Flat'}`,
    sub: getSub(Sub.BurstBomb),
    special: getSpecial(Special.Zipcaster),
  },
  {
    id: 45,
    name: {
      en: 'Splatana Wiper',
      jp: 'ドライブワイパー',
    },
    category: 'splatana',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Splatana_Wiper_Flat'}`,
    sub: getSub(Sub.Torpedo),
    special: getSpecial(Special.UltraStamp),
  },
  {
    id: 46,
    name: {
      en: 'Splatterscope',
      jp: 'スプラスコープ',
    },
    category: 'charger',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Splatterscope_Flat'}`,
    sub: getSub(Sub.SplatBomb),
    special: getSpecial(Special.InkVac),
  },
  {
    id: 47,
    name: {
      en: 'Splattershot',
      jp: 'スプラシューター',
    },
    category: 'shooter',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Splattershot_Flat'}`,
    sub: getSub(Sub.SuctionBomb),
    special: getSpecial(Special.Trizooka),
  },
  {
    id: 48,
    name: {
      en: 'Splattershot Jr.',
      jp: 'わかばシューター',
    },
    category: 'shooter',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Splattershot_Jr._Flat'}`,
    sub: getSub(Sub.SplatBomb),
    special: getSpecial(Special.BigBubbler),
  },
  {
    id: 49,
    name: {
      en: 'Splattershot Pro',
      jp: 'プライムシューター',
    },
    category: 'shooter',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Splattershot_Pro_Flat'}`,
    sub: getSub(Sub.AngleShooter),
    special: getSpecial(Special.CrabTank),
  },
  {
    id: 50,
    name: {
      en: 'Sploosh-o-matic',
      jp: 'ボールドマーカー',
    },
    category: 'shooter',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Sploosh-o-matic_Flat'}`,
    sub: getSub(Sub.CurlingBomb),
    special: getSpecial(Special.UltraStamp),
  },
  {
    id: 51,
    name: {
      en: 'Squeezer',
      jp: 'ボトルガイザー',
    },
    category: 'shooter',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Squeezer_Flat'}`,
    sub: getSub(Sub.SplashWall),
    special: getSpecial(Special.Trizooka),
  },
  {
    id: 52,
    name: {
      en: 'Tenta Brella',
      jp: 'キャンピングシェルター',
    },
    category: 'brella',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Tenta_Brella_Flat'}`,
    sub: getSub(Sub.SquidBeakon),
    special: getSpecial(Special.InkVac),
  },
  {
    id: 53,
    name: {
      en: 'Tri-Slosher',
      jp: 'ヒッセン',
    },
    category: 'slosher',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Tri-Slosher_Flat'}`,
    sub: getSub(Sub.ToxicMist),
    special: getSpecial(Special.Inkjet),
  },
  {
    id: 54,
    name: {
      en: 'Tri-Stringer',
      jp: 'トライストリンガー',
    },
    category: 'stringer',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Tri-Stringer_Flat'}`,
    sub: getSub(Sub.ToxicMist),
    special: getSpecial(Special.KillerWail),
  },
  {
    id: 55,
    name: {
      en: 'Undercover Brella',
      jp: 'スパイガジェット',
    },
    category: 'brella',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Undercover_Brella_Flat'}`,
    sub: getSub(Sub.InkMine),
    special: getSpecial(Special.Reefslider),
  },
  {
    id: 56,
    name: {
      en: 'Splattershot Nova',
      jp: 'スペースシューター',
    },
    category: 'shooter',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Splattershot_Nova_Flat'}`,
    sub: getSub(Sub.PointSensor),
    special: getSpecial(Special.KillerWail),
  },
  {
    id: 57,
    name: {
      en: 'Big Swig Roller',
      jp: 'ワイドローラー',
    },
    category: 'roller',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Big_Swig_Roller_Flat'}`,
    sub: getSub(Sub.SplashWall),
    special: getSpecial(Special.InkVac),
  },
  {
    id: 58,
    name: {
      en: 'Snipewriter 5H',
      jp: 'R-PEN/5H',
    },
    category: 'charger',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Snipewriter_5H_Flat'}`,
    sub: getSub(Sub.Sprinkler),
    special: getSpecial(Special.Tacticooler),
  },
  {
    id: 59,
    name: {
      en: 'Custom Splattershot Jr.',
      jp: 'もみじシューター',
    },
    category: 'shooter',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Custom_Splattershot_Jr._Flat'}`,
    sub: getSub(Sub.Torpedo),
    special: getSpecial(Special.WaveBreaker),
  },
  {
    id: 60,
    name: {
      en: 'Aerospray RG',
      jp: 'プロモデラーRG',
    },
    category: 'shooter',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Aerospray_RG_Flat'}`,
    sub: getSub(Sub.Sprinkler),
    special: getSpecial(Special.BooyahBomb),
  },
  {
    id: 61,
    name: {
      en: 'Tentatek Splattershot',
      jp: 'スプラシューターコラボ',
    },
    category: 'shooter',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Tentatek_Splattershot_Flat'}`,
    sub: getSub(Sub.SplatBomb),
    special: getSpecial(Special.TripleInkstrike),
  },
  {
    id: 62,
    name: {
      en: 'Forge Splattershot Pro',
      jp: 'プライムシューターコラボ',
    },
    category: 'shooter',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Forge_Splattershot_Pro_Flat'}`,
    sub: getSub(Sub.SuctionBomb),
    special: getSpecial(Special.BooyahBomb),
  },
  {
    id: 63,
    name: {
      en: 'Carbon Roller Deco',
      jp: 'カーボンローラーデコ',
    },
    category: 'roller',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Carbon_Roller_Deco_Flat'}`,
    sub: getSub(Sub.BurstBomb),
    special: getSpecial(Special.Trizooka),
  },
  {
    id: 64,
    name: {
      en: 'Slosher Deco',
      jp: 'バケットスロッシャーデコ',
    },
    category: 'slosher',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Slosher_Deco_Flat'}`,
    sub: getSub(Sub.AngleShooter),
    special: getSpecial(Special.Zipcaster),
  },
  {
    id: 65,
    name: {
      en: 'Zink Mini Splatling',
      jp: 'スプラスピナーコラボ',
    },
    category: 'splatling',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Zink_Mini_Splatling_Flat'}`,
    sub: getSub(Sub.ToxicMist),
    special: getSpecial(Special.BigBubbler),
  },
  {
    id: 66,
    name: {
      en: 'Dapple Dualies Nouveau',
      jp: 'スパッタリー・ヒュー',
    },
    category: 'dualie',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Dapple_Dualies_Nouveau_Flat'}`,
    sub: getSub(Sub.Torpedo),
    special: getSpecial(Special.Reefslider),
  },
  {
    id: 67,
    name: {
      en: 'Luna Blaster Neo',
      jp: 'ノヴァブラスターネオ',
    },
    category: 'blaster',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Luna_Blaster_Neo_Flat'}`,
    sub: getSub(Sub.FizzyBomb),
    special: getSpecial(Special.UltraStamp),
  },
  {
    id: 68,
    name: {
      en: 'Inkbrush Nouveau',
      jp: 'パブロ・ヒュー',
    },
    category: 'brush',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Inkbrush_Nouveau_Flat'}`,
    sub: getSub(Sub.InkMine),
    special: getSpecial(Special.UltraStamp),
  },
  {
    id: 69,
    name: {
      en: 'Krak-On Splat Roller',
      jp: 'スプラローラーコラボ',
    },
    category: 'roller',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Krak-On_Splat_Roller_Flat'}`,
    sub: getSub(Sub.SquidBeakon),
    special: getSpecial(Special.KrakenRoyale),
  },
  {
    id: 70,
    name: {
      en: '.96 Gal Deco',
      jp: '.96ガロンデコ',
    },
    category: 'shooter',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_.96_Gal_Deco_Flat'}`,
    sub: getSub(Sub.SplashWall),
    special: getSpecial(Special.KrakenRoyale),
  },
  {
    id: 71,
    name: {
      en: 'N-ZAP \'89',
      jp: 'N-ZAP89',
    },
    category: 'shooter',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_N-ZAP_\'89_Flat'}`,
    sub: getSub(Sub.AutoBomb),
    special: getSpecial(Special.SuperChump),
  },
  {
    id: 72,
    name: {
      en: 'Clash Blaster Neo',
      jp: 'クラッシュブラスターネオ',
    },
    category: 'blaster',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Clash_Blaster_Neo_Flat'}`,
    sub: getSub(Sub.CurlingBomb),
    special: getSpecial(Special.SuperChump),
  },
  {
    id: 73,
    name: {
      en: 'Z+F Splat Charger',
      jp: 'スプラチャージャーコラボ',
    },
    category: 'charger',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Z+F_Splat_Charger_Flat'}`,
    sub: getSub(Sub.SplashWall),
    special: getSpecial(Special.TripleInkstrike),
  },
  {
    id: 74,
    name: {
      en: 'Z+F Splatterscope',
      jp: 'スプラスコープコラボ',
    },
    category: 'charger',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Z+F_Splatterscope_Flat'}`,
    sub: getSub(Sub.SplashWall),
    special: getSpecial(Special.TripleInkstrike),
  },
  {
    id: 75,
    name: {
      en: 'L3 Nozzlenose D',
      jp: 'L3リールガンD',
    },
    category: 'shooter',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_L-3_Nozzlenose_D_Flat'}`,
    sub: getSub(Sub.BurstBomb),
    special: getSpecial(Special.UltraStamp),
  },
  {
    id: 76,
    name: {
      en: 'Rapid Blaster Deco',
      jp: 'ラピッドブラスターデコ',
    },
    category: 'blaster',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Rapid_Blaster_Deco_Flat'}`,
    sub: getSub(Sub.Torpedo),
    special: getSpecial(Special.Inkjet),
  },
  {
    id: 77,
    name: {
      en: 'Neo Splash-o-matic',
      jp: 'シャープマーカーネオ',
    },
    category: 'shooter',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Neo_Splash-o-matic_Flat'}`,
    sub: getSub(Sub.SuctionBomb),
    special: getSpecial(Special.TripleInkstrike),
  },
  {
    id: 78,
    name: {
      en: 'Neo Sploosh-o-matic',
      jp: 'ボールドマーカーネオ',
    },
    category: 'shooter',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Neo_Sploosh-o-matic_Flat'}`,
    sub: getSub(Sub.SquidBeakon),
    special: getSpecial(Special.KillerWail),
  },
  {
    id: 79,
    name: {
      en: 'Custom Jet Squelcher',
      jp: 'ジェットスイーパーカスタム',
    },
    category: 'shooter',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Custom_Jet_Squelcher_Flat'}`,
    sub: getSub(Sub.ToxicMist),
    special: getSpecial(Special.InkStorm),
  },
  {
    id: 80,
    name: {
      en: 'Tri-Slosher Nouveau',
      jp: 'ヒッセン・ヒュー',
    },
    category: 'slosher',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Tri-Slosher_Nouveau_Flat'}`,
    sub: getSub(Sub.FizzyBomb),
    special: getSpecial(Special.Tacticooler),
  },
  {
    id: 81,
    name: {
      en: 'Painbrush',
      jp: 'フィンセント',
    },
    category: 'brush',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Painbrush_Flat'}`,
    sub: getSub(Sub.CurlingBomb),
    special: getSpecial(Special.WaveBreaker),
  },
  {
    id: 82,
    name: {
      en: 'S-BLAST \'92',
      jp: 'S-BLAST92',
    },
    category: 'blaster',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_S-BLAST_\'92_Flat'}`,
    sub: getSub(Sub.Sprinkler),
    special: getSpecial(Special.Reefslider),
  },
  {
    id: 83,
    name: {
      en: 'Tenta Sorella Brella',
      jp: 'キャンピングシェルターソレーラ',
    },
    category: 'brella',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Tenta_Sorella_Brella_Flat'}`,
    sub: getSub(Sub.InkMine),
    special: getSpecial(Special.Trizooka),
  },
  {
    id: 84,
    name: {
      en: 'Custom Dualie Squelchers',
      jp: 'デュアルスイーパーカスタム',
    },
    category: 'dualie',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Custom_Dualie_Squelchers_Flat'}`,
    sub: getSub(Sub.SquidBeakon),
    special: getSpecial(Special.SuperChump),
  },
  {
    id: 85,
    name: {
      en: 'Light Tetra Dualies',
      jp: 'クアッドホッパーホワイト',
    },
    category: 'dualie',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Light_Tetra_Dualies_Flat'}`,
    sub: getSub(Sub.Sprinkler),
    special: getSpecial(Special.Zipcaster),
  },
  {
    id: 86,
    name: {
      en: 'Heavy Splatling Deco',
      jp: 'バレルスピナーデコ',
    },
    category: 'splatling',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Heavy_Splatling_Deco_Flat'}`,
    sub: getSub(Sub.PointSensor),
    special: getSpecial(Special.KrakenRoyale),
  },
  {
    id: 87,
    name: {
      en: 'H-3 Nozzlenose D',
      jp: 'H3リールガンD',
    },
    category: 'shooter',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_H-3_Nozzlenose_D_Flat'}`,
    sub: getSub(Sub.SplashWall),
    special: getSpecial(Special.BigBubbler),
  },
  {
    id: 88,
    name: {
      en: 'Rapid Blaster Pro Deco',
      jp: 'Rブラスターエリートデコ',
    },
    category: 'blaster',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Rapid_Blaster_Pro_Deco_Flat'}`,
    sub: getSub(Sub.AngleShooter),
    special: getSpecial(Special.KillerWail),
  },
  {
    id: 89,
    name: {
      en: 'Splatana Wiper Deco',
      jp: 'ドライブワイパーデコ',
    },
    category: 'splatana',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Splatana_Wiper_Deco_Flat'}`,
    sub: getSub(Sub.SquidBeakon),
    special: getSpecial(Special.TentaMissiles),
  },
  {
    id: 90,
    name: {
      en: 'Annaki Splattershot Nova',
      jp: 'スペースシューターコラボ',
    },
    category: 'shooter',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Annaki_Splattershot_Nova_Flat'}`,
    sub: getSub(Sub.InkMine),
    special: getSpecial(Special.Inkjet),
  },
  {
    id: 91,
    name: {
      en: 'Big Swig roller Express',
      jp: 'ワイドローラーコラボ',
    },
    category: 'roller',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Big_Swig_Roller_Express_Flat'}`,
    sub: getSub(Sub.AngleShooter),
    special: getSpecial(Special.InkStorm),
  },
  {
    id: 92,
    name: {
      en: 'Dread Wringer',
      jp: 'モップリン',
    },
    category: 'slosher',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Dread_Wringer_Flat'}`,
    sub: getSub(Sub.SuctionBomb),
    special: getSpecial(Special.Reefslider),
  },
  {
    id: 93,
    name: {
      en: 'Heavy Edit Splatling',
      jp: 'イグザミナー',
    },
    category: 'splatling',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Heavy_Edit_Splatling_Flat'}`,
    sub: getSub(Sub.CurlingBomb),
    special: getSpecial(Special.Tacticooler),
  },
  {
    id: 94,
    name: {
      en: 'Gold Dynamo Roller',
      jp: 'ダイナモローラーテスラ',
    },
    category: 'roller',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Gold_Dynamo_Roller_Flat'}`,
    sub: getSub(Sub.SplatBomb),
    special: getSpecial(Special.SuperChump),
  },
  {
    id: 95,
    name: {
      en: 'Custom Goo Tuber',
      jp: 'ソイチューバーカスタム',
    },
    category: 'charger',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Custom_Goo_Tuber_Flat'}`,
    sub: getSub(Sub.FizzyBomb),
    special: getSpecial(Special.UltraStamp),
  },
  {
    id: 96,
    name: {
      en: 'Sloshing Machine Neo',
      jp: 'スクリュースロッシャーネオ',
    },
    category: 'slosher',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Sloshing_Machine_Neo_Flat'}`,
    sub: getSub(Sub.PointSensor),
    special: getSpecial(Special.Trizooka),
  },
  {
    id: 97,
    name: {
      en: 'Bloblobber Deco',
      jp: 'オーバーフロッシャーデコ',
    },
    category: 'slosher',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Bloblobber_Deco_Flat'}`,
    sub: getSub(Sub.AngleShooter),
    special: getSpecial(Special.KrakenRoyale),
  },
  {
    id: 98,
    name: {
      en: 'Ballpoint Splatling Nouveau',
      jp: 'クーゲルシュライバー',
    },
    category: 'splatling',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Ballpoint_Splatling_Nouveau_Flat'}`,
    sub: getSub(Sub.InkMine),
    special: getSpecial(Special.InkVac),
  },
  {
    id: 99,
    name: {
      en: 'Sorella Brella',
      jp: 'パラシェルターソレーラ',
    },
    category: 'brella',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Sorella_Brella_Flat'}`,
    sub: getSub(Sub.AutoBomb),
    special: getSpecial(Special.Inkjet),
  },
  {
    id: 100,
    name: {
      en: 'Octobrush Nouveau',
      jp: 'ホクサイ・ヒュー',
    },
    category: 'brush',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Octobrush_Nouveau_Flat'}`,
    sub: getSub(Sub.SquidBeakon),
    special: getSpecial(Special.InkStorm),
  },
  {
    id: 101,
    name: {
      en: 'Inkline Tri-Stringer',
      jp: 'トライストリンガーコラボ',
    },
    category: 'stringer',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Inkline_Tri-Stringer_Flat'}`,
    sub: getSub(Sub.Sprinkler),
    special: getSpecial(Special.SuperChump),
  },
  {
    id: 102,
    name: {
      en: 'Foil Squeezer',
      jp: 'ボトルガイザーフォイル',
    },
    category: 'shooter',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Foil_Squeezer'}`,
    sub: getSub(Sub.AutoBomb),
    special: getSpecial(Special.SplattercolorScreen),
  },
  {
    id: 103,
    name: {
      en: 'Snipewriter 5B',
      jp: 'R-PEN/5B',
    },
    category: 'charger',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Snipewriter_5B'}`,
    sub: getSub(Sub.SplashWall),
    special: getSpecial(Special.InkStorm),
  },
  {
    id: 104,
    name: {
      en: 'Enperry Splat Dualies',
      jp: 'スプラマニューバーコラボ',
    },
    category: 'dualie',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Enperry_Splat_Dualies'}`,
    sub: getSub(Sub.CurlingBomb),
    special: getSpecial(Special.TripleSplashdown),
  },
  {
    id: 105,
    name: {
      en: 'Undercover Sorella Brella',
      jp: 'スパイガジェットソレーラ',
    },
    category: 'brella',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Undercover_Sorella_Brella'}`,
    sub: getSub(Sub.Torpedo),
    special: getSpecial(Special.SplattercolorScreen),
  },
  {
    id: 106,
    name: {
      en: 'Custom Blaster',
      jp: 'ホットブラスターカスタム',
    },
    category: 'blaster',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Custom_Blaster'}`,
    sub: getSub(Sub.PointSensor),
    special: getSpecial(Special.TripleSplashdown),
  },
  {
    id: 107,
    name: {
      en: 'S-BLAST \'91',
      jp: 'S-BLAST91',
    },
    category: 'blaster',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_S-Blast_\'91'}`,
    sub: getSub(Sub.BurstBomb),
    special: getSpecial(Special.BooyahBomb),
  },
  {
    id: 108,
    name: {
      en: 'Painbrush Nouveau',
      jp: 'フィンセント・ヒュー',
    },
    category: 'brush',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Painbrush_Nouveau'}`,
    sub: getSub(Sub.PointSensor),
    special: getSpecial(Special.TentaMissiles),
  },
  {
    id: 109,
    name: {
      en: 'REEF-LUX 450 Deco',
      jp: 'LACT-450デコ',
    },
    category: 'stringer',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_REEF-LUX_450_Deco'}`,
    sub: getSub(Sub.SplashWall),
    special: getSpecial(Special.Reefslider),
  },
  {
    id: 110,
    name: {
      en: 'Neo Splatana Stamper',
      jp: 'ジムワイパー・ヒュー',
    },
    category: 'splatana',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Neo_Splatana_Stamper'}`,
    sub: getSub(Sub.ToxicMist),
    special: getSpecial(Special.CrabTank),
  },
  {
    id: 111,
    name: {
      en: 'Recycled Brella 24 Mk I',
      jp: '24式張替傘・甲',
    },
    category: 'brella',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Recycled_Brella_24_Mk_I_Flat'}`,
    sub: getSub(Sub.AngleShooter),
    special: getSpecial(Special.BigBubbler),
  },
  {
    id: 112,
    name: {
      en: 'Douser Dualies FF',
      jp: 'ガエンFF',
    },
    category: 'dualie',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Douser_Dualies_FF_Flat'}`,
    sub: getSub(Sub.InkMine),
    special: getSpecial(Special.KillerWail),
  },
  {
    id: 113,
    name: {
      en: '.52 Gal Deco',
      jp: '.52ガロンデコ',
    },
    category: 'shooter',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_.52_Gal_Deco_Flat'}`,
    sub: getSub(Sub.CurlingBomb),
    special: getSpecial(Special.SplattercolorScreen),
  },
  {
    id: 114,
    name: {
      en: 'Foil Flingza Roller',
      jp: 'ヴァリアブルローラーフォイル',
    },
    category: 'roller',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Foil_Flingza_Roller_Flat'}`,
    sub: getSub(Sub.SuctionBomb),
    special: getSpecial(Special.SplattercolorScreen),
  },
  {
    id: 113,
    name: {
      en: 'New Squiffer',
      jp: 'スクイックリンβ',
    },
    category: 'charger',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_New_Squiffer_Flat'}`,
    sub: getSub(Sub.AutoBomb),
    special: getSpecial(Special.Zipcaster),
  },
  {
    id: 114,
    name: {
      en: 'Custom E-liter 4K',
      jp: 'リッター4Kカスタム',
    },
    category: 'charger',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Custom_E-liter_4K_Flat'}`,
    sub: getSub(Sub.SquidBeakon),
    special: getSpecial(Special.KrakenRoyale),
  },
  {
    id: 115,
    name: {
      en: 'Custom E-liter 4K Scope',
      jp: '4Kスコープカスタム',
    },
    category: 'charger',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Custom_E-liter_4K_Scope_Flat'}`,
    sub: getSub(Sub.SquidBeakon),
    special: getSpecial(Special.KrakenRoyale),
  },
  {
    id: 116,
    name: {
      en: 'Custom Explosher',
      jp: 'エクスプロッシャーカスタム',
    },
    category: 'slosher',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Custom_Explosher_Flat'}`,
    sub: getSub(Sub.SplashWall),
    special: getSpecial(Special.TripleSplashdown),
  },
  {
    id: 117,
    name: {
      en: 'Dread Wringer D',
      jp: 'モップリンD',
    },
    category: 'slosher',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Dread_Wringer_D_Flat'}`,
    sub: getSub(Sub.SquidBeakon),
    special: getSpecial(Special.WaveBreaker),
  },
  {
    id: 118,
    name: {
      en: 'Nautilus 79',
      jp: 'ノーチラス79',
    },
    category: 'splatling',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Nautilus_79_Flat'}`,
    sub: getSub(Sub.SuctionBomb),
    special: getSpecial(Special.TripleSplashdown),
  },
  {
    id: 119,
    name: {
      en: 'Glooga Dualies Deco',
      jp: 'ケルビン525デコ',
    },
    category: 'dualie',
    imgUrl:  `${process.env.PUBLIC_URL + '/images/weapons/S3_Weapon_Main_Glooga_Dualies_Deco_Flat'}`,
    sub: getSub(Sub.PointSensor),
    special: getSpecial(Special.Trizooka),
  },
]