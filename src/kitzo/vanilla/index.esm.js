// button effects
import copy from './button/features/copy';
import debounce from './button/features/debounce';
import ripple from './button/features/ripple';
import tooltip from './button/features/tooltip';
import clippath from './button/features/clippath';

// functions
import getType from './functions/getType';

const kitzo = { copy, debounce, ripple, tooltip, clippath, getType };
export { copy, debounce, ripple, tooltip, clippath, getType };
export default kitzo;
