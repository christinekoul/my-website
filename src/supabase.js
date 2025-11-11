import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dvcslzzdacdiorxggmzp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2Y3NsenpkYWNkaW9yeGdnbXpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwNTc5MzUsImV4cCI6MjA1NjYzMzkzNX0.QOY2SC1i9xKIJrmwT5EFCgcc1FxjFUdKysUd2iAGD2M";

const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
