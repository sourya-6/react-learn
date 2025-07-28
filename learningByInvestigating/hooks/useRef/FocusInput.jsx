import { useRef } from 'react';

export default function FocusInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus(); // directly focus the input
  }

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button  className="bg-blue-50 text-black" onClick={handleFocus}>Focus the input</button>
    </div>
  );
}
