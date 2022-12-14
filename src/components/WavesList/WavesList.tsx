import { ActionType, Dispatch } from '../../data/actions';
import { BallModelData, ModelsGroupData, WaveData } from '../../data/export-data-types';
import { WaveView } from './WaveView';
import React from 'react';
import { ImportExport } from '../ImportExport';

type Props = {
  dispatch: Dispatch;
  groups: ModelsGroupData[];
  models: BallModelData[];
  waves: WaveData[];
  selectedGroupId: string | null;
}

export const WavesList = (props: Props) => {
  return <div>
    <div style={{marginBottom: 30, display: 'flex'}}>
      <input type="button" value={'New Wave'} onClick={() => {
        props.dispatch({type: ActionType.AddWave});
      }}/>

      <div style={{marginLeft: 'auto'}}>
        <ImportExport/>
      </div>
    </div>

    {
      props.waves.map((wave, i) => {
        return <div key={wave.id} style={{marginBottom: 60}}>
          <WaveView
            wave={wave}
            models={props.models}
            groups={props.groups}
            dispatch={props.dispatch}
            name={`Wave ${i + 1}`}
            selectedGroupId={props.selectedGroupId}
          />
        </div>;
      })
    }
  </div>;
};
