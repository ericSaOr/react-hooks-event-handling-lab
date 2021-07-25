function EyesOnMe() {
	function handleButton(event) {
        const isOnFocus= event.target.onFocus;
       return {isOnFocus ? console.log('Good!'):console.log('Hey! Eyes on me')}
		
	return (
		<div>
			<button onClick={handleButton}>'Eyes on me'</button>
		</div>
	);
  }
}

export default EyesOnMe;
