// @flow weak
import * as actionTypes from "constants/actionTypes";
import * as selectorTypes from "constants/selectorTypes";
import _ from "lodash";

// Reducer
const DEFAULT_STATE = {
  dreams: {
    "1": {
      id: "1",
      author: "Princes",
      avatar: "https://randomuser.me/api/portraits/women/10.jpg",
      avatarText: "P",
      image: "https://cdn.dribbble.com/users/288987/screenshots/2220510/in-the-woods_1x.jpg",
      imageColor: "rgba(23, 12, 46,.9)",
      title: "Сказочные чудеса",
      text: `Мне приснился чудесный сон, о бабочках, птичках-синичках и единорогах. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut nim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`,
      date: "23.08.2017",
      location: "Москва, Россия",
      likesCount: 368,
      commentsCount: 3,
      interpetsCount: 2,
      comments: [
        {
          id: "11",
          avatar: "https://shoutem.github.io/img/ui-toolkit/examples/image-11.png",
          author: "Dustin",
          date: "20 минут назад",
          text:
            "Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap. Hashtag typewriter banh mi, squid keffiyeh High."
        },
        {
          id: "12",
          avatar: "https://shoutem.github.io/img/ui-toolkit/examples/image-12.png",
          author: "Malone",
          date: "30 минут назад",
          text:
            "Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap. Hashtag typewriter banh mi, squid keffiyeh High."
        },
        {
          id: "13",
          avatar: "https://shoutem.github.io/img/ui-toolkit/examples/image-12.png",
          author: "Malone",
          date: "30 минут назад",
          text: "Тоже самое снилось, к чему бы это?"
        }
      ]
    },
    "2": {
      id: "2",
      author: "Lumberjacka",
      avatar: "https://randomuser.me/api/portraits/women/21.jpg",
      avatarText: "LJ",
      image: "https://cdn.dribbble.com/users/288987/screenshots/3342177/fox-tale_1x.jpg",
      imageColor: "rgba(225, 188, 142,.9)",
      title: "Лесное приключение",
      text: "Кошмарное сновидение сегодня! Очутилась одна в темном лесу, а медведь собирал грибы в лису!",
      date: "12.07.2017",
      location: "Москва, Россия",
      likesCount: 213,
      commentsCount: 3,
      interpetsCount: 0,
      comments: [
        {
          id: "21",
          avatar: "https://shoutem.github.io/img/ui-toolkit/examples/image-11.png",
          author: "Dustin",
          date: "20 минут назад",
          text:
            "Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap. Hashtag typewriter banh mi, squid keffiyeh High."
        },
        {
          id: "22",
          avatar: "https://shoutem.github.io/img/ui-toolkit/examples/image-12.png",
          author: "Malone",
          date: "30 минут назад",
          text:
            "Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap. Hashtag typewriter banh mi, squid keffiyeh High."
        },
        {
          id: "23",
          avatar: "https://shoutem.github.io/img/ui-toolkit/examples/image-12.png",
          author: "Malone",
          date: "30 минут назад",
          text: "Тоже самое снилось, к чему бы это?"
        }
      ]
    },
    "3": {
      id: "3",
      author: "Peter",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      avatarText: "P",
      image: "https://cdn.dribbble.com/users/356847/screenshots/1761291/winter-sky_1x.jpg",
      imageColor: "rgba(46, 69, 100,.9)",
      title: "Ничего не приснилось",
      text: "Ничего не приснилось, зато хорошо выспался! Всегда бы так.",
      date: "02.07.2017",
      location: "Москва, Россия",
      likesCount: 6,
      commentsCount: 0,
      interpetsCount: 1,
      comments: []
    },
    "4": {
      id: "4",
      author: "LucidDreamer",
      avatar: "https://randomuser.me/api/portraits/men/28.jpg",
      avatarText: "LD",
      image: "https://cdn.dribbble.com/users/150724/screenshots/2203790/362_chasing_dreams_1x.png",
      imageColor: "rgba(80, 44, 127,.9)",
      title: "Дом в деревне",
      text:
        "Осознаюсь в деревне, около дома в котором я провел свое детство. Попробовал взлететь - не получилось. Пришлось идти пешком на речку.",
      date: "02.07.2017",
      location: "Москва, Россия",
      likesCount: 95,
      commentsCount: 2,
      interpetsCount: 0,
      comments: [
        {
          id: "41",
          avatar: "https://shoutem.github.io/img/ui-toolkit/examples/image-11.png",
          author: "Dustin",
          date: "20 минут назад",
          text:
            "Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap. Hashtag typewriter banh mi, squid keffiyeh High."
        },
        {
          id: "42",
          avatar: "https://shoutem.github.io/img/ui-toolkit/examples/image-12.png",
          author: "Malone",
          date: "30 минут назад",
          text:
            "Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap. Hashtag typewriter banh mi, squid keffiyeh High."
        }
      ]
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
export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}

// Selectors (mapStateToProps)
export const getDreamsByFeed = (state, feedFilter) => {
  switch (feedFilter) {
    case selectorTypes.FEED_COMMUNITY:
      return _.values(_.pick(state.dreams, _.keys(state.communityFeed)));
    case selectorTypes.FEED_SUBSCRIBED:
      return _.values(_.pick(state.dreams, _.keys(state.subscibedFeed)));
    case selectorTypes.FEED_USER:
      return _.values(_.pick(state.dreams, _.keys(state.userFeed)));
    default:
      return [];
  }
};
export const getDreamById = (state, id) => {
  return _.get(state.dreams, id);
};
