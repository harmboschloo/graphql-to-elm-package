// @ts-check

const path = require("path");

exports.elmSrc = path.resolve(__dirname, "src");

exports.elmFiles = [
  "GraphQL/Batch.elm",
  "GraphQL/Errors.elm",
  "GraphQL/Operation.elm",
  "GraphQL/Optional.elm",
  "GraphQL/PlainBatch.elm",
  "GraphQL/Response.elm",
  "GraphQL/Helpers/Decode.elm",
  "GraphQL/Http/Basic.elm"
];
