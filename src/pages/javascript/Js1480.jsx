import React from "react";
import CodeSnippet from "../../components/CodeSnippet";
import BackToJsButton from "../../components/BackToJsButton";

function Js1480() {
  const code = `
  var runningSum = function(nums) {
    let sums = 0;
    let retSums = [];
    for(let i of nums) {
        sums += i;
        retSums.push(sums);
    }
    return retSums;
}
  `;

  return (
    <div className="flex h-screen w-full justify-center items-center">
      <div>
        <h1 className="text-4xl font-bold text-center mb-10">
          1480. Running Sum of 1d Array
        </h1>
        <div className="ml-50 dark:text-stone-900">
          <h3 className="font-semibold text-lg my-2">Question</h3>
          <div className="mb-5">
            <p>
              Given an array nums. We define a running sum of an array as
              runningSum[i] = sum(nums[0]…nums[i]).
              <br />
              Return the running sum of nums..
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

export default Js1480;
