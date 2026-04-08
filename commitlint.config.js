export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", ["dev", "test", "feat", "fix", "docs"]],
  },
  ignores: [(message) => message.startsWith("Merge")],
};
