import { IFlexProperties} from '../model/FlexProperties';

export function FlexListProperties() {
  const properties: Array<IFlexProperties> = [
    {
      name:'flex-direction',
      values:['row ', 'row-reverse', 'column', 'column-reverse']
    },
    {
      name:'flex-wrap',
      values:['nowrap', 'wrap', 'wrap-reverse']
    },
    {
      name:'justify-content',
      values:['flex-start','flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'start', 'end', 'left', 'right']
    },
  ]
}