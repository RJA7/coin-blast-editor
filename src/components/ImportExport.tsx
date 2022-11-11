import { ActionType } from '../data/actions';
import React, { useContext } from 'react';
import { Context } from '../App';
import { BallModelData, ModelsGroupData, WaveData } from '../data/export-data-types';

const {clipboard} = window.require('electron');

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
    <input type="button" value={'Import'} onClick={() => {
      let data = clipboard.readText();

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
    <input type="button" value={'Export'} onClick={() => {
      const data = JSON.stringify({
        models: state.models,
        groups: state.groups,
        waves: state.waves,
      } as SaveData);

      clipboard.writeText(data);
    }}/>
  </div>;
};
