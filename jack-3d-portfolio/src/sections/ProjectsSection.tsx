import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';

interface Project {
  num: string;
  category: string;
  name: string;
  images: [string, string, string]; // [col1-top, col1-bottom, col2-tall]
}

const PROJECTS: Project[] = [
  {
    num: '01',
    category: 'Client',
    name: 'Nextlevel Studio',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    ],
  },
  {
    num: '02',
    category: 'Personal',
    name: 'Aura Brand Identity',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    ],
  },
  {
    num: '03',
    category: 'Client',
    name: 'Solaris Digital',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    ],
  },
];

const CARD_RADIUS = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]';

function ProjectCard({ project, i, total }: { project: Project; i: number; total: number }) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (total - 1 - i) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={container} className="h-[85vh] flex items-start justify-center sticky top-24 md:top-32">
      <motion.div
        style={{ scale, top: `${i * 28}px` }}
        className={`relative w-full max-w-6xl ${CARD_RADIUS} border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8`}
      >
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4 sm:mb-6 md:mb-8">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="text-[#D7E2EA] font-black leading-none"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {project.num}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA]/60 font-light uppercase tracking-widest text-xs sm:text-sm">
                {project.category}
              </span>
              <span className="text-[#D7E2EA] font-medium uppercase text-lg sm:text-2xl md:text-3xl leading-tight">
                {project.name}
              </span>
            </div>
          </div>
          <LiveProjectButton />
        </div>

        {/* Image grid */}
        <div className="flex gap-3 sm:gap-4">
          <div className="flex flex-col gap-3 sm:gap-4" style={{ width: '40%' }}>
            <img
              src={project.images[0]}
              alt={`${project.name} preview 1`}
              loading="lazy"
              className={`w-full object-cover ${CARD_RADIUS}`}
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={project.images[1]}
              alt={`${project.name} preview 2`}
              loading="lazy"
              className={`w-full object-cover ${CARD_RADIUS}`}
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>
          <div style={{ width: '60%' }}>
            <img
              src={project.images[2]}
              alt={`${project.name} preview 3`}
              loading="lazy"
              className={`w-full h-full object-cover ${CARD_RADIUS}`}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn
        as="h2"
        delay={0}
        y={40}
        className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Project
      </FadeIn>

      <div className="max-w-6xl mx-auto">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.num} project={project} i={i} total={PROJECTS.length} />
        ))}
      </div>
    </section>
  );
}
