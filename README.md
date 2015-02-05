# Node Error Builder

Usage:

```npm install error-builder```

```js
var errorBuilder = require('error-builder');

var errorName = 'AppError';
var errorCode = -1;
var errorMessage = 'An error occurred';

var AppError = errorBuilder.create(errorName, errorCode, errorMessage);

// use the default message
throw new AppError();

// or specify a custom message
throw new AppError('It broke!');
```