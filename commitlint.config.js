export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", ["dev", "test", "feat"]],
  },
  ignores: [(message) => message.startsWith("Merge")],
};
