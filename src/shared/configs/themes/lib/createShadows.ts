export const getLiftedShadowForColor = (color: string): string =>
  `
  4px 4px 6px ${color}, 
  inset 2px 2px 3px rgba(255, 255, 255, 0.19), 
  inset -1px -1px 3px rgba(255, 255, 255, 0.06)
  `;
