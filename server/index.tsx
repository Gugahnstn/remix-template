import { createRequestHandler } from "@remix-run/node";
import type { ServerBuild } from "@remix-run/node";

const build = require('./build') as ServerBuild;

exports.handler = createRequestHandler({
  build,
  getLoadContext(event) {
    return {}
  }
});