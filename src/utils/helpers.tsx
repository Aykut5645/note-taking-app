import { NOTES_PER_PAGE } from './constants.tsx';

export const formatCreationDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  }).format(date);
};

export const getLastPage = (itemsCount: number, operator: '+' | '-') => {
  const calc = operator === '+' ? itemsCount + 1 : itemsCount - 1;
  return Math.ceil(calc / NOTES_PER_PAGE);
};
