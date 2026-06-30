"use client";

import { motion, type Variants } from 'framer-motion';

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

      <section className="demo" id="demonstracao">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Como funciona</span>
            <h2>O fluxo completo, do primeiro clique ao e-mail no cliente</h2>
            <p>Um exemplo real de como o sistema se comporta — da entrada de um projeto novo até o relatório chegando pronto na caixa de entrada.</p>
          </div>

          <motion.svg
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flow-diagram"
            viewBox="0 0 980 200"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Fluxo: formulário preenchido cria pastas no Drive, gera PDF a partir de um template e envia por e-mail ao cliente"
          >
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" fill="#3fc7b8"></path>
              </marker>
            </defs>

            <motion.line variants={drawLine} x1="135" y1="100" x2="290" y2="100" stroke="#3fc7b8" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <motion.line variants={drawLine} x1="425" y1="100" x2="580" y2="100" stroke="#3fc7b8" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <motion.line variants={drawLine} x1="715" y1="100" x2="850" y2="100" stroke="#3fc7b8" strokeWidth="1.5" markerEnd="url(#arrow)" />

            {[
              { x: 15, num: '01', t1: 'Formulário', t2: 'dados do projeto', border: '#1f8a82' },
              { x: 290, num: '02', t1: 'Pastas no Drive', t2: 'estrutura padrão', border: '#1f8a82' },
              { x: 580, num: '03', t1: 'PDF gerado', t2: 'a partir de um template', border: '#1f8a82' },
              { x: 850, num: '04', t1: 'E-mail enviado', t2: 'cliente recebe o link', border: '#5cb88a', last: true }
            ].map((step, i) => (
              <motion.g
                key={step.num}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <rect x={step.x} y="55" width={step.last ? 120 : 135} height="90" rx="6" fill="#0f2a38" stroke={step.border} strokeWidth={step.last ? '1.4' : '1.2'} />
                <text x={step.x + (step.last ? 60 : 67.5)} y="92" textAnchor="middle" fill={step.last ? '#5cb88a' : '#3fc7b8'} fontFamily="var(--font-jetbrains)" fontSize="11">{step.num}</text>
                <text x={step.x + (step.last ? 60 : 67.5)} y="115" textAnchor="middle" fill="#f4f7f6" fontFamily="var(--font-sora)" fontSize="13" fontWeight="600">{step.t1}</text>
                <text x={step.x + (step.last ? 60 : 67.5)} y="131" textAnchor="middle" fill="#aebcc2" fontFamily="var(--font-inter)" fontSize="10.5">{step.t2}</text>
              </motion.g>
            ))}
          </motion.svg>

          <div className="mockups">
            <div className="mockup-card">
              <div className="mockup-bar">
                <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                <span className="mockup-title">Drive — Projeto Residência Lopes</span>
              </div>
              <div className="mockup-body">
                <div className="folder-row"><span className="folder-icon"></span>01_Plantas</div>
                <div className="folder-row"><span className="folder-icon"></span>02_Renders</div>
                <div className="folder-row"><span className="folder-icon"></span>03_Documentos</div>
                <div className="folder-row"><span className="folder-icon"></span>04_Fotos de obra</div>
                <div className="folder-row"><span className="folder-icon"></span>05_Relatórios</div>
              </div>
            </div>

            <div className="mockup-card">
              <div className="mockup-bar">
                <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                <span className="mockup-title">Relatório_Obra_Junho.pdf</span>
              </div>
              <div className="mockup-body report-preview">
                <div className="report-line title"></div>
                <div className="report-line short"></div>
                <div className="report-photo-row">
                  <span className="report-photo"></span><span className="report-photo"></span>
                </div>
                <div className="report-line"></div>
                <div className="report-line short"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

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