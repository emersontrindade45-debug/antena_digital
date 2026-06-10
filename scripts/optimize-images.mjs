import sharp from "sharp";
import { mkdir, rename } from "node:fs/promises";
import path from "node:path";

// Converte as imagens originais (JPEG ~3MB) em WebP otimizado para a landing page.
// Os originais são movidos para imagens-originais/ (fora do site publicado).

const mapping = [
  { src: "Imagem 4.jpeg", out: "hero.webp", width: 1920, quality: 80 },
  { src: "imagem 3.jpeg", out: "tensao.webp", width: 1920, quality: 78 },
  { src: "Imagem 5.jpeg", out: "demo.webp", width: 1600, quality: 80 },
  { src: "Imagem 6.jpeg", out: "novela.webp", width: 1000, quality: 78 },
  { src: "imagem 7.jpeg", out: "dia-a-dia.webp", width: 1000, quality: 78 },
  { src: "Imagem 8.jpeg", out: "jornal.webp", width: 1000, quality: 78 },
  { src: "imagem 9.jpeg", out: "series.webp", width: 1000, quality: 78 },
  { src: "imagem 2.jpeg", out: "celebracao.webp", width: 1920, quality: 78 },
  { src: "Imagem 1.jpeg", out: "torcida.webp", width: 1600, quality: 78 },
];

const imagesDir = "public/images";
const originalsDir = "imagens-originais";

await mkdir(originalsDir, { recursive: true });

for (const { src, out, width, quality } of mapping) {
  const input = path.join(imagesDir, src);
  const output = path.join(imagesDir, out);
  const meta = await sharp(input).metadata();
  const info = await sharp(input)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality })
    .toFile(output);
  console.log(
    `${src} (${meta.width}x${meta.height}) -> ${out} (${info.width}x${info.height}, ${Math.round(info.size / 1024)} KB)`
  );
  await rename(input, path.join(originalsDir, src));
}

console.log("Concluído.");
