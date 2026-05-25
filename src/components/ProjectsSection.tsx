import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import type { Language } from '../data/translations';

interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  siteUrl: string;
  githubUrl?: string;
  status: string;
}

const content: Record<Language, { label: string; projects: Project[] }> = {
  fr: {
    label: 'Projets en cours',
    projects: [
      {
        id: 'siteeasy',
        name: 'SiteEasy',
        tagline: 'Un site web professionnel à 9,99€',
        description:
          'Plateforme clé en main pour commander un site web en quelques clics. Tunnel de vente automatisé, paiement Stripe sécurisé, confirmation email instantanée et livraison manuelle avec guide PDF.',
        tags: ['Next.js', 'Stripe', 'Supabase', 'Resend'],
        siteUrl: 'https://siteeasy.krglobalsolutionsltd.com/',
        githubUrl: 'https://github.com/KRGlobalLTD/Landing10cheap',
        status: 'Live',
      },
      {
        id: 'kr-agents',
        name: 'KR Global Agents',
        tagline: "Système d'exploitation IA pour l'entreprise",
        description:
          '28 agents IA spécialisés sur une base Supabase centralisée : finances, clients, marketing, réseaux sociaux, comptabilité, prospects, automations WhatsApp et bien plus.',
        tags: ['Next.js', 'Claude AI', 'Supabase', 'TypeScript'],
        siteUrl: 'https://github.com/KRGlobalLTD/kr-global-agents',
        status: 'En cours',
      },
    ],
  },
  en: {
    label: 'Current projects',
    projects: [
      {
        id: 'siteeasy',
        name: 'SiteEasy',
        tagline: 'A professional website for €9.99',
        description:
          'Turnkey platform to order a website in a few clicks. Automated sales funnel, secure Stripe payment, instant email confirmation, and manual delivery with a PDF guide.',
        tags: ['Next.js', 'Stripe', 'Supabase', 'Resend'],
        siteUrl: 'https://siteeasy.krglobalsolutionsltd.com/',
        githubUrl: 'https://github.com/KRGlobalLTD/Landing10cheap',
        status: 'Live',
      },
      {
        id: 'kr-agents',
        name: 'KR Global Agents',
        tagline: 'AI operating system for business',
        description:
          '28 specialized AI agents on a centralized Supabase database: finance, clients, marketing, social media, accounting, prospects, WhatsApp automations and more.',
        tags: ['Next.js', 'Claude AI', 'Supabase', 'TypeScript'],
        siteUrl: 'https://github.com/KRGlobalLTD/kr-global-agents',
        status: 'In progress',
      },
    ],
  },
};

export default function ProjectsSection({ lang }: { lang: Language }) {
  const c = content[lang];

  return (
    <section id="projects" className="py-24 sm:py-32 bg-black border-t border-white/[0.06]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">

        <motion.p
          className="text-[10px] uppercase tracking-[0.28em] text-neutral-600 mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {c.label}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.05]">
          {c.projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="bg-black p-8 sm:p-12 group"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="text-[10px] uppercase tracking-widest text-neutral-600">
                  {project.status}
                </span>
                <a
                  href={project.siteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-700 hover:text-white transition-colors"
                  aria-label={`Visiter ${project.name}`}
                >
                  <ExternalLink size={14} />
                </a>
              </div>

              <h3
                className="font-bold tracking-tight text-white leading-[0.95]"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                {project.name}
              </h3>
              <p className="mt-3 text-neutral-500 text-base">{project.tagline}</p>

              <p className="mt-5 text-sm text-neutral-600 leading-relaxed">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-wider border border-white/10 rounded-full px-3 py-1 text-neutral-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex gap-5 text-xs">
                <a
                  href={project.siteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white border-b border-white/20 pb-px hover:border-white transition-colors"
                >
                  {lang === 'fr' ? 'Voir le site →' : 'Visit site →'}
                </a>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-neutral-600 border-b border-neutral-700 pb-px hover:text-neutral-300 hover:border-neutral-400 transition-colors"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
