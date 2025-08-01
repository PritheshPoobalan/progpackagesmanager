document.getElementById('go-button').onclick = () => {
  const input = document.getElementById('url-bar');
  let url = input.value.trim();
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'https://' + url;
  }
  document.getElementById('browser-frame').src = url;
};
