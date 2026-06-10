import sharp from "sharp";

// Recorta a tela da TV (transmissão do jogo) de dentro da Imagem 1 original
// para usar como conteúdo real da TV "Depois" na seção Antes x Depois.

const input = "imagens-originais/Imagem 1.jpeg"; // 2752x1536
const output = "public/images/transmissao.webp";

const region = { left: 1008, top: 168, width: 676, height: 380 }; // 16:9, placar completo e sem cabeças na base

const info = await sharp(input)
  .extract(region)
  .resize({ width: 800 })
  .webp({ quality: 82 })
  .toFile(output);

console.log(`${output}: ${info.width}x${info.height}, ${Math.round(info.size / 1024)} KB`);
