// components/examples/ExampleCard.tsx
"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

interface ExampleCardProps {
  tag: string;
  title: string;
  desc: string;
  diagram: ReactNode;
}

export default function ExampleCard({ tag, title, desc, diagram }: ExampleCardProps) {
  return (
    <motion.div variants={fadeInUp} className="example-card">
      <div className="example-body">
        <div className="diagram-tag">{tag}</div>
        <div className="diagram-card">{diagram}</div>
        <div className="diagram-label">
          <strong>{title}</strong>
          <span>{desc}</span>
        </div>
      </div>
    </motion.div>
  );
}