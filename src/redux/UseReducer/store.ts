import { legacy_createStore } from "redux";
import { rootReduce } from "./root-reducer";

export const store = legacy_createStore(rootReduce);
