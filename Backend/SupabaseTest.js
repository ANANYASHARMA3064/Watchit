import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();


const supabase = createClient(process.env.SUPABASE_URL,process.env.SUPABASE_KEY);

async function test() {
  const { data, error } = await supabase.from('watchlist').select('*');
  if (error) console.error('Error:', error);
  else console.log('Data:', data);
}

test();
