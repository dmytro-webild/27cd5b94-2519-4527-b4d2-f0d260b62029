"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import { Laptop, Smartphone } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="largeSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="outline"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Reviews",
          id: "testimonials",
        },
        {
          name: "Location",
          id: "location",
        },
      ]}
      brandName="CellFix Solutions"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="CellFix Solutions"
      description="Same-day service. Trusted by 500+ locals."
      buttons={[
        {
          text: "Call Now",
          href: "tel:7782182853",
        },
        {
          text: "Get Free Quote",
          href: "#contact",
        },
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/man-uses-vacuum-plug-remove-screen-from-broken-phone-his-toolkit-with-special-tools-near_346278-1191.jpg",
          imageAlt: "Professional smartphone repair service",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-master-works-broken-tablet-repair-it-near-tool-bag-wooden-table-service-lab_346278-1785.jpg",
          imageAlt: "Top view of master works on broken tablet",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/unrecognizable-technician-preparing-broken-smartphone-dissassembling-process_346278-1184.jpg",
          imageAlt: "Technician preparing broken smartphone",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/portable-tool-kit-hoder-with-special-tools-electronic-repairment_346278-1183.jpg",
          imageAlt: "Portable tool kit for electronic repair",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-hand-with-pincher-tool-holding-sim-card-slot-with-nano-sim-black-magnet-plate-portable-tookit-electronic-repeirment-service_346278-1188.jpg",
          imageAlt: "Close up on hand holding sim-card slot",
        },
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureHoverPattern
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "iPhone Repair",
          description: "Expert screen, battery, and camera repairs for all iPhone models.",
          icon: Smartphone,
        },
        {
          title: "Samsung & Android",
          description: "Quick, reliable repairs for all major Android smartphone brands.",
          icon: Smartphone,
        },
        {
          title: "Laptop Repair",
          description: "Comprehensive hardware and software solutions for your laptop.",
          icon: Laptop,
        },
      ]}
      title="Our Expert Repair Services"
      description="Fast and affordable solutions for your mobile devices."
    />
  </div>

  <div id="why-us" data-section="why-us">
      <MediaAbout
      useInvertedBackground={false}
      title="Why Choose CellFix Solutions?"
      description="We combine expertise with local reliability. 500+ 5-star reviews confirm our commitment to quality."
      imageSrc="http://img.b2bpic.net/free-photo/broken-mobile-screen_1339-341.jpg"
      imageAlt="Technician repairing a device"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          role: "Resident",
          company: "Surrey",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-confident-blonde-office-worker-man-headphones-sits-desk-with-office-tools-using-laptop-gestures-ok-hand-sign-looking-camera-isolated-white-background-with-copy-space_141793-65652.jpg",
        },
        {
          id: "2",
          name: "Michael C.",
          role: "Local",
          company: "Surrey",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-new-york-city-daytime_23-2149488497.jpg",
        },
        {
          id: "3",
          name: "Emily R.",
          role: "Customer",
          company: "Surrey",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/optimistic-laughing-black-woman-posing-studio-orange-background-relaxed-curly-female-model-enjoying-life_273443-39.jpg",
        },
        {
          id: "4",
          name: "David K.",
          role: "Resident",
          company: "Surrey",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-businessman-glasses-showing-okay-hand-sign-sitting-with-laptop-cafe_1258-245310.jpg",
        },
        {
          id: "5",
          name: "James B.",
          role: "Local",
          company: "Surrey",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-corrects-belt-fees-groom-man-s-hands-dressing-man-buttons-pants-jeans_8353-5893.jpg",
        },
      ]}
      kpiItems={[
        {
          value: "584+",
          label: "Reviews",
        },
        {
          value: "4.7★",
          label: "Rating",
        },
        {
          value: "1Hr",
          label: "Quick Repair",
        },
      ]}
      title="What Our Customers Say"
      description="Join 584+ happy customers in Surrey."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "screen",
          badge: "Popular",
          price: "From $89",
          subtitle: "Screen Replacement",
          features: [
            "Expert install",
            "6-month warranty",
            "Same-day service",
          ],
          buttons: [
            {
              text: "Get Quote",
              href: "#contact",
            },
          ],
        },
        {
          id: "battery",
          badge: "Affordable",
          price: "From $59",
          subtitle: "Battery Replacement",
          features: [
            "Quality battery",
            "Quick service",
            "Diagnostics included",
          ],
          buttons: [
            {
              text: "Get Quote",
              href: "#contact",
            },
          ],
        },
        {
          id: "other",
          badge: "Consultation",
          price: "Custom",
          subtitle: "Other Issues",
          features: [
            "Full diagnostics",
            "Honest estimate",
            "No fix-no pay",
          ],
          buttons: [
            {
              text: "Get Quote",
              href: "#contact",
            },
          ],
        },
      ]}
      title="Transparent Repair Pricing"
      description="Fair prices, no hidden fees. Get your quote today."
    />
  </div>

  <div id="cta-banner" data-section="cta-banner">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Need your phone fixed today?"
      tag="Call us now"
      metrics={[
        {
          id: "m1",
          value: "Call Now",
          description: "(778) 218-2853",
        },
        {
          id: "m2",
          value: "Book Now",
          description: "Same-day repair",
        },
        {
          id: "m3",
          value: "Visit Us",
          description: "13711 72 Ave #110",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="location" data-section="location">
      <MediaAbout
      useInvertedBackground={false}
      title="Visit Us in Surrey"
      description="13711 72 Ave #110, Surrey, BC. Open daily. Plenty of parking available for your convenience."
      imageSrc="http://img.b2bpic.net/free-photo/angled-esd-tweezers-pulling-out-micro-sim-card-tray-from-mobile-smartphone-body-near-toolkit-bag_346278-1792.jpg"
      imageAlt="Our repair shop location"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Contact"
      title="Get Your Free Quote"
      description="Tell us your device and issue, and we'll be in touch quickly."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/professional-takes-speciall-opening-plastic-instrument-from-his-tool-bag-repair-tablet_346278-1781.jpg"
      logoText="CellFix Solutions"
      columns={[
        {
          title: "Contact",
          items: [
            {
              label: "(778) 218-2853",
              href: "tel:7782182853",
            },
            {
              label: "13711 72 Ave #110, Surrey",
              href: "#",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "Reviews",
              href: "#testimonials",
            },
            {
              label: "Location",
              href: "#location",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
