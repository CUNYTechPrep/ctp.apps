import { Database } from 'sheetsql';
import keyFile from './google-serviceaccount';
import fs from 'fs';
import { logger } from '@ctp.apps/logger'
let db = null;
fs.writeFile(
  `${process.cwd()}/google-serviceaccount.json`,
  JSON.stringify(keyFile),
  'utf8',
  function () {
    console.log('Saved File')
  }
);
logger.info("App Set in", process.env.NODE_ENV, "Mode")
if (process.env.NODE_ENV === 'production') {
  db = new Database({
    db: '1p600gWZQae8dSbDGpO16ywTkH1MKNyAtCBUjLq0ZYDg',
    table: 'Form Responses 1', // optional, default = Sheet1
    keyFile: `${process.cwd()}/google-serviceaccount.json`,
    cacheTimeoutMs: 5000, // optional, default = 5000
  });
  logger.info("Connected to prod db")
} else {
  db = new Database({
    db: '1p600gWZQae8dSbDGpO16ywTkH1MKNyAtCBUjLq0ZYDg',
    table: 'Form Responses 1', // optional, default = Sheet1
    keyFile: `${process.cwd()}/google-serviceaccount.json`,
    cacheTimeoutMs: 5000, // optional, default = 5000
  });

  logger.info("Connected to dev db")
}
export default db;
