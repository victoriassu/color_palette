import { useState } from "react";
import ColorList from "../app/items/ColorList";
import styled from "@emotion/styled";

const useColorMainList = () => {

    const [colorIdx, setColorIdx] = useState(0);

    const [alertShow, setAlertShow] = useState(false);

    const [textHex, setTextHex] = useState('');

    const showColorList = ColorList[colorIdx].colorList;

    const handleRefreshIndex = () => {
        if(colorIdx >= 4) {
            setColorIdx(0);
        } else {
            setColorIdx(colorIdx + 1);
        }
    };

    const handleClickColor = (e: React.MouseEvent<HTMLElement>) => {

        const text = e.currentTarget.getElementsByTagName('span')[0].innerHTML;

        navigator.clipboard
            .writeText(text)
            .then(() => {
                setTextHex(text);
                setAlertShow(true);
                setTimeout(() => {
                    setAlertShow(false);
                }, 1000);
            })
            .catch(() => {
                alert("복사를 다시 시도해주세요.");
            });

    };

    return {
        colorIdx,
        textHex,
        alertShow,
        showColorList,
        handleRefreshIndex,
        handleClickColor,
    }
}

export default useColorMainList;
