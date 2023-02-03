import { USER_CHANGE } from "../constants";
import { User } from "../definitions";

export function changeUser(user: User) {
  return {
    type: USER_CHANGE,
    payload: user
  };
}
