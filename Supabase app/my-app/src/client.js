import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
    "https://atuabcdfwbznsjkkvjlk.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0dWFiY2Rmd2J6bnNqa2t2amxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTcwMTg4NTUsImV4cCI6MTk3MjU5NDg1NX0.cGyJr0uGK0dCCZcHRayIOEOSzfvUGETZ9B2VrTwbtfw"
)