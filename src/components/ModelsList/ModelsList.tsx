import { Dispatch } from '../../data/actions';
import { BallModelData } from '../../data/export-data-types';
import { ModelViewWithMeta } from './ModelViewWithMeta';

type Props = {
  dispatch: Dispatch;
  models: BallModelData[];
  selectedModelId: string | null;
}

export const ModelsList = (props: Props) => {
  return <div>
    {
      props.models.map((model) => {
        return <div key={model.id} style={{marginBottom: 60}}>
          <ModelViewWithMeta model={model} dispatch={props.dispatch} selectedModelId={props.selectedModelId}/>
        </div>;
      })
    }
  </div>;
};
