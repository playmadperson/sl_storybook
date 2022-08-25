import { REFRESH_TOKEN_KEY, ACCESS_TOKEN_KEY } from "shared/lib/constants";
import storage from "../storage";

type Tokens = typeof REFRESH_TOKEN_KEY | typeof ACCESS_TOKEN_KEY;

function setToken(name: Tokens, token: string): void {
  storage.setItem(name, token);
}

function getToken(name: Tokens): string | null {
  return storage.getItem(name);
}

function resetTokens(): void {
  storage.removeItem(REFRESH_TOKEN_KEY);
  storage.removeItem(ACCESS_TOKEN_KEY);
}

export default {
  setToken,
  getToken,
  resetTokens,
};
