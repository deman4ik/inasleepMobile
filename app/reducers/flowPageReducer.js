// @flow weak
import * as actionTypes from "../actionTypes";

// Reducer
const DEFAULT_STATE = {
	data: [
		{
			id: 1,
			author: "Princes",
			avatar: "https://randomuser.me/api/portraits/women/10.jpg",
			avatarText: "P",
			image: "https://cdn.dribbble.com/users/288987/screenshots/2220510/in-the-woods_1x.jpg",
			imageColor: "rgba(23, 12, 46,.9)",
			title: "Сказочные чудеса",
			text: `Мне приснился чудесный сон, о бабочках, птичках-синичках и единорогах.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut nim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor
      in reprehenderit in voluptate velit esse cillum dolore eu fugiat
      nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum`,
			date: "23.08.2017",
			likesCount: 368,
			commentsCount: 7,
			interpetsCount: 2
		},
		{
			id: 2,
			author: "Lumberjacka",
			avatar: "https://randomuser.me/api/portraits/women/21.jpg",
			avatarText: "LJ",
			image: "https://cdn.dribbble.com/users/288987/screenshots/3342177/fox-tale_1x.jpg",
			imageColor: "rgba(225, 188, 142,.9)",
			title: "Лесное приключение",
			text: "Кошмарное сновидение сегодня! Очутилась одна в темном лесу, а медведь собирал грибы в лису!",
			date: "12.07.2017",
			likesCount: 213,
			commentsCount: 4,
			interpetsCount: 0
		},
		{
			id: 3,
			author: "Peter",
			avatar: "https://randomuser.me/api/portraits/men/22.jpg",
			avatarText: "P",
			image: "https://cdn.dribbble.com/users/356847/screenshots/1761291/winter-sky_1x.jpg",
			imageColor: "rgba(46, 69, 100,.9)",
			title: "Ничего не приснилось",
			text: "Ничего не приснилось, зато хорошо выспался! Всегда бы так.",
			date: "02.07.2017",
			likesCount: 6,
			commentsCount: 0,
			interpetsCount: 1
		},
		{
			id: 4,
			author: "LucidDreamer",
			avatar: "https://randomuser.me/api/portraits/men/28.jpg",
			avatarText: "LD",
			image: "https://cdn.dribbble.com/users/150724/screenshots/2203790/362_chasing_dreams_1x.png",
			imageColor: "rgba(80, 44, 127,.9)",
			title: "Дом в деревне",
			text:
				"Осознаюсь в деревне, около дома в котором я провел свое детство. Попробовал взлететь - не получилось. Пришлось идти пешком на речку.",
			date: "02.07.2017",
			likesCount: 95,
			commentsCount: 2,
			interpetsCount: 0
		}
	]
};
export default function(state = DEFAULT_STATE, action) {
	switch (action.type) {
		default:
			return state;
	}
}

// Selectors (mapStateToProps)
export const getFlowPageState = state => state;
