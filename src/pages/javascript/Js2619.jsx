import React from "react";
import CodeSnippet from "../../components/CodeSnippet";
import BackToJsButton from "../../components/BackToJsButton";

function Js2619() {
  const code = `
  Array.prototype.last = function() {
    if (this.length === 0) {
        return -1
    } else {
        return this[this.length - 1]
    }
};
  `;

  return (
    <div className="flex h-screen w-full justify-center items-center bg-white">
      <div>
        <h1 className="text-4xl font-bold text-center mb-10">
          2619. Array Prototype Last
        </h1>
        <div className="ml-50 dark:text-stone-900">
          <h3 className="font-semibold text-lg my-2">Question</h3>
          <div className="mb-5">
            <p>
              Given two integers num1 and num2, return the sum of the two
              integers.
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

export default Js2619;
