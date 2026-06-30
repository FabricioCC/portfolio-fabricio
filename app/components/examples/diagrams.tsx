const FONT = "ui-sans-serif, system-ui, -apple-system, sans-serif";

const COLOR = {
  bg: "#0a1e28",
  iconBg: "#0f2a35",
  title: "#f4f7f6",
  subtitle: "#9fb5b1",
  faint: "#587a76",
  teal: "#3fc7b8",
  green: "#5cb88a",
  amber: "#e8a838",
  slate: "#7a9aa0",
};

type IconType =
  | "document"
  | "folder"
  | "envelope"
  | "clock"
  | "check"
  | "bolt"
  | "camera"
  | "bell"
  | "sheet"
  | "form"
  | "cloud"
  | "computer";

function Icon({ type, cx, cy, color }: { type: IconType; cx: number; cy: number; color: string }) {
  const t = `translate(${cx - 12},${cy - 12})`;
  switch (type) {
    case "document":
      return (
        <g transform={t}>
          <rect x="3" y="1.5" width="15" height="21" rx="2.2" fill="none" stroke={color} strokeWidth="1.4" />
          <path d="M6.5 8h8M6.5 12h8M6.5 16h5.5" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
        </g>
      );
    case "folder":
      return (
        <g transform={t}>
          <path
            d="M2 6.2c0-1 .8-1.8 1.8-1.8h5l1.8 2.4h9.4c1 0 1.8.8 1.8 1.8v9.6c0 1-.8 1.8-1.8 1.8H3.8C2.8 20 2 19.2 2 18.2V6.2z"
            fill="none"
            stroke={color}
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </g>
      );
    case "envelope":
      return (
        <g transform={t}>
          <rect x="1.5" y="4.5" width="21" height="15" rx="2.2" fill="none" stroke={color} strokeWidth="1.4" />
          <path d="M2.5 6l9.5 7.5L21.5 6" fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      );
    case "clock":
      return (
        <g transform={t}>
          <circle cx="12" cy="12" r="9.5" fill="none" stroke={color} strokeWidth="1.4" />
          <path d="M12 6.5V12l4.5 2.6" fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      );
    case "check":
      return (
        <g transform={t}>
          <circle cx="12" cy="12" r="9.5" fill="none" stroke={color} strokeWidth="1.4" />
          <path d="M7.5 12.5l3 3 6-6.5" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      );
    case "bolt":
      return (
        <g transform={t}>
          <path d="M13.5 1.5L4 14h6l-1.5 8.5L20 9h-6.5l0-7.5z" fill={color} stroke="none" />
        </g>
      );
    case "camera":
      return (
        <g transform={t}>
          <rect x="1.5" y="6.5" width="21" height="14.5" rx="2.4" fill="none" stroke={color} strokeWidth="1.4" />
          <path d="M8 6.5l1.4-2.8h5.2L16 6.5" fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="13.8" r="4.4" fill="none" stroke={color} strokeWidth="1.4" />
        </g>
      );
    case "bell":
      return (
        <g transform={t}>
          <path
            d="M12 3a5.2 5.2 0 00-5.2 5.2v3.6L4.7 15.6h14.6L17.2 11.8V8.2A5.2 5.2 0 0012 3z"
            fill="none"
            stroke={color}
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          <path d="M9.8 18.3a2.2 2.2 0 004.4 0" fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
        </g>
      );
    case "sheet":
      return (
        <g transform={t}>
          <rect x="2" y="3" width="20" height="18" rx="2.2" fill="none" stroke={color} strokeWidth="1.4" />
          <path d="M2 9h20M2 15h20M9 3v18M15.5 3v18" stroke={color} strokeWidth="1" />
        </g>
      );
    case "form":
      return (
        <g transform={t}>
          <rect x="3" y="1.5" width="18" height="21" rx="2.2" fill="none" stroke={color} strokeWidth="1.4" />
          <rect x="6.2" y="6.6" width="3" height="3" rx="0.6" fill="none" stroke={color} strokeWidth="1.2" />
          <path d="M6.9 8.1l.7.7 1.3-1.4" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11.5 8.1h6.5" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
          <rect x="6.2" y="12.6" width="3" height="3" rx="0.6" fill="none" stroke={color} strokeWidth="1.2" />
          <path d="M6.9 14.1l.7.7 1.3-1.4" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11.5 14.1h6.5" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
          <path d="M6.2 19.4h11.8" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
        </g>
      );
    case "cloud":
      return (
        <g transform={t}>
          <path
            d="M7.2 17.5a4.3 4.3 0 01-.6-8.55A5.4 5.4 0 0117.3 9.9a3.85 3.85 0 01-.6 7.6H7.2z"
            fill="none"
            stroke={color}
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </g>
      );
    case "computer":
      return (
        <g transform={t}>
          <rect x="2" y="3.5" width="20" height="13.5" rx="1.8" fill="none" stroke={color} strokeWidth="1.4" />
          <path d="M9 20.5h6M12 17v3.5" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
        </g>
      );
  }
}

