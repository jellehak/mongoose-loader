Install
---

    npm install https://github.com/jellehak/mongoose-loader.git

Usage
---
    const mongooseLoader = require("mongoose-loader")

    await mongooseLoader.connect("mongodb://<user>:<pass>@<name.mlab.com>:<port>/<dbname>")