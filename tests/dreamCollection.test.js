import * as dreams from "../app/reducers/dreamsReducer";
import * as selectorTypes from "../app/selectorTypes";
const STATE = {
	dreams: {
		"1": {
			id: "1"
		},
		"2": {
			id: "2"
		},
		"3": {
			id: "3"
		},
		"4": {
			id: "4"
		},
		"5": {
			id: "5"
		},
		"6": {
			id: "6"
		}
	},
	communityFeed: {
		"1": {
			id: "1",
			loaded: true
		},
		"2": {
			id: "2",
			loaded: true
		},
		"3": {
			id: "3",
			loaded: true
		},
		"4": {
			id: "4",
			loaded: true
		}
	},
	subscibedFeed: {
		"3": {
			id: "3",
			loaded: true
		},
		"4": {
			id: "4",
			loaded: true
		}
	},

	userFeed: {
		"1": {
			id: "1",
			loaded: true
		}
	}
};
describe("Sort dreams", () => {
	test("by id", () => {
		const goodResult = {
			id: "3"
		};
		let result = dreams.getDreamById(STATE, "3");
		expect(result).toEqual(goodResult);
	});

	test("by community feed", () => {
		const goodResult = [
			{
				id: "1"
			},
			{
				id: "2"
			},
			{
				id: "3"
			},
			{
				id: "4"
			}
		];
		let result = dreams.getDreamsByFeed(STATE, selectorTypes.FEED_COMMUNITY);
		expect(result).toEqual(goodResult);
	});
	test("by subscribed feed", () => {
		const goodResult = [
			{
				id: "3"
			},
			{
				id: "4"
			}
		];
		let result = dreams.getDreamsByFeed(STATE, selectorTypes.FEED_SUBSCRIBED);
		expect(result).toEqual(goodResult);
	});
	test("by user feed", () => {
		const goodResult = [
			{
				id: "1"
			}
		];
		let result = dreams.getDreamsByFeed(STATE, selectorTypes.FEED_USER);
		expect(result).toEqual(goodResult);
	});
	test("by wrong selector type", () => {
		const goodResult = [];
		let result = dreams.getDreamsByFeed(STATE, "FEED_UNKNOWN");
		expect(result).toEqual(goodResult);
	});
});
