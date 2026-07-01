import { useRef } from 'react'

function DomRef() {
 const inputRef =
useRef<HTMLInputElement>(null);

const handleFocus = () => {
  inputRef.current?.focus();
};

return (
 <>
  <input ref={inputRef}/>
  <button
   onClick={handleFocus}
  >
   Focus
  </button>
 </>
);
}

export default DomRef
