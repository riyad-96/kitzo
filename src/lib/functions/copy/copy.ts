// Legacy fallback copy
function legacyCopy(text: string) {
  const textarea = document.createElement('textarea');
  textarea.value = text;

  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

// Write to clipboard with fallback
async function writeToClipboard(text: string) {
  if (!navigator.clipboard?.writeText) {
    legacyCopy(text);
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    legacyCopy(text);
    console.error(err);
  }
}

// Main exported function
export default async function copy(doc: unknown) {
  let text;

  try {
    text =
      typeof doc === 'string' ||
      typeof doc === 'number' ||
      typeof doc === 'boolean'
        ? String(doc)
        : JSON.stringify(doc);
  } catch {
    text = '[Cannot copy circular object]';
  }

  await writeToClipboard(text);
}
