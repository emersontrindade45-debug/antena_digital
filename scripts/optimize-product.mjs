import sharp from "sharp";

// Converte as fotos da antena em WebP para a vitrine do produto.

const dir = "imagens-antenadigital";
const out = "public/images";

const jobs = [
  // Cena cinematográfica: antena em frente à TV (palco da seção)
  { src: `${dir}/imagem antena sem fundo 5.jpeg`, dest: `${out}/produto-cena.webp`, width: 1600, quality: 80 },
  // Kit completo em fundo branco (tile claro)
  { src: `${dir}/imagem antena sem fundo 2.jpeg`, dest: `${out}/produto-kit.webp`, width: 1000, quality: 82 },
  // Foto de estúdio elegante (tile claro / oferta)
  { src: `${dir}/imagem antena sem fundo 3.jpeg`, dest: `${out}/produto-estudio.webp`, width: 1000, quality: 82 },
];

for (const { src, dest, width, quality } of jobs) {
  const meta = await sharp(src).metadata();
  const info = await sharp(src)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality })
    .toFile(dest);
  console.log(`${src} (${meta.width}x${meta.height}) -> ${dest} (${info.width}x${info.height}, ${Math.round(info.size / 1024)} KB)`);
}

// Macro do conector (metade inferior da imagem 1) — prova de qualidade de fabricação
const macroSrc = `${dir}/imagem antena sem fundo 1.jpeg`;
const m = await sharp(macroSrc).metadata();
const top = Math.round(m.height * 0.645);
const info = await sharp(macroSrc)
  .extract({ left: 0, top, width: m.width, height: m.height - top })
  .resize({ width: 1000 })
  .webp({ quality: 82 })
  .toFile(`${out}/produto-conector.webp`);
console.log(`macro conector (${m.width}x${m.height}) -> produto-conector.webp (${info.width}x${info.height}, ${Math.round(info.size / 1024)} KB)`);
