import * as uuid from 'uuid';
import { BallCoreType, ModelsGroupData, SpinRangeName } from './export-data-types';

const PIXI = {
  utils: {
    uid: () => uuid.v4(),
  },
};

function transpose<T>(array: T[][]): T[][] {
  const result: T[][] = [];

  for (let i = 0; i < array[0].length; i++) {
    result[i] = [];
  }

  for (let row = 0; row < array.length; row++) {
    for (let col = 0; col < array[row].length; col++) {
      result[col][row] = array[row][col];
    }
  }

  return result;
}

const nop = 'nope';
const fsh = 'flash';
const a01 = 'armor01';
const a02 = 'armor02';
const a03 = 'armor03';
const a04 = 'armor04';
const a05 = 'armor05';
const a10 = 'armor10';
const cor = 'core';
const spw = 'spawning';
const emd = 'emerald';
const lsr = 'laser';
const dvr = 'bossFlap';
const bcr = 'bossCore';
const sba = 'bossArmor';
const arw = 'bossArrow';

const bigBounceForceY = -1.4;
const smallBounceForceY = -1.4;

const roundSpinRanges = SpinRangeName.Round;

const stickSpinRanges = SpinRangeName.Stick;

const fastSpinRanges = SpinRangeName.Fast;

const ftueBallModel = {
  id: PIXI.utils.uid(),
  name: 'ftueBallModel',
  bounceForceY: bigBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, nop, nop, nop, nop, fsh, fsh, fsh, fsh, fsh, nop, nop, nop, nop, nop],
    [nop, nop, nop, nop, fsh, fsh, fsh, fsh, fsh, fsh, fsh, nop, nop, nop, nop],
    [nop, nop, nop, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, nop, nop, nop],
    [nop, nop, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, nop, nop],
    [nop, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, nop],
    [fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh],
    [fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh],
    [fsh, fsh, fsh, fsh, fsh, fsh, fsh, cor, fsh, fsh, fsh, fsh, fsh, fsh, fsh],
    [fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh],
    [fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh],
    [nop, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, nop],
    [nop, nop, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, nop, nop],
    [nop, nop, nop, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, nop, nop, nop],
    [nop, nop, nop, nop, fsh, fsh, fsh, fsh, fsh, fsh, fsh, nop, nop, nop, nop],
    [nop, nop, nop, nop, nop, fsh, fsh, fsh, fsh, fsh, nop, nop, nop, nop, nop],
  ]),
};

const spawnBubbleEnemy = {
  id: PIXI.utils.uid(),
  name: 'spawnBubbleEnemy',
  bounceForceY: smallBounceForceY,
  spinRanges: stickSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [a05, a05, a05],
    [a05, cor, a05],
    [a01, a01, a01],
    [a01, a01, a01],
    [a01, a01, a01],
    [a01, a01, a01],
  ]),
};

const fiveXFiveDefaultVar0 = {
  id: PIXI.utils.uid(),
  name: 'fiveXFiveDefaultVar0',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [a01, a01, a01, a01, a01],
    [a01, a01, a01, a01, a01],
    [a01, a01, cor, a01, a01],
    [a01, a01, a01, a01, a01],
    [a01, a01, a01, a01, a01],
  ]),
};

const fiveXFiveDefaultVar1 = {
  id: PIXI.utils.uid(),
  name: 'fiveXFiveDefaultVar1',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [a01, a01, a01, a01, a01],
    [a01, a01, a01, a01, a01],
    [a01, fsh, cor, fsh, a01],
    [a01, a01, a01, a01, a01],
    [a01, a01, a01, a01, a01],
  ]),
};

const fiveXFiveArm1Var0 = {
  id: PIXI.utils.uid(),
  name: 'fiveXFiveArm1Var0',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [a05, a05, a05, a05, a05],
    [a01, a01, a01, a01, a01],
    [a01, a01, cor, a01, a01],
    [a01, a01, a01, a01, a01],
    [a05, a05, a05, a05, a05],
  ]),
};

const fiveXFiveArm1Var1 = {
  id: PIXI.utils.uid(),
  name: 'fiveXFiveArm1Var1',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [a05, a05, a05, a05, a05],
    [a01, a01, fsh, a01, a01],
    [a01, fsh, cor, fsh, a01],
    [a01, a01, fsh, a01, a01],
    [a05, a05, a05, a05, a05],
  ]),
};

const fiveXFiveArm2Var0 = {
  id: PIXI.utils.uid(),
  name: 'fiveXFiveArm2Var0',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [a05, a05, a05, a05, a05],
    [a05, a01, a01, a01, a05],
    [a01, a01, cor, a01, a01],
    [a05, a01, a01, a01, a05],
    [a05, a05, a05, a05, a05],
  ]),
};

const fiveXFiveArm2Var1 = {
  id: PIXI.utils.uid(),
  name: 'fiveXFiveArm2Var1',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [a05, a05, a05, a05, a05],
    [a05, fsh, fsh, fsh, a05],
    [a01, fsh, cor, fsh, a01],
    [a05, fsh, fsh, fsh, a05],
    [a05, a05, a05, a05, a05],
  ]),
};

const nineXNineDefaultVar0 = {
  id: PIXI.utils.uid(),
  name: 'nineXNineDefaultVar0',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, a01, a01, a01, a01, a01, a01, a01, nop],
    [a01, a01, a01, a01, a01, a01, a01, a01, a01],
    [a01, a01, a01, a01, a01, a01, a01, a01, a01],
    [a01, a01, a01, a01, a01, a01, a01, a01, a01],
    [a01, a01, a01, a01, cor, a01, a01, a01, a01],
    [a01, a01, a01, a01, a01, a01, a01, a01, a01],
    [a01, a01, a01, a01, a01, a01, a01, a01, a01],
    [a01, a01, a01, a01, a01, a01, a01, a01, a01],
    [nop, a01, a01, a01, a01, a01, a01, a01, nop],
  ]),
};

const nineXNineDefaultVar1 = {
  id: PIXI.utils.uid(),
  name: 'nineXNineDefaultVar1',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, a01, a01, a01, a01, a01, a01, a01, nop],
    [a01, a01, a01, a01, a01, a01, a01, a01, a01],
    [a01, a01, fsh, a01, a01, a01, fsh, a01, a01],
    [a01, a01, a01, fsh, a01, fsh, a01, a01, a01],
    [a01, a01, a01, a01, cor, a01, a01, a01, a01],
    [a01, a01, a01, fsh, a01, fsh, a01, a01, a01],
    [a01, a01, fsh, a01, a01, a01, fsh, a01, a01],
    [a01, a01, a01, a01, a01, a01, a01, a01, a01],
    [nop, a01, a01, a01, a01, a01, a01, a01, nop],
  ]),
};

const nineXNineArmVar0 = {
  id: PIXI.utils.uid(),
  name: 'nineXNineArmVar0',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, a05, a05, a05, a05, a05, a05, a05, nop],
    [a05, a01, a01, a01, a01, a01, a01, a01, a05],
    [a05, a01, a01, a01, a01, a01, a01, a01, a05],
    [a05, a01, a01, a01, a01, a01, a01, a01, a05],
    [a05, a01, a01, a01, cor, a01, a01, a01, a05],
    [a05, a01, a01, a01, a01, a01, a01, a01, a05],
    [a05, a01, a01, a01, a01, a01, a01, a01, a05],
    [a05, a01, a01, a01, a01, a01, a01, a01, a05],
    [nop, a05, a05, a05, a05, a05, a05, a05, nop],
  ]),
};

const nineXNineArmVar1 = {
  id: PIXI.utils.uid(),
  name: 'nineXNineArmVar1',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, a05, a05, a05, a05, a05, a05, a05, nop],
    [a05, fsh, a01, a01, a01, a01, a01, fsh, a05],
    [a05, a01, fsh, a01, fsh, a01, fsh, a01, a05],
    [a05, a01, a01, fsh, a01, fsh, a01, a01, a05],
    [a05, a01, fsh, a01, cor, a01, fsh, a01, a05],
    [a05, a01, a01, fsh, a01, fsh, a01, a01, a05],
    [a05, a01, fsh, a01, fsh, a01, fsh, a01, a05],
    [a05, fsh, a01, a01, a01, a01, a01, fsh, a05],
    [nop, a05, a05, a05, a05, a05, a05, a05, nop],
  ]),
};

const nineXNineSuperArmVar0 = {
  id: PIXI.utils.uid(),
  name: 'nineXNineSuperArmVar0',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, a10, a10, a10, a10, a10, a10, a10, nop],
    [a10, a01, a01, a01, a01, a01, a01, a01, a10],
    [a10, a01, a01, a01, a01, a01, a01, a01, a10],
    [a10, a01, a01, a01, a01, a01, a01, a01, a10],
    [a10, a01, a01, a01, cor, a01, a01, a01, a10],
    [a10, a01, a01, a01, a01, a01, a01, a01, a10],
    [a10, a01, a01, a01, a01, a01, a01, a01, a10],
    [a10, a01, a01, a01, a01, a01, a01, a01, a10],
    [nop, a10, a10, a10, a10, a10, a10, a10, nop],
  ]),
};

const nineXNineSuperArmVar1 = {
  id: PIXI.utils.uid(),
  name: 'nineXNineSuperArmVar1',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, a10, a10, a10, a10, a10, a10, a10, nop],
    [a10, fsh, a01, fsh, a01, fsh, a01, fsh, a10],
    [a10, a01, fsh, fsh, fsh, fsh, fsh, a01, a10],
    [a10, fsh, fsh, fsh, a01, fsh, fsh, fsh, a10],
    [a10, a01, fsh, a01, cor, a01, fsh, a01, a10],
    [a10, fsh, fsh, fsh, a01, fsh, fsh, fsh, a10],
    [a10, a01, fsh, fsh, fsh, fsh, fsh, a01, a10],
    [a10, fsh, a01, fsh, a01, fsh, a01, fsh, a10],
    [nop, a10, a10, a10, a10, a10, a10, a10, nop],
  ]),
};

const nineXNineSuperArmVar2 = {
  id: PIXI.utils.uid(),
  name: 'nineXNineSuperArmVar2',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, a10, a10, a10, a10, a10, a10, a10, nop],
    [a10, fsh, a01, fsh, a01, fsh, a01, fsh, a10],
    [a05, a01, fsh, fsh, fsh, fsh, fsh, a01, spw],
    [spw, fsh, fsh, fsh, a01, fsh, fsh, fsh, a05],
    [a05, a01, fsh, a01, cor, a01, fsh, a01, a05],
    [a05, fsh, fsh, fsh, a01, fsh, fsh, fsh, a05],
    [a05, a01, fsh, fsh, fsh, fsh, fsh, a01, spw],
    [a10, fsh, a01, fsh, a01, fsh, a01, fsh, a10],
    [nop, a10, a10, a10, a10, a10, a10, a10, nop],
  ]),
};

const elevXElevDefaultVar0 = {
  id: PIXI.utils.uid(),
  name: 'elevXElevDefaultVar0',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, a05, a05, a05, a05, a05, a05, a05, a05, a05, nop],
    [a05, a01, a01, a01, a01, a01, a01, a01, a01, a01, a05],
    [a05, a01, a01, a01, a01, a01, a01, a01, a01, a01, a05],
    [a05, a01, a01, a01, a01, a01, a01, a01, a01, a01, a05],
    [a05, a01, a01, a01, a01, a01, a01, a01, a01, a01, a05],
    [a05, a01, a01, a01, a01, cor, a01, a01, a01, a01, a05],
    [a05, a01, a01, a01, a01, a01, a01, a01, a01, a01, a05],
    [a05, a01, a01, a01, a01, a01, a01, a01, a01, a01, a05],
    [a05, a01, a01, a01, a01, a01, a01, a01, a01, a01, a05],
    [a05, a01, a01, a01, a01, a01, a01, a01, a01, a01, a05],
    [nop, a05, a05, a05, a05, a05, a05, a05, a05, a05, nop],
  ]),
};

const elevXElevDefaultVar1 = {
  id: PIXI.utils.uid(),
  name: 'elevXElevDefaultVar1',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, a05, a05, a05, a05, a05, a05, a05, a05, a05, nop],
    [a05, a01, a01, a01, a01, a01, a01, a01, a01, a01, a05],
    [a05, a01, a01, a01, a01, fsh, a01, a01, a01, a01, a05],
    [a05, a01, a01, fsh, a01, a01, a01, fsh, a01, a01, a05],
    [a05, a01, a01, a01, fsh, fsh, fsh, a01, a01, a01, a05],
    [a05, a01, fsh, a01, fsh, cor, fsh, a01, fsh, a01, a05],
    [a05, a01, a01, a01, fsh, fsh, fsh, a01, a01, a01, a05],
    [a05, a01, a01, fsh, a01, a01, a01, fsh, a01, a01, a05],
    [a05, a01, a01, a01, a01, fsh, a01, a01, a01, a01, a05],
    [a05, a01, a01, a01, a01, a01, a01, a01, a01, a01, a05],
    [nop, a05, a05, a05, a05, a05, a05, a05, a05, a05, nop],
  ]),
};

const elevXElevSuperArmVar0 = {
  id: PIXI.utils.uid(),
  name: 'elevXElevSuperArmVar0',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, a10, a10, a10, a10, a10, a10, a10, a10, a10, nop],
    [a10, a01, a01, a01, a01, a01, a01, a01, a01, a01, a10],
    [a10, a01, a01, a01, a01, a01, a01, a01, a01, a01, a10],
    [a10, a01, a01, a01, a01, a01, a01, a01, a01, a01, a10],
    [a10, a01, a01, a01, a01, a01, a01, a01, a01, a01, a05],
    [a10, a01, a01, a01, a01, cor, a01, a01, a01, a01, a05],
    [a10, a01, a01, a01, a01, a01, a01, a01, a01, a01, a05],
    [a10, a01, a01, a01, a01, a01, a01, a01, a01, a01, a10],
    [a10, a01, a01, a01, a01, a01, a01, a01, a01, a01, a10],
    [a10, a01, a01, a01, a01, a01, a01, a01, a01, a01, a10],
    [nop, a10, a10, a10, a10, a10, a10, a10, a10, a10, nop],
  ]),
};

const elevXElevSuperArmVar1 = {
  id: PIXI.utils.uid(),
  name: 'elevXElevSuperArmVar1',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, a10, a10, a10, a10, a10, a10, a10, a10, a10, nop],
    [a10, fsh, a01, a01, a01, a01, a01, a01, a01, fsh, a10],
    [a10, a01, fsh, a01, fsh, fsh, fsh, a01, fsh, a01, a10],
    [a10, a01, a01, fsh, a01, a01, a01, fsh, a01, a01, a10],
    [a10, a01, fsh, a01, fsh, fsh, fsh, a01, fsh, a01, a05],
    [a10, a01, fsh, a01, fsh, cor, fsh, a01, fsh, a01, a05],
    [a10, a01, fsh, a01, fsh, fsh, fsh, a01, fsh, a01, a05],
    [a10, a01, a01, fsh, a01, a01, a01, fsh, a01, a01, a10],
    [a10, a01, fsh, a01, fsh, fsh, fsh, a01, fsh, a01, a10],
    [a10, fsh, a01, a01, a01, a01, a01, a01, a01, fsh, a10],
    [nop, a10, a10, a10, a10, a10, a10, a10, a10, a10, nop],
  ]),
};

const elevXElevSuperArmTwoVar0 = {
  id: PIXI.utils.uid(),
  name: 'elevXElevSuperArmTwoVar0',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, a10, a10, a10, a10, a10, a10, a10, a10, a10, nop],
    [a10, a10, a01, a10, a10, a01, a10, a10, a01, fsh, a10],
    [a10, a01, a01, a01, a01, a01, a01, a01, a01, a01, a10],
    [a10, a10, a01, a01, a01, a01, a01, a01, a01, a10, a10],
    [a10, a10, a01, a01, a01, a01, a01, a01, a01, a10, a05],
    [a10, a01, a01, a01, a01, cor, a01, a01, a01, a01, a05],
    [a10, a10, a01, a01, a01, a01, a01, a01, a01, a10, a05],
    [a10, a10, a01, a01, a01, a01, a01, a01, a01, a10, a10],
    [a10, a01, a01, a01, a01, a01, a01, a01, a01, a01, a10],
    [a10, a10, a01, a10, a10, a01, a10, a10, a01, a10, a10],
    [nop, a10, a10, a10, a10, a10, a10, a10, a10, a10, nop],
  ]),
};

const elevXElevSuperArmTwoVar1 = {
  id: PIXI.utils.uid(),
  name: 'elevXElevSuperArmTwoVar1',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, a10, a10, a10, a10, a10, a10, a10, a10, a10, nop],
    [a10, a10, fsh, a10, a10, fsh, a10, a10, fsh, fsh, a10],
    [a10, fsh, fsh, a01, fsh, fsh, fsh, a01, fsh, fsh, a10],
    [a10, a10, a01, fsh, a01, fsh, a01, fsh, a01, a10, a10],
    [a10, a10, fsh, a01, fsh, fsh, fsh, a01, fsh, a10, a05],
    [a10, fsh, fsh, fsh, fsh, cor, fsh, fsh, fsh, fsh, a05],
    [a10, a10, fsh, a01, fsh, fsh, fsh, a01, fsh, a10, a05],
    [a10, a10, a01, fsh, a01, fsh, a01, fsh, a01, a10, a10],
    [a10, fsh, fsh, a01, fsh, fsh, fsh, a01, fsh, fsh, a10],
    [a10, a10, fsh, a10, a10, fsh, a10, a10, fsh, a10, a10],
    [nop, a10, a10, a10, a10, a10, a10, a10, a10, a10, nop],
  ]),
};

const threeXElevDefaultVar0 = {
  id: PIXI.utils.uid(),
  name: 'threeXElevDefaultVar0',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, a01, a01, a01, a01, a01, a01, a01, a01, a01, nop],
    [a01, a01, a01, a01, a01, cor, a01, a01, a01, a01, a01],
    [nop, a01, a01, a01, a01, a01, a01, a01, a01, a01, nop],
  ]),
};

const threeXElevDefaultVar1 = {
  id: PIXI.utils.uid(),
  name: 'threeXElevDefaultVar1',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, a01, a01, a01, a01, a01, a01, a01, a01, a01, nop],
    [a01, a01, a01, a01, fsh, cor, fsh, a01, a01, a01, a01],
    [nop, a01, a01, a01, a01, a01, a01, a01, a01, a01, nop],
  ]),
};

const threeXElevArmVar0 = {
  id: PIXI.utils.uid(),
  name: 'threeXElevArmVar0',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, a01, a01, a05, a05, a05, a05, a05, a01, a01, nop],
    [a01, a01, a01, a01, a01, cor, a01, a01, a01, a01, a01],
    [nop, a01, a01, a01, a01, a01, a01, a01, a01, a01, nop],
  ]),
};

const threeXElevArmVar1 = {
  id: PIXI.utils.uid(),
  name: 'threeXElevArmVar1',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, a01, a01, a05, a05, a05, a05, a05, a01, a01, nop],
    [a01, a01, a01, fsh, fsh, cor, fsh, fsh, a01, a01, a01],
    [nop, a01, a01, a01, a01, a01, a01, a01, a01, a01, nop],
  ]),
};

const threeXElevArmTwoVar0 = {
  id: PIXI.utils.uid(),
  name: 'threeXElevArmTwoVar0',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, a05, a05, a05, a05, a05, a05, a05, a05, a05, nop],
    [a05, a01, a01, a01, a01, cor, a01, a01, a01, a01, a05],
    [nop, a05, a05, a05, a01, a01, a01, a05, a05, a05, nop],
  ]),
};

const threeXElevArmTwoVar1 = {
  id: PIXI.utils.uid(),
  name: 'threeXElevArmTwoVar1',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, a05, a05, a05, a05, a05, a05, a05, a05, a05, nop],
    [a05, fsh, fsh, fsh, fsh, cor, fsh, fsh, fsh, fsh, a05],
    [nop, a05, a05, a05, a01, a01, a01, a05, a05, a05, nop],
  ]),
};

const fiveXSeveteenDefaultVar0 = {
  id: PIXI.utils.uid(),
  name: 'fiveXSeveteenDefaultVar0',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, nop, nop, nop, nop, a01, a01, a01, a01, a01, a01, a01, nop, nop, nop, nop, nop],
    [nop, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, nop],
    [a01, a01, a01, a01, a01, a01, a01, a01, cor, a01, a01, a01, a01, a01, a01, a01, a01],
    [nop, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, nop],
    [nop, nop, nop, nop, nop, a01, a01, a01, a01, a01, a01, a01, nop, nop, nop, nop, nop],
  ]),
};

const fiveXSeveteenDefaultVar1 = {
  id: PIXI.utils.uid(),
  name: 'fiveXSeveteenDefaultVar1',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, nop, nop, nop, nop, a01, a01, a01, a01, a01, a01, a01, nop, nop, nop, nop, nop],
    [nop, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, nop],
    [a01, a01, a01, a01, a01, fsh, a01, fsh, cor, fsh, a01, fsh, a01, a01, a01, a01, a01],
    [nop, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, nop],
    [nop, nop, nop, nop, nop, a01, a01, a01, a01, a01, a01, a01, nop, nop, nop, nop, nop],
  ]),
};

const fiveXSeveteenArmVar0 = {
  id: PIXI.utils.uid(),
  name: 'fiveXSeveteenArmVar0',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, nop, nop, nop, nop, a05, a05, a05, a05, a05, a05, a05, nop, nop, nop, nop, nop],
    [nop, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, nop],
    [a01, a01, a01, a01, a01, a01, a01, a01, cor, a01, a01, a01, a01, a01, a01, a01, a01],
    [nop, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, nop],
    [nop, nop, nop, nop, nop, a05, a05, a05, a05, a05, a05, a05, nop, nop, nop, nop, nop],
  ]),
};

const fiveXSeveteenArmVar1 = {
  id: PIXI.utils.uid(),
  name: 'fiveXSeveteenArmVar1',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, nop, nop, nop, nop, a05, a05, a05, a05, a05, a05, a05, nop, nop, nop, nop, nop],
    [nop, a01, a01, a01, a01, a01, a01, a01, fsh, a01, a01, a01, a01, a01, a01, a01, nop],
    [a01, a01, a01, a01, fsh, fsh, a01, fsh, cor, fsh, a01, fsh, fsh, a01, a01, a01, a01],
    [nop, a01, a01, a01, a01, a01, a01, a01, fsh, a01, a01, a01, a01, a01, a01, a01, nop],
    [nop, nop, nop, nop, nop, a05, a05, a05, a05, a05, a05, a05, nop, nop, nop, nop, nop],
  ]),
};

const fiveXSeveteenArmTwoVar0 = {
  id: PIXI.utils.uid(),
  name: 'fiveXSeveteenArmTwoVar0',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, nop, nop, nop, nop, a05, a05, a05, a05, a05, a05, a05, nop, nop, nop, nop, nop],
    [nop, a05, a05, a05, a05, a05, a05, a01, a01, a01, a05, a05, a05, a05, a05, a05, nop],
    [a05, a01, a01, a01, a01, a01, a01, a01, cor, a01, a01, a01, a01, a01, a01, a01, a05],
    [nop, a05, a05, a05, a05, a05, a05, a01, a01, a01, a05, a05, a05, a05, a05, a05, nop],
    [nop, nop, nop, nop, nop, a05, a05, a01, a01, a01, a05, a05, nop, nop, nop, nop, nop],
  ]),
};

const fiveXSeveteenArmTwoVar1 = {
  id: PIXI.utils.uid(),
  name: 'fiveXSeveteenArmTwoVar1',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, nop, nop, nop, nop, a05, a05, a05, a05, a05, a05, a05, nop, nop, nop, nop, nop],
    [nop, a05, a05, a05, a05, a05, a05, fsh, fsh, fsh, a05, a05, a05, a05, a05, a05, nop],
    [a05, a01, a01, fsh, fsh, fsh, fsh, fsh, cor, fsh, fsh, fsh, fsh, fsh, a01, a01, a05],
    [nop, a05, a05, a05, a05, a05, a05, fsh, fsh, fsh, a05, a05, a05, a05, a05, a05, nop],
    [nop, nop, nop, nop, nop, a05, a05, a01, a01, a01, a05, a05, nop, nop, nop, nop, nop],
  ]),
};

const fiveXSeveteenSuperArmTwoVar0 = {
  id: PIXI.utils.uid(),
  name: 'fiveXSeveteenSuperArmTwoVar0',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, nop, nop, nop, nop, a10, a10, a10, a10, a10, a10, a10, nop, nop, nop, nop, nop],
    [nop, a10, a10, a10, a10, a01, a01, a01, a01, a01, a01, a01, a10, a10, a10, a10, nop],
    [a10, a01, a01, a01, a01, a01, a01, a01, cor, a01, a01, a01, a01, a01, a01, a01, a10],
    [nop, a10, a10, a10, a10, a01, a01, a01, a01, a01, a01, a01, a10, a10, a10, a10, nop],
    [nop, nop, nop, nop, nop, a10, a10, a05, a05, a05, a10, a10, nop, nop, nop, nop, nop],
  ]),
};

const fiveXSeveteenSuperArmTwoVar1 = {
  id: PIXI.utils.uid(),
  name: 'fiveXSeveteenSuperArmTwoVar1',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, nop, nop, nop, nop, a10, a10, a10, a10, a10, a10, a10, nop, nop, nop, nop, nop],
    [nop, a10, a10, a10, a10, fsh, fsh, fsh, fsh, fsh, fsh, fsh, a10, a10, a10, a10, nop],
    [a10, fsh, fsh, fsh, fsh, fsh, fsh, fsh, cor, fsh, fsh, fsh, fsh, fsh, fsh, fsh, a10],
    [nop, a10, a10, a10, a10, fsh, fsh, fsh, fsh, fsh, fsh, fsh, a10, a10, a10, a10, nop],
    [nop, nop, nop, nop, nop, a10, a10, a05, a05, a05, a10, a10, nop, nop, nop, nop, nop],
  ]),
};

const sevenXTwentyoneDefaultVar0 = {
  id: PIXI.utils.uid(),
  name: 'sevenXTwentyoneDefaultVar0',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, nop, nop, nop, nop, nop, a01, a01, a01, a01, a01, a01, a01, a01, a01, nop, nop, nop, nop, nop, nop],
    [nop, nop, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, nop, nop],
    [nop, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, nop],
    [a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, cor, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01],
    [nop, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, nop],
    [nop, nop, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, nop, nop],
    [nop, nop, nop, nop, nop, nop, a01, a01, a01, a01, a01, a01, a01, a01, a01, nop, nop, nop, nop, nop, nop],
  ]),
};

const sevenXTwentyoneDefaultVar1 = {
  id: PIXI.utils.uid(),
  name: 'sevenXTwentyoneDefaultVar1',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, nop, nop, nop, nop, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, nop, nop, nop, nop, nop, nop],
    [nop, nop, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, nop, nop],
    [nop, a01, a01, a01, a01, a01, a01, a01, a01, a01, fsh, a01, a01, a01, a01, a01, a01, a01, a01, a01, nop],
    [a01, a01, a01, a01, a01, a01, fsh, fsh, a01, fsh, cor, fsh, a01, fsh, fsh, a01, a01, a01, a01, a01, a01],
    [nop, a01, a01, a01, a01, a01, a01, a01, a01, a01, fsh, a01, a01, a01, a01, a01, a01, a01, a01, a01, nop],
    [nop, nop, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, nop, nop],
    [nop, nop, nop, nop, nop, nop, a01, a01, a01, a01, a01, a01, a01, a01, a01, nop, nop, nop, nop, nop, nop],
  ]),
};

const sevenXTwentyoneArmVar0 = {
  id: PIXI.utils.uid(),
  name: 'sevenXTwentyoneArmVar0',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, nop, nop, nop, nop, a01, a05, a05, a05, a05, a05, a05, a05, a05, a05, nop, nop, nop, nop, nop, nop],
    [nop, nop, a05, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a05, nop, nop],
    [nop, a05, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a05, nop],
    [a05, a01, a01, a01, a01, a01, a01, a01, a01, a01, cor, a01, a01, a01, a01, a01, a01, a01, a01, a01, a05],
    [nop, a05, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a05, nop],
    [nop, nop, a05, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a05, nop, nop],
    [nop, nop, nop, nop, nop, nop, a05, a05, a05, a05, a05, a05, a05, a05, a05, nop, nop, nop, nop, nop, nop],
  ]),
};

const sevenXTwentyoneArmVar1 = {
  id: PIXI.utils.uid(),
  name: 'sevenXTwentyoneArmVar1',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, nop, nop, nop, nop, a01, a05, a05, a05, a05, a05, a05, a05, a05, a05, nop, nop, nop, nop, nop, nop],
    [nop, nop, a05, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a05, nop, nop],
    [nop, a05, a01, a01, a01, fsh, a01, a01, a01, a01, fsh, a01, a01, a01, a01, fsh, a01, a01, a01, a05, nop],
    [a05, a01, a01, a01, a01, a01, fsh, fsh, a01, fsh, cor, fsh, a01, fsh, fsh, a01, a01, a01, a01, a01, a05],
    [nop, a05, a01, a01, a01, fsh, a01, a01, a01, a01, fsh, a01, a01, a01, a01, fsh, a01, a01, a01, a05, nop],
    [nop, nop, a05, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a05, nop, nop],
    [nop, nop, nop, nop, nop, nop, a05, a05, a05, a05, a05, a05, a05, a05, a05, nop, nop, nop, nop, nop, nop],
  ]),
};

const sevenXTwentyoneArmTwoVar0 = {
  id: PIXI.utils.uid(),
  name: 'sevenXTwentyoneArmTwoVar0',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, nop, nop, nop, nop, a01, a05, a05, a05, a05, a05, a05, a05, a05, a05, nop, nop, nop, nop, nop, nop],
    [nop, nop, a05, a05, a05, a05, a01, a01, a01, a01, a01, a01, a01, a01, a01, a05, a05, a05, a05, nop, nop],
    [nop, a05, a05, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a05, a05, nop],
    [a05, a01, a05, a01, a01, a01, a01, a01, a01, a01, cor, a01, a01, a01, a01, a01, a01, a01, a05, a01, a05],
    [nop, a05, a05, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a05, a05, nop],
    [nop, nop, a05, a05, a05, a05, a01, a01, a01, a01, a01, a01, a01, a01, a01, a05, a05, a05, a05, nop, nop],
    [nop, nop, nop, nop, nop, nop, a05, a05, a05, a05, a05, a05, a05, a05, a05, nop, nop, nop, nop, nop, nop],
  ]),
};

const sevenXTwentyoneArmTwoVar1 = {
  id: PIXI.utils.uid(),
  name: 'sevenXTwentyoneArmTwoVar1',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, nop, nop, nop, nop, a01, a05, a05, a05, a05, a05, a05, a05, a05, a05, nop, nop, nop, nop, nop, nop],
    [nop, nop, a05, a05, a05, a05, a01, a01, a01, fsh, a01, fsh, a01, a01, a01, a05, a05, a05, a05, nop, nop],
    [nop, a05, a05, a01, a01, fsh, a01, fsh, a01, a01, fsh, a01, a01, fsh, a01, fsh, a01, a01, a05, a05, nop],
    [a05, a01, a05, a01, a01, a01, fsh, fsh, a01, fsh, cor, fsh, a01, fsh, fsh, a01, a01, a01, a05, a01, a05],
    [nop, a05, a05, a01, a01, fsh, a01, fsh, a01, a01, fsh, a01, a01, fsh, a01, fsh, a01, a01, a05, a05, nop],
    [nop, nop, a05, a05, a05, a05, a01, a01, a01, fsh, a01, fsh, a01, a01, a01, a05, a05, a05, a05, nop, nop],
    [nop, nop, nop, nop, nop, nop, a05, a05, a05, a05, a05, a05, a05, a05, a05, nop, nop, nop, nop, nop, nop],
  ]),
};

const sevenXTwentyoneSuperArmVar0 = {
  id: PIXI.utils.uid(),
  name: 'sevenXTwentyoneSuperArmVar0',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, nop, nop, nop, nop, a01, a10, a10, a10, a10, a10, a10, a10, a10, a10, nop, nop, nop, nop, nop, nop],
    [nop, nop, a10, a10, a10, a10, a01, a01, a01, a01, a01, a01, a01, a01, a01, a10, a10, a10, a10, nop, nop],
    [nop, a10, a10, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a10, a10, nop],
    [a10, a10, a10, a01, a01, a01, a01, a01, a01, a01, cor, a01, a01, a01, a01, a01, a01, a01, a10, a10, a10],
    [nop, a10, a10, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a10, a10, nop],
    [nop, nop, a10, a10, a10, a10, a01, a01, a01, a01, a01, a01, a01, a01, a01, a10, a10, a10, a10, nop, nop],
    [nop, nop, nop, nop, nop, nop, a10, a10, a10, a10, a10, a10, a10, a10, a10, nop, nop, nop, nop, nop, nop],
  ]),
};

const sevenXTwentyoneSuperArmVar1 = {
  id: PIXI.utils.uid(),
  name: 'sevenXTwentyoneSuperArmVar1',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, nop, nop, nop, nop, a01, a10, a10, a10, a10, a10, a10, a10, a10, a10, nop, nop, nop, nop, nop, nop],
    [nop, nop, a10, a10, a10, a10, fsh, a01, a01, fsh, a01, fsh, a01, a01, fsh, a10, a10, a10, a10, nop, nop],
    [nop, a10, a10, fsh, a01, fsh, a01, fsh, a01, a01, fsh, a01, a01, fsh, a01, fsh, a01, fsh, a10, a10, nop],
    [a10, a10, a10, a01, a01, a01, fsh, fsh, a01, fsh, cor, fsh, a01, fsh, fsh, a01, a01, a01, a10, a10, a10],
    [nop, a10, a10, fsh, a01, fsh, a01, fsh, a01, a01, fsh, a01, a01, fsh, a01, fsh, a01, fsh, a10, a10, nop],
    [nop, nop, a10, a10, a10, a10, fsh, a01, a01, fsh, a01, fsh, a01, a01, fsh, a10, a10, a10, a10, nop, nop],
    [nop, nop, nop, nop, nop, nop, a10, a10, a10, a10, a10, a10, a10, a10, a10, nop, nop, nop, nop, nop, nop],
  ]),
};

const threeXTwentyoneSpwVar0 = {
  id: PIXI.utils.uid(),
  name: 'threeXTwentyoneSpwVar0',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, a01, a01, a01, spw, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, spw, a01, a01, a01, a01, nop],
    [spw, a01, a01, a01, a01, a01, a01, a01, a01, a01, cor, a01, a01, a01, a01, a01, a01, a01, a01, a01, spw],
    [nop, a01, a01, a01, spw, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, spw, a01, a01, a01, a01, nop],
  ]),
};

const ninerVar0 = {
  id: PIXI.utils.uid(),
  name: 'ninerVar0',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [a01, a01, a01, a01, a01],
    [a01, a01, fsh, a01, a01],
    [a01, fsh, cor, fsh, a01],
    [a01, a01, fsh, a01, a01],
    [a01, a01, a01, a01, a01],
  ]),
};

const ninerVar1 = {
  id: PIXI.utils.uid(),
  name: 'ninerVar1',
  bounceForceY: smallBounceForceY,
  spinRanges: stickSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [a01, nop, nop, nop, nop],
    [a01, nop, nop, nop, nop],
    [a01, nop, nop, nop, nop],
    [a01, nop, nop, nop, nop],
    [a01, nop, nop, nop, nop],
    [a01, a01, a01, a01, a01],
    [fsh, fsh, cor, fsh, fsh],
    [a01, a01, a01, a01, a01],
    [nop, nop, nop, nop, a01],
    [nop, nop, nop, nop, a01],
    [nop, nop, nop, nop, a01],
    [nop, nop, nop, nop, a01],
    [nop, nop, nop, nop, a01],
  ]),
};

const ninerVar2 = {
  id: PIXI.utils.uid(),
  name: 'ninerVar2',
  bounceForceY: smallBounceForceY,
  spinRanges: stickSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [a01, a01, a01, a01, a01],
    [a01, a01, a01, fsh, a01],
    [a01, fsh, a01, a01, a01],
    [a01, fsh, fsh, a01, a01],
    [cor, a01, a01, a01, a01],
  ]),
};

const rodNinerVar0 = {
  id: PIXI.utils.uid(),
  name: 'rodNinerVar0',
  bounceForceY: smallBounceForceY,
  spinRanges: stickSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [a01, a01, a01, a01, a01, a01, a01],
    [a01, fsh, fsh, cor, fsh, fsh, a01],
    [a01, a01, a01, a01, a01, a01, a01],
  ]),
};

const two4Var0 = {
  id: PIXI.utils.uid(),
  name: 'two4Var0',
  bounceForceY: -1.3,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [a01, a01, a01, a01, a01, a01],
    [a01, fsh, fsh, fsh, fsh, a01],
    [a01, fsh, fsh, cor, fsh, a01],
    [a01, fsh, cor, fsh, fsh, a01],
    [a01, fsh, fsh, fsh, fsh, a01],
    [a01, a01, a01, a01, a01, a01],
  ]),
};

const two4Var1 = {
  id: PIXI.utils.uid(),
  name: 'two4Var1',
  bounceForceY: -1.3,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [a01, a01, a01, a01, nop, nop, nop, nop, nop, nop, nop, nop, nop, nop, a01, a01, a01, a01],
    [a01, cor, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, cor, a01],
    [a01, a01, a01, a01, nop, nop, nop, nop, nop, nop, nop, nop, nop, nop, a01, a01, a01, a01],
  ]),
};

const rodOne1Var0 = {
  id: PIXI.utils.uid(),
  name: 'rodOne1Var0',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01],
    [a01, fsh, fsh, fsh, a01, cor, a01, fsh, fsh, fsh, a01],
    [a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01],
  ]),
};

const rodOne1Var1 = {
  id: PIXI.utils.uid(),
  name: 'rodOne1Var1',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, a01, fsh, a01, a01, a01, a01, nop, nop, nop, nop, nop, nop, nop, nop, a01, a01],
    [a01, fsh, cor, fsh, fsh, fsh, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01],
    [nop, a01, fsh, a01, a01, a01, a01, nop, nop, nop, nop, nop, nop, nop, nop, a01, a01],
  ]),
};

const three1Var0 = {
  id: PIXI.utils.uid(),
  name: 'three1Var0',
  bounceForceY: bigBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [a01, a01, a01, a01, a01, a01, a01],
    [a01, fsh, fsh, a01, fsh, fsh, a01],
    [a01, fsh, fsh, cor, fsh, fsh, a01],
    [a01, a01, a01, cor, a01, a01, a01],
    [a01, fsh, fsh, cor, fsh, fsh, a01],
    [a01, fsh, fsh, a01, fsh, fsh, a01],
    [a01, a01, a01, a01, a01, a01, a01],
  ]),
};

const three1Var1 = {
  id: PIXI.utils.uid(),
  name: 'three1Var1',
  bounceForceY: bigBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [a01, a01, a01, a01, a01, a01, a01],
    [a01, cor, fsh, fsh, fsh, cor, a01],
    [a01, fsh, fsh, fsh, fsh, fsh, a01],
    [a01, a01, fsh, fsh, fsh, a01, a01],
    [nop, a01, fsh, fsh, fsh, a01, nop],
    [nop, a01, fsh, cor, fsh, a01, nop],
    [nop, a01, a01, a01, a01, a01, nop],
    [nop, a01, nop, a01, nop, a01, nop],
    [nop, a01, nop, a01, nop, a01, nop],
  ]),
};

const three1Var2 = {
  id: PIXI.utils.uid(),
  name: 'three1Var2',
  bounceForceY: bigBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, nop, nop, nop, a01, nop, nop, nop, nop, nop],
    [nop, a01, a01, a01, a01, nop, nop, nop, nop, nop],
    [nop, a01, cor, cor, a01, a01, a01, a01, nop, nop],
    [nop, a01, cor, fsh, fsh, fsh, a01, a01, nop, nop],
    [a01, a01, a01, fsh, fsh, fsh, fsh, a01, a01, a01],
    [nop, nop, a01, fsh, fsh, fsh, fsh, a01, nop, nop],
    [nop, nop, a01, fsh, fsh, fsh, fsh, a01, nop, nop],
    [nop, nop, a01, a01, a01, a01, a01, a01, nop, nop],
    [nop, nop, nop, nop, a01, nop, nop, nop, nop, nop],
    [nop, nop, nop, nop, a01, nop, nop, nop, nop, nop],
  ]),
};

const rodOne8Var0 = {
  id: PIXI.utils.uid(),
  name: 'rodOne8Var0',
  bounceForceY: smallBounceForceY,
  spinRanges: stickSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01],
    [a01, fsh, fsh, fsh, fsh, cor, cor, fsh, fsh, fsh, fsh, a01],
    [a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01],
  ]),
};

const rodOne8Var1 = {
  id: PIXI.utils.uid(),
  name: 'rodOne8Var1',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [a01, a01, a01, a01, a01, a01, a01, a01],
    [a01, fsh, fsh, fsh, fsh, cor, cor, a01],
    [a01, a01, a01, a01, a01, a01, fsh, a01],
    [nop, nop, nop, nop, nop, a01, fsh, a01],
    [nop, nop, nop, nop, nop, a01, fsh, a01],
    [nop, nop, nop, nop, nop, a01, fsh, a01],
    [nop, nop, nop, nop, nop, a01, a01, a01],
  ]),
};

const armThree2Var0 = {
  id: PIXI.utils.uid(),
  name: 'armThree2Var0',
  bounceForceY: -1.3,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [a05, a05, a05, a05, a05, a05],
    [a01, fsh, fsh, fsh, fsh, a01],
    [a01, fsh, cor, cor, fsh, a01],
    [a01, fsh, cor, cor, fsh, a01],
    [a01, fsh, fsh, fsh, fsh, a01],
    [a05, a05, a05, a05, a05, a05],
  ]),
};

const armThree2Var1 = {
  id: PIXI.utils.uid(),
  name: 'armThree2Var1',
  bounceForceY: -1.3,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [a05, a05, a01, a01, a05, a05],
    [nop, a05, cor, cor, a05, nop],
    [nop, a05, cor, cor, a05, nop],
    [nop, a05, a05, a05, a05, nop],
    [a01, fsh, fsh, fsh, fsh, a01],
    [nop, a01, fsh, fsh, a01, nop],
    [nop, a01, fsh, fsh, a01, nop],
    [nop, fsh, fsh, fsh, fsh, nop],
  ]),
};

const rodTwo8Var0 = {
  id: PIXI.utils.uid(),
  name: 'rodTwo8Var0',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01],
    [a01, fsh, a01, fsh, a01, cor, cor, a01, fsh, a01, fsh, a01],
    [a01, fsh, a01, fsh, a01, cor, cor, a01, fsh, a01, fsh, a01],
    [a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01],
  ]),
};

const rodTwo8Var1 = {
  id: PIXI.utils.uid(),
  name: 'rodTwo8Var1',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [
      a01,
      a01,
      a01,
      a01,
      a01,
      cor,
      cor,
      a01,
      a01,
      a01,
      a01,
      a01,
      a01,
      a01,
      a01,
      a01,
      fsh,
      fsh,
      fsh,
      fsh,
      a01,
      a01,
      a01,
      a01,
    ],
    [
      a01,
      a01,
      a01,
      a01,
      fsh,
      fsh,
      fsh,
      fsh,
      a01,
      a01,
      a01,
      a01,
      a01,
      a01,
      a01,
      a01,
      a01,
      cor,
      cor,
      a01,
      a01,
      a01,
      a01,
      a01,
    ],
  ]),
};

const armFive2Var0 = {
  id: PIXI.utils.uid(),
  name: 'armFive2Var0',
  bounceForceY: bigBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [a05, a05, a05, a05, a05, a05, a05, a05],
    [a05, fsh, fsh, fsh, fsh, fsh, fsh, a01],
    [a05, fsh, fsh, fsh, fsh, fsh, fsh, a01],
    [a05, fsh, fsh, cor, cor, fsh, fsh, a01],
    [a05, fsh, fsh, cor, cor, fsh, fsh, a01],
    [a05, fsh, fsh, fsh, fsh, fsh, fsh, a01],
    [a05, fsh, fsh, fsh, fsh, fsh, fsh, a01],
    [a05, a05, a05, a05, a05, a05, a05, a05],
  ]),
};

const armFive2Var1 = {
  id: PIXI.utils.uid(),
  name: 'armFive2Var1',
  bounceForceY: bigBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [a05, a05, a05, a05, a05, a05, a05, a05],
    [a05, fsh, fsh, cor, cor, fsh, fsh, a01],
    [a05, fsh, fsh, fsh, fsh, fsh, fsh, a01],
    [a01, fsh, fsh, fsh, fsh, fsh, fsh, a05],
    [nop, fsh, fsh, fsh, fsh, fsh, fsh, a05],
    [a05, fsh, fsh, fsh, fsh, fsh, fsh, a01],
    [a05, fsh, fsh, cor, cor, fsh, fsh, a01],
    [a05, a05, a05, a05, a05, a05, a05, a05],
  ]),
};

const rodSumTwo3Var0 = {
  id: PIXI.utils.uid(),
  name: 'rodSumTwo3Var0',
  bounceForceY: smallBounceForceY,
  spinRanges: stickSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [a05, a05, a05, a05, a05, a05, a05, a05, a05, a05, a05],
    [fsh, fsh, fsh, fsh, cor, cor, cor, fsh, fsh, fsh, fsh],
    [a01, a01, a01, a01, a01, spw, a01, a01, a01, a01, a01],
  ]),
};

const rodSumTwo3Var1 = {
  id: PIXI.utils.uid(),
  name: 'rodSumTwo3Var1',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [a01, nop, nop, nop, a01],
    [a01, fsh, spw, fsh, a01],
    [a01, a01, nop, a01, a01],
    [a01, fsh, fsh, fsh, a01],
    [a05, fsh, fsh, fsh, a05],
    [a05, cor, cor, cor, a05],
    [a05, a05, a05, a05, a05],
    [a05, nop, nop, nop, a05],
  ]),
};

const fatTwoTwo0Var0 = {
  id: PIXI.utils.uid(),
  name: 'fatTwoTwo0Var0',
  bounceForceY: bigBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, nop],
    [a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01],
    [a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01],
    [a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01],
    [a01, a01, a01, a01, a01, emd, emd, a01, a01, a01, a01, a01],
    [a01, a01, a01, a01, emd, cor, cor, emd, a01, a01, a01, a01],
    [a01, a01, a01, a01, emd, cor, cor, emd, a01, a01, a01, a01],
    [a01, a01, a01, a01, a01, emd, emd, a01, a01, a01, a01, a01],
    [a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01],
    [a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01],
    [a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01],
    [nop, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, nop],
  ]),
};

const armSumSev6Var0 = {
  id: PIXI.utils.uid(),
  name: 'armSumSev6Var0',
  bounceForceY: bigBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [a05, a05, a05, a05, a05, a05, a05, a05, a05],
    [a05, a05, a05, a05, a05, a05, a05, a05, a05],
    [a05, fsh, fsh, cor, cor, cor, fsh, fsh, a05],
    [a05, fsh, fsh, cor, cor, cor, fsh, fsh, spw],
    [a05, fsh, fsh, cor, cor, cor, fsh, fsh, spw],
    [a05, fsh, fsh, cor, cor, cor, fsh, fsh, a05],
    [a05, a05, a05, a05, a05, a05, a05, a05, a05],
    [a05, a05, a05, a05, a05, a05, a05, a05, a05],
  ]),
};

const armSumSev6Var1 = {
  id: PIXI.utils.uid(),
  name: 'armSumSev6Var1',
  bounceForceY: bigBounceForceY,
  spinRanges: stickSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, nop, nop, nop, nop, nop, nop, nop, nop, nop, nop, nop, nop, a05, a05, a05, a05, nop],
    [a05, a05, a05, a05, a05, a05, nop, nop, nop, nop, nop, nop, a05, fsh, fsh, fsh, a05, nop],
    [a05, cor, cor, cor, cor, a05, nop, nop, nop, nop, nop, nop, a05, fsh, fsh, fsh, fsh, spw],
    [a05, cor, cor, cor, cor, a05, a05, a05, fsh, fsh, a05, a05, a05, a05, a05, a05, a05, a05],
    [a05, cor, cor, cor, cor, a05, nop, nop, nop, nop, nop, nop, a05, fsh, fsh, fsh, fsh, spw],
    [a05, a05, a05, a05, a05, a05, nop, nop, nop, nop, nop, nop, a05, fsh, fsh, fsh, a05, nop],
    [nop, nop, nop, nop, nop, nop, nop, nop, nop, nop, nop, nop, nop, a05, a05, a05, a05, nop],
  ]),
};

const sArmOneSix5Var0 = {
  id: PIXI.utils.uid(),
  name: 'sArmOneSix5Var0',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [a10, a10, a10, a10, a10],
    [a10, emd, emd, emd, a10],
    [a10, emd, cor, emd, a10],
    [a10, emd, emd, emd, a10],
    [a10, a10, a10, a10, a10],
  ]),
};

const sArmOneSix5Var1 = {
  id: PIXI.utils.uid(),
  name: 'sArmOneSix5Var1',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, a01, a01, a01, a01, nop, nop, a01, a01, a01, a01, a01, nop],
    [a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01],
    [a01, a01, cor, a01, a01, a01, a01, a01, a01, a01, cor, a01, a01],
    [a01, a01, a01, a01, a01, a01, emd, a01, a01, a01, a01, a01, a01],
    [a01, a01, a01, a01, a01, a01, emd, a01, a01, a01, a01, a01, a01],
    [a01, a01, a01, a01, a01, a01, emd, a01, a01, a01, a01, a01, a01],
    [nop, a01, a01, a01, a01, a01, emd, a01, a01, a01, a01, a01, nop],
    [a01, a01, a01, a01, a01, a01, emd, a01, a01, a01, a01, a01, a01],
    [a01, a01, a01, a01, a01, a01, emd, a01, a01, a01, a01, a01, a01],
    [a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01],
    [a01, a01, a01, a01, a01, a01, cor, a01, a01, a01, a01, a01, a01],
    [a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01],
    [nop, a01, a01, a01, a01, a01, nop, a01, a01, a01, a01, a01, nop],
  ]),
};

const sArmOneZero5Var0 = {
  id: PIXI.utils.uid(),
  name: 'sArmOneZero5Var0',
  bounceForceY: smallBounceForceY,
  spinRanges: stickSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [a10, a10, a10, a10, a10, a10, a10],
    [a10, emd, emd, cor, emd, emd, a10],
    [a10, a10, a10, a01, a10, a10, a10],
  ]),
};

const sArmOneZero5Var1 = {
  id: PIXI.utils.uid(),
  name: 'sArmOneZero5Var1',
  bounceForceY: smallBounceForceY,
  spinRanges: stickSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, nop, nop, nop, a01, a01, a01, a01, a01, a01, a01, nop, nop, nop, nop],
    [nop, nop, nop, a01, a01, a01, a01, a01, a01, a01, a01, a01, nop, nop, nop],
    [nop, nop, nop, a01, a01, a01, a01, a01, a01, a01, a01, a01, nop, nop, nop],
    [a10, a10, a10, a01, a01, a01, a01, emd, a01, a01, a01, a01, a01, nop, nop],
    [a10, cor, a01, a01, a01, a01, a01, emd, a01, a01, a01, a01, a01, a01, a01],
    [a10, a10, a10, a01, a01, a01, a01, emd, a01, a01, a01, a01, a01, nop, nop],
    [nop, nop, nop, a01, a01, a01, a01, a01, a01, a01, a01, a01, nop, nop, nop],
    [nop, nop, nop, a01, a01, a01, a01, a01, a01, a01, a01, a01, nop, nop, nop],
    [nop, nop, nop, nop, a01, a01, a01, a01, a01, a01, a01, nop, nop, nop, nop],
  ]),
};

const sArmSumTwo20Var0 = {
  id: PIXI.utils.uid(),
  name: 'sArmSumTwo20Var0',
  bounceForceY: smallBounceForceY,
  spinRanges: stickSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [a10, a10, a10, a10, a10, a10, a10],
    [a10, emd, emd, cor, emd, emd, a10],
    [a10, a10, a10, a01, a10, a10, a10],
  ]),
};

const armAssVar0 = {
  id: PIXI.utils.uid(),
  name: 'armAssVar0',
  bounceForceY: bigBounceForceY,
  spinRanges: stickSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [a05, a05, a05, a05, a05, a05, a05, a05, a05, a05, a05, a05, a05, a05, a05],
    [a05, cor, cor, cor, cor, a05, a05, a05, a05, a05, a05, a05, a05, a05, a05],
    [a05, a05, a05, a05, a05, a05, a05, a05, a05, a05, a05, a05, a05, a05, a05],
  ]),
};

const armAssVar1 = {
  id: PIXI.utils.uid(),
  name: 'armAssVar1',
  bounceForceY: bigBounceForceY,
  spinRanges: fastSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, nop, nop, nop, nop, nop, a05, a05, a05],
    [nop, nop, nop, nop, nop, nop, a05, a05, a05],
    [nop, nop, nop, nop, nop, nop, a05, a05, a05],
    [a05, a05, a05, a05, a05, a05, a05, a05, a05],
    [a05, cor, cor, cor, cor, a05, a05, a05, a05],
    [a05, a05, a05, a05, a05, a05, a05, a05, a05],
    [nop, nop, nop, nop, nop, nop, a05, a05, a05],
    [nop, nop, nop, nop, nop, nop, a05, a05, a05],
    [nop, nop, nop, nop, nop, nop, a05, a05, a05],
  ]),
};

const sArmSumTwo9Var0 = {
  id: PIXI.utils.uid(),
  name: 'sArmSumTwo9Var0',
  bounceForceY: bigBounceForceY,
  spinRanges: stickSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [a10, a10, a10, a10, a10, a10, a10, a10, a10, a10, a10],
    [spw, fsh, fsh, cor, cor, cor, cor, cor, fsh, fsh, spw],
    [a05, a05, a05, a05, a05, spw, a05, a05, a05, a05, a05],
  ]),
};

const sArmThree20Var0 = {
  id: PIXI.utils.uid(),
  name: 'sArmThree20Var0',
  bounceForceY: bigBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, nop, nop, a10, a10, a10, a10, nop, nop, nop],
    [nop, nop, a10, a10, a10, a10, a10, a10, nop, nop],
    [nop, a10, a10, a10, a10, a10, a10, a10, a10, nop],
    [a10, a10, a10, emd, emd, emd, emd, a10, a10, a10],
    [a10, a10, a10, emd, cor, cor, emd, a10, a10, a10],
    [a10, a10, a10, emd, cor, cor, emd, a10, a10, a10],
    [a10, a10, a10, emd, emd, emd, emd, a10, a10, a10],
    [nop, a10, a10, a10, a10, a10, a10, a10, a10, nop],
    [nop, nop, a10, a10, a10, a10, a10, a10, nop, nop],
    [nop, nop, nop, a10, a10, a10, a10, nop, nop, nop],
  ]),
};

const armAss2Var0 = {
  id: PIXI.utils.uid(),
  name: 'armAss2Var0',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, nop, a05, a05, a05, nop, nop],
    [nop, a05, a05, a05, a05, a05, nop],
    [a05, a05, a05, a05, a05, a05, a05],
    [a05, a05, a05, cor, a05, a05, a05],
    [a05, a05, a05, a05, a05, a05, a05],
    [nop, a05, a05, a05, a05, a05, nop],
    [nop, nop, a05, a05, a05, nop, nop],
  ]),
};

const goldenBrickVar0 = {
  id: PIXI.utils.uid(),
  name: 'goldenBrickVar0',
  bounceForceY: bigBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [a10, a10, a10, a10, a10, a10, a10, a10, a10, a10, a10, a10, a10],
    [a10, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, a10],
    [a10, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, a10],
    [a10, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, a10],
    [a10, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, a10],
    [a10, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, a10],
    [a10, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, a10],
    [a10, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, a10],
    [a10, fsh, fsh, fsh, fsh, fsh, cor, fsh, fsh, fsh, fsh, fsh, a10],
    [a10, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, a10],
    [a10, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, a10],
    [a10, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, a10],
    [a10, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, a10],
    [a10, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, a10],
    [a10, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, a10],
    [a10, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, fsh, a10],
    [a10, a10, a10, a10, a10, a10, a10, a10, a10, a10, a10, a10, a10],
  ]),
};

const sArmSuperAssVar0 = {
  id: PIXI.utils.uid(),
  name: 'sArmSuperAssVar0',
  bounceForceY: bigBounceForceY,
  spinRanges: stickSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [a10, a10, a10, a10, a10, a10, a10, a10, a10, a10, a10, a10, a10, a10, a10],
    [a10, cor, cor, cor, cor, a10, a10, a10, a10, a10, a10, a10, a10, a10, a10],
    [a10, a10, a10, a10, a10, a10, a10, a10, a10, a10, a10, a10, a10, a10, a10],
  ]),
};

const sArmHyperAssVar0 = {
  id: PIXI.utils.uid(),
  name: 'sArmHyperAssVar0',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [a10, a10, a10],
    [a10, cor, a10],
    [a10, cor, a10],
    [spw, a10, spw],
    [spw, spw, spw],
    [spw, spw, spw],
  ]),
};

const satMobVar0 = {
  id: PIXI.utils.uid(),
  name: 'satMobVar0',
  bounceForceY: smallBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, a01, a01, a01, nop],
    [a01, a01, a01, a01, a01],
    [a01, a01, cor, a01, a01],
    [a01, a01, a01, a01, a01],
    [nop, a01, a01, a01, nop],
  ]),
};

const satCrossMobVar0 = {
  id: PIXI.utils.uid(),
  name: 'satCrossMobVar0',
  bounceForceY: bigBounceForceY,
  spinRanges: fastSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, nop, nop, nop, a01, a01, a01, nop, nop, nop, nop],
    [nop, nop, nop, nop, a02, a02, a02, nop, nop, nop, nop],
    [nop, nop, nop, nop, a03, a03, a03, nop, nop, nop, nop],
    [nop, nop, nop, nop, a04, a04, a04, nop, nop, nop, nop],
    [a01, a02, a03, a04, a05, a05, a05, a04, a03, a02, a01],
    [a01, a02, a03, a04, a05, cor, a05, a04, a03, a02, a01],
    [a01, a02, a03, a04, a05, a05, a05, a04, a03, a02, a01],
    [nop, nop, nop, nop, a04, a04, a04, nop, nop, nop, nop],
    [nop, nop, nop, nop, a03, a03, a03, nop, nop, nop, nop],
    [nop, nop, nop, nop, a02, a02, a02, nop, nop, nop, nop],
    [nop, nop, nop, nop, a01, a01, a01, nop, nop, nop, nop],
  ]),
};

const satStickMobVar0 = {
  id: PIXI.utils.uid(),
  name: 'satStickMobVar0',
  bounceForceY: bigBounceForceY,
  spinRanges: stickSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, nop, a01, a03, a03, a03, a03, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, nop, nop],
    [nop, a01, a03, a05, a05, a05, a05, a03, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, nop],
    [a01, a03, a05, cor, cor, cor, cor, a05, a03, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01],
    [nop, a01, a03, a05, a05, a05, a05, a03, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, nop],
    [nop, nop, a01, a03, a03, a03, a03, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, a01, nop, nop],
  ]),
};

const satSqSpwMobVar0 = {
  id: PIXI.utils.uid(),
  name: 'satSqSpwMobVar0',
  bounceForceY: bigBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [a01, a01, a01, nop, nop, nop, a01, a01, a01],
    [a01, spw, a01, a05, a05, a05, a01, spw, a01],
    [a01, a01, a10, a10, a10, a10, a10, a01, a01],
    [nop, a05, a10, cor, cor, cor, a10, a05, nop],
    [nop, a05, a10, cor, cor, cor, a10, a05, nop],
    [nop, a05, a10, cor, cor, cor, a10, a05, nop],
    [a01, a01, a10, a10, a10, a10, a10, a01, a01],
    [a01, spw, a01, a05, a05, a05, a01, spw, a01],
    [a01, a01, a01, nop, nop, nop, a01, a01, a01],
  ]),
};

const satSkullMobVar0 = {
  id: PIXI.utils.uid(),
  name: 'satSkullMobVar0',
  bounceForceY: bigBounceForceY,
  spinRanges: roundSpinRanges,
  coreType: BallCoreType.Regular,
  bubbles: transpose([
    [nop, nop, nop, nop, a05, a05, a05, a05, a05, a05, nop, nop, nop, nop],
    [nop, nop, a05, a05, a05, a05, a05, a05, a05, a05, a05, a05, nop, nop],
    [nop, a05, a05, a05, a05, a05, a05, a05, a05, a05, a05, a05, a05, nop],
    [nop, a05, a05, a05, a05, a05, a05, a05, a05, a05, a05, a05, a05, nop],
    [nop, a05, a05, a05, a05, a05, a05, a05, a05, a05, a05, a05, a05, nop],
    [nop, a05, a05, nop, nop, nop, a05, a05, nop, nop, nop, a05, a05, nop],
    [nop, a05, nop, cor, cor, nop, a05, a05, nop, cor, cor, nop, a05, nop],
    [a05, a05, nop, cor, cor, fsh, fsh, fsh, fsh, cor, cor, nop, a05, a05],
    [a05, a05, a05, a05, a05, a05, nop, nop, a05, a05, a05, a05, a05, a05],
    [a05, a05, a05, a05, a05, a05, nop, nop, a05, a05, a05, a05, a05, a05],
    [nop, nop, a05, a05, a05, a05, a05, a05, a05, a05, a05, a05, nop, nop],
    [nop, nop, spw, a05, a05, a05, a05, a05, a05, a05, a05, spw, nop, nop],
    [nop, nop, spw, a05, a05, a05, a05, a05, a05, a05, a05, spw, nop, nop],
    [nop, nop, nop, a05, spw, a05, a05, a05, a05, spw, a05, nop, nop, nop],
    [nop, nop, nop, nop, spw, a05, spw, spw, a05, spw, nop, nop, nop, nop],
    [nop, nop, nop, nop, nop, a05, spw, spw, a05, nop, nop, nop, nop, nop],
  ]),
};

const fiveXFiveDefault = [
  {data: fiveXFiveDefaultVar0, odds: 0.85},
  {data: fiveXFiveDefaultVar1, odds: 0.15},
];

const fiveXFiveArm1 = [
  {data: fiveXFiveArm1Var0, odds: 0.85},
  {data: fiveXFiveArm1Var1, odds: 0.15},
];

const fiveXFiveArm2 = [
  {data: fiveXFiveArm2Var0, odds: 0.85},
  {data: fiveXFiveArm2Var1, odds: 0.15},
];

const nineXNineDefault = [
  {data: nineXNineDefaultVar0, odds: 0.85},
  {data: nineXNineDefaultVar1, odds: 0.15},
];

const nineXNineArm = [
  {data: nineXNineArmVar0, odds: 0.85},
  {data: nineXNineArmVar1, odds: 0.15},
];

const nineXNineSuperArm = [
  {data: nineXNineSuperArmVar0, odds: 0.9},
  {data: nineXNineSuperArmVar1, odds: 0.06},
  {data: nineXNineSuperArmVar2, odds: 0.04},
];

const elevXElevDefault = [
  {data: elevXElevDefaultVar0, odds: 0.85},
  {data: elevXElevDefaultVar1, odds: 0.15},
];

const elevXElevSuperArm = [
  {data: elevXElevSuperArmVar0, odds: 0.9},
  {data: elevXElevSuperArmVar1, odds: 0.1},
];

const elevXElevSuperArmTwo = [
  {data: elevXElevSuperArmTwoVar0, odds: 0.9},
  {data: elevXElevSuperArmTwoVar1, odds: 0.1},
];

const threeXElevDefault = [
  {data: threeXElevDefaultVar0, odds: 0.7},
  {data: threeXElevDefaultVar1, odds: 0.3},
];

const threeXElevArm = [
  {data: threeXElevArmVar0, odds: 0.85},
  {data: threeXElevArmVar1, odds: 0.15},
];

const threeXElevArmTwo = [
  {data: threeXElevArmTwoVar0, odds: 0.9},
  {data: threeXElevArmTwoVar1, odds: 0.1},
];

const fiveXSeveteenDefault = [
  {data: fiveXSeveteenDefaultVar0, odds: 0.7},
  {data: fiveXSeveteenDefaultVar1, odds: 0.3},
];

const fiveXSeveteenArm = [
  {data: fiveXSeveteenArmVar0, odds: 0.7},
  {data: fiveXSeveteenArmVar1, odds: 0.3},
];

const fiveXSeveteenArmTwo = [
  {data: fiveXSeveteenArmTwoVar0, odds: 0.8},
  {data: fiveXSeveteenArmTwoVar1, odds: 0.2},
];

const fiveXSeveteenSuperArmTwo = [
  {data: fiveXSeveteenSuperArmTwoVar0, odds: 0.9},
  {data: fiveXSeveteenSuperArmTwoVar1, odds: 0.1},
];

const sevenXTwentyoneDefault = [
  {data: sevenXTwentyoneDefaultVar0, odds: 0.7},
  {data: sevenXTwentyoneDefaultVar1, odds: 0.3},
];

const sevenXTwentyoneArm = [
  {data: sevenXTwentyoneArmVar0, odds: 0.8},
  {data: sevenXTwentyoneArmVar1, odds: 0.2},
];

const sevenXTwentyoneArmTwo = [
  {data: sevenXTwentyoneArmTwoVar0, odds: 0.8},
  {data: sevenXTwentyoneArmTwoVar1, odds: 0.2},
];

const sevenXTwentyoneSuperArm = [
  {data: sevenXTwentyoneSuperArmVar0, odds: 0.9},
  {data: sevenXTwentyoneSuperArmVar1, odds: 0.1},
];

const bouncyLarry = {
  id: PIXI.utils.uid(),
  name: 'bouncyLarry',
  bounceForceY: bigBounceForceY,
  spinRanges: SpinRangeName.NoSpin,
  bubbles: transpose([
    [nop, nop, nop, bcr, bcr, bcr, nop, nop, nop],
    [nop, nop, bcr, bcr, bcr, bcr, bcr, nop, nop],
    [nop, bcr, bcr, bcr, bcr, bcr, bcr, bcr, nop],
    [bcr, bcr, bcr, bcr, bcr, bcr, bcr, bcr, bcr],
    [bcr, bcr, bcr, bcr, bcr, bcr, bcr, bcr, bcr],
    [bcr, bcr, bcr, bcr, bcr, bcr, bcr, bcr, bcr],
    [nop, bcr, bcr, bcr, bcr, bcr, bcr, bcr, nop],
    [nop, nop, bcr, bcr, bcr, bcr, bcr, nop, nop],
    [nop, nop, nop, bcr, bcr, bcr, nop, nop, nop],
  ]),
  coreType: BallCoreType.BouncyLarry,
};


const niner = [ninerVar0, ninerVar1, ninerVar2];

const two4 = [two4Var0, two4Var1];

const rodOne1 = [rodOne1Var0, rodOne1Var1];

const three1 = [three1Var0, three1Var1, three1Var2];

const rodOne8 = [rodOne8Var0, rodOne8Var1];

const armThree2 = [armThree2Var0, armThree2Var1];

const rodTwo8 = [rodTwo8Var0, rodTwo8Var1];

const armFive2 = [armFive2Var0, armFive2Var1];

const rodSumTwo3 = [rodSumTwo3Var0, rodSumTwo3Var1];

const fatTwoTwo0 = [fatTwoTwo0Var0];

const armSumSev6 = [armSumSev6Var0, armSumSev6Var1];

const sArmOneSix5 = [sArmOneSix5Var0, sArmOneSix5Var1];

const sArmOneZero5 = [sArmOneZero5Var0, sArmOneZero5Var1];

const sArmSumTwo20 = [sArmSumTwo20Var0];

const armAss = [armAssVar0, armAssVar1];

const rodNiner = [rodNinerVar0];

const sArmSumTwo9 = [sArmSumTwo9Var0];

const sArmThree20 = [sArmThree20Var0];

const armAss2 = [armAss2Var0];

const goldenBrick = [goldenBrickVar0];

const sArmSuperAss = [sArmSuperAssVar0];

const sArmHyperAss = [sArmHyperAssVar0];

const satMob = [satMobVar0];

const satCrossMob = [satCrossMobVar0];

const satStickMob = [satStickMobVar0];

const satSqSpwMob = [satSqSpwMobVar0];

const satSkullMob = [satSkullMobVar0];

const threeXTwentyoneSpw = [threeXTwentyoneSpwVar0];

const ballGroupByName = {
  fiveXFiveDefault,
  fiveXFiveArm1,
  fiveXFiveArm2,
  nineXNineDefault,
  nineXNineArm,
  nineXNineSuperArm,
  elevXElevDefault,
  elevXElevSuperArm,
  elevXElevSuperArmTwo,
  threeXElevDefault,
  threeXElevArm,
  threeXElevArmTwo,
  fiveXSeveteenDefault,
  fiveXSeveteenArm,
  fiveXSeveteenArmTwo,
  fiveXSeveteenSuperArmTwo,
  sevenXTwentyoneDefault,
  sevenXTwentyoneArm,
  sevenXTwentyoneArmTwo,
  sevenXTwentyoneSuperArm,

  niner,
  rodNiner,
  two4,
  rodOne1,
  three1,
  rodOne8,
  armThree2,
  rodTwo8,
  armFive2,
  rodSumTwo3,
  fatTwoTwo0,
  armSumSev6,
  sArmOneSix5,
  sArmOneZero5,
  sArmSumTwo20,
  armAss,
  sArmSumTwo9,
  sArmThree20,
  armAss2,
  goldenBrick,
  sArmSuperAss,
  sArmHyperAss,
  satMob,
  satCrossMob,
  satStickMob,
  satSqSpwMob,
  satSkullMob,
  threeXTwentyoneSpw,
};

const models: any = [];
const groups: any = [];
const waves: any = [];

models.push(
  bouncyLarry,
  ftueBallModel,
  spawnBubbleEnemy,
);

Object.entries(ballGroupByName).forEach(([groupName, groupValue]: any) => {
  const group: ModelsGroupData = {
    id: uuid.v4(),
    name: groupName,
    weights: [],
  };
  groups.push(group);

  if (groupValue[0].odds) {
    group.weights = groupValue.map((weight: any) => {
      models.push(weight.data);

      return {
        odds: weight.odds,
        data: weight.data.id,
      };
    });
  } else {
    group.weights = groupValue.map((model: any) => {
      models.push(model);
      console.log(1 / groupValue.length, groupValue.length)
      return {
        odds: Number((1 / groupValue.length).toFixed(2)),
        data: model.id,
      };
    });
  }
});

console.log(JSON.stringify({
  models, groups, waves,
}, null, 2));
