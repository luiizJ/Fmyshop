interface UserI {
  name: string;
  email: string;
}

interface UseState {
  user: UserI | null;
}

const initalState: UseState = {
  user: null,
};

interface UserAction {
  type: string;
  payload?: UserI;
}

export function userReduce(state = initalState, action: UserAction): UseState {
  if (action.type === "user/login") {
    return {
      ...state,
      user: action.payload as UserI,
    };
  } else if (action.type === "user/logout") {
    return {
      ...state,
      user: null,
    };
  }
  return state;
}
