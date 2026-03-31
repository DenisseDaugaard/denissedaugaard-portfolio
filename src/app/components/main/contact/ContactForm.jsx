"use client"
import { handleSubmit } from './action';
import { useActionState, useEffect } from 'react';
import  { Toaster } from 'react-hot-toast';


export default function ContactForm() {
   
    const initialState = {
    values: {
        name: "",
        email: "",
        message:"",
     },
    errors: {},
    serverMessage:{},
    success:false,
  };

   const [state, formAction, isPending] = useActionState(handleSubmit, initialState);

//    useEffect(() => {
//     if(state?.serverMessage?.error){
//         toast.success(state.serverMessage.success);
//     }
//     }, [state?.serverMessage])

    return (
    <>
    
        <section id="contact"  className="p-6 mb-15 lg:border border-pink-500/50 lg:rounded-[2rem] backdrop-blur-2xl lg:w-[70%] z-100 lg:my-20 lg:mx-auto">
        <h1 className="text-2xl font-semibold text-center my-8 text-red-400">Contact Me</h1>
            <form noValidate className="flex flex-col gap-4 justify-self-center w-[80%]" action={formAction}>
            <div className="flex flex-col gap-2">
                <label htmlFor="name">Full name 
                </label> 
                <input className="rounded-lg p-2 bg-white/20 w-[100%]" 
                type="text" 
                name="name" 
                placeholder="Your name"
                defaultValue={state?.values?.name ?? ""}/>
                {state?.errors?.name && (<p className="text-red-400">{state?.errors.name}</p>)}
            </div>

            <div className="form__group">
                <label htmlFor="email">Email 
                    </label> 
                <input type="email" 
                name="email"
                placeholder="Your email"
                className="rounded-lg p-2 bg-white/20 w-[100%]"
                defaultValue={state?.values?.email ?? ""}/>
                {state?.errors?.email && ( <p className="text-red-400">{state.errors.email}</p>)}
            </div>

            <div className="form__group">
                <label htmlFor="email">Subject
                    </label> 
                <input type="text" 
                name="subject"
                placeholder="Subject"
                className="rounded-lg p-2 bg-white/20 w-[100%]"
                defaultValue={state?.values?.subject ?? ""}/>
                {state?.errors?.subject && ( <p className="text-red-400">{state?.errors.subject}</p>)}
            </div>

            <div className="form__group">
                <label htmlFor="message">Message 
                </label>
                <textarea name="message" 
                placeholder="Your message"
                className="rounded-lg p-2 bg-white/20 w-[100%] resize-none"
                rows="5" 
                defaultValue={state?.values?.message ?? ""}></textarea>
                {state?.errors?.message && ( <p className="text-red-400">{state?.errors.message}</p>)}
            </div>

    
            <div className="error submit__error">
                {state?.serverMessage?.error && (
               <Toaster
                position="bottom-right"
                reverseOrder={false}
                />
                )} 
            </div>

            <div className="error submit__error">
                {state?.serverMessage?.success && (
               <Toaster
                position="bottom-right"
                reverseOrder={false}
                />
                )} 
            </div>
            
             <button
                className="bg-cyan-500/50 hover:shadow-md hover:shadow-cyan-500 inline-block px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed diabled:bg-gray-200 transition"
                disabled={isPending}
                type="submit"
                >
                {isPending ? "Sending..." : "Send Message"}
            </button>
            
            </form>
        </section>
    </>
      
        
    )
}