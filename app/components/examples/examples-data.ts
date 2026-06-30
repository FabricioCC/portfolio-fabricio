// components/examples/examples-data.ts

export interface Example {
  tag: string;
  title: string;
  desc: string;
  diagramKey: string;
}

export const EXAMPLES: Example[] = [
  {
    tag: "Qualquer escritório",
    title: "Follow-up de propostas",
    desc: "Proposta enviada entra na planilha. Se o cliente não responde em 3 dias, lembrete automático sai. Se aprovada, o projeto já é criado. Se ignorada por 7 dias, encerrada.",
    diagramKey: "followUp",
  },
  {
    tag: "Arquitetura & Engenharia",
    title: "Relatório de obra automático",
    desc: "Formulário preenchido com fotos e andamento. Um PDF formatado é gerado a partir do template, salvo na pasta do projeto no Drive e enviado ao cliente com link público.",
    diagramKey: "relatorio",
  },
  {
    tag: "Google Workspace",
    title: "Integração do ecossistema Google",
    desc: "Um único formulário cria as 5 pastas no Drive, registra o projeto no Sheets, envia e-mail de boas-vindas ao cliente e ativa o trigger do resumo semanal.",
    diagramKey: "ecossistema",
  },
  {
    tag: "Segurança & Continuidade",
    title: "Backup automático na nuvem",
    desc: "Os arquivos da pasta do computador são sincronizados sozinhos com o Google Drive. Tudo fica acessível de qualquer lugar e com histórico de versões, sem depender de ninguém copiar nada manualmente.",
    diagramKey: "backup",
  },
];