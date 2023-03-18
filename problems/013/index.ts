interface RomanLetter {
	[key: string]: number;
}

export function romanToInt(s: string): number {
	const letters: RomanLetter = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};

	let total = 0;

	for (let i = 0; i < s.length; i++) {
		if (letters[s[i]] < letters[s[i + 1]]) {
			total -= letters[s[i]];
		} else {
			total += letters[s[i]];
		}
	}

	return total;
}
