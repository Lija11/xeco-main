import React, { useState, useEffect } from 'react';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

const CountdownClock = () => {
  const [remainingTime, setRemainingTime] = useState({
    remainingDays: 0,
    remainingHours: 0,
    remainingMinutes: 0,
    remainingSeconds: 0,
  });

  useEffect(() => {
    const liveTime = Date.now() + 302 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000; // Two days and three hours from now

    const countdownObservable = interval(1000).pipe(
      map(() => {
        const remainingMilliseconds = liveTime - Date.now();
        return {
          remainingDays: Math.floor(remainingMilliseconds / 86400000),
          remainingHours: Math.floor((remainingMilliseconds % 86400000) / 3600000),
          remainingMinutes: Math.floor(((remainingMilliseconds % 86400000) % 3600000) / 60000),
          remainingSeconds: Math.floor((((remainingMilliseconds % 86400000) % 3600000) % 60000) / 1000),
        };
      })
    );

    const subscription = countdownObservable.subscribe(setRemainingTime);

    return () => {
      subscription.unsubscribe();
    };
  }, []); // Empty dependency array ensures that this effect runs once after the initial render

  return (
    <>
      <div className="time-count day">
        <span >{remainingTime.remainingDays}</span>days
      </div>
      <div className="time-count hour">
        <span >{remainingTime.remainingHours}</span>hours
      </div>
      <div className="time-count min">
        <span>{remainingTime.remainingMinutes}</span>mins
        </div>
      <div className="time-count sec">
        <span>{remainingTime.remainingSeconds}</span>secs
      </div>
    </>
  );
};

export default CountdownClock;