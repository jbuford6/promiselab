// Create a promise
    
    var promise = new Promise(function (fulfill, reject) {
      // After the timeout reaches 300ms, fulfill the promise with value
      // 'FULFILLED!'.
    
      setTimeout(function () {
        fulfill('FULFILLED!');
      }, 300);
    });
    
    // Add a handler to the promise’s fulfillment. `console.log` will be called
    // with the value passed to `fulfill`, which is `'FULFILLED!'`.
    // Note that this statement will ALWAYS be executed before `fulfill` is
    // called (we'll talk about this in depth in the lessons to come).
    
    promise.then(console.log);



// Reject a Promise
    
    var promise = new Promise(function (fulfill, reject) {
      // After the timeout reaches 300ms, reject the promise with an `Error` object
      // with parameter `"REJECTED!"`.
    
      setTimeout(function () {
        reject(new Error('REJECTED!'));
      }, 300);
    });
    
    // Create a function to print `error.message` using `console.log`.
    
    function onReject(error) {
      console.log(error.message);
    }
    
    // Pass this function as a rejection handler to the `then` method of the
    // promise (the second parameter).
    
    promise.then(null, onReject);



'use strict';
    
    var promise = new Promise(function (fulfill, reject) {
      fulfill('I FIRED');
      reject(new Error('I DID NOT FIRE'));
    });
    
    function onReject(error) {
      console.log(error.message);
    }
    
    promise.then(console.log, onReject);



'use strict';
    
    var promise = new Promise(function (fulfill, reject) {
      fulfill('PROMISE VALUE');
    });
    
    // At this point, the value of promise is already known.
    
    // If promise is not always asynchronous, console.log would be called with
    // 'PROMISE VALUE' here. This is not the case.
    
    promise.then(console.log);
    
    console.log('MAIN PROGRAM');



'use strict';
    
    var message;
    var promise;
    
    function randomBytes(n) {
      return (Math.random() * Math.pow(256, n) | 0).toString(16);
    }
    
    message =
      'A fatal exception ' + randomBytes(1) + ' has occurred at ' +
      randomBytes(2) + ':' + randomBytes(4) + '. Your system\nwill be ' +
      'terminated in 3 seconds.';
    
    promise = Promise.reject(new Error(message));
    
    promise.catch(function (err) {
      var i = 3;
    
      process.stderr.write(err.message);
    
      setTimeout(function boom() {
        process.stderr.write('\rwill be terminated in ' + (--i) + ' seconds.');
        if (!i) {
          process.stderr.write('\n..... . . . boom . . . .....\n');
        } else {
          setTimeout(boom, 1000);
        }
      }, 1000);
    });


    'use strict';
    
    /* global first, second */
    
    var firstPromise = first();
    
    var secondPromise = firstPromise.then(function (val) {
      return second(val);
    });
    
    secondPromise.then(console.log);
    
    // As an alternative to the code above, ou could also do this:
    // first().then(second).then(console.log);