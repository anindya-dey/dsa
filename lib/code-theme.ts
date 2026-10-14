import type { ThemeRegistration } from "shiki";

const palette = {
  background: "#F6F5F1",
  foreground: "#2B2F3A",
  keyword: "#0E6E55",
  func: "#2557A0",
  type: "#8A4A0B",
  number: "#A23B1E",
  string: "#76580A",
  comment: "#6B7080",
  punctuation: "#585D6B",
};

export const paperCodeTheme: ThemeRegistration = {
  name: "paper",
  type: "light",
  colors: {
    "editor.background": palette.background,
    "editor.foreground": palette.foreground,
  },
  tokenColors: [
    { settings: { foreground: palette.foreground, background: palette.background } },
    {
      scope: ["comment", "punctuation.definition.comment"],
      settings: { foreground: palette.comment, fontStyle: "" },
    },
    {
      scope: [
        "keyword",
        "keyword.control",
        "storage",
        "storage.type",
        "storage.modifier",
        "keyword.operator.new",
        "keyword.operator.delete",
        "keyword.operator.cast",
        "keyword.operator.sizeof",
      ],
      settings: { foreground: palette.keyword, fontStyle: "" },
    },
    {
      scope: ["entity.name.function", "support.function", "meta.function-call"],
      settings: { foreground: palette.func },
    },
    {
      scope: [
        "entity.name.type",
        "entity.name.class",
        "entity.name.namespace",
        "support.type",
        "support.class",
        "entity.name.scope-resolution",
      ],
      settings: { foreground: palette.type },
    },
    {
      scope: ["constant.numeric", "constant.language", "constant.character"],
      settings: { foreground: palette.number },
    },
    {
      scope: ["string", "string.quoted", "punctuation.definition.string"],
      settings: { foreground: palette.string },
    },
    {
      scope: ["keyword.operator", "punctuation", "meta.brace", "punctuation.separator"],
      settings: { foreground: palette.punctuation },
    },
    {
      scope: ["variable", "variable.other", "variable.parameter", "meta.definition.variable"],
      settings: { foreground: palette.foreground },
    },
  ],
};
