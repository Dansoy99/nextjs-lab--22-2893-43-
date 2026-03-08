"use client";

import { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);

    const decrement = () => {
        if(count > 0){
            setCount(count-1);
        }
    };
    const increment = () =>{
        setCount(count+1);
    }
    const reset = () => {
        setCount(0);
    }

    return (
    <div className="p-4 border rounded-lg w-60 text-center">
      <h2 className="text-xl font-bold">Counter</h2>
      <p className="text-3xl my-4">{count}</p>

      <div className="flex gap-2 justify-center">
        <button onClick={increment} className="bg-green-500 text-white px-3 py-1 rounded">
          +
        </button>

        <button onClick={decrement} className="bg-red-500 text-white px-3 py-1 rounded">
          -
        </button>

        <button onClick={reset} className="bg-gray-500 text-white px-3 py-1 rounded">
          Reset
        </button>
      </div>
    </div>
  );
}