const allowedPositions = [
  'top',
  'top-start',
  'top-end',
  'right',
  'right-start',
  'right-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'left',
  'left-start',
  'left-end',
];

export default function getPositionClass(position = '') {
  position =
    typeof position === 'string' ? position.trim().toLowerCase() : 'top';

  const allowedPos = allowedPositions.find((p) => p === position);
  if (!allowedPos) return 'top';

  return allowedPos;
}
