import React from 'react';
import { BubbleModelName } from '../../data/export-data-types';
import { BUBBLE_OFFSET, BubbleView } from './BubbleView';

type Props = {
  bubbles: BubbleModelName[][];
}

export const ModelView = React.memo((props: Props) => {
  return <div style={{
    position: 'relative',
    width: props.bubbles.length * BUBBLE_OFFSET,
    height: props.bubbles[0].length * BUBBLE_OFFSET,
  }}>
    {
      props.bubbles.map((bubbleNames, i) => {
        return bubbleNames.map((bubbleName, j) => {
          return <BubbleView key={`${i}-${j}-${bubbleName}`} col={i} row={j} name={bubbleName}/>;
        });
      })
    }
  </div>;
});
