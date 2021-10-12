import { useState } from "react";
import './App.css';

function App() {
	const [value, setValue] = useState();


	const handleInputChange = (e) => {
		if (e.target.value === '') {
			setValue(false);
			return;
		}
		let splittedValue = e.target.value.toLowerCase().split("");
		let wordLength = splittedValue.length - 1;
		let newWord;
		splittedValue.map((el, i) => {
			return newWord = (newWord ?? '') + splittedValue[wordLength - i];
		})

		//remove special characters and replace with normal ones also remove whitespaces
		//fully working with portuguese language and special characters
		let oldWord = e.target.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f\s]/g, "");
		newWord = newWord.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f\s]/g, "");

		console.log(oldWord, newWord);
		if (oldWord === newWord) {
			setValue(newWord);
		} else {
			setValue('');
		}
	}
	return (
		<div className="App">
			<input onChange={handleInputChange} />
			{
				value && (
					<>
						Its a palindrome 👻 : {value}
					</>
				)
			}
		</div>
	);
}

export default App;