function StepBox({
  x,
  y,
  w,
  h,
  icon,
  title,
  lines,
  accent = COLOR.teal,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  icon: IconType;
  title: string;
  lines: string[];
  accent?: string;
}) {
  const iconCx = x + 38;
  const iconCy = y + h / 2;
  const textX = x + 70;
  const firstLineY = lines.length > 1 ? y + h / 2 - 8 : y + h / 2 - 2;

  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="16" fill={COLOR.bg} stroke={accent} strokeOpacity="0.55" strokeWidth="1.3" />
      <circle cx={iconCx} cy={iconCy} r="22" fill={COLOR.iconBg} />
      <Icon type={icon} cx={iconCx} cy={iconCy} color={accent} />
      <text x={textX} y={firstLineY} fill={COLOR.title} fontSize="15" fontFamily={FONT} fontWeight={600}>
        {title}
      </text>
      {lines.map((line, i) => (
        <text key={i} x={textX} y={firstLineY + 19 + i * 16} fill={COLOR.subtitle} fontSize="12.5" fontFamily={FONT}>
          {line}
        </text>
      ))}
    </g>
  );
}

function StraightArrow({ x1, y1, x2, y2, color = COLOR.teal }: { x1: number; y1: number; x2: number; y2: number; color?: string }) {
  // só usado para setas verticais retas
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="1.5" />
      <polygon points={`${x2 - 4},${y2 - 8} ${x2 + 4},${y2 - 8} ${x2},${y2}`} fill={color} />
    </g>
  );
}

function BranchArrow({ from, to, color, label }: { from: [number, number]; to: [number, number]; color: string; label?: string }) {
  const [x1, y1] = from;
  const [x2, y2] = to;
  const midY = y1 + (y2 - y1) * 0.55;
  return (
    <g>
      <path d={`M${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2 - 8}`} fill="none" stroke={color} strokeWidth="1.5" />
      <polygon points={`${x2 - 4},${y2 - 8} ${x2 + 4},${y2 - 8} ${x2},${y2}`} fill={color} />
      {label && (
        <text x={(x1 + x2) / 2} y={midY - 6} textAnchor="middle" fill={color} fontSize="12" fontFamily={FONT} fontWeight={600}>
          {label}
        </text>
      )}
    </g>
  );
}

export function DiagramFollowUp() {
  return (
    <svg viewBox="0 0 680 480" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <StepBox
        x={190}
        y={20}
        w={300}
        h={72}
        icon="document"
        title="Proposta enviada"
        lines={["o cliente recebe o orçamento"]}
      />
      <StraightArrow x1={340} y1={92} x2={340} y2={128} />

      <StepBox
        x={190}
        y={128}
        w={300}
        h={72}
        icon="clock"
        title="O sistema acompanha"
        lines={["verifica todo dia se o cliente respondeu"]}
      />

      <BranchArrow from={[290, 200]} to={[170, 270]} color={COLOR.amber} label="não respondeu" />
      <BranchArrow from={[390, 200]} to={[510, 270]} color={COLOR.green} label="aprovou" />

      <StepBox
        x={20}
        y={270}
        w={300}
        h={84}
        icon="envelope"
        title="Lembrete automático"
        lines={["se não responder em 3 dias,", "um e-mail é enviado sozinho"]}
        accent={COLOR.amber}
      />
      <StepBox
        x={360}
        y={270}
        w={300}
        h={84}
        icon="check"
        title="Projeto criado"
        lines={["quando o cliente aprova,", "as pastas já nascem prontas"]}
        accent={COLOR.green}
      />

      <StraightArrow x1={170} y1={354} x2={170} y2={388} color={COLOR.slate} />
      <StepBox
        x={20}
        y={388}
        w={300}
        h={72}
        icon="clock"
        title="Depois de 7 dias"
        lines={["sem resposta, a proposta é encerrada"]}
        accent={COLOR.slate}
      />
    </svg>
  );
}

