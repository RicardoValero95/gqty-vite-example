/**
 * @type {import("@gqty/cli").GQtyConfig}
 */
const config = {
  react: true,
  scalarTypes: { DateTime: "string" },
  introspection: {
    endpoint: "https://countries.trevorblades.com/",
    headers: {},
  },
  destination: "./src/lib/gqty/index.ts",
  subscriptions: false,
  javascriptOutput: false,
};

module.exports = config;
