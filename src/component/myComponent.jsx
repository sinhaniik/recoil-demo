import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import myAtom from '../Atom/initialStateAtom.jsx';
import './styles.css';

const Counter = () => {
	const [myAtomValue, setMyAtomValue] = useRecoilState(myAtom);

	const handleClickMinus = () => {
		setMyAtomValue(myAtomValue - 1);
	};

	const handleClickPlus = () => {
		setMyAtomValue(myAtomValue + 1);
	};

	return (
		<div className='main-div' key={'(^&*$%'}>
			<h1>{myAtomValue}</h1>
			<button className='btn-minus' onClick={handleClickMinus}>
				{' '}
				-{' '}
			</button>
			<button className='btn-plus' onClick={handleClickPlus}>
				{' '}
				+{' '}
			</button>
		</div>
	);
};

export default Counter;
