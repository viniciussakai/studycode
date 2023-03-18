import { addTwoNumbers } from ".";
import { numberToList } from "./ListNode";
import { expect, it } from "vitest";

it("should return a sum of a two  linked list", () => {
	const list1 = numberToList(23435);
	const list2 = numberToList(32345);

	const result = numberToList(55780);

	expect(addTwoNumbers(list1, list2)).equals(result);
});
