import { join } from 'path';
import telescope from '@osmonauts/telescope';

const protoDirs = [join(__dirname, '/../proto')];
const outPath = join(__dirname, '../src/proto');

telescope({
  protoDirs,
  outPath,
  options: {
    aminoEncoding: {
      enabled: true
    },
    lcdClients: {
      enabled: true
    },
    rpcClients: {
      enabled: true,
      camelCase: true
    }
  }
})
  .then(() => {
    console.log('✨ All Done!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
