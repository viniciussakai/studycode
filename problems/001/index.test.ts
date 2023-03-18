import { twoSum } from ".";
import { expect, it } from "vitest";

it("should return an array which contains the index of the two numbers", () => {
	const nums = [2, 7, 11, 15];
	const target = 9;

	expect(twoSum(nums, target)).toEqual([0, 1]);
});

it("should not include a number twice ", () => {
	const nums = [3, 3, 11, 15];
	const target = 6;

	expect(twoSum(nums, target)).toEqual([0, 1]);
});
