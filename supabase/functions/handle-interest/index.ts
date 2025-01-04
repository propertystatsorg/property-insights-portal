import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface InterestExpression {
  name: string;
  email: string;
  phone: string;
  company: string;
  profession: string;
  planName?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(SUPABASE_URL!, SUPABASE_ANON_KEY!);
    const data: InterestExpression = await req.json();
    
    // Store in Supabase
    const { error: dbError } = await supabase
      .from('interest_expressions')
      .insert([
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.company,
          profession: data.profession,
          plan_name: data.planName
        }
      ]);

    if (dbError) {
      console.error('Database error:', dbError);
      throw new Error('Failed to store interest expression');
    }

    // Send email
    const emailHtml = `
      <h2>New Interest Expression</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Company:</strong> ${data.company}</p>
      <p><strong>Profession:</strong> ${data.profession}</p>
      ${data.planName ? `<p><strong>Plan:</strong> ${data.planName}</p>` : ''}
    `;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'PropertyStats <onboarding@resend.dev>',
        to: ['contact@propertystats.mu'],
        subject: `New Interest Expression from ${data.name}`,
        html: emailHtml,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error('Email error:', error);
      throw new Error('Failed to send email');
    }

    return new Response(
      JSON.stringify({ message: 'Interest expression recorded successfully' }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error in handle-interest function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
};

serve(handler);