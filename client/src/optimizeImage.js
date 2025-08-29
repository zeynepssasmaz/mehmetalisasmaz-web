// src/optimizeImage.js
// Cloudinary URL'lerine otomatik optimizasyon ve boyut kısıtları ekler.
// Kullanım: optimizeImage(url, { preset: 'thumb' | 'detail', width, height })

export default function optimizeImage(url, opts = {}) {
  if (!url) return '';
  const isCloudinary = url.includes('/image/upload/');
  if (!isCloudinary) return url; // Cloudinary değilse olduğu gibi dön

  const { preset, width, height, crop = 'c_fill' } = opts;
  const base = ['f_auto', 'q_auto', 'dpr_auto'];

  if (preset === 'thumb') {
    // Kart/önizleme için hızlı ve küçük görsel
    base.push('w_600', 'h_400', 'c_fill', 'g_auto');
  } else if (preset === 'detail') {
    // Detay sayfası büyük ama limitli
    base.push('w_1200', 'c_limit');
  } else {
    if (width) base.push(`w_${width}`);
    if (height) base.push(`h_${height}`);
    if (width || height) base.push(crop);
  }

  const transform = base.join(',');
  return url.replace('/image/upload/', `/image/upload/${transform}/`);
}

