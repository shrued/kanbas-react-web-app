import ES5Functions from "../functions/ES5Functions";
import ArrowFunctions from "../functions/ArrowFunctions";
import ImpliedReturn from "../functions/ImpliedReturn";
import FunctionParenthesisAndParameters from "../functions/FunctionParenthesisAndParameters";

export default function JavaScript() {
  console.log("Hello World!");
  return (
    <div>
      <h1>JavaScript</h1>

      <ES5Functions />
      <ArrowFunctions />
      <ImpliedReturn />
      <FunctionParenthesisAndParameters />
    </div>
  );
}
