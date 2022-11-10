import { BubbleModelName } from '../../data/export-data-types';

export const removeEmptyLines = (bubbles: BubbleModelName[][], minSize: number) => {
  while (
    bubbles.length >= minSize &&
    bubbles[0].every((name) => name === BubbleModelName.nope)
    ) {
    bubbles.shift();
  }

  while (
    bubbles.length >= minSize &&
    bubbles[bubbles.length - 1].every((name) => name === BubbleModelName.nope)) {
    bubbles.pop();
  }

  while (
    bubbles[0].length >= minSize &&
    bubbles.every((names) => names[0] === BubbleModelName.nope)
    ) {
    bubbles.forEach((names) => {
      names.shift();
    });
  }

  while (
    bubbles[0].length >= minSize &&
    bubbles.every((names) => names[names.length - 1] === BubbleModelName.nope)
    ) {
    bubbles.forEach((names) => {
      names.pop();
    });
  }
};
