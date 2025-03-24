import { Metadata } from "next";
import ContactForm from "@/app/components/forms/ContactForm";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import FaqAccordion from "@/app/components/sections/FaqAccordion";
import { faqs } from "@/app/utils/mockData";

export const metadata: Metadata = {
  title: "Contact Us - Metazapp",
  description: "Get in touch with Metazapp for innovative software solutions. Contact us for a consultation or to learn more about our services.",
};

export default function ContactPage() {
  // Filter FAQs related to contact/inquiries
  const contactFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes("how do you") ||
    faq.question.toLowerCase().includes("handle") ||
    faq.question.toLowerCase().includes("what is")
  ).slice(0, 4);

  return (
    <>
      {/* Hero Banner */}
      <section className="pt-40 pb-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-white/90">
              Have questions or ready to start your project? We&apos;re here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md text-center neumorph">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <FiMail size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Email Us</h3>
              <div className="mb-2">
                <p className="text-gray-500 text-sm">General Inquiries</p>
                <a 
                  href="mailto:hello@metazapp.com" 
                  className="text-gray-800 font-medium hover:text-primary transition-colors"
                >
                  hello@metazapp.com
                </a>
              </div>
              <div className="mb-2">
                <p className="text-gray-500 text-sm">Sales</p>
                <a 
                  href="mailto:sales@metazapp.com" 
                  className="text-gray-800 font-medium hover:text-primary transition-colors"
                >
                  sales@metazapp.com
                </a>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center neumorph">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <FiPhone size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Call Us</h3>
              <div className="mb-2">
                <p className="text-gray-500 text-sm">Support</p>
                <a 
                  href="tel:+919003414321" 
                  className="text-gray-800 font-medium hover:text-primary transition-colors"
                >
                  +91 90034 14321
                </a>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center neumorph">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <FiMapPin size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Visit Us</h3>
              <div className="mb-2">
                <p className="text-gray-500 text-sm">Headquarters</p>
                <p className="text-gray-800 font-medium">
                  No.17 First Floor, Coimbatore - 641047
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>
              <ContactForm />
            </div>
            
            <div>
              <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center mb-8 neumorph">
                <span className="text-gray-500">Google Maps Integration</span>
              </div>
              
              <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
              <FaqAccordion faqs={contactFaqs} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}