import React from 'react';
import { BubbleModelName } from '../../data/export-data-types';

const BUBBLE_RADIUS = 8;
export const BUBBLE_OFFSET = BUBBLE_RADIUS * 2;

const colorByName: Record<BubbleModelName, string> = {
  [BubbleModelName.nope]: 'rgba(5, 5, 5, 0.2)',
  [BubbleModelName.flash]: '#FFB800',
  [BubbleModelName.armor01]: '#EFEFEF',
  [BubbleModelName.armor02]: '#E1E1E1',
  [BubbleModelName.armor03]: '#D3D3D3',
  [BubbleModelName.armor04]: '#C5C5C5',
  [BubbleModelName.armor05]: '#B7B7B7',
  [BubbleModelName.armor10]: '#747474',
  [BubbleModelName.core]: '#FF0000',
  [BubbleModelName.spawning]: '#007DA3',
  [BubbleModelName.emerald]: '#37D200',
  [BubbleModelName.laser]: '#EA33D0',
  [BubbleModelName.bossFlap]: 'rgba(190,127,46,0.4)',
  [BubbleModelName.bossCore]: 'rgba(77,190,46,0.4)',
  [BubbleModelName.bossArmor]: 'rgba(0,219,255,0.4)',
  [BubbleModelName.bossArrow]: 'rgba(72,0,255,0.4)',
};

type Props = {
  col: number;
  row: number;
  name: BubbleModelName;
}

export const BubbleView = React.memo((props: Props) => {
  const color = colorByName[props.name];

  return <div title={props.name} style={{
    position: 'absolute',
    left: props.col * BUBBLE_OFFSET,
    top: props.row * BUBBLE_OFFSET,
    backgroundColor: color,
    borderRadius: props.name === BubbleModelName.nope ? 3 : BUBBLE_RADIUS,
    // border: `1px solid ${props.name === BubbleModelName.nope ? '#333333' : 'rgba(0, 0, 0, 0)'}`,
    width: BUBBLE_RADIUS * 2,
    height: BUBBLE_RADIUS * 2,
  }}></div>;
});
