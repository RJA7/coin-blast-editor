import { State } from './reducer';
import { Dispatch as ReactDispatch } from 'react';
import { BallModelData, ModelsGroupData, WaveData } from './export-data-types';

export enum ActionType {
  PatchState = 'PatchState',
  AddNewModel = 'AddNewModel',
  SaveModel = 'SaveModel',
  EditModel = 'EditModel',
  RemoveModel = 'RemoveModel',
  PatchGroup = 'PatchGroup',
  AddGroup = 'AddGroup',
  RemoveGroup = 'RemoveGroup',

  AddWave = 'AddWave',
  PatchWave = 'PatchWave',
  RemoveWave = 'RemoveWave',
  MoveWaveDown = 'MoveWaveDown',
  AddSubWave = 'AddSubWave',
}

export type Action = {
  type: ActionType.PatchState,
  patch: Partial<State>;
} | {
  type: ActionType.AddNewModel,
  model: BallModelData;
} | {
  type: ActionType.SaveModel,
  model: BallModelData;
} | {
  type: ActionType.EditModel,
  model: BallModelData;
} | {
  type: ActionType.RemoveModel,
  id: string;
} | {
  type: ActionType.PatchGroup,
  id: string;
  patch: Partial<ModelsGroupData>;
} | {
  type: ActionType.AddGroup,
} | {
  type: ActionType.RemoveGroup,
  id: string,
} | {
  type: ActionType.AddWave,
} | {
  type: ActionType.PatchWave,
  patch: Partial<WaveData>,
  id: string,
} | {
  type: ActionType.RemoveWave,
  id: string,
} | {
  type: ActionType.MoveWaveDown,
  id: string,
} | {
  type: ActionType.AddSubWave,
  id: string,
}

export type Dispatch = ReactDispatch<Action>;
