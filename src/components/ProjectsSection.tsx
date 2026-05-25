import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import type { Language } from '../data/translations';

interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  url: string;
  status: string;
}

const content: Record<Language, { label: string; projects: Project[] }> = {
  fr: {
    label: 'Projets en cours',
    projects: [
      {
        id: 'landing10cheap',
        name: 'Landing 10€',
        tagline: 'Sites web clé en main à 9,99€',
        description:
          'Une plateforme de vente complète pour commander un site web en quelques clics. Tunnel de vente, paiement Stripe, emails automatisés et livraison manuelle via guide PDF.',
        tags: ['Next.js', 'Stripe', 'Supabase', 'Resend'],
        url: 'https://github.com/KRGlobalLTD/Landing10cheap',
        status: 'Live',
      },
      {
        id: 'kr-agents',
        name: 'KR Global Agents',
        tagline: '28 agents IA orchestrés',
        description:
          "Un système multi-agents piloté par l'IA pour automatiser des workflows complexes, augmenter la productivité et déléguer des tâches répétitives à des agents spécialisés.",
        tags: ['Next.js', 'Claude AI', 'TypeScript', 'PostgreSQL'],
        url: 'https://github.com/KRGlobalLTD/kr-global-agents',
        status: 'En cours',
      },
    ],
  },
  en: {
    label: 'Current projects',
    projects: [
      {
        id: 'landing10cheap',
        name: 'Landing 10€',
        tagline: 'Turnkey websites at €9.99',
        description:
          'A complete sales platform to order a website in a few clicks. Sales funnel, Stripe payment, automated emails, and manual delivery with a PDF guide.',
        tags: ['Next.js', 'Stripe', 'Supabase', 'Resend'],
        url: 'https://github.com/KRGlobalLTD/Landing10cheap',
        status: 'Live',
      },
      {
        id: 'kr-agents',
        name: 'KR Global Agents',
        tagline: '28 orchestrated AI agents',
        description:
          'An AI-powered multi-agent system to automate complex workflows, boost team productivity, and delegate repetitive tasks to specialized agents.',
        tags: ['Next.js', 'Claude AI', 'TypeScript', 'PostgreSQL'],
        url: 'https://github.com/KRGlobalLTD/kr-global-agents',
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06]">
          {c.projects.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="group block bg-black p-8 sm:p-12 hover:bg-[#0a0a0a] transition-colors"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="text-[10px] uppercase tracking-widest text-neutral-600">
                  {project.status}
                </span>
                <ExternalLink
                  size={14}
                  className="text-neutral-700 group-hover:text-white transition-colors"
                />
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

              <div className="mt-10 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-wider border border-white/10 rounded-full px-3 py-1 text-neutral-600 group-hover:border-white/20 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
