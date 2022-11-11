import { ActionType } from '../data/actions';
import React, { useContext } from 'react';
import { Context } from '../App';
import { BallModelData, ModelsGroupData, WaveData } from '../data/export-data-types';

type SaveData = {
  models: BallModelData[];
  groups: ModelsGroupData[];
  waves: WaveData[];
}

const isSavedData = (data: any): data is SaveData => {
  return Array.isArray(data.models) && Array.isArray(data.groups) && Array.isArray(data.waves);
};

export const ImportExport = () => {
  const {state, dispatch} = useContext(Context);

  return <div>
    <input type="button" value={'Copy'} onClick={async () => {
      const data = JSON.stringify({
        models: state.models,
        groups: state.groups,
        waves: state.waves,
      } as SaveData);

      await navigator.clipboard.writeText(data);
    }}/>
    <input type="button" value={'Paste'} onClick={async () => {
      let data = await navigator.clipboard.readText();

      try {
        data = JSON.parse(data);
      } catch (e) {
        console.error(e);
        return;
      }

      if (!isSavedData(data)) return;

      dispatch({
        type: ActionType.PatchState,
        patch: {
          ...data as SaveData,
        },
      });
    }}/>
  </div>;
};
