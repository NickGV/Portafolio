import React from "react";

export const BackgroundComponent = ({ children }) => {
  return (
    <div className="relative h-full w-full bg-background">
      <div className="fixed bottom-0 left-0 right-0 top-0 z-0 bg-[radial-gradient(circle_400px_at_50%_200px,#2c2c2c,transparent)]"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};
