// Code Keypad Component Here
import react from 'react';

function Keypad() {
	function onKeypadChange() {
		console.log('Entering password...');
	}
	return (
		<div>
			<input type="password" onChange={onKeypadChange} />
		</div>
	);
}

export default Keypad;
