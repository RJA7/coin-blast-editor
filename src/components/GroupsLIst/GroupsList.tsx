import { ActionType, Dispatch } from '../../data/actions';
import { BallModelData, ModelsGroupData } from '../../data/export-data-types';
import { GroupView } from './GroupView';
import React from 'react';

type Props = {
  dispatch: Dispatch;
  groups: ModelsGroupData[];
  models: BallModelData[];
  selectedModelId: string | null;
  selectedGroupId: string | null;
}

export const GroupsList = (props: Props) => {
  return <div>
    <div style={{marginBottom: 30}}>
      <input type="button" value={'New Group'} onClick={() => {
        props.dispatch({type: ActionType.AddGroup});
      }}/>
    </div>

    {
      props.groups.map((group) => {
        return <div key={group.id} style={{marginBottom: 60}}>
          <GroupView
            group={group}
            models={props.models}
            dispatch={props.dispatch}
            selectedModelId={props.selectedModelId}
            selectedGroupId={props.selectedGroupId}
          />
        </div>;
      })
    }
  </div>;
};
