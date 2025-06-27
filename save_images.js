import { mkdir, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create the certifications directory if it doesn't exist
const certificationsDir = join(__dirname, 'public', 'images', 'certifications');
if (!existsSync(certificationsDir)) {
  mkdir(certificationsDir, { recursive: true }, (err) => {
    if (err) {
      console.error('Error creating directory:', err);
      return;
    }
    
    console.log('Please save your certification images in the following location:');
    console.log(certificationsDir);
    console.log('\nUse these filenames:');
    console.log('- azure-ai-fundamentals.png');
    console.log('- azure-fundamentals.png');
    console.log('- oracle-java.png');
    console.log('- power-bi-analyst.png');
  });
} else {
  console.log('Please save your certification images in the following location:');
  console.log(certificationsDir);
  console.log('\nUse these filenames:');
  console.log('- azure-ai-fundamentals.png');
  console.log('- azure-fundamentals.png');
  console.log('- oracle-java.png');
  console.log('- power-bi-analyst.png');
} 