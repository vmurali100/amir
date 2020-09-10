const users = [
  {
    id: 283175,
    email: "MGarbe@suspendisse.io",
    username: "HReeder",
    password: "GY7hF",
  },
  {
    id: 283176,
    email: "PCatania@non.net",
    username: "DHauler",
    password: "fo6F2",
  },
  {
    id: 283177,
    email: "LEfird@risus.gov",
    username: "ZHammant",
    password: "Z2nRW",
  },
];

export default function rootReducer(state = { users }, action) {
  switch (action.type) {
    case "ADD_USER":
      break;

    case "DELETE_USER":
      var users = state.users.filter((user) => {
        return user.id !== action.payLoad.id;
      });
      return { users };
      break;

    case "UPDATE_USER":
      break;

    default:
      return { users: state.users };
  }
}
