import * as React from "react";
// import 'public/css/splash-screen.css'
import '../../../../public/css/splash-screen.css'
// import "../../../../public/css/splash-screen.css";
// type ContextProps = React.Dispatch<React.SetStateAction<number>>;
type ContextProps = React.Dispatch<React.SetStateAction<number>>;

const SplashScreenContext = React.createContext<ContextProps>(() => 0);

export function SplashScreenProvider({ children }: { children: any }) {
  const [count, setCount] = React.useState(0);
  let visible = count > 0;

  React.useEffect(() => {
    const splashScreen = document.getElementById("splash-screen");

    // Show SplashScreen
    if (splashScreen && visible) {
      splashScreen.classList.remove("hidden");
      // splashScreen.setAttribute("display", "block");
      return () => {
        splashScreen.classList.add("hidden");
        // splashScreen.setAttribute("display", "none");
      };
    }

    // Hide SplashScreen
    let timeout: NodeJS.Timeout;
    if (splashScreen && !visible) {
      timeout = setTimeout(() => {
        splashScreen.classList.add("hidden");
      }, 3000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [visible]);

  return (
    <SplashScreenContext.Provider value={setCount}>
      {children}
    </SplashScreenContext.Provider>
  );
}

export function LayoutSplashScreen({ visible = true }): any {
  // Everything are ready - remove splashscreen
  const setCount = React.useContext(SplashScreenContext);

  React.useEffect(() => {
    if (!visible) {
      return;
    }

    setCount((prev) => {
      return prev + 1;
    });

    return () => {
      setCount((prev) => {
        return prev - 1;
      });
    };
  }, [setCount, visible]);

  return null;
}
