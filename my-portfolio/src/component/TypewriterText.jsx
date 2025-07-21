import React, { useEffect, useState } from 'react';

const TypewriterText = () => {
  const words = ['Software Developer', 'UI/UX Designer', 'React Engineer', 'Tech Educator'];
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0); // current word
  const [subIndex, setSubIndex] = useState(0); // current letter
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index === words.length) return;

    const timeout = setTimeout(() => {
      const fullText = words[index];

      if (!deleting) {
        setText(fullText.substring(0, subIndex + 1));
        setSubIndex(subIndex + 1);

        if (subIndex + 1 === fullText.length) {
          setTimeout(() => setDeleting(true), 2000); // pause before deleting
        }
      } else {
        setText(fullText.substring(0, subIndex - 1));
        setSubIndex(subIndex - 1);

        if (subIndex === 0) {
          setDeleting(false);
          setIndex((index + 1) % words.length); // move to next word
        }
      }
    }, deleting ? 50 : 120); // deleting speed is faster

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <h2 className="text-2xl font-jet text-white">
      {text}
      <span className="text-green-400 animate-pulse">|</span>
    </h2>
  );
};

export default TypewriterText;
