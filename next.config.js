/** @type {import('next').NextConfig} */
// Paths
const pathStyles = 'styles/';
const pathTokens = 'styles/tokens/';

const nextConfig = {
  sassOptions: {
    additionalData: `
      @import "${pathTokens}/colors.scss";
      @import "${pathTokens}/numbers.scss";
      @import "${pathStyles}/utils/mixins.scss";
      @import "${pathStyles}/utils/classes.scss";
      @import "${pathStyles}/utils/typography.scss";
      @import "${pathStyles}/utils/grid.scss";
    `,
  },
};

module.exports = nextConfig;
