import React from "react";
import ActivityCard from "./ActivityCard";

function Main() {
  return (
    <main className="max-w-7xl mx-auto px-8 sm:px-16">
      {/* BEST DEALS SLIDER */}
      <section className="pt-6">
        <h2 className="text-4xl font-semibold pb-5">Best Deals</h2>
        <div className="flex space-x-5 overflow-scroll scrollbar-hide p-3 -ml-3 scroll-smooth">
          <ActivityCard /> {/* Shows Cards */}
        </div>
      </section>
    </main>
  );
}

export default Main;
