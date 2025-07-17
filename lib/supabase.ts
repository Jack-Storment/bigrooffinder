import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function signInWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
}

export async function signUpWithEmail(email: string, password: string) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bigrooffinder.com';
  
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: siteUrl,
    }
  });
  return { data, error };
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  return { error };
}

export async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

export interface ContactForm {
  id?: number;
  name: string;
  email: string;
  company?: string;
  message: string;
  created_at?: string;
}

export interface EmailSubscription {
  id?: number;
  email: string;
  created_at?: string;
}

export async function submitContactForm(data: ContactForm) {
  const { data: result, error } = await supabase
    .from('contact_forms')
    .insert([data]);
  
  if (error) throw error;
  return result;
}

export async function subscribeEmail(email: string) {
  const { data: result, error } = await supabase
    .from('email_subscriptions')
    .insert([{ email }]);
  
  if (error) throw error;
  return result;
}