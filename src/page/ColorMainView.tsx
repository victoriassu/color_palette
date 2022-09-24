import React from 'react';
import { FiRotateCw } from "react-icons/fi";
import useColorMainList from "../hooks/useColorMainList";
import styled from '@emotion/styled';

const ColorMainView = () => {
    const {
        textHex,
        alertShow,
        showColorList,
        handleRefreshIndex,
        handleClickColor,
    } = useColorMainList();

    return (
        <Root>
            <Header>
                <RefreshArea onClick={handleRefreshIndex}><FiRotateCw />  Refresh!!</RefreshArea>
            </Header>

            <Content>
                {showColorList && showColorList.map(each => (
                    <EachContent key={each.hex} color={each.hex} onClick={handleClickColor}>
                        <ColorHexName>{each.hex}</ColorHexName>
                        <ColorStyleName>{each.colorName}</ColorStyleName>
                    </EachContent>
                ))}
            </Content>
            {alertShow && (<>
                <CompleteWrapper color={textHex}>
                    <div>복사에 성공했습니다.</div>
                    <CopyText>{textHex}</CopyText>
                </CompleteWrapper>
            </>)}
        </Root>
    );
}

export default ColorMainView;

const Root = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    z-index: 5;
`;

const Header = styled.div`
    width: 100%;
    height: 50px;
    padding: 0 20px;
    cursor: pointer;
    display: flex;
`;

const RefreshArea = styled.div`
    padding: 17px 0;
    line-height: 16px;
`

const Content = styled.div`
    display: flex;
    width: 100%;
    height: calc(100vh - 50px);
    
`;

const EachContent = styled.div<{color:string}>`
    flex: 1;
    height: 100%;
    cursor: pointer;
    text-align: center;
    padding: 60vh 0;
    background-color: ${({color}) => color? color : '#FFFFFF'};
    
    &: hover {
        opacity: 0.7;
    }
`;

const ColorHexName = styled.span`
    color: #ffffff;
    font-size: 20px;
`;

const ColorStyleName = styled.div`
    margin-top: 15px;
    color: #ffffff;
    font-weight: bold;
    font-size: 30px;
`;

const CompleteWrapper = styled.div<{color: string}>`
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100vw;
    height: 100vw;
    text-align: center;
    padding: 22% 0;
    font-size: 30px;
    font-weight: bold;
    color: #ffffff;
    background-color: ${({ color}) => color ? color : 'black'};
    opacity: 1;
    animation: TextContainerAni 1.3s linear;
`;

const CopyText = styled.div`
    margin-top: 20px;
    font-size: 50px;
`;