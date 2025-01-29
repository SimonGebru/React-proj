import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Räknaren är: {count}</p>
      <button onClick={() => setCount(count + 1)}>Öka</button>
    </div>
  );
}

export default Counter;