import { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/app/components/ui/SectionHeading";
import Button from "@/app/components/ui/Button";
import { jobOpenings } from "@/app/utils/mockData";
import { FiCode, FiSmartphone, FiServer, FiPieChart } from "react-icons/fi";
import { JSX } from "react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Careers - Metazapp",
  description: "Join our team at Metazapp and be part of building innovative software solutions. Explore current job openings and opportunities.",
};

const iconMap: Record<string, JSX.Element> = {
  CodeIcon: <FiCode size={40} className="text-primary" />,
  PaletteIcon: <FiSmartphone size={40} className="text-primary" />,
  ServerIcon: <FiServer size={40} className="text-primary" />,
  ChartIcon: <FiPieChart size={40} className="text-primary" />
};

export default function CareerPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-40 pb-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-white/90 mb-8">
              Be part of a dynamic team building innovative software solutions that make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Why Join Metazapp?"
                subtitle="We're building a team of passionate individuals who love technology and innovation."
              />
              
              <div className="space-y-6 mt-8">
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mr-4">
                    <span className="text-primary font-bold text-lg">01</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
                    <p className="text-gray-600">
                      We encourage creative thinking and innovative approaches to problem-solving.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mr-4">
                    <span className="text-primary font-bold text-lg">02</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
                    <p className="text-gray-600">
                      We invest in your growth through training, workshops, and learning opportunities.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mr-4">
                    <span className="text-primary font-bold text-lg">03</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Work-Life Balance</h3>
                    <p className="text-gray-600">
                      We value your personal time and promote a healthy balance between work and life.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mr-4">
                    <span className="text-primary font-bold text-lg">04</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Collaborative Culture</h3>
                    <p className="text-gray-600">
                      We foster a supportive environment where teamwork and collaboration thrive.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-96 rounded-lg overflow-hidden neumorph">
                <Image 
                  src="/images/team/team-culture.jpg" // Path to your team image
                  alt="Metazapp team collaboration"
                  fill
                  className="object-cover"
                />
                {/* Optional overlay gradient for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Current Openings"
            subtitle="Explore our current job opportunities and find the perfect role for your skills and experience."
            centered
          />
          
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8 mt-12">
            {jobOpenings.map((job) => (
              <div 
                key={job.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover-lift"
              >
                <div className="p-3 md:p-6">
                  <div className="flex items-start">
                    <div className="mr-4">
                      {iconMap[job.icon]}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          {job.location}
                        </span>
                        <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                          {job.type}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-2">Requirements:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          {job.requirements.slice(0, 3).map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <Link
                        href={`/contact?job=${job.title}`}
                        className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-white hover:bg-primary-dark transition-colors duration-300"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Don&apos;t See the Perfect Role?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We are always looking for talented individuals to join our team. Send us your resume and we&apos;ll keep you in mind for future opportunities.
          </p>
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            className="text-primary hover:bg-gray-100"
            
          >
            Send Your Resume
          </Button>
        </div>
      </section>
    </>
  );
}