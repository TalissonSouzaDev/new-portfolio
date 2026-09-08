export const perfil = {
  nome: 'Talisson Machado',
  cargo: 'Desenvolvedor Full Stack',
  local: 'Salvador, Bahia',
  resumo:
    'Trabalho há mais de três anos em sistemas corporativos que não podem parar: financeiro, CRM e plataformas de governo. Meu terreno é o ecossistema PHP/Laravel — microserviços, APIs REST e SOAP, integrações com serviços externos e a modernização de aplicações legadas que já estão em produção.',
  contato: {
    email: 'talissonmdsouza@gmail.com',
    telefone: '(71) 98733-7969',
    telefoneLink: '+5571987337969',
    github: 'https://github.com/TalissonSouzaDev',
    linkedin: 'https://www.linkedin.com/in/talisson-machado-tm-81a069215/'
  }
}

export const indicadores = [
  { valor: 50000, sufixo: '+', rotulo: 'usuários ativos nas plataformas de CRM e financeiro do SEBRAE Bahia' },
  { valor: 1253, sufixo: '/h', rotulo: 'notas fiscais processadas por hora na integração NF-e e NFS-e' },
  { valor: 15000, sufixo: '+', rotulo: 'credenciados atendidos após a correção do módulo legado de cadastro' },
  { valor: 3000, sufixo: '/mês', rotulo: 'documentos enviados e assinados pela integração com o DocFlow' }
]

export const experiencias = [
  {
    empresa: 'Cast Group — SEBRAE Bahia',
    cargo: 'Desenvolvedor Full Stack',
    periodo: 'Mai/2025 — atual',
    vinculo: 'CLT · Salvador, BA',
    atual: true,
    itens: [
      'Times de CRM e GFS, o sistema financeiro do SEBRAE Bahia, com mais de 50.000 usuários internos e externos.',
      'Aditivo contratual: passei a permitir a inclusão de agendas, projetos, ações e gestores responsáveis em contratos já vigentes.',
      'Apostilamento: correção de itinerários, textos e troca de profissionais nos contratos sem exigir aditivo formal.',
      'Recuperei o módulo legado de cadastro de credenciados, que atende mais de 15.000 credenciados ativos.',
      'Integrei o CRM ao DocFlow, de assinatura digital, automatizando mais de 3.000 documentos por mês.',
      'No GFS, integrei o serviço nacional de NF-e e NFS-e com baixa automática e leitura em tempo real, além da API do IBGE para enriquecer estado, cidade e região das empresas emissoras.'
    ],
    stack: ['PHP', 'Laravel', 'Lumen', 'Vue.js', 'Docker', 'MySQL', 'SQL Server']
  },
  {
    empresa: 'Jobifull',
    cargo: 'Tech Leader',
    periodo: 'Out/2024 — Mai/2025',
    vinculo: 'Freelance · Remoto',
    itens: [
      'Conduzi os times de backend e frontend, distribuindo demandas por Trello e Kanban e definindo prazos.',
      'Revisei pull requests para manter o padrão de qualidade do código e administrei o servidor de deploy.'
    ],
    stack: ['Liderança técnica', 'Code review', 'Kanban']
  },
  {
    empresa: 'WS Soluções — Prefeitura de Salvador (SEMDEC)',
    cargo: 'Analista e Programador',
    periodo: 'Jul/2022 — Mai/2025',
    vinculo: 'CLT · Salvador, BA',
    itens: [
      'Desenvolvi e customizei os sistemas SGETI e SGCHA, usados por mais de 200 servidores municipais.',
      'Entreguei novas funcionalidades e otimizações de desempenho que reduziram o tempo de resposta das telas mais usadas.'
    ],
    stack: ['Laravel', 'jQuery', 'Bootstrap', 'MySQL']
  },
  {
    empresa: 'Acto',
    cargo: 'Analista de Sistemas',
    periodo: 'Set/2024 — Fev/2025',
    vinculo: 'Freelance · Remoto',
    itens: [
      'Migrei servidores Active Directory e cuidei dos serviços de rede — impressão, arquivos e DHCP — junto à Cogel, Qualycopy e SEMIT.',
      'Criei e administrei os containers Docker de dois sistemas críticos em PHP e MySQL, com foco em estabilidade e segurança.'
    ],
    stack: ['Active Directory', 'Docker', 'Linux', 'PHP']
  },
  {
    empresa: 'Datasys Consultoria',
    cargo: 'Programador PHP',
    periodo: 'Fev/2024 — Mai/2024',
    vinculo: 'Freelance · Remoto',
    itens: [
      'Desenvolvi funcionalidades e mantive sistemas em Laravel com PostgreSQL, MongoDB e Redis.',
      'Desenhei soluções escaláveis acompanhadas de testes e ajustes para segurar a operação em produção.'
    ],
    stack: ['Laravel', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker']
  }
]

export const stack = [
  { area: 'Backend', itens: ['PHP', 'Laravel', 'Lumen', 'Node.js'] },
  { area: 'Frontend', itens: ['JavaScript', 'Vue.js', 'React', 'jQuery'] },
  { area: 'Mobile', itens: ['Dart', 'Flutter'] },
  { area: 'Dados', itens: ['MySQL', 'PostgreSQL', 'SQL Server', 'MongoDB', 'Redis'] },
  { area: 'Infra', itens: ['Docker', 'Linux', 'Amazon S3', 'Git'] },
  { area: 'Processo', itens: ['Scrum', 'Kanban', 'Code review'] }
]

export const formacao = [
  { curso: 'Pós-graduação em Arquitetura de Soluções', instituicao: 'Anhanguera', periodo: '2023 — 2024' },
  { curso: 'Pós-graduação em BI, Big Data e Analytics', instituicao: 'Anhanguera', periodo: '2023 — 2024' },
  { curso: 'Técnico em Programação Web', instituicao: 'SENAI', periodo: '2023 — 2024' },
  { curso: 'Análise e Desenvolvimento de Sistemas', instituicao: 'Unime', periodo: '2021 — 2022' }
]

export const projetos = [
  {
    nome: 'Gestão de Equipamento',
    descricao: 'Sistema para gerenciamento de equipamentos corporativos',
    url: 'https://github.com/TalissonSouzaDev/Gestao-de-equipamento',
    stack: ['Laravel', 'PHP', 'MySQL']
  },
  {
    nome: 'Classificação de Fornecedores',
    descricao: 'Plataforma de análise e classificação de fornecedores',
    url: 'https://github.com/TalissonSouzaDev/classificacao_de_fornecedores',
    stack: ['Laravel', 'PHP', 'MySQL']
  },
  {
    nome: 'Gerenciar Lugares',
    descricao: 'Aplicação para gerenciamento de localidades e endereços',
    url: 'https://github.com/TalissonSouzaDev/gerenciar_lugares',
    stack: ['Laravel', 'PHP', 'Vue.js']
  },
  {
    nome: 'Laravel ETL Excel',
    descricao: 'Solução de ETL para importação e processamento de dados em Excel',
    url: 'https://github.com/TalissonSouzaDev/laravel_etl_excel',
    stack: ['Laravel', 'PHP', 'Excel']
  },
  {
    nome: 'Projeto Venda Bar',
    descricao: 'Sistema de vendas e gestão para bares e restaurantes',
    url: 'https://github.com/TalissonSouzaDev/Projeto_venda_bar',
    stack: ['Laravel', 'PHP', 'MySQL', 'Vue.js']
  }
]
