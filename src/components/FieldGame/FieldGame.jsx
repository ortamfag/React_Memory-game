import React from 'react';
import './index.scss';
import CustomButton from '../UI/CustomButton/CustomButton'

const FieldGame = ({name, counterClick}) => {
    return (
        <>
        <div className='title'>
            {name}
        </div>

        <div onClick={() => counterClick(1)}>нажми на меня</div>

        <CustomButton/>
        </>
    );
};

export default FieldGame;

