import sharp from "sharp";

/*
 * Remove o fundo branco das fotos do produto via flood fill a partir das bordas.
 * Só pixels claros CONECTADOS à borda viram transparentes — os brilhos metálicos
 * do conector (também claros, mas internos) são preservados.
 */

const THRESHOLD = 232; // pixel é candidato a fundo se r,g,b > THRESHOLD

async function removeBg(input, output, { crop, width = 800 } = {}) {
  let img = sharp(input);
  if (crop) {
    const m = await img.metadata();
    const region = {
      left: Math.round(m.width * crop.left),
      top: Math.round(m.height * crop.top),
      width: Math.round(m.width * crop.width),
      height: Math.round(m.height * crop.height),
    };
    img = img.extract(region);
  }
  const { data, info } = await img
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width: w, height: h } = info;

  const isBg = (i) =>
    data[i] > THRESHOLD && data[i + 1] > THRESHOLD && data[i + 2] > THRESHOLD;

  // BFS a partir de todos os pixels de borda claros
  const visited = new Uint8Array(w * h);
  const queue = [];
  for (let x = 0; x < w; x++) {
    queue.push(x, (h - 1) * w + x);
  }
  for (let y = 0; y < h; y++) {
    queue.push(y * w, y * w + (w - 1));
  }
  for (const p of queue) {
    if (!visited[p] && isBg(p * 4)) visited[p] = 1;
    else visited[p] = visited[p] || 2; // 2 = processado, não-fundo
  }
  const stack = queue.filter((p) => visited[p] === 1);
  while (stack.length) {
    const p = stack.pop();
    const x = p % w;
    const y = (p / w) | 0;
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const nx = x + dx;
      const ny = y + dy;
      if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
      const np = ny * w + nx;
      if (visited[np]) continue;
      if (isBg(np * 4)) {
        visited[np] = 1;
        stack.push(np);
      } else {
        visited[np] = 2;
      }
    }
  }

  // Aplica transparência + suaviza a borda (anti-halo branco)
  for (let p = 0; p < w * h; p++) {
    const i = p * 4;
    if (visited[p] === 1) {
      data[i + 3] = 0;
    } else {
      // pixel vizinho de fundo e ainda claro -> alpha parcial para suavizar
      const x = p % w;
      const y = (p / w) | 0;
      let nearBg = false;
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const nx = x + dx;
        const ny = y + dy;
        if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
        if (visited[ny * w + nx] === 1) {
          nearBg = true;
          break;
        }
      }
      if (nearBg) {
        const bright = Math.min(data[i], data[i + 1], data[i + 2]);
        if (bright > 190) {
          data[i + 3] = Math.round(
            255 * (1 - (bright - 190) / (255 - 190)) * 0.9
          );
        }
      }
    }
  }

  const result = await sharp(data, { raw: { width: w, height: h, channels: 4 } })
    .trim()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(output);
  console.log(`${input} -> ${output} (${result.width}x${result.height}, ${Math.round(result.size / 1024)} KB)`);
}

const dir = "imagens-antenadigital";
const out = "public/images";

await removeBg(`${dir}/3.png`, `${out}/produto-kit.webp`);
await removeBg(`${dir}/2.png`, `${out}/produto-estudio.webp`);
// 4.png: metade inferior é o macro do conector
await removeBg(`${dir}/4.png`, `${out}/produto-conector.webp`, {
  crop: { left: 0, top: 0.62, width: 1, height: 0.38 },
});
console.log("Concluído.");
