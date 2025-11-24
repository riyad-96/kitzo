//! Copy function
function legecyCopy(docs) {
  try {
    const textarea = document.createElement('textarea');
    textarea.value = docs;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  } catch (error) {
    alert('Couldn’t complete. Please copy manually.');
    console.error(error);
  }
}

async function copyText(docs) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(docs);
    } catch (error) {
      legecyCopy(docs);
      console.error(error);
    }
  } else {
    legecyCopy(docs);
  }
}

export default function copy(doc) {
  if (typeof doc === 'string' || typeof doc === 'number') {
    copyText(doc);
  } else {
    copyText(JSON.stringify(doc));
  }
}
