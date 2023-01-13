export enum SpinRangeName {
  Round = 'Round',
  Stick = 'Stick',
  Fast = 'Fast',
  NoSpin = 'NoSpin',
}

export enum BallCoreType {
  BobSlop = 'BobSlop',
  BouncyLarry = 'BouncyLarry',
  ArmoredBouncyLarry = 'ArmoredBouncyLarry',
  ChargingBouncyLarry = 'ChargingBouncyLarry',
  LaserBouncyLarry = 'LaserBouncyLarry',
  ArrowDick = 'ArrowDick',
  Regular = 'Regular',
}

export enum BubbleModelName {
  nope = 'nope',
  flash = 'flash',
  armor01 = 'armor01',
  armor02 = 'armor02',
  armor03 = 'armor03',
  armor04 = 'armor04',
  armor05 = 'armor05',
  armor10 = 'armor10',
  core = 'core',
  spawning = 'spawning',
  emerald = 'emerald',
  laser = 'laser',

  bossFlap = 'bossFlap',
  bossCore = 'bossCore',
  bossArmor = 'bossArmor',
  bossArrow = 'bossArrow',
}

export type BallModelData = {
  id: string;
  name: string;
  bounceForceY: number;
  spinRanges: SpinRangeName;
  bubbles: BubbleModelName[][];
  coreType: BallCoreType;
};

export type ModelsGroupData = {
  id: string;
  name: string;
  weights: {
    odds: number;
    data: string;
  }[];
}

export type WaveData = {
  id: string;
  subWaves: {
    id: string;
    groups: string[];
  }[]
}
