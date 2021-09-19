---
title: How to allow CORS request with Node Express
date: 2019-03-31
hideCoverImg: true
tags: [Node]
---

If you are serving your own Node Express server, and calling your API from JavaScript, you might get this error.
<ImgWithZoom src="./assets/node-express-cors.png" alt="Cors error"/>

This happens because of security reasons, browsers restrict cross-origin HTTP requests initiated from within scripts.

There is an easy fix for this. Open your project in the terminal.

```bash
npm i cors –save
```

Then add this to your node JavaScript file.

```js
const cors = require('cors');
app.use(cors());
```

This has enabled CORS for all requests on your node express server. You can now refresh your client side page.
