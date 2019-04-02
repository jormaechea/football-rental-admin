import options from './options';

export { options };

export const optionsForSelect = options.map(option => ({id: option, name: option}));
