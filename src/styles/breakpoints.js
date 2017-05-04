import { em } from './sizes';


const breakpoint = opts => {
  const {
    minWidth = em(0),
    maxWidth,
    only = 'screen'
  } = opts;

  const minStr = `min-width: ${minWidth}`;
  const maxStr = maxWidth && `max-width: ${maxWidth}`;
  const conditions = [minStr, maxStr].reduce((acc, maybeStr) => {
    if (maybeStr) {
      return [...acc, maybeStr];
    }

    return acc;
  }, []);

  return `@media only ${only} and (${conditions})`;
};

export const medium = breakpoint({ minWidth: em(32) });
