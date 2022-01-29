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
if (process.env.NODE_ENV === 'production') {
  db = new Database({
    db: '1sZg_w6OUPOFAEqxnbKBEl7fIgBy0caYzwDLqeu-9rpE',
    table: 'Form Responses 1', // optional, default = Sheet1
    keyFile: `${process.cwd()}/google-serviceaccount.json`,
    cacheTimeoutMs: 5000, // optional, default = 5000
  });
  logger.info("Connected to prod db")
} else {
  db = new Database({
    db: '1C9Gi6igUpnvPryYx8djwYyxSUwNi5NK4Hf8jtUOPttQ',
    table: 'Form Responses 1', // optional, default = Sheet1
    keyFile: `${process.cwd()}/google-serviceaccount.json`,
    cacheTimeoutMs: 5000, // optional, default = 5000
  });
  logger.info("Connected to dev db")
}
export default db;