export function DiagramRelatorio() {
  return (
    <svg viewBox="0 0 680 460" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <StepBox
        x={190}
        y={20}
        w={300}
        h={72}
        icon="camera"
        title="Fotos da obra"
        lines={["enviadas direto do celular"]}
      />
      <StraightArrow x1={340} y1={92} x2={340} y2={128} />

      <StepBox
        x={190}
        y={128}
        w={300}
        h={72}
        icon="bolt"
        title="O sistema monta o relatório"
        lines={["usa o modelo do escritório, sozinho"]}
      />
      <StraightArrow x1={340} y1={200} x2={340} y2={236} />

      <StepBox
        x={190}
        y={236}
        w={300}
        h={72}
        icon="document"
        title="PDF pronto"
        lines={["com fotos, texto e a cara do escritório"]}
      />

      <BranchArrow from={[290, 308]} to={[170, 360]} color={COLOR.green} />
      <BranchArrow from={[390, 308]} to={[510, 360]} color={COLOR.green} />

      <StepBox
        x={20}
        y={360}
        w={300}
        h={80}
        icon="folder"
        title="Salvo no Drive"
        lines={["guardado direto na pasta do projeto"]}
        accent={COLOR.green}
      />
      <StepBox
        x={360}
        y={360}
        w={300}
        h={80}
        icon="envelope"
        title="Enviado ao cliente"
        lines={["e-mail automático com o PDF anexado"]}
        accent={COLOR.green}
      />
    </svg>
  );
}

export function DiagramEcossistema() {
  const rowH = 64;
  const gap = 14;
  const rowX = 20;
  const rowW = 640;
  const firstRowY = 150;

  const rows: { icon: IconType; title: string; line: string }[] = [
    { icon: "folder", title: "5 pastas organizadas no Drive", line: "criadas automaticamente, sem trabalho manual" },
    { icon: "sheet", title: "Planilha atualizada", line: "o projeto entra na lista do escritório na hora" },
    { icon: "envelope", title: "E-mail de boas-vindas", line: "o cliente já recebe o link das pastas" },
    { icon: "bell", title: "Lembrete semanal", line: "todo domingo, um resumo chega para você" },
  ];

  return (
    <svg viewBox="0 0 680 470" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <StepBox
        x={190}
        y={20}
        w={300}
        h={72}
        icon="form"
        title="Você preenche um formulário"
        lines={["nome do cliente e tipo de projeto"]}
      />
      <StraightArrow x1={340} y1={92} x2={340} y2={120} />
      <text x={340} y={136} textAnchor="middle" fill={COLOR.faint} fontSize="12" fontFamily={FONT}>
        tudo abaixo acontece sozinho, na hora:
      </text>

      {rows.map((row, i) => {
        const y = firstRowY + i * (rowH + gap);
        return (
          <g key={row.title}>
            {i > 0 && <StraightArrow x1={rowX + 38} y1={y - gap} x2={rowX + 38} y2={y} color={COLOR.faint} />}
            <StepBox
              x={rowX}
              y={y}
              w={rowW}
              h={rowH}
              icon={row.icon}
              title={row.title}
              lines={[row.line]}
              accent={COLOR.green}
            />
          </g>
        );
      })}
    </svg>
  );
}

export function DiagramBackup() {
  return (
    <svg viewBox="0 0 680 460" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <StepBox
        x={190}
        y={20}
        w={300}
        h={72}
        icon="computer"
        title="Pasta no seu computador"
        lines={["onde você já trabalha, sem mudar nada"]}
      />
      <StraightArrow x1={340} y1={92} x2={340} y2={128} />

      <StepBox
        x={190}
        y={128}
        w={300}
        h={72}
        icon="bolt"
        title="Sincronização automática"
        lines={["todo arquivo novo ou alterado ", "é enviado sozinho"]}
      />
      <StraightArrow x1={340} y1={200} x2={340} y2={236} />

      <StepBox
        x={190}
        y={236}
        w={300}
        h={72}
        icon="cloud"
        title="Cópia segura no Google Drive"
        lines={["sempre atualizada, em tempo real"]}
      />

      <BranchArrow from={[290, 308]} to={[170, 360]} color={COLOR.green} />
      <BranchArrow from={[390, 308]} to={[510, 360]} color={COLOR.green} />

      <StepBox
        x={20}
        y={360}
        w={300}
        h={80}
        icon="check"
        title="Acesso de qualquer lugar"
        lines={["computador, celular, outro escritório"]}
        accent={COLOR.green}
      />
      <StepBox
        x={360}
        y={360}
        w={300}
        h={80}
        icon="clock"
        title="Histórico de versões"
        lines={["dá pra recuperar arquivos apagados", "ou substituídos por engano"]}
        accent={COLOR.green}
      />
    </svg>
  );
}