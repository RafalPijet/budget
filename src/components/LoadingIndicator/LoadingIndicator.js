import React from 'react';
import styled, {keyframes} from "styled-components";

const Root = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
`

const ring = keyframes`
    0% {
    transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`

const Content = styled.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #fff;
    border-radius: 50%;
    animation: ${ring} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ theme }) => theme.colors.gray.dark} transparent transparent transparent;
`

const First = styled(Content)`
    animation-delay: -0.45s;
`

const Second = styled(Content)`
    animation-delay: -0.3s;
`

const Third = styled(Content)`
     animation-delay: -0.15s;
`

const LoadingIndicator = () => {
    return (
        <Root>
            <Content/>
            <First/>
            <Second/>
            <Third/>
        </Root>
    )
}

export default LoadingIndicator;
