import React from 'react';
import { BallModelData } from '../../data/export-data-types';
import { ModelView } from './ModelView';
import { ActionType, Dispatch } from '../../data/actions';

type Props = {
  model: BallModelData;
  dispatch: Dispatch;
  selectedModelId: string | null;
}

export const ModelViewWithMeta = React.memo((props: Props) => {
    return <div style={{display: 'flex'}}>
      <div style={{marginRight: 50}}>
        <div style={{fontWeight: 'bold'}}>{props.model.name}</div>
        <div>Bounce: {props.model.bounceForceY}</div>
        <div>Spin: {props.model.spinRanges}</div>
        <div>Core: {props.model.coreType}</div>

        <div style={{marginTop: 10}}>
          <input type="button" value={'Edit'} onClick={() => {
            props.dispatch({type: ActionType.EditModel, model: props.model});
          }}/>
          <input type="button" value={'Remove'} onClick={() => {
            props.dispatch({type: ActionType.RemoveModel, id: props.model.id});
          }}/>
          <input type="button" value={'Move Down'} onClick={() => {
            props.dispatch({type: ActionType.MoveModelDown, id: props.model.id});
          }}/>
        </div>
      </div>
      <div
        style={{border: `${props.selectedModelId === props.model.id ? 2 : 0}px solid rgba(255, 0, 0, 0.8)`}}
        onClick={() => {
          props.dispatch({type: ActionType.PatchState, patch: {selectedModelId: props.model.id}});
        }}
      >
        <ModelView bubbles={props.model.bubbles}/>
      </div>
    </div>;
  },
);
