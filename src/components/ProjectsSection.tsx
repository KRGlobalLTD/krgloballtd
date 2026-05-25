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
    <section id="projects" className="py-24 sm:py-32 border-t border-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">

        <motion.p
          className="text-xs uppercase tracking-[0.22em] text-neutral-400 mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {c.label}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              className="group block rounded-2xl border border-neutral-200 p-8 sm:p-10 hover:border-neutral-900 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] uppercase tracking-widest text-neutral-400 border border-neutral-200 rounded-full px-3 py-1">
                  {project.status}
                </span>
                <ExternalLink
                  size={15}
                  className="text-neutral-300 group-hover:text-neutral-900 transition-colors"
                />
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
                {project.name}
              </h3>
              <p className="mt-2 text-neutral-500 text-lg">{project.tagline}</p>

              <p className="mt-5 text-sm text-neutral-500 leading-relaxed">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs border border-neutral-200 rounded-full px-3 py-1 text-neutral-500"
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
