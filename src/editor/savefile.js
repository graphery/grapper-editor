export default async function saveFile (source) {
  const content = `<!DOCTYPE html>
<html lang="en">
<head>
  <title>Example | graphane</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <script src="https://cdn.jsdelivr.net/npm/grapper/dist/module/view.js"></script>
</head>
<body>
${ source }
</body>
</html>`;
  const blob = new Blob([content], {type : 'text/html'});
  const suggestedName = 'grapper-view.example.html'
  const supportsFileSystemAccess = 'showSaveFilePicker' in window;
  if (supportsFileSystemAccess) {
    try {
      const handle   = await showSaveFilePicker({
        suggestedName,
      });
      if (!handle) {
        return;
      }
      const writable = await handle.createWritable();
      await writable.write(blob);
      await writable.close();
    } catch (err) {
      if (err.name !== 'AbortError') {
        console.error(err.name, err.message);
      }
    }
    return;
  }
  const blobURL   = URL.createObjectURL(blob);
  const a         = document.createElement('a');
  a.href          = blobURL;
  a.download      = suggestedName;
  a.style.display = 'none';
  document.body.append(a);
  a.click();
  setTimeout(() => {
    URL.revokeObjectURL(blobURL);
    a.remove();
  }, 1000);
}