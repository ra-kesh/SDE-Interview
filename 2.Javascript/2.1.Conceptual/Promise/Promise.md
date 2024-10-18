# Promise.all()

- accepts an array of promises and returns a promise that resolves when all of the promises in the array are fullfilled

- it rejects with the reason of the first promise that rejects

# Polyfill

- Should return a promise
- should resolve with the result of all the passed promises or reject with the error message of the first failed promise
- results are returned in same order as the promises are in the given array
