// client/src/optimizeImage.js
export default function optimizeImage(url) {
  if (!url || !url.includes('/upload/')) return url;
  return url.replace('/upload/', '/upload/f_auto,q_auto/');
}

