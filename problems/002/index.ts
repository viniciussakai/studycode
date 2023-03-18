import { ListNode } from "./ListNode";

export function addTwoNumbers(
	l1: ListNode | null,
	l2: ListNode | null,
): ListNode | null {
	const result = new ListNode(0);
	let current = result;
	let carry = 0;

	while (l1 != null || l2 != null || carry) {
		let sum = 0;

		if (l1 != null) {
			sum += l1.val;
			l1 = l1.next;
		}

		if (l2 != null) {
			sum += l2.val;
			l2 = l2.next;
		}

		sum += carry;
		carry = Math.floor(sum / 10);

		const node = new ListNode(sum % 10);
		current.next = node;
		current = current.next;
	}
	return result.next;
}
