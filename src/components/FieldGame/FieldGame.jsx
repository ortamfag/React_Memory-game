import React from 'react';
import './index.scss';
import ClickPlace from '../UI/ClickPlace/ClickPlace';

const FieldGame = ({rightAnswersCounter}) => {


    return (
        <>
            <ClickPlace rightAnswersCounter={rightAnswersCounter}/>
            {/* <ClickPlace/>
            <ClickPlace/>
            <ClickPlace/>
            <ClickPlace/>
            <ClickPlace/>
            <ClickPlace/>
            <ClickPlace/>
            <ClickPlace/>
            <ClickPlace/>
            <ClickPlace/>
            <ClickPlace/> */}
        </>
    );
};

export default FieldGame;

