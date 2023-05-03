import React from "react";
import CodeSnippet from "../../components/CodeSnippet";
import BackToJsButton from "../../components/BackToJsButton";

function Js2620() {
  const code = `
    var createCounter = function(n) {
        return function() {
            return n++
        };
    };
    `;
  return (
    <div className="flex h-screen w-full justify-center items-center bg-white">
      <div>
        <h1 className="text-4xl font-bold text-center mb-10">2620. Counter</h1>
        <div className="ml-50 dark:text-stone-900">
          <h3 className="font-semibold text-lg my-2">Question</h3>
          <div className="mb-5">
            <p>
              Given an integer n, return a counter function.
              <br />
              This counter function initially returns n and then returns 1 more
              than the previous value
              <br /> every subsequent time it is called (n, n + 1, n + 2, etc).
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

export default Js2620;
