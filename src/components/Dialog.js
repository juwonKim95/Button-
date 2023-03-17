import styled, { keyframes } from 'styled-components';
import ButtonTotal from './ButtonTotal';
import React, { useEffect, useState } from 'react';

//fadeIn - keyframes만들기
const fadeIn = keyframes`
    from  { opacity : 0 }
    to { opacity: 1 }
`;
const fadeOut = keyframes`
    from { opacity : 1}
    to { opacity : 0}
`;
//slideUp - keyframes만들기
const slideUp = keyframes`
    from{ transform: translateY(200px); }
    to{ transform: translateY(0px);}
    `;
//slideDown - keyframes만들기
const slideDown = keyframes`
    from{ transform: translateY(0px); }
    to{ transform: translateY(200px);}
`;

//배경
const DarkBackground = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.7);
    animation-duration: 0.25s;
    animation-name: ${fadeIn};
    animation-fill-mode: forwards;
    ${props=>
        props.disappear &&
        css`
        animation-name: ${fadeOut};
        `}
`;
//컨펌창 블럭
const DialogBlock = styled.div`
    width: 320px;
    padding: 1.5em;
    background: white;
    border-radius: 2px;
    h3{
        margin:0;
        font-size: 1.5em;
    }
    p{
        font-size: 1.125em;
    }
    animation-duration: 0.25s;
    animation-name: ${slideUp};
    animation-fill-mode: forwards;
    ${props=>
        props.disappear &&
        css`
        animation-name: ${slideDown};
        `
    }
`;
const Dialog = ({title, children, confirmText, cancelText, visible,onConfirm, onCancel}) => {
    //Diallog가 보이는지 안보이는지 visible이 정함
    //현재 트랜지션 효과를 보여주고 있는 중이라는 상태를 의미
    const [animate, setAnimate]=useState(false);
    //실제로 컴포넌트가 사라지는 시점을 지연시키기 위한 상태
    const [localVisible, setLocalVisible]=useState(visible);
    //useEffect작성
    //visible값이 true에서 false로 바뀌는 시점을 감지하여 animate값을 true로 변경
    //setTimeout함수를 사용하여 0.5s 이후에 false로 변경
    useEffect(()=>{
        //visible값이 true에서 false로 되는걸 확인
        if(localVisible && !visible){
            setAnimate(true);
            setTimeout(()=>setAnimate(false),500);
        }
        setLocalVisible(visible);
    },[localVisible, visible]);
    if (!animate && !localVisible) return null;
    return (
        <DarkBackground disappear={!visible}>
            <DialogBlock disappear={!visible}>
                <h3>{title}</h3>
                <p>{children}</p>
                <div>
                    <ButtonTotal color="gray" onClick={onConfirm}>{confirmText}</ButtonTotal>
                    <ButtonTotal color="pink" onClick={onCancel}>{cancelText}</ButtonTotal>
                </div>
            </DialogBlock>
        </DarkBackground>
    );
};  
export default Dialog;  