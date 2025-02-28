import React from "react";

const ServiceGrid = ({ children, className = "" }) => {
  return (
    <section className={`mt-12 max-md:mt-10 max-md:max-w-full ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {children}
      </div>
    </section>
  );
};

export default ServiceGrid;
