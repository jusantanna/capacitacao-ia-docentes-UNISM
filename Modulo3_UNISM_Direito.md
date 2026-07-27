# Módulo 3 — Produtividade com IA
### Oficina de IA para Docentes · Curso de Direito · UNISM
**Foco do módulo: portfólio de ferramentas por categoria + demonstração prática de Claude Code**
**Tempo sugerido: ~35 minutos**

---

## PARTE 1 — CONTEÚDO DO MÓDULO
*(material de apoio / apostila — base para os slides)*

### 1. Mapeamento de tarefas docentes em Direito com maior potencial de ganho

Preparação de aula e correção de peças/trabalhos são, de forma consistente, as duas tarefas que mais consomem tempo na rotina docente — e a segunda costuma ser a menos explorada com apoio de IA, exatamente por exigir mais critério humano. Três perguntas ajudam a identificar onde vale priorizar:

- **Volume e repetição:** corrigir 30 peças, responder dúvidas parecidas de alunos diferentes — quanto mais a tarefa se repete, maior o ganho acumulado.
- **Estrutura reconhecível:** uma rubrica de correção, um modelo de plano de aula — tarefas com formato mais previsível são mais fáceis de instruir bem (conecta com o Módulo 2).
- **Tempo desproporcional ao valor pedagógico:** formatar um documento, organizar referências de jurisprudência — tarefas mais operacionais que decisórias tendem a ter o maior retorno quando delegadas.

| Categoria | Exemplo de tarefa | Potencial de ganho |
|---|---|---|
| Preparação de aula | Planos de aula, casos hipotéticos, slides | Alto |
| Correção | Peças, pareceres, provas dissertativas | Alto, porém pouco explorado |
| Pesquisa jurisprudencial | Localizar, organizar e sintetizar julgados | Alto, ganho mensurável já nas etapas iniciais |
| Orientação de alunos | TCC, dúvidas recorrentes | Médio, exige mais critério humano |
| Gestão acadêmica | Atas, relatórios, formatação de documentos | Alto, tarefa mais operacional que pedagógica |

### 2. Portfólio de ferramentas por categoria

**Pesquisa e busca de informação**

| Ferramenta | Descrição | Aplicação na rotina jurídica |
|---|---|---|
| **Perplexity AI** | Buscador conversacional que responde com fontes citadas em tempo real | Levantar rapidamente o estado atual de uma discussão doutrinária ou legislativa para atualizar uma aula, sempre checando a fonte original antes de repassar aos alunos |
| **NotebookLM** | Organiza fontes de estudo (leis, doutrina, jurisprudência) em um espaço único, respondendo com citação exata do trecho de origem | Reunir a bibliografia e os julgados de referência de uma disciplina e gerar, a partir deles, um guia de estudo ou um resumo em áudio de revisão antes da prova |

*Observação: para pesquisa jurisprudencial em si (localizar o julgado, o número do processo, a íntegra da decisão), a IA de propósito geral deve ser usada como apoio à síntese, nunca como fonte primária — a consulta segue sendo feita nas bases oficiais e nas plataformas de pesquisa jurídica já usadas pela instituição (sites dos tribunais, bases de jurisprudência assinadas). Esse é exatamente o motivo da regra de ancoragem vista no Módulo 2.*

**Transcrição e resumo**

| Ferramenta | Descrição | Aplicação na rotina jurídica |
|---|---|---|
| **TL;DV** | Transcrição e resumo automático de reuniões, aulas e bancas gravadas, com identificação de quem falou cada trecho | Gravar e transcrever automaticamente uma banca de TCC, uma audiência simulada ou uma reunião de colegiado, gerando resumo pronto dos encaminhamentos |

**Apresentações e design**

| Ferramenta | Descrição | Aplicação na rotina jurídica |
|---|---|---|
| **Gamma** | Transforma um texto pronto em uma apresentação completa em segundos | Transformar um texto de aula já escrito, ou um capítulo de doutrina, em slides formatados para depois ajustar o conteúdo pedagogicamente |
| **Canva (Magic Design / Magic Write)** | Plataforma de design ampla, com Canva for Education gratuito para professores | Slides de aula e também materiais visuais de apoio (linhas do tempo de um instituto jurídico, fluxogramas de rito processual) |

**Organização e produtividade**

| Ferramenta | Descrição | Aplicação na rotina jurídica |
|---|---|---|
| **Notion AI** | Organização de planejamento de aulas, tarefas e escrita acadêmica assistida, com busca citando a página de origem | Organizar em um único espaço o planejamento de todas as turmas do semestre, com respostas cruzando informações de vários materiais ao mesmo tempo |
| **Mind Map Wizard** | Gera mapa mental visual a partir de um tema ou texto colado, gratuito e sem cadastro | Transformar um instituto jurídico extenso (ex.: teoria geral dos contratos) em mapa mental para revisão dos alunos antes da prova |

**Apoio individualizado a alunos**

| Ferramenta | Descrição | Aplicação na rotina jurídica |
|---|---|---|
| **TutorAI** | Tutoria individualizada, adapta explicação ao ritmo de quem pergunta, disponível a qualquer hora | Reforço de conteúdo para dúvidas recorrentes e básicas fora do horário de atendimento, liberando o tempo do professor para dúvidas mais complexas |

*Limite importante: se a dificuldade do aluno é falta de motivação, não de conteúdo, nenhuma ferramenta de IA substitui o acompanhamento humano do professor — a causa está na relação, não no conteúdo.*

### 3. Critérios para escolher a ferramenta certa

- **Tipo de tarefa:** volte ao mapeamento acima — uma tarefa de alto volume (corrigir 30 peças) justifica investir tempo aprendendo uma ferramenta nova; uma tarefa pontual não justifica o mesmo esforço.
- **Frequência de uso:** ferramentas pagas só compensam com uso recorrente ao longo do semestre; para necessidade pontual, a versão gratuita ou o próprio Claude/ChatGPT/Gemini resolve.
- **Proteção de dados:** o mesmo cuidado do Módulo 1 se aplica — e ainda mais, porque ferramentas de terceiros nem sempre têm o mesmo nível de contrato institucional. Nunca inserir dado identificável de aluno ou de parte de processo real em nenhuma delas sem checar a política vigente.
- **Integração com o que a UNISM já usa:** antes de adotar algo novo, verificar se o que já está disponível (Google Workspace, Microsoft 365, o próprio Claude) já resolve a tarefa.

### 4. Demonstração prática: Claude Code na rotina docente

Claude Code costuma ser associado a programação, mas o que ele faz, na prática, é executar tarefas sobre arquivos e dados de forma automatizada, a partir de uma instrução em português — o que abre um uso direto para tarefas repetitivas e operacionais da rotina docente, sem exigir conhecimento técnico prévio.

**Cenário de demonstração ao vivo:** organizar uma lista bagunçada de ementas de acórdãos (coletadas ao longo do semestre, em formatos inconsistentes — alguns com data, outros sem; alguns com número de processo completo, outros abreviados) em uma tabela padronizada, pronta para anexar a um material de aula ou a uma lista de referências.

**Roteiro sugerido para a demonstração:**
1. Mostrar o arquivo de entrada: uma lista de 15 a 20 ementas coladas sem padrão nenhum (dados fictícios, sem qualquer informação real de processo).
2. Pedir ao Claude Code, em linguagem natural: *"organize esta lista em uma tabela com as colunas Tribunal, Órgão Julgador, Data, Número do Processo e Tema, mantendo a ordem cronológica."*
3. Mostrar o resultado gerado em segundos — uma tabela limpa, pronta para uso.
4. Fechar com a reflexão: o ganho aqui não é "a IA pensando pelo professor" — é a IA fazendo o trabalho braçal de formatação que consome tempo desproporcional ao valor pedagógico (o mesmo critério visto no início deste módulo), liberando o professor para revisar o conteúdo, não a formatação.

*Outros cenários possíveis para adaptar a demonstração, conforme o tempo disponível: gerar automaticamente um banco de questões a partir de um PDF de slides de aula; consolidar notas de várias planilhas de turmas diferentes em um único relatório.*

### 5. Elaboração de plano individual de aplicação

Fechar a oficina com cada docente anotando, em uma linha, uma tarefa concreta da própria rotina que pretende testar com IA nas próximas semanas — de preferência conectando: (1) uma tarefa mapeada no início deste módulo, (2) uma técnica de prompt do Módulo 2, e (3) uma ferramenta ou o Claude Code, quando fizer sentido.

---

## PARTE 2 — PROMPT PARA CLAUDE CODE
*(copie o bloco abaixo inteiro e cole no Claude Code para gerar os slides deste módulo)*

```
Esta é uma continuação do mesmo projeto de apresentação. Os Módulos 1 e 2 já estão
prontos, dentro da pasta de apresentação deste projeto. Construa o Módulo 3 como
continuação direta dessa mesma apresentação, na mesma pasta de apresentação — não uma
apresentação nova e separada.

Antes de criar qualquer slide, abra e analise os slides dos Módulos 1 e 2 já existentes
nessa pasta. Replique fielmente o mesmo estilo visual (paleta de cores, tipografia,
layout de cada tipo de slide, ícones, blocos de destaque, tratamento de tabelas e o
destaque visual de bloco de código/citação já usado para os exemplos de prompt) e o
mesmo nível de densidade de texto por slide. O Módulo 3 precisa parecer parte da mesma
apresentação dos Módulos 1 e 2, não uma peça à parte.

O foco deste módulo é prático: portfólio de ferramentas de IA por categoria de tarefa
docente e uma demonstração de Claude Code (o Módulo 1 teve foco em governança e
segurança, o Módulo 2 em engenharia de prompt aplicada ao Direito; este módulo assume
que a plateia já viu os dois). Use as tabelas de ferramentas fornecidas abaixo tal como
estão — não adicione ferramentas que não estejam listadas. Inclua um slide de transição
antes da demonstração de Claude Code deixando claro que não é preciso saber programar
para acompanhar, e um slide reproduzindo o cenário e o prompt da demonstração ao vivo.
Encerre com o slide de plano individual de aplicação e o slide de encerramento da
oficina (recapitulação dos 3 módulos + contato de Júlia Sant'Anna).

Adicione os slides do Módulo 3 na pasta de apresentação existente, continuando a
numeração/sequência a partir de onde o Módulo 2 terminou.

Conteúdo do Módulo 3 — UNISM (Direito):

[Cole aqui o conteúdo da Parte 1 deste documento — "PARTE 1 — CONTEÚDO DO MÓDULO"]
```
