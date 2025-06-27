// Countdown.tsx
import { useEffect, useState } from "react";
import ContTimer from "./cont-timer";

interface CountdownProps {
  targetDate: string; // formato ISO: "2025-07-01T00:00:00"
}

const Countdown = ({ targetDate }: CountdownProps) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    const timeLeft = difference > 0
      ? {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      : null;

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) return <p>¡El tiempo se ha terminado!</p>;

  return (
    <div className="flex felx-rowtext-center text-xl font-semibold space-x-2 text-black mt-5">
      <ContTimer 
        text={timeLeft.days}
        com="d"/>
      <ContTimer 
        text={timeLeft.hours}
        com="h"/>
      <ContTimer 
        text={timeLeft.minutes}
        com="m"/>
      <ContTimer 
        text={timeLeft.seconds}
        com="s"/>
    </div>
  );
};

export default Countdown;
