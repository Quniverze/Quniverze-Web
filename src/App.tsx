import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BusinessModelSection } from './components/BusinessModelSection';
import { ProductSection } from './components/ProductSection';
import { CustomerProofSection } from './components/CustomerProofSection';
import { ClientWorkSection } from './components/ClientWorkSection';
import { ProcessSection } from './components/ProcessSection';
import { AboutSection } from './components/AboutSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { ProjectModal } from './components/ProjectModal';
import { ProductModal } from './components/ProductModal';
import type { ProductItem, ClientWorkItem } from './data/content';

export const App: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ClientWorkItem | null>(null);

  const handleOpenContact = (subject?: string) => {
    setContactSubject(subject || 'General Inquiry');
    setIsContactOpen(true);
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F6F9] text-[#12151C] font-sans selection:bg-[#12151C] selection:text-white">
      {/* 01 Navigation */}
      <Navbar onOpenContact={() => handleOpenContact('Direct Conversation')} />

      {/* Main Flow adhering to Section 27 Information Architecture */}
      <main className="flex-1">
        {/* 02 Hero */}
        <Hero
          onExploreProducts={() => handleScrollTo('products')}
          onWorkWithUs={() => handleScrollTo('contact')}
        />

        {/* 03 What We Do / Business Model */}
        <BusinessModelSection
          onExploreProducts={() => handleScrollTo('products')}
          onExploreWork={() => handleScrollTo('work')}
        />

        {/* 04 Products (NivaOps, Quniverze CRM) */}
        <ProductSection
          onSelectProduct={(product) => setSelectedProduct(product)}
        />

        {/* 05 Real Software in Use / Customer Proof (StayB NivaOps Customer) */}
        <CustomerProofSection
          onLearnMore={() => handleScrollTo('work')}
        />

        {/* 06 Selective Work (Boven Frontier, IGCC, StayB) */}
        <ClientWorkSection
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 07 How We Work (01 → 04 Process) */}
        <ProcessSection />

        {/* 08 Why Quniverze & About */}
        <AboutSection />

        {/* 09 Contact / Need Software? */}
        <CTASection
          onStartConversation={() => handleOpenContact('Project Scoping')}
        />
      </main>

      {/* 10 Footer */}
      <Footer />

      {/* Interactive Inquiries & Deep-Dives */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        defaultSubject={contactSubject}
      />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onInquire={() => {
          const prodName = selectedProduct?.name;
          setSelectedProduct(null);
          handleOpenContact(`${prodName} Inquiry`);
        }}
      />

      <ProjectModal
        item={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={() => {
          const projName = selectedProject?.title;
          setSelectedProject(null);
          handleOpenContact(`Discussion regarding ${projName}`);
        }}
      />
    </div>
  );
};

export default App;
