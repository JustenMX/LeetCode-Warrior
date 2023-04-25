import React from "react";
import CodeSnippet from "../../components/CodeSnippet";
import BackToJsButton from "../../components/BackToJsButton";

function Js2235() {
  const code = `
  var sum = function(num1, num2) {
    return (num1 + num2)
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

export default Js2235;
