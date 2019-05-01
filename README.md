* yarn && yarn all

For this task we simply want to compare the following for modules that have named
exports a,b,c (ES6 module) and x,y,z (CommonJS module) respectively.

One asking for just the things we want:

```javascript
// Test out importing { named1, named2 }
import { a } from "./lib.js";
import { x } from "./lib_commonjs.js";
```

vs.

Another asking for `* as`.

```
// Test out importing * as
import * as ES6 from "./lib.js";
import * as CJS from "./lib_commonjs.js";
```

The aim to determine if `import * as` will result in all the things getting bundled
(even if only some variables are actually used), or, is the engine smart enough to
inspect usage and only import those things actually being used.

## Results

The results are obtained by simply _grep'ing_ the bundle for the tokens expected.

## Reference

This is based off of an [experiment](https://github.com/sashee/treeshaking-test)
[Tamás Sallai](https://github.com/sashee) did a couple of years ago to go with his
[article](https://advancedweb.hu/2017/02/07/treeshaking/). I've possibly simplified
it, and am using Babel 7 and latest packages as of 5/1/2019.
