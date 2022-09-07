import React from 'react';
import './index.scss';
import ClickPlace from '../UI/ClickPlace/ClickPlace';

const FieldGame = ({rightAnswersCounter}, {wrongAnswersCounter}) => {
    return (
        <>
            <ClickPlace rightAnswersCounter={rightAnswersCounter} wrongAnswersCounter={wrongAnswersCounter}/>
            <ClickPlace rightAnswersCounter={rightAnswersCounter} wrongAnswersCounter={wrongAnswersCounter}/>
            <ClickPlace rightAnswersCounter={rightAnswersCounter} wrongAnswersCounter={wrongAnswersCounter}/>
            <ClickPlace rightAnswersCounter={rightAnswersCounter} wrongAnswersCounter={wrongAnswersCounter}/>
            <ClickPlace rightAnswersCounter={rightAnswersCounter} wrongAnswersCounter={wrongAnswersCounter}/>
            <ClickPlace rightAnswersCounter={rightAnswersCounter} wrongAnswersCounter={wrongAnswersCounter}/>
            <ClickPlace rightAnswersCounter={rightAnswersCounter} wrongAnswersCounter={wrongAnswersCounter}/>
            <ClickPlace rightAnswersCounter={rightAnswersCounter} wrongAnswersCounter={wrongAnswersCounter}/>
            <ClickPlace rightAnswersCounter={rightAnswersCounter} wrongAnswersCounter={wrongAnswersCounter}/>
            <ClickPlace rightAnswersCounter={rightAnswersCounter} wrongAnswersCounter={wrongAnswersCounter}/>
            <ClickPlace rightAnswersCounter={rightAnswersCounter} wrongAnswersCounter={wrongAnswersCounter}/>
            <ClickPlace rightAnswersCounter={rightAnswersCounter} wrongAnswersCounter={wrongAnswersCounter}/>
        </>
    );
};

export default FieldGame;

