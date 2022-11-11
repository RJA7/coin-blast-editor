import React, { useEffect, useState } from 'react';
import { BallCoreType, BallModelData, BubbleModelName, SpinRangeName } from '../../data/export-data-types';
import { BUBBLE_OFFSET, BubbleView } from '../ModelsList/BubbleView';
import lodash from 'lodash';
import { removeEmptyLines } from './removeEmptyLines';
import { ActionType, Dispatch } from '../../data/actions';

type Props = {
  model: BallModelData;
  models: BallModelData[];
  dispatch: Dispatch;
}

export const EditModel = React.memo((props: Props) => {
  const [activeBubbleName, setActiveBubbleName] = useState(BubbleModelName.nope);
  const [model, setModel] = useState(props.model);

  useEffect(() => {
    setModel(props.model);
  }, [props.model]);

  const cols = model.bubbles.length;
  const rows = model.bubbles[0].length;
  const maxSize = 99;
  const minSize = 3;

  const extendedCols = lodash.clamp(cols + 2, minSize, maxSize);
  const extendedRows = lodash.clamp(rows + 2, minSize, maxSize);

  const extendedGrid = Array.from({length: extendedCols}).map((v, i) => {
    return Array.from({length: extendedRows}).map((v, j) => {
      return model.bubbles[i - 1]?.[j - 1] ?? BubbleModelName.nope;
    });
  });

  const tryToSetName = (i: number, j: number, newName: BubbleModelName) => {
    if (extendedGrid[i][j] === newName) return;

    const bubbles = lodash.cloneDeep(extendedGrid);
    bubbles[i][j] = newName;
    removeEmptyLines(bubbles, minSize - 1);

    setModel({
      ...model,
      bubbles,
    });
  };

  return <div>
    <div style={{position: 'relative', height: 100}}>
      {
        Object.values(BubbleModelName).map((bubbleName, i) => {
          return <div
            key={bubbleName}
            style={{
              position: 'absolute',
              left: (i % 8) * 2 * BUBBLE_OFFSET,
              top: Math.floor(i / 8) * 2 * BUBBLE_OFFSET,
              border: `2px solid ${bubbleName === activeBubbleName ? 'rgba(255, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0)'}`,
              width: BUBBLE_OFFSET,
              height: BUBBLE_OFFSET,
              cursor: 'pointer',
            }}
            onClick={() => {
              setActiveBubbleName(bubbleName);
            }}
          >
            <BubbleView col={0} row={0} name={bubbleName}/>
          </div>;
        })
      }
    </div>
    <div style={{display: 'flex'}}>
      <div style={{flex: 1}}>
        <div><label htmlFor="">Name</label></div>
        <div><label htmlFor="">Bounce</label></div>
        <div><label htmlFor="">Spin</label></div>
        <div><label htmlFor="">Core</label></div>
      </div>
      <div style={{flex: 3}}>
        <div>
          <input
            type="text"
            value={model.name}
            onChange={(e) => {
              setModel({...model, name: e.target.value});
            }}
          />
        </div>
        <div>
          <input
            type="number"
            value={model.bounceForceY}
            onChange={(e) => {
              setModel({...model, bounceForceY: Number(e.target.value)});
            }}
          />
        </div>
        <div>
          <select value={model.spinRanges} onChange={(e) => {
            setModel({...model, spinRanges: e.target.value as SpinRangeName});
          }}>
            {
              Object.values(SpinRangeName).map((spinRangeName) => {
                return <option
                  key={spinRangeName}
                  value={spinRangeName}
                >
                  {spinRangeName}
                </option>;
              })
            }
          </select>
        </div>
        <div>
          <select value={model.coreType} onChange={(e) => {
            setModel({...model, coreType: e.target.value as BallCoreType});
          }}>
            {
              Object.values(BallCoreType).map((coreType) => {
                return <option
                  key={coreType}
                  value={coreType}
                >
                  {coreType}
                </option>;
              })
            }
          </select>
        </div>
      </div>
    </div>
    <div>
      <input type="button" value={'Add as new'} onClick={() => {
        props.dispatch({type: ActionType.AddNewModel, model});
      }}/>
      <input
        type="button" value={'Save'}
        onClick={() => {
          props.dispatch({type: ActionType.SaveModel, model});
        }}
        disabled={!props.models.some((m) => m.id === model.id)}
      />
    </div>
    <div style={{position: 'relative'}}>
      {
        extendedGrid.map((bubbleNames, i) => {
          return bubbleNames.map((bubbleName, j) => {
            return <div
              key={`${i}-${j}-${bubbleName}`}
              style={{
                position: 'absolute',
                left: `calc(50% + ${(i - extendedCols / 2) * BUBBLE_OFFSET}px)`,
                top: 300 + (j - extendedRows / 2) * BUBBLE_OFFSET,
              }}
              onMouseDown={(e) => {
                if (e.button === 2) {
                  tryToSetName(i, j, BubbleModelName.nope);
                }
              }}
              onClick={() => {
                tryToSetName(i, j, activeBubbleName);
              }}
              onMouseMove={(e) => {
                if (e.ctrlKey) {
                  if (e.shiftKey) {
                    tryToSetName(i, j, BubbleModelName.nope);
                  } else {
                    tryToSetName(i, j, activeBubbleName);
                  }
                }
              }}
            >
              <BubbleView col={0} row={0} name={bubbleName}/>
            </div>;
          });
        })
      }
    </div>
  </div>;
});
