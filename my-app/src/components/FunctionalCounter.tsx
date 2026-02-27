import { useState, useEffect } from "react";

interface Props {
  initialCount: number;
  label: string;
}

const FunctionalCounter = ({ initialCount, label }: Props) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log("FunctionalCounter: Effect ran (Lifecycle equivalent)");
    return () => {
      console.log("FunctionalCounter: Cleanup ran (Unmount equivalent)");
    };
  }, []);

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="card m-3 p-3 bg-light">
      <h3>
        {label} (Functional Component)
      </h3>
      <p>Props-based Initial Count: {initialCount}</p>
      <p>Local State Count: {count}</p>
      <button className="btn btn-secondary" onClick={handleDecrement}>
        Decrement (Functional Event)
      </button>
    </div>
  );
};

export default FunctionalCounter;
