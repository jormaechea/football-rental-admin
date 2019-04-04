import options from './options';

export { options };

export const optionsForSelect = options.map((dayName, dayNumber) => ({id: dayNumber, name: dayName}));
