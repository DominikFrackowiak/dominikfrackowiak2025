import { createClient } from '@libsql/client'
const client = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
})
try {
  const res = await client.execute('select 1 as ok;')
  console.log('OK:', res.rows)
} catch (e) {
  console.error('ERR:', e)
  process.exit(1)
}
