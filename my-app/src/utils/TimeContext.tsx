import {
  createContext,
  useState,
  useEffect,
  useContext,
} from "react";

const TimeContext = createContext<string>("");

interface TimeProviderProps {
  children: any;
}

export const TimeProvider = ({ children }: TimeProviderProps) => {
  const [currentTime, setCurrentTime] = useState<string>(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <TimeContext.Provider value={currentTime}>
      {children}
    </TimeContext.Provider>
  );
};

export const useTime = () => useContext(TimeContext);