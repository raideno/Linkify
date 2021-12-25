import { useState, useMemo } from "react";
import RouterContext from "./RouterContext";

function RouterWrapper({ children }) {
  const [navigation, setNavigation] = useState({
    previousPath: null,
    pathname: "/",
  });

  function navigate(path) {
    setNavigation((previousRoute) => {
      return {
        previousPath: previousRoute.pathname,
        pathname: path,
      };
    });
  }

  const provider = useMemo(
    () => ({ navigation, navigate }),
    [navigation, navigate]
  );

  return (
    <RouterContext.Provider value={provider}>{children}</RouterContext.Provider>
  );
}

export default RouterWrapper;
