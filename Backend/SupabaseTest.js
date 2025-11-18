import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

// const supabaseUrl = 'https://pvsbgpeflbmnkrdtqviq.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2c2JncGVmbGJtbmtyZHRxdmlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc3MzQ0NzMsImV4cCI6MjA3MzMxMDQ3M30.yP3xcdaK7hJQfJ1yl2d02HNDsNhcs6s5cshr6jTwtq0'; // from Supabase → Settings → API → anon key

const supabase = createClient(process.env.SUPABASE_URL,process.env.SUPABASE_KEY);

async function test() {
  const { data, error } = await supabase.from('watchlist').select('*');
  if (error) console.error('Error:', error);
  else console.log('Data:', data);
}

test();
