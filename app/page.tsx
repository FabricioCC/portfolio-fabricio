"use client";

import { motion, type Variants } from 'framer-motion';
import ExamplesSection from './components/examples/ExamplesSection';
// Variantes de animação reutilizáveis
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const drawLine: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 0.7, transition: { duration: 1, ease: "easeInOut" } }
};

export default function Home() {
  return (
    <>
      <nav>
        <div className="wrap">
          <div className="brand">Carlos <span>Fabrício</span></div>
          <ul>
            {['Serviço', 'Demonstração', 'Experiência', 'Contato'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <header className="hero">
        <div className="wrap">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            Automação de processos
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Eu construo sistemas que <em>tiram o trabalho repetitivo</em> do seu escritório.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lead"
          >
            Pastas, relatórios e envios que hoje você faz na mão, automatizados pra rodar sozinhos — sem mensalidade de ferramenta, sem depender de mim no dia a dia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="hero-cta"
          >
            <a className="btn-primary" href="#contato">Solicitar orçamento</a>
            <a className="ghost-link" href="#experiencia">ver experiência profissional →</a>
          </motion.div>
        </div>
      </header>

      <section className="service" id="servico">
        <div className="wrap">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="section-head"
          >
            <span className="eyebrow">O que eu faço</span>
            <h2>Sistemas pra quem trabalha com clientes e projetos</h2>
            <p>Arquitetos, advogados, contadores, consultores — qualquer profissional onde cada cliente novo gera uma pasta, um documento, um relatório que precisa sair certo e a tempo.</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="tools-grid"
          >
            {[
              { num: '01', title: 'Organização automática', desc: 'Cliente novo entra, pastas certas já existem — sem ninguém criar manualmente, sem pasta fora do padrão.' },
              { num: '02', title: 'Relatórios automáticos', desc: 'Um formulário rápido vira um PDF formatado, salvo no lugar certo e enviado direto pro cliente.' },
              { num: '03', title: 'Resumo periódico', desc: 'Toda semana, um panorama do que está em andamento chega sozinho — sem ninguém compilar nada manualmente.' }
            ].map((tool) => (
              <motion.div key={tool.num} variants={fadeInUp} className="tool">
                <div className="mark">{tool.num}</div>
                <h3>{tool.title}</h3>
                <p>{tool.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <ExamplesSection />

      <section className="experience" id="experiencia">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Trajetória</span>
            <h2>Experiência profissional</h2>
            <p>Cinco anos construindo sistemas em produção, com requisitos de confiabilidade exigentes, antes de aplicar isso em automações pra pequenos negócios.</p>
          </div>

          <div className="timeline">
            {[
              { when: '2024 — presente', company: 'Dataprev', role: 'Software Engineer', desc: 'Desenvolvo e mantenho sistemas que processam benefícios sociais pra dezenas de milhões de brasileiros, em escala federal.', stack: 'Java · Spring Boot · React · Oracle · REST APIs' },
              { when: '2022 — 2023', company: 'Workverse', role: 'Frontend Developer', desc: 'Liderei a migração da plataforma de Vue 2 pra Vue 3 e ajudei a construir o Videobots, produto de automação de RH usado por milhares de funcionários.', stack: 'Vue 3 · JavaScript · REST APIs' },
              { when: '2021 — 2022', company: 'Synchro · LAVID · LUMO', role: 'Full-stack / Frontend Developer', desc: 'Passagem por software fiscal, produtos de RH multi-cliente e um sistema universitário usado por milhares de pessoas na UFPB.', stack: 'React · Node.js · Vue.js' },
              { when: '2019 — 2023', company: 'UFPB', role: 'Bacharelado em Ciência da Computação', desc: 'Também atuei como monitor da disciplina introdutória de programação.' }
            ].map((exp, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeInUp}
                className="entry"
              >
                <div className="when">{exp.when}</div>
                <h3>{exp.company}</h3>
                <div className="role">{exp.role}</div>
                <p>{exp.desc}</p>
                {exp.stack && <div className="stack">{exp.stack}</div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contato">
        <div className="wrap">
          <h2>Quer ver isso rodando no seu escritório?</h2>
          <p>Sem custo de ferramenta, sem complicação. Entre em contato e eu te mostro como fica pronto.</p>
          <div className="contact-links">
            <a href="mailto:fabriciocls2001@gmail.com">E-mail</a>
            <a href="https://www.linkedin.com/in/fabricio-dev" target="_blank" rel="noopener">LinkedIn</a>
          </div>
        </div>
      </section>

      <footer>automação que roda sozinha, sem mensalidade de ferramenta</footer>
    </>
  );
}