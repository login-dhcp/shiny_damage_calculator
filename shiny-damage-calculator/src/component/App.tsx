import * as React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { LOCAL_KEY, reduce } from 'reducer';
import { DEFAULT_STATE, IAction, IAppState } from 'state';
import DamageResult from 'component/DamageResult';
import { IdolParameterForm } from 'component/IdolParameterForm';
import { OtherOptionForm } from 'component/OtherOptionForm';

interface IContext {
  state: IAppState
  dispatch: (action: IAction) => void
}

const defaultState: IAppState = window.localStorage.getItem(LOCAL_KEY) === null
  ? DEFAULT_STATE : JSON.parse('' + window.localStorage.getItem(LOCAL_KEY));
if (defaultState.presetList === undefined) {
  defaultState.presetList = [];
}

// tslint:disable-next-line: no-empty
export const AppContext = React.createContext<IContext>({ 'state': defaultState, dispatch: () => { } });

const App: React.FC = () => {
  const [state, setState] = React.useState<IAppState>(defaultState);

  return (
    <AppContext.Provider value={{ 'state': state, dispatch: (action: IAction) => reduce(state, setState, action) }}>
      <Row>
        <Col className='mx-auto' xs={12} sm={8} md={6}>
          <h1 className='text-center d-none d-sm-block my-3'>샤니마스 어필량 계산기</h1>
          <h2 className='text-center d-xs-block d-sm-none my-3'>샤니마스 어필량 계산기</h2>
          <div className='text-center my-3'>
            Ver.0.7.0
            <a className='ml-3' href='https://github.com/YSRKEN/shiny_damage_calculator'>GitHub 소스 코드</a>
            <a className='ml-3' href='https://twitter.com/YSRKEN'>원작자 Twitter</a>
          <div className='text-center my-3'>
            Ver.0.1.0
            <a className='ml-3' href='https://github.com/login-dhcp/shiny_damage_calculator.git'> 한글 번역 Github 소스 코드 </a>
            번역자 메일:nonamed424@gmail.com
          </div>
          </div>
          <p className='text-center my-3'>
            주의: 어필량 계산식이 완벽히 밝혀지지 않았으므로 <strong>오차가 발생할 수 있습니다.</strong>
          </p>
          <Form className='border'>
            <IdolParameterForm />
            <OtherOptionForm />
          </Form>
          <div className='border'>
            <DamageResult />
          </div>
        </Col>
      </Row>
    </AppContext.Provider>
  );
}

export default App;
