const allowedPositions = [
  'top-start',
  'top',
  'top-end',
  'right-start',
  'right',
  'right-end',
  'bottom-start',
  'bottom',
  'bottom-end',
  'left-start',
  'left',
  'left-end',
];

export default function getPositionClass(position = '') {
  position =
    typeof position === 'string' ? position.trim().toLowerCase() : 'top';

  const allowedPos = allowedPositions.find((p) => p === position);
  if (!allowedPos) return 'top';

  if (allowedPos.includes('-')) {
    const [dir, state] = allowedPos.split('-');
    return `${dir} ${state}`;
  } else {
    return allowedPos;
  }
}
