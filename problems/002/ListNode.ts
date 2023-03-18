export class ListNode {
	val: number;
	next: ListNode | null;

	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

export function insert(root: ListNode | null, value: number) {
	const temp = new ListNode();
	temp.val = value;
	temp.next = root;
	root = temp;
	return root;
}
export function numberToList(number: number): ListNode | null {
	let list: ListNode | null = null;
	const array = Array.from(number.toString());

	array.forEach((item) => {
		list = insert(list, parseInt(item));
	});

	return list;
}
