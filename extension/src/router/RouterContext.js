import { createContext } from "react";

const RouterContext = createContext({ previousPath: null, pathname: "/" });

export default RouterContext;