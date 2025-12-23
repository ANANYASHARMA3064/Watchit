import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  host: 'db.pvsbgpeflbmnkrdtqviq.supabase.co',
  database: 'postgres',
  user: 'postgres',
  password: 'LPLt8kA38qQVobSa',
  port: 5432,
  ssl: { rejectUnauthorized: false }
});

async function test() {
  const res = await pool.query('SELECT * FROM watchlist;');
  console.log(res.rows);
}

test();
