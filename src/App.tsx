import React, { useReducer } from 'react';
import './App.css';
import { initialState, reducer } from './data/reducer';
import { Dispatch } from './data/actions';
import { ModelsList } from './components/ModelsList/ModelsList';
import { EditModel } from './components/EditModel/EditModel';
import { GroupsList } from './components/GroupsLIst/GroupsList';
import { WavesList } from './components/WavesList/WavesList';

export const Context = React.createContext({state: initialState, dispatch: (() => void 0) as Dispatch});

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{state, dispatch}}>
      <div
        style={{display: 'flex'}}
        onContextMenu={(e) => {
          e.preventDefault();
        }}
      >
        <div className={'App-Column'}>
          <EditModel model={state.editModel} models={state.models} dispatch={dispatch}/>
        </div>
        <div className={'App-Column'}>
          <ModelsList dispatch={dispatch} models={state.models} selectedModelId={state.selectedModelId}/>
        </div>
        <div className={'App-Column'}>
          <GroupsList
            dispatch={dispatch}
            models={state.models}
            groups={state.groups}
            selectedModelId={state.selectedModelId}
            selectedGroupId={state.selectedGroupId}
          />
        </div>
        <div className={'App-Column'}>
          <WavesList
            dispatch={dispatch}
            groups={state.groups}
            models={state.models}
            waves={state.waves}
            selectedGroupId={state.selectedGroupId}
          />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
