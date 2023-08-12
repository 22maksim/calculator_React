import { useState } from 'react';
import styles from './Calculator.module.css';

const arrayButton = [
	{ id: 'null', value: 0, onFun: 'num' },
	{ id: 'one', value: 1, onFun: 'num' },
	{ id: 'two', value: 2, onFun: 'num' },
	{ id: 'tree', value: 3, onFun: 'num' },
	{ id: 'four', value: 4, onFun: 'num' },
	{ id: 'five', value: 5, onFun: 'num' },
	{ id: 'sex', value: 6, onFun: 'num' },
	{ id: 'seven', value: 7, onFun: 'num' },
	{ id: 'eight', value: 8, onFun: 'num' },
	{ id: 'nine', value: 9, onFun: 'num' },
	{ id: 'sum', value: '+', onFun: 'plus' },
	{ id: 'subtract', value: '-', onFun: 'minus' },
	{ id: 'equals', value: '=', onFun: 'equals' },
	{ id: 'cancel', value: 'c', onFun: 'canc' },
];

const Calculator = () => {
	const [number, setNumber] = useState('');
	const [showNum, setShowNum] = useState('0');
	const [result, setResult] = useState('');
	const [sign, setSign] = useState('');

	const addShowNum = (num) => {
		if (showNum === '0') {
			setShowNum(num.toString());
			setNumber((i) => i + num);
		} else if (sign === '=') {
			setShowNum(num.toString());
			setNumber((i) => i + num);
			setSign('');
		} else {
			setShowNum(showNum + num);
			setNumber((i) => i + num);
		}
	};

	const checkEffect = () => {
		if (sign === '+') {
			setResult(result + Number(number));
		} else if (sign === '-') {
			setResult(result - Number(number));
		} else if (sign === '=') {
		} else if (!sign) {
			setResult(Number(number));
		}
		setNumber('');
	};

	const sum = () => {
		checkEffect();
		setSign('+');
		setShowNum(showNum + ' + ');
	};

	const subtract = () => {
		checkEffect();
		setSign('-');
		setShowNum(showNum + ' - ');
	};

	const resultShow = () => {
		if (sign === '+') {
			setResult(result + Number(number));
			setShowNum(result + Number(number));
		} else if (sign === '-') {
			setResult(result - Number(number));
			setShowNum(result - Number(number));
		} else if (sign === '=') {
		} else if (!sign) {
			setResult(Number(number));
		}
		setNumber('');
		setSign('=');
	};

	const cleaning = () => {
		setNumber('');
		setShowNum('0');
		setSign('');
		setResult('');
	};

	const styleShowNum = () => (sign === '=' ? styles.result : styles.showNum);

	const markNum2 = arrayButton.map((obj) => {
		return (
			<li
				className={obj.onFun === 'num' ? styles.links : styles.symbol}
				onClick={() =>
					obj.onFun === 'num'
						? addShowNum(obj.value)
						: obj.onFun === 'plus'
							? sum()
							: obj.onFun === 'minus'
								? subtract()
								: obj.onFun === 'equals'
									? resultShow()
									: obj.onFun === 'canc'
										? cleaning()
										: 'add your function and symbol'
				}
				key={obj.id}
			>
				{obj.value}
			</li>
		);
	});

	return (
		<>
			<div className={styles.block}>
				<div>
					<div className={styles.show}>{showNum}</div>
					<div className={styleShowNum()}>{number || result}</div>
					<div>
						<ul className={styles.grid}>{markNum2}</ul>
					</div>
				</div>

				<div>
					<h2 className={styles.header}>{result}</h2>
				</div>
			</div>
		</>
	);
};

export default Calculator;
