import { fstat } from 'fs';
import { Database } from 'sheetsql';
import keyFile from './google-serviceaccount';
import fs from 'fs';
let db = null;
fs.writeFile(
  `${process.cwd()}/google-serviceaccount.json`,
  JSON.stringify(keyFile),
  'utf8',
  function () {
   console.log('Saved File') 
  }
);
db = new Database({
      db: '1sZg_w6OUPOFAEqxnbKBEl7fIgBy0caYzwDLqeu-9rpE',
      table: 'Form Responses 1', // optional, default = Sheet1
      keyFile: `${process.cwd()}/google-serviceaccount.json`,
      cacheTimeoutMs: 5000, // optional, default = 5000
    });
export default db;
