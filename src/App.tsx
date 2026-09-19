import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductSection } from './components/ProductSection';
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
    setContactSubject(subject || 'Digital System / Platform');
    setIsContactOpen(true);
  };

  const handleExploreProducts = () => {
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F2] text-[#111827] selection:bg-neutral-900 selection:text-white">
      {/* Top Navigation */}
      <Navbar onOpenContact={() => handleOpenContact('New Project Inquiry')} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreProducts={handleExploreProducts}
          onStartProject={() => handleOpenContact('New Project')}
        />

        {/* Products Section */}
        <ProductSection
          onSelectProduct={(product) => setSelectedProduct(product)}
          onViewAllProducts={handleExploreProducts}
        />

        {/* Client Work Section */}
        <ClientWorkSection
          onSelectProject={(project) => setSelectedProject(project)}
          onViewAllWork={() => {
            const el = document.getElementById('work');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Process Section */}
        <ProcessSection />

        {/* About Company Statement */}
        <AboutSection />

        {/* Final CTA Banner */}
        <CTASection
          onStartConversation={() => handleOpenContact('Strategic Conversation')}
          onLearnMore={handleLearnMore}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
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
          handleOpenContact(`${prodName} Access`);
        }}
      />

      <ProjectModal
        item={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={() => {
          const projName = selectedProject?.title;
          setSelectedProject(null);
          handleOpenContact(`Inquiry related to ${projName}`);
        }}
      />
    </div>
  );
};

export default App;
