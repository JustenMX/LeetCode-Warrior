import React from "react";
import CodeSnippet from "../../components/CodeSnippet";
import BackToJsButton from "../../components/BackToJsButton";

function Js1523() {
  const code = `
  var countOdds = function(low, high) {
    let count = 0;
    for (let i = low; i <= high; i++) {
        (i % 2 != 0) ? (count += 1) : 0; 
    }
    return count
};
  `;

  return (
    <div className="flex h-screen w-full justify-center items-center">
      <div>
        <h1 className="text-4xl font-bold text-center mb-10">
          2235. Add Two Integers
        </h1>
        <div className="ml-50 dark:text-stone-900">
          <h3 className="font-semibold text-lg my-2">Question</h3>
          <div className="mb-5">
            <p>
              Given two non-negative integers low and high. Return the count of
              odd numbers between low and high (inclusive).
            </p>
          </div>
          <h3 className="font-semibold text-lg my-2">Solution</h3>
        </div>
        <CodeSnippet code={code} />
        <BackToJsButton />
      </div>
    </div>
  );
}

export default Js1523;
