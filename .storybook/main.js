module.exports = {
  stories: [
    "../src/**/*.stories.@(ts|tsx|mdx)"

  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-viewport"
  ],
  staticDirs: [
    "../public"
  ],
  features: {
     previewMdx2: true,
  },
  // "typescript": {
  //   check: false,
  //   checkOptions: {},
  //   reactDocgen: "react-docgen-typescript",
  //   reactDocgenTypescriptOptions: {
  //     shouldExtractLiteralValuesFromEnum: true,
  //     propFilter: (prop) => {
  //       return prop.parent
  //           ?  prop.parent.name !== 'DOMAttributes' && prop.parent.name !== 'HTMLAttributes' && prop.parent.name !== 'AriaAttributes'
  //           : true;
  //     },
  //   },
  // },
}
