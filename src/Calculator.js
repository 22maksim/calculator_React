import { useState } from 'react';
import styles from './Calculator.module.css';

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const Calculator = () => {
	const [number, setNumber] = useState('');
	const [showNum, setShowNum] = useState('0');
	const [result, setResult] = useState('');
	const [sign, setSign] = useState('');

	const addShowNum = (num) => {
		if (showNum === '0') {
			setShowNum(num.toString());
			setNumber(number + num);
		} else {
			setShowNum(number + num);
			setNumber(number + num);
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

	const styleShowNum = () => {
		if (sign === '=') {
			return styles.result;
		} else {
			return styles.showNum;
		}
	};

	const markNum = array.map((item) => {
		return (
			<li className={styles.links} onClick={() => addShowNum(item)} key={item}>
				{item}
			</li>
		);
	});

	return (
		<>
			<div className={styles.block}>
				<div className="calculator">
					<div className={styles.show}>{showNum}</div>
					<div className={styleShowNum()}>{number || result}</div>
					<div className={styles.mark}>
						<div>
							<ul className={styles.grid}>{markNum}</ul>
						</div>
						<div>
							<div onClick={sum} className={styles.symbol}>
								+
							</div>
							<div onClick={subtract} className={styles.symbol}>
								-
							</div>
							<div onClick={resultShow} className={styles.symbol}>
								=
							</div>
							<div onClick={cleaning} className={styles.symbol}>
								c
							</div>
						</div>
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
