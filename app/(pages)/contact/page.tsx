import { Metadata } from "next";
import FaqAccordion from "@/app/components/sections/FaqAccordion";
import { faqs } from "@/app/utils/mockData";
import ContactSection from "@/app/components/sections/ContactSection";

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
<section className="pt-20 pb-10 bg-gradient-to-r from-primary to-secondary text-white">
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
<section className="py-5">
  <div className="container mx-auto px-4">
    <ContactSection />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8">
      {/* Google Maps Column */}
      {/* <div className="order-1 md:order-2">
        <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center mb-8 neumorph">
          <span className="text-gray-500">Google Maps Integration</span>
        </div>
      </div> */}
      
      {/* FAQ Column */}
      <div className="order-2 md:order-1">
        <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
        <FaqAccordion faqs={contactFaqs} />
      </div>
    </div>
  </div>
</section>
    </>
  );
}