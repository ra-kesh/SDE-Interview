// please implement curry() which also supports placeholder.

// Here is an example

// const  join = (a, b, c) => {
//    return `${a}_${b}_${c}`
// }
// const curriedJoin = curry(join)
// const _ = curry.placeholder
// curriedJoin(1, 2, 3) // '1_2_3'
// curriedJoin(_, 2)(1, 3) // '1_2_3'
// curriedJoin(_, _, _)(1)(_, 3)(2) // '1_2_3'
// Read more:

// https://javascript.info/currying-partials
// https://lodash.com/docs/4.17.15#curry
// https://github.com/planttheidea/curriable

// First, let's understand the main goal of this `curry` function.
// Currying is a technique in functional programming that allows us to transform a function
// that takes multiple arguments into a sequence of functions, each taking one or more arguments at a time.
// Additionally, our implementation supports placeholders, which means we can partially apply arguments
// now and fill in the missing ones later.

function curry(fn) {
  // The `curry` function takes a single argument `fn`, which is the original function
  // that we want to curry. This function can have any number of parameters.

  return function curried(...args) {
    // The `curried` function is what we return from the `curry` function.
    // It uses the rest parameter syntax `...args` to accept an arbitrary number of arguments.
    // This allows us to call the curried function with as many or as few arguments as we want at a time.

    // We extract the first `fn.length` arguments from the `args` array.
    // `fn.length` gives us the number of formal parameters the original function `fn` expects.
    const realArgs = args.slice(0, fn.length);

    // We check if there are any placeholders in the `realArgs` array.
    // The `curry.placeholder` is a special value that we'll use to mark positions where we want to
    // fill in arguments later. The `some` method iterates over the `realArgs` array and checks if
    // any of the elements are equal to the placeholder.
    const hasPlaceholder = realArgs.some((arg) => arg === curry.placeholder);

    // We count the number of non - placeholder arguments in the `realArgs` array.
    // This is important because we need to know if we have enough valid arguments to call the original function.
    const numberOfArgs = realArgs.filter(
      (arg) => arg !== curry.placeholder
    ).length;

    // If the number of non - placeholder arguments is greater than or equal to the number of
    // arguments the original function expects, and there are no placeholders,
    // we have all the necessary arguments to call the original function.
    if (numberOfArgs >= fn.length && !hasPlaceholder) {
      // We use the `apply` method to call the original function `fn`.
      // The `this` value is set to the current context, and we pass the `realArgs` array as the arguments.
      return fn.apply(this, realArgs);
    }

    // If we don't have enough non - placeholder arguments to call the original function,
    // we return another function named `next`. This allows us to continue providing arguments in a later call.
    return function next(...nextArgs) {
      // We create a new array `mergedArgs` by mapping over the `realArgs` array.
      // For each element in `realArgs`, if it's a placeholder and there are still arguments in `nextArgs`,
      // we replace the placeholder with the first element from `nextArgs` using the `shift` method.
      // Otherwise, we keep the original element.
      const mergedArgs = realArgs.map((arg) =>
        arg === curry.placeholder && nextArgs.length ? nextArgs.shift() : arg
      );

      // We call the `curried` function again, passing in the merged arguments along with any remaining `nextArgs`.
      // This enables us to continue the process of partial application.
      return curried.apply(this, [...mergedArgs, ...nextArgs]);
    };
  };
}

// Now, let's demonstrate how to use this curried function with an example.
// First, we define a placeholder. We use a symbol to ensure it's unique.
curry.placeholder = Symbol("placeholder");

const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};
const curriedJoin = curry(join);
const _ = curry.placeholder;
console.log(curriedJoin(1, 2, 3)); // '1_2_3'
console.log(curriedJoin(_, 2)(1, 3)); // '1_2_3'
console.log(curriedJoin(_, _, _)(1)(_, 3)(2)); // '1_2_3'

// // Let's define a simple function that we want to curry.
// // Here, we have a function `sum` that takes three numbers and returns their sum.
// function sum(a, b, c) {
//     return a + b + c;
// }

// // We create a curried version of the `sum` function.
// const curriedSum = curry(sum);

// // We can start by partially applying the first argument.
// // We call the `curriedSum` function with the first argument `1`.
// const firstStep = curriedSum(1);

// // Now, we can use a placeholder for the second argument and provide the third argument `3`.
// // The placeholder indicates that we'll fill in the second argument later.
// const secondStep = firstStep(curry.placeholder, 3);

// // Finally, we provide the second argument `2`.
// // At this point, we have all the necessary arguments, so the original `sum` function will be called.
// const finalResult = secondStep(2);

// console.log(finalResult);
// // This will output `6` because 1 + 2+ 3 equals 6. This shows that our currying function with placeholders works as expected.
