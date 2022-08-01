import { join } from 'path';
import telescope from '@osmonauts/telescope';

const protoDirs = [join(__dirname, '/../proto')];
const outPath = join(__dirname, '../src/proto');

telescope({
  protoDirs,
  outPath,
  options: {
    includePackageVar: false,
    typingsFormat: {
      useExact: false,
      timestamp: 'date',
      duration: 'duration'
    },
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
});
