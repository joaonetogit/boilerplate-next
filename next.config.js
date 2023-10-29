/** @type {import('next').NextConfig} */
// Paths
const pathStyles = 'styles/';
const pathTokens = 'styles/tokens/';

const nextConfig = {
  sassOptions: {
    additionalData: `
      @import "${pathTokens}/primitives/colors.scss";
      @import "${pathTokens}/primitives/numbers.scss";
      @import "${pathTokens}/semantics/border.scss";
      @import "${pathTokens}/semantics/border.scss";
      @import "${pathTokens}/semantics/colors.scss";
      @import "${pathTokens}/semantics/spacing.scss";
      @import "${pathStyles}/utils/mixins.scss";
      @import "${pathStyles}/utils/classes.scss";
      @import "${pathStyles}/utils/typography.scss";
      @import "${pathStyles}/utils/grid.scss";
    `,
  },
};

module.exports = nextConfig;
