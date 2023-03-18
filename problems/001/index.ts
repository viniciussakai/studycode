export const twoSum = (numbers: number[], target: number) => {
	const prevResult = [];

	for (let index = 0; index < numbers.length; index++) {
		const item = numbers[index];
		const diff = target - item;

		if (prevResult[item] !== undefined) {
			return [prevResult[item], index];
		}

		prevResult[diff] = index;
	}
};
