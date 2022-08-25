import storage, { setStorage } from "./storage";
import tokenStorage from "./adapters/token";

setStorage(localStorage);

export { storage, tokenStorage };
