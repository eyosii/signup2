import React from "react";

const variantClasses = {
  h1: "font-bold sm:text-4xl md:text-[38px] text-[40px]",
  h2: "font-medium text-2xl md:text-[22px] sm:text-xl",
  h3: "font-bold text-xl",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
