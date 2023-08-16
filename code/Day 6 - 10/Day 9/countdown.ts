function countdown() {
	for (let i = 10; i >= 1; i--) {
		setTimeout(() => {
			console.log(i);
		}, (10 - i) * 1000); // Delay is calculated based on index and a 1000 ms factor
	}
}

countdown();
