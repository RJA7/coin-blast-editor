import React from 'react';
import { BallModelData, ModelsGroupData } from '../../data/export-data-types';
import { ModelView } from '../ModelsList/ModelView';
import { ActionType, Dispatch } from '../../data/actions';

type Props = {
  group: ModelsGroupData;
  models: BallModelData[];
  dispatch: Dispatch;
  selectedModelId: string | null;
  selectedGroupId: string | null;
}

export const GroupView = React.memo((props: Props) => {
  return <div
    style={{borderLeft: `3px solid ${props.selectedGroupId === props.group.id ? 'rgba(255, 0, 0, 1)' : 'rgba(255, 0, 0, 0)'}`}}
    onClick={() => {
      props.dispatch({type: ActionType.PatchState, patch: {selectedGroupId: props.group.id}});
    }}
  >
    <input type="text" value={props.group.name} onChange={(e) => {
      props.dispatch({
        type: ActionType.PatchGroup, id: props.group.id, patch: {
          name: e.target.value,
        },
      });
    }}/>
    <input type="button" value={'Remove group'} onClick={() => {
      props.dispatch({type: ActionType.RemoveGroup, id: props.group.id});
    }}/>
    <input type="button" value={'Paste model'} onClick={() => {
      if (!props.selectedModelId || !props.models.find(m => m.id === props.selectedModelId)) return;

      props.dispatch({
        type: ActionType.PatchGroup, id: props.group.id, patch: {
          weights: [...props.group.weights, {odds: 0.5, data: props.selectedModelId}],
        },
      });
    }}/>

    <div style={{display: 'flex', marginTop: 5}}>
      {
        props.group.weights.map((weight, index) => {
          const model = props.models.find((m) => m.id === weight.data);

          if (!model) {
            return null;
          }

          return <div key={index} style={{marginRight: 10}}>
            <div>
              <input
                style={{width: 50}}
                type="number"
                value={weight.odds}
                onChange={(e) => {
                  props.dispatch({
                    type: ActionType.PatchGroup, id: props.group.id, patch: {
                      weights: props.group.weights.map((w, i) => {
                        return i === index ? {...w, odds: Number(e.target.value)} : w;
                      }),
                    },
                  });
                }}
              />
            </div>

            <div
              style={{transform: 'scale(0.8)', transformOrigin: '0 0', marginTop: 5}}
              onMouseDown={(e) => {
                if (e.button === 2) {
                  props.dispatch({
                    type: ActionType.PatchGroup, id: props.group.id, patch: {
                      weights: props.group.weights.filter((w, i) => i !== index),
                    },
                  });
                }
              }}
            >
              <ModelView bubbles={model.bubbles}/>
            </div>
          </div>;
        })
      }
    </div>
  </div>;
});
