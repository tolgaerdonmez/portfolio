import React, { useEffect, useState } from "react";
import "../sass/Typewriter.scss";

function Typewriter({ text, onlyText, cursorVariant }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count !== text.length)
      setTimeout(() => {
        setCount(count + 1);
      }, 150);
  }, [count, text]);

  if (onlyText)
    return (
      <>
        {text.slice(0, count)}
        <span className={`cursor-${cursorVariant || "light"}`}></span>
      </>
    );

  return (
    <p className="typewriter">
      {!count ? "Loading..." : text.slice(0, count)}{" "}
      <span className={`cursor-${cursorVariant || "light"}`}></span>
    </p>
  );
}

export default Typewriter;
