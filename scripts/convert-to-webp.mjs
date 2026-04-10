import sharp from 'sharp';
import { readdir, stat, unlink } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, '..', 'public', 'images');

let totalOriginalSize = 0;
let totalNewSize = 0;
let converted = 0;
let skipped = 0;

async function getFilesRecursive(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getFilesRecursive(fullPath)));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

async function convertImage(filePath) {
  const ext = extname(filePath).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) return;

  const webpPath = filePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  
  // Zaten webp varsa atla
  try {
    await stat(webpPath);
    console.log(`⏭  Zaten mevcut: ${basename(webpPath)}`);
    skipped++;
    return;
  } catch {}

  const originalStat = await stat(filePath);
  const originalSize = originalStat.size;

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();
    
    // PNG için lossless, JPG için kaliteli lossy
    const options = ext === '.png' 
      ? { lossless: false, quality: 85, effort: 4 }
      : { quality: 82, effort: 4 };

    await image
      .webp(options)
      .toFile(webpPath);

    const newStat = await stat(webpPath);
    const newSize = newStat.size;
    const saved = originalSize - newSize;
    const percent = Math.round((saved / originalSize) * 100);

    totalOriginalSize += originalSize;
    totalNewSize += newSize;
    converted++;

    console.log(`✅ ${basename(filePath)} → ${basename(webpPath)} | ${(originalSize/1024/1024).toFixed(2)}MB → ${(newSize/1024/1024).toFixed(2)}MB (-%${percent})`);

    // Orijinali sil
    await unlink(filePath);
    console.log(`   🗑  Orijinal silindi: ${basename(filePath)}`);
  } catch (err) {
    console.error(`❌ Hata: ${filePath} - ${err.message}`);
  }
}

async function main() {
  console.log('🔄 WebP dönüşümü başlıyor...\n');
  
  const files = await getFilesRecursive(PUBLIC_DIR);
  console.log(`📁 Toplam ${files.length} dosya bulundu\n`);

  for (const file of files) {
    await convertImage(file);
  }

  const savedMB = ((totalOriginalSize - totalNewSize) / 1024 / 1024).toFixed(1);
  const origMB = (totalOriginalSize / 1024 / 1024).toFixed(1);
  const newMB = (totalNewSize / 1024 / 1024).toFixed(1);

  console.log('\n' + '='.repeat(50));
  console.log(`✨ Tamamlandı!`);
  console.log(`   Dönüştürülen: ${converted} dosya`);
  console.log(`   Atlanan: ${skipped} dosya`);
  console.log(`   Önceki boyut: ${origMB} MB`);
  console.log(`   Yeni boyut:   ${newMB} MB`);
  console.log(`   Tasarruf:     ${savedMB} MB`);
  console.log('='.repeat(50));
  console.log('\n⚠️  NOT: Kod içindeki .png/.jpg referanslarını .webp olarak güncellemeyi unutma!');
}

main().catch(console.error);
