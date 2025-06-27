// src/supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uwkgdgpzwslkmfvhxjmq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3a2dkZ3B6d3Nsa21mdmh4am1xIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MDk4NzUyMSwiZXhwIjoyMDY2NTYzNTIxfQ.yL-aUJKq7Pzbe_6iV43A6NW_lT4NjA91-9qS_GNo4_U'
export const supabase = createClient(supabaseUrl, supabaseKey)
