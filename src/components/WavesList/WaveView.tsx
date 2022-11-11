import React from 'react';
import { BallModelData, ModelsGroupData, WaveData } from '../../data/export-data-types';
import { ModelView } from '../ModelsList/ModelView';
import { ActionType, Dispatch } from '../../data/actions';

type Props = {
  name: string;
  wave: WaveData;
  groups: ModelsGroupData[];
  models: BallModelData[];
  dispatch: Dispatch;
  selectedGroupId: string | null;
}

export const WaveView = React.memo((props: Props) => {
  return <div>
    <div style={{display: 'flex'}}>
      <div style={{marginRight: 10}}>{props.name}</div>
      <input type="button" value={'Add SW'} onClick={() => {
        props.dispatch({type: ActionType.AddSubWave, id: props.wave.id});
      }}/>
      <input type="button" value={'Remove'} onClick={() => {
        props.dispatch({type: ActionType.RemoveWave, id: props.wave.id});
      }}/>
      <input type="button" value={'Move down'} onClick={() => {
        props.dispatch({type: ActionType.MoveWaveDown, id: props.wave.id});
      }}/>
    </div>

    <div style={{marginLeft: 20}}>
      {
        props.wave.subWaves.map((subWave, subWaveIndex) => {
          return <div key={subWave.id}>
            <div style={{display: 'flex'}}>
              <div style={{marginRight: 10}}>SubWave {subWaveIndex + 1}</div>
              <input type="button" value={'Remove'} onClick={() => {
                props.dispatch({
                  type: ActionType.PatchWave,
                  id: props.wave.id,
                  patch: {
                    subWaves: props.wave.subWaves.filter((sw) => sw.id !== subWave.id),
                  },
                });
              }}/>
              <input type="button" value={'Paste group'} onClick={() => {
                if (!props.selectedGroupId || !props.groups.find(g => g.id === props.selectedGroupId)) return;

                props.dispatch({
                  type: ActionType.PatchWave, id: props.wave.id, patch: {
                    subWaves: props.wave.subWaves.map((sw) => {
                      if (subWave.id === sw.id) {
                        return {
                          ...sw,
                          groups: [...sw.groups, props.selectedGroupId!],
                        };
                      }

                      return sw;
                    }),
                  },
                });
              }}/>
            </div>

            <div style={{display: 'flex', flexWrap: 'wrap'}}>
              {
                subWave.groups.map((groupId, groupIndex) => {
                  const group = props.groups.find((g) => g.id === groupId);

                  if (!group) {
                    return null;
                  }

                  const model = props.models.find((m) => m.id === group.weights[0]?.data);

                  return <div
                    key={`${group.id}-${groupIndex}`}
                    style={{marginTop: 5, marginRight: 5}}
                    onMouseDown={(e) => {
                      if (e.button === 2) {
                        props.dispatch({
                          type: ActionType.PatchWave, id: props.wave.id, patch: {
                            subWaves: props.wave.subWaves.map((sw) => {
                              if (subWave.id === sw.id) {
                                return {
                                  ...sw,
                                  groups: sw.groups.filter((id, index) => index !== groupIndex),
                                };
                              }

                              return sw;
                            }),
                          },
                        });
                      }
                    }}
                  >
                    <div style={{fontSize: 14}}>
                      {group.name}
                    </div>
                    {
                      model && <div style={{transform: 'scale(0.8)', transformOrigin: '0 0'}}>
                        <ModelView bubbles={model.bubbles}/>
                      </div>
                    }
                  </div>;
                })
              }
            </div>
          </div>;
        })
      }
    </div>
  </div>;
});
