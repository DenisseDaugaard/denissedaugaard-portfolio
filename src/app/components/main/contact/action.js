import { z } from 'zod';
import { contactSchema } from '@/app/lib/zodValidation';

export async function handleSubmit(_, formData) {
  const values = {
    name: formData.get('name')?.toString() ?? '',
    email: formData.get('email')?.toString() ?? '',
    subject: formData.get('subject')?.toString() ?? '',
    message: formData.get('message')?.toString() ?? '',
  };

  console.log(values);

  const result = contactSchema.safeParse(values);

  if (!result.success) {
    return { values: values,
        errors:z.flattenError(result.error).fieldErrors
     };
  }

  //console.log(result, '❤️');
  

  try {
    const response = await fetch('https://hifi-mail.onrender.com/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(result.data),
    });

    const responseData = await response.json().catch(() => null);

    if (!response.ok) {
      return {
        values,
        errors: {},
        serverMessage: {
          error: responseData?.error || 'There was a problem submitting the form. Please try again later.',
        },
      };
    }

    // console.log('your message was sent 🦾💕');
    // console.log(response);
    
   return {
     success: true,
    status: 200,
    values:responseData
   }

  } catch (error) {
    return {
      values,
      errors: {},
      serverMessage: {
        error: 'There was a problem submitting the form. Please try again later.',
      },
    };
  }
}