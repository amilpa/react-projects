import Mexp from "math-expression-evaluator";

const Result = (expression) => {
	const mexp = new Mexp()
	var lexed = mexp.lex(expression);
	var postfixed = mexp.toPostfix(lexed);
	var result = mexp.postfixEval(postfixed);
	return result
}

export default Result
