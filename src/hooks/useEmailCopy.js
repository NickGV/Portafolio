import { useState } from 'react';

export const useEmailCopy = (email = "nickgomvelez@gmail.com") => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailCopy = () => {
    navigator.clipboard.writeText(email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return { emailCopied, handleEmailCopy };
};