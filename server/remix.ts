import { createRequestHandler } from "@remix-run/architect";
import type { ServerBuild } from "@remix-run/node";

const build = require('./build') as ServerBuild;

exports.handler = createRequestHandler({
  build,
  getLoadContext() {
    return {}
  }
});