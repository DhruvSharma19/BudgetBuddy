
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
    'https://srpwsrwnlavqttawnrer.supabase.co',
     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNycHdzcndubGF2cXR0YXducmVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcyMTIwMDUsImV4cCI6MjAzMjc4ODAwNX0.Bt46mpzUPA3pkPkPTS8Kgtxrnd3y5Jk0yX7T5jvOiNA')