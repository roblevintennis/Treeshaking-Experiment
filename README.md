* To run immediately:
`git clone git@github.com:roblevintennis/Treeshaking-Experiment.git && cd Treeshaking-Experiment && yarn && yarn all`

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

## Findings

* It seems with Webpack + Babel 7, if you have a module that does `import * as Module`,
the engine is smart enough to drop dead code from the bundle.
* In ES6, if you do not use any of the methods or properties, regardless of import style, the code
will not be included in the bundle.
* CommonJS: Regardless of what you do, the whole file is always included in the resulting
bundle.

## Reference

This is based off of an [experiment](https://github.com/sashee/treeshaking-test)
[Tamás Sallai](https://github.com/sashee) did a couple of years ago to go with his
[article](https://advancedweb.hu/2017/02/07/treeshaking/). I've possibly simplified
it, and am using Babel 7 and latest packages as of 5/1/2019.
