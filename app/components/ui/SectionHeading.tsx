import React from "react";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
};

const SectionHeading = ({
  title,
  subtitle,
  centered = false,
  className = "",
  light = false,
}: SectionHeadingProps) => {
  return (
    <div
      className={`mb-12 ${centered ? "text-center" : ""} ${className}`}
    >
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 inline-block ${
          light ? "text-white" : ""
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg ${
            light ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;