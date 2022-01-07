import { Database } from "sheetsql"
export const db = new Database({
    db: '1sZg_w6OUPOFAEqxnbKBEl7fIgBy0caYzwDLqeu-9rpE',
    table: 'Form Responses 1', // optional, default = Sheet1
    keyFile: `${process.cwd()}/libs/ctp.alumni.newsletter/src/lib/topic-of-the-week/google-serviceaccount.json`,
    cacheTimeoutMs: 5000, // optional, default = 5000
  })
 export default db; 