import React from "react";

function CallToAction({
  children,
  type = "button", // 'type' is needed to specify "submit" button sometimes
  textColor = "white",
  bgColor = "transparent",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      className={`${bgColor} ${textColor} ${className} rounded-full px-8 py-4 border-[1.6px] border-onyx font-medium`}
      {...props}
    >
      {children}
    </button>
  );
}

export default CallToAction;
