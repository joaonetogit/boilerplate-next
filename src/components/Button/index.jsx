'use client';

// Core
import { useState } from 'react';

// Styles
import 'styles/components/button.scss';

const Button = () => {
  const [count, setCount] = useState(1);
  return (
    <div className="main-button">
      <button onClick={() => setCount(count + 1)}>Increase number</button>
      <p>{count}</p>
    </div>
  );
};

export default Button;
