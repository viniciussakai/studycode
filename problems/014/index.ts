export function longestCommonPrefix(strs: string[]): string {
	if (strs == null || strs.length === 0) return "";

	strs = strs.sort();

	const lastWord = strs[strs.length - 1];

	let index = 0;

	while (index < strs[0].length) {
		if (strs[0].charAt(index) === lastWord.charAt(index)) {
			index++;
		} else {
			break;
		}
	}

	return index === 0 ? "" : strs[0].slice(0, index);
}
