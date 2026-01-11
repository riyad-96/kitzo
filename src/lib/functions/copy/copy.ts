//! Copy function
function legacyCopy(text: string) {
  const textarea = document.createElement('textarea');
  textarea.value = text;

  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

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

export default async function copy(doc: string) {
  if (doc == null) throw new Error('[kitzo/copy] expected a value to copy, got null or undefined.');

  const text =
    typeof doc === 'string' || typeof doc === 'number' ? String(doc) : JSON.stringify(doc);

  await writeToClipboard(text);
}
