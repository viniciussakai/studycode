export function isPalindrome(x: number): boolean {
	const number = x.toString();
	let left = 0;
	let right = number.length - 1;

	while (left < right) {
		if (number[left] !== number[right]) {
			return false;
		}

		left++;
		right--;
	}

	return true;
}
