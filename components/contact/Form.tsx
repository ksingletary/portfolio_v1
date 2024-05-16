import React, {useState} from "react";
import emailjs from '@emailjs/browser';
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";

export default function Form() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e: any) => {
      e.preventDefault();
  
      // Your EmailJS service ID, template ID, and Public Key
      const serviceId = 'service_prx4f4y';
      const templateId = 'template_54yj2pc';
      const publicKey = 'GJ1I0e8vet-gh7b_n';
  
      // Create a new object that contains dynamic template params
      const templateParams = {
        from_name: name,
        from_email: email,
        to_name: 'Keith Singletary',
        message: message,
      };
  
      // Send the email using EmailJS
      emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log('Email sent successfully!', response);
          setName('');
          setEmail('');
          setMessage('');
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });

        e.target.reset()
    }

    return (
        <div className="h-screen p-4 bg-white dark:bg-black">
            <div className="px-4">
                <Link href="/" aria-label="back button" className="text-primary hover:text-secondary text-4xl transition ease-in-out duration-300">
                    <BiArrowBack />
                </Link>
                <form onSubmit={handleSubmit} className="to-animate from-bottom mx-auto mt-10 flex w-full max-w-xl space-x-3 ">
                    <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-tertiary rounded-lg shadow-xl dark:shadow-gray-900 dark:bg-onyx">
                        <div className="mb-6 text-3xl text-center text-black dark:text-white">
                            Send me a message
                        </div>
                        <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
                            <div className="col-span-2 lg:col-span-1">
                                <div className=" relative ">
                                    <label htmlFor="name" className="ml-2 text-black dark:text-white">Name</label>
                                    <input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} id="contact-form-name" className=" rounded-lg  flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white dark:bg-onyx dark:text-white text-black placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent invalid:border-red-600" placeholder="john doe" />
                                </div>
                            </div>
                            <div className="col-span-2 lg:col-span-1">
                                <div className=" relative ">
                                    <label htmlFor="email" className="ml-2 text-black dark:text-white">Email</label>
                                    <input name="email" type="email" id="contact-form-email" value={email} onChange={(e) => setEmail(e.target.value)} className=" rounded-lg dark:text-white flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white dark:bg-onyx text-black placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent invalid:border-red-600" placeholder="you@example.com" />
                                </div>
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="message" className="ml-2 text-black dark:text-white">Message</label>
                                <textarea name="message" id="comment" placeholder="enter a message" rows={10} cols={40} value={message} onChange={(e) => setMessage(e.target.value)} className="flex-1 w-full px-4 py-2 text-base text-black dark:text-white placeholder-gray-400 bg-white dark:bg-onyx border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent invalid:border-red-600">
                                </textarea>
                            </div>
                            <p id="messageSent" className="col-span-2 hidden text-center text-gray-600 dark:text-gray-400">Message sent. Thanks for reaching out!</p>
                            <div className="col-span-2 text-right">
                                <button onClick={() => {
                                    document.getElementById("messageSent")?.classList.add("block");
                                    document.getElementById("messageSent")?.classList.remove("hidden")
                                }} type="submit" className="py-2 px-4  bg-primary hover:bg-secondary focus:ring-white text-white w-full transition ease-in duration-200 text-center text-xl font-semibold shadow-md rounded-full ">
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}