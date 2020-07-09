Install
---

    npm install https://github.com/jellehak/mongoose-loader.git

Usage
---
```js
const mongooseLoader = require("mongoose-loader")

// Load all schemas
mongooseLoader.loadAllFrom('./schemas')

await mongooseLoader.connect("mongodb://<user>:<pass>@<name.mlab.com>:<port>/<dbname>")
```
