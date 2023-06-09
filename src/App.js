import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import ButtonTotal from './components/ButtonTotal';
import Dialog from './components/Dialog';

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4em;
  border: 1px solid black;
  padding: 1em;
`;
//둘 중 하나라도 있으면 true이다. 컬러값이 없으면 black 적용된다.
function App() {
  const [ dialog, setDialog ] = useState(false);
  const onClick = () => {
    setDialog(true);
  }
  const onConfirm = () =>{
    console.log('확인');
    setDialog(false);
  }
  const onCancel = () =>{
    console.log('취소');
    setDialog(false);
  }
  return (
    <>
    <ThemeProvider theme={{
      palette: {
        blue: '#228be6',
        gray: '#495057',
        pink: '#f06595'
      }

    }}>
    <AppBlock>
      <div>
        <ButtonTotal size='large'>Button</ButtonTotal>
        <ButtonTotal>Button</ButtonTotal>
        <ButtonTotal size='small'>Button</ButtonTotal>
      </div>
      <div>
        <ButtonTotal size='large' color='pink'>Button</ButtonTotal>
        <ButtonTotal color='pink'>Button</ButtonTotal>
        <ButtonTotal size='small' color='pink'>Button</ButtonTotal>
      </div>
      <div>
        <ButtonTotal size='large' color='gray'>Button</ButtonTotal>
        <ButtonTotal color='gray'>Button</ButtonTotal>
        <ButtonTotal size='small' color='gray'>Button</ButtonTotal>
      </div>
      <div>
        <ButtonTotal fullWidth>Button</ButtonTotal>
      </div>
      <div>
        <ButtonTotal fullWidth color="pink" onClick={onClick}>삭제</ButtonTotal>
      </div>
    </AppBlock>
    <Dialog title="정말로 삭제하시겠습니까?"
    confirmText="삭제"
    cancelText="취소"
    visible={dialog}
    onConfirm={onConfirm}
    onCancel={onCancel}
    >진짜?</Dialog>
    </ThemeProvider>
    
    </>
  );
}

export default App;