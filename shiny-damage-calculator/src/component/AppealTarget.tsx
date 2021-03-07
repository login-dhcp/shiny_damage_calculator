import * as React from 'react';
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { AppContext } from './App';

export const AppealTarget: React.FC = () => {
  const context = React.useContext(AppContext);

  const onChange = (event: React.FormEvent<any>) => {
    if (event.currentTarget.value !== undefined) {
      context.dispatch({'type': 'TARGET', 'value': event.currentTarget.value});
    }
  };
  return (
    <FormGroup className='d-flex m-3'>
      <FormLabel className='text-nowrap mt-2 mr-1'>어필 대상</FormLabel>
      <FormControl className='mx-1' as='select' defaultValue={'' + context.state.appealTarget} onChange={onChange}>
        <option value='vo'>Vo심사위원</option>
        <option value='da'>Da심사위원</option>
        <option value='vi'>Vi심사위원</option>
      </FormControl>
    </FormGroup>
  )
};
