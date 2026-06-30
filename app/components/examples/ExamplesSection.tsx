// components/examples/ExamplesSection.tsx
"use client";

import { motion, type Variants } from "framer-motion";
import ExampleCard from "./ExampleCard";
import { EXAMPLES } from "./examples-data";
import {
  DiagramFollowUp,
  DiagramRelatorio,
  DiagramEcossistema,
  DiagramBackup,
} from "./diagrams";
import type { ReactNode } from "react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const DIAGRAM_MAP: Record<string, ReactNode> = {
  followUp:    <DiagramFollowUp />,
  relatorio:   <DiagramRelatorio />,
  ecossistema: <DiagramEcossistema />,
  backup:      <DiagramBackup />,
};

export default function ExamplesSection() {
  return (
    <section className="examples" id="exemplos">
      <div className="wrap">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="section-head"
        >
          <span className="eyebrow">Exemplos</span>
          <h2>Automações que eu construo</h2>
          <p>
            Cada fluxo abaixo substitui um processo que hoje alguém faz na mão —
            pasta por pasta, PDF por PDF, e-mail por e-mail.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="examples-list"
        >
          {EXAMPLES.map((ex) => (
            <ExampleCard
              key={ex.diagramKey}
              tag={ex.tag}
              title={ex.title}
              desc={ex.desc}
              diagram={DIAGRAM_MAP[ex.diagramKey]}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}