import React from "react";
import CodeSnippet from "../components/CodeSnippets";

function PageOne() {
  const code = `
  const lengthOfLastWord = function(s) {
    const sArr = s.trim().split(' ');
    if(sArr.length === 0){
      return 0;
    }else{
      return sArr[sArr.length - 1].length;
    }
};
  `;

  return (
    <div className="flex h-screen w-full justify-center items-center">
      <div>
        <h1 className="text-4xl font-bold text-center mb-10">
          58. Length of Last Word
        </h1>
        <div className="ml-50 dark:text-teal-100">
          <h3 className="font-semibold text-lg my-2">Question</h3>
          <div className="mb-5">
            <p>
              Given a string s consisting of words and spaces, return the length
              of the last word in the string.
            </p>
            <p>
              A word is a maximal substring consisting of non-space characters
              only.
            </p>
          </div>
          <h3 className="font-semibold text-lg my-2">Solution</h3>
        </div>
        <CodeSnippet code={code} />
      </div>
    </div>
  );
}

export default PageOne;
