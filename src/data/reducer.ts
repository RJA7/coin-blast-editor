import { Action, ActionType } from './actions';
import { BallCoreType, BallModelData, ModelsGroupData, SpinRangeName, WaveData } from './export-data-types';
import * as uuid from 'uuid';

import data from './data.json';

export type State = {
  models: BallModelData[];
  groups: ModelsGroupData[];
  waves: WaveData[];
  editModel: BallModelData;
  selectedModelId: string | null;
  selectedGroupId: string | null;
};

export const DEFAULT_BALL_FORCE_Y = -1.4;

export const initialState: State = {
  models: [],
  groups: [],
  waves: [],
  editModel: {
    id: uuid.v4(),
    name: 'Ball Name',
    bounceForceY: DEFAULT_BALL_FORCE_Y,
    spinRanges: SpinRangeName.Round,
    coreType: BallCoreType.Regular,
    bubbles: [[]],
  },
  selectedModelId: null,
  selectedGroupId: null,
  ...data as Partial<State>,
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.PatchState:
      return {
        ...state,
        ...action.patch,
      };

    case ActionType.AddNewModel:
      return {
        ...state,
        models: [...state.models, {...action.model, id: uuid.v4()}],
      };

    case ActionType.SaveModel:
      return {
        ...state,
        models: state.models.map((model) => {
          return model.id === action.model.id ? action.model : model;
        }),
      };

    case ActionType.EditModel:
      return {
        ...state,
        editModel: action.model,
      };

    case ActionType.RemoveModel: {
      let groups = state.groups;

      if (groups.some((g) => g.weights.some(w => w.data === action.id))) {
        groups = groups.map((g) => {
          return g.weights.some(w => w.data === action.id) ? {
            ...g,
            weights: g.weights.filter((w) => w.data !== action.id),
          } : g;
        });
      }

      return {
        ...state,
        models: state.models.filter((m) => m.id !== action.id),
        selectedModelId: state.selectedModelId === action.id ? null : state.selectedModelId,
        groups,
      };
    }

    case ActionType.PatchGroup:
      return {
        ...state,
        groups: state.groups.map((g) => {
          return g.id === action.id ? {...g, ...action.patch} : g;
        }),
      };

    case ActionType.AddGroup:
      return {
        ...state,
        groups: [...state.groups, {
          id: uuid.v4(),
          name: 'Group name',
          weights: [],
        }],
      };

    case ActionType.RemoveGroup: {
      let waves = state.waves;

      if (waves.some((w) => w.subWaves.some((sw) => sw.groups.includes(action.id)))) {
        waves = waves.map((wave) => {
          if (wave.subWaves.some((sw) => sw.groups.includes(action.id))) {
            return {
              ...wave,
              subWaves: wave.subWaves.map((sw) => {
                return {
                  ...sw,
                  groups: sw.groups.filter((id) => id !== action.id),
                };
              }),
            };
          }

          return wave;
        });
      }

      return {
        ...state,
        groups: state.groups.filter((g) => g.id !== action.id),
        ...waves,
      };
    }

    case ActionType.AddWave:
      return {
        ...state,
        waves: [...state.waves, {
          id: uuid.v4(),
          subWaves: [],
        }],
      };

    case ActionType.PatchWave:
      return {
        ...state,
        waves: state.waves.map((wave) => {
          return wave.id === action.id ? {...wave, ...action.patch} : wave;
        }),
      };

    case ActionType.RemoveWave:
      return {
        ...state,
        waves: state.waves.filter((w) => w.id !== action.id),
      };

    case ActionType.MoveWaveDown: {
      const index = state.waves.findIndex((w) => w.id === action.id);

      if (index === state.waves.length - 1) {
        return state;
      }

      const waves = [...state.waves];
      [waves[index], waves[index + 1]] = [waves[index + 1], waves[index]];

      return {
        ...state,
        waves,
      };
    }

    case ActionType.AddSubWave:
      return {
        ...state,
        waves: state.waves.map((wave) => {
          if (wave.id === action.id) {
            return {
              ...wave,
              subWaves: [...wave.subWaves, {
                id: uuid.v4(),
                groups: [],
              }],
            };
          }

          return wave;
        }),
      };
  }

  return state;
};
