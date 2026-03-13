import { useEffect, useRef, useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();           // our secret box

  useEffect(() => {
    prevCountRef.current = count;          // save current → previous
  }, [count]);                             // runs AFTER render

  const prevCount = prevCountRef.current;

  return (
    <div>
      Now: {count}  
      <br />
      Before: {prevCount ?? "—"}            
      <button onClick={() => setCount(c => c+1)}>+1</button>
    </div>
  );
}