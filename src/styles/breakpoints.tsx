import { em } from './sizes';
import { Size } from './sizes';

type MediaType = 'all' | 'aural' | 'braille' | 'handheld' | 'print' |
    'projection' | 'screen' | 'tty' | 'tv' | 'embossed' | 'speech';

type BreakpointOptions = {
  minWidth?: Size,
  maxWidth?: Size,
  only?: MediaType
};

type Breakpoint = string;

const breakpoint = (opts: BreakpointOptions): Breakpoint => {
  const {
    minWidth = em(0),
    maxWidth,
    only = 'screen'
  } = opts;

  const min = `min-width: ${minWidth}`;
  const max = maxWidth && `max-width: ${maxWidth}`;
  const conditions = [min, max]
    .reduce((acc: string[], maybeStr) => {
      if (maybeStr) {
        return [...acc, `(${maybeStr})`];
      }

      return acc;
    }, []).join(' and ');

  return `@media only ${only} and ${conditions}`;
};

export const medium = breakpoint({ minWidth: em(32) });
