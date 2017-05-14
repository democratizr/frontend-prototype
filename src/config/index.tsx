import routes from './routes';
import theme from './theme';

const config = {
  routes,
  theme
};

export type Config = typeof config;
export { Route } from './routes';
export { Theme } from './theme';

export default config;
