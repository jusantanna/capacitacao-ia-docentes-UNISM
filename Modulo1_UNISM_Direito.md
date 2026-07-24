# Módulo 1 — Fundamentos, Governança e Discernimento em IA Generativa
### Oficina de IA para Docentes · Curso de Direito · UNISM
**Foco do módulo: segurança e governança** (sigilo profissional, LGPD, risco de alucinação em pesquisa jurídica)
**Tempo sugerido: ~45 minutos**

---

## PARTE 1 — CONTEÚDO DO MÓDULO
*(material de apoio / apostila — base para os slides)*

### 1. O que é IA generativa, aplicada ao Direito

IA generativa é a categoria de inteligência artificial capaz de criar conteúdo original — texto, principalmente — a partir de um comando (prompt) em linguagem natural. Diferente de uma busca tradicional, que localiza algo que já existe, a IA generativa produz uma resposta nova a cada interação, prevendo palavra por palavra a continuação mais provável para o texto.

Para a rotina de quem ensina Direito, isso já aparece em tarefas como: rascunhar uma questão de prova a partir de um tema, resumir uma decisão longa, sugerir uma estrutura de aula sobre um instituto jurídico, ou dar um primeiro parecer sobre a redação de uma peça de aluno. O ganho está na velocidade — o que levaria horas de leitura e redação passa a levar minutos —, mas a responsabilidade sobre o conteúdo final continua sendo inteiramente do professor.

### 2. Vocabulário essencial e assistente x agente

- **Prompt:** a instrução dada à IA.
- **Alucinação:** quando a IA gera uma informação inventada com a mesma segurança de uma informação correta — tema central deste módulo.
- **Janela de contexto:** quanto texto a IA consegue "lembrar" de uma vez (inclui documentos anexados, como uma petição ou um acórdão colado na conversa).
- **RAG (Retrieval-Augmented Generation):** a IA consulta um documento fornecido por você, em vez de responder só da memória do treinamento — é o princípio por trás de anexar um PDF de uma lei ou de um acórdão à conversa.

**Assistente de IA** ("me ajude a fazer"): reativo, entrega uma sugestão e para. Exemplo: "sugira três formas de introduzir o tema de controle de constitucionalidade para uma turma que ainda não viu o assunto." O professor recebe, escolhe, decide.

**Agente de IA** ("faça por mim"): proativo, executa uma sequência de ações sem pedir aprovação a cada passo. Exemplo: "leia estes 30 arquivos de redação dos alunos e organize um relatório com os erros de argumentação mais recorrentes da turma." Hoje, no Direito, a maior parte do uso ainda é como assistente — mas essa fronteira já está mudando, e será o tema de uma próxima etapa de capacitação.

### 3. Panorama de plataformas e critérios de escolha

Claude, ChatGPT e Gemini são as três plataformas mais relevantes hoje, cada uma com um ponto forte diferente: Claude costuma se destacar em organização de contexto por disciplina e escrita cuidadosa (relevante para redigir uma minuta ou revisar a coesão de um texto); ChatGPT tem o ecossistema mais amplo e um modo de explicação passo a passo; Gemini se integra nativamente ao Google Workspace e é forte em documentos longos.

Para a rotina jurídica, três critérios pesam mais do que "qual é a melhor":
- **Proteção de dados:** a plataforma tem um plano que garante que as conversas não são usadas para treinar novos modelos?
- **Verificabilidade:** a ferramenta cita fonte de forma clara, ou entrega afirmações sem origem rastreável?
- **Curva de aprendizado:** qual delas um colega que nunca usou IA consegue começar a usar sem fricção?

O cenário muda de mês em mês — o que importa não é decorar um ranking, mas saber os critérios para reavaliar a escolha quando necessário.

### 4. Sigilo profissional e LGPD — o núcleo deste módulo

O advogado, o professor de Direito e, por extensão, a instituição de ensino lidam com informação protegida por sigilo profissional (art. 34 do Estatuto da OAB e Código de Ética da Advocacia) e com dados pessoais protegidos pela LGPD (Lei nº 13.709/2018). Usar IA generativa na rotina docente não suspende nenhuma dessas obrigações — pelo contrário, exige atenção redobrada, porque o dado inserido em uma ferramenta de IA sai do controle direto do professor.

**O que nunca deve ser inserido em uma ferramenta de IA de uso pessoal:**
- Nome de partes de um processo real, combinado a dados do caso, usado como exemplo de aula;
- Número de processo, CPF, ou qualquer identificador de cliente, aluno ou terceiro;
- Dados sensíveis (LGPD, art. 5º, II): origem racial ou étnica, convicção religiosa, opinião política, dado de saúde — inclusive quando mencionados por um aluno em contexto de acompanhamento pedagógico (ex.: laudo justificando adaptação de prova).

**Regra prática:** sempre que um caso real for usado como exemplo em aula ou em uma prova, anonimizar antes de levar à IA. Em vez de "o cliente João da Silva, no processo 0001234-56, alega que...", usar "em uma ação de indenização por dano moral, a parte autora alega que...". O conteúdo jurídico da discussão se mantém; a identificação desaparece.

Também vale registrar: a política de uso de dados de cada plataforma muda com o tempo e varia por plano contratado. O critério mais seguro é sempre verificar a política vigente antes de definir qualquer prática institucional — o que conecta com a necessidade de a UNISM discutir, como próximo passo, uma diretriz própria de uso de IA para o corpo docente.

### 5. Alucinação em pesquisa jurídica — o risco mais concreto da área

Alucinação é quando a IA gera uma informação inventada, mas apresentada com a mesma fluência e confiança de uma informação verdadeira. Em nenhuma área isso é tão perigoso quanto no Direito, onde uma citação errada tem consequência prática imediata: uma jurisprudência que não existe, um dispositivo legal citado fora de vigência, uma súmula atribuída ao tribunal errado.

**Caso real — Mata v. Avianca (EUA, 2023):** um advogado usou o ChatGPT para preparar uma petição, e a ferramenta inventou seis casos jurídicos inteiros, com nomes de juízes reais e citações que pareciam legítimas. Quando o advogado, desconfiado, perguntou à própria IA se os casos eram reais, ela confirmou que sim — também de forma alucinada. Resultado: multa de 5 mil dólares e reprimenda judicial. **O detalhe mais importante para nossa rotina: perguntar à mesma IA se ela está certa não é verificação — ela pode alucinar a confirmação com a mesma facilidade com que alucinou o erro original.**

**No Brasil, o mesmo padrão já apareceu em decisões judiciais**: mais de um caso reportado na imprensa jurídica nacional envolveu peças com jurisprudência inexistente gerada por IA, resultando em advertência disciplinar e, em alguns casos, condenação por litigância de má-fé. O risco não é hipotético nem estrangeiro.

**Sinais de alerta e prática de verificação:**
- Desconfiar do que parece bom demais: uma jurisprudência "perfeita" para o argumento, encontrada rápido demais, merece checagem redobrada.
- Pedir a fonte específica (número do processo, órgão julgador, data) e confirmar diretamente na fonte oficial (site do tribunal, sistemas de jurisprudência) antes de usar em prova, material didático ou qualquer produção acadêmica.
- Nunca aceitar uma citação de lei, súmula ou julgado sem checagem em fonte oficial — regra sem exceção para qualquer material que vá até o aluno.

### 6. Ética, autoria e responsabilidade

O princípio mais consistente entre as diretrizes que já existem em universidades brasileiras (USP, ANDIFES) e no CNPq é: **a IA nunca assina**. O raciocínio jurídico, a interpretação e a decisão final sobre o conteúdo continuam sendo do professor, mesmo quando a IA ajudou a chegar até ali.

- **Transparência:** quando um material for produzido com apoio relevante de IA (uma lista de questões, um resumo de doutrina), sinalizar isso é boa prática — o problema não é usar, é usar sem declarar.
- **Responsabilidade:** se a IA alucinou uma jurisprudência e ela chega a uma prova ou a uma apostila, a responsabilidade é de quem assinou o material, não da ferramenta. Essa é exatamente a mesma lógica que o corpo docente vai aplicar ao avaliar o uso de IA pelos próprios alunos em trabalhos e peças.

### 7. Sicofania — por que a IA tende a concordar

Sicofania é a tendência do modelo de concordar com quem pergunta, mesmo quando a posição está errada, para "soar bem" na conversa. Pesquisas mostram que modelos como GPT-4o, Claude e Gemini mudam sua resposta em cerca de 60% das vezes só porque o usuário perguntou "você tem certeza?" — mesmo quando a resposta original estava correta.

Aplicado ao Direito: se um professor já chega convencido de que uma tese está certa e pede à IA para "validar" o argumento, a tendência é a IA reforçar essa convicção, mesmo quando existe jurisprudência ou doutrina em sentido contrário. A prática mais segura: em vez de "essa tese está bem fundamentada?", perguntar "quais são os três maiores riscos ou contra-argumentos dessa tese?" — obriga o modelo a procurar falhas, não só validar.

### 8. Discernimento entre hype e tecnologia estrutural

O setor de IA lança novidade praticamente todo mês. O risco não é ficar para trás por não adotar o lançamento mais recente — é dispersar tempo perseguindo cada novidade sem critério. Uma pergunta prática antes de investir tempo aprendendo uma ferramenta nova: *isso já provou valor real e sustentado, ou ainda está só gerando expectativa?* Agentes de IA aplicados à advocacia e à docência jurídica, por exemplo, ainda estão em fase de maturação — vale acompanhar, mas não é ainda o ponto de maior retorno para investir esforço de aprendizado hoje.

---

## PARTE 2 — PROMPT PARA CLAUDE CODE
*(copie o bloco abaixo inteiro e cole no Claude Code para gerar os slides deste módulo)*

```
Na pasta do projeto estão os slides da apresentação da capacitação em IA da FADISMA.
Use essa apresentação como modelo direto para o Módulo 1 desta nova apresentação, da
capacitação em IA para os docentes do curso de Direito da UNISM.

Replique a mesma estrutura de slides da FADISMA para o Módulo 1: a mesma quantidade de
slides, a mesma sequência/lógica de progressão, o mesmo estilo visual (paleta de cores,
tipografia, layout de cada tipo de slide, ícones, blocos de destaque) e o mesmo nível de
densidade de texto por slide. Não invente uma estrutura nova — a estrutura é a da
FADISMA, adaptada.

O que muda é o conteúdo: substitua o conteúdo da FADISMA pelo conteúdo do Módulo 1 da
UNISM, descrito abaixo, mantendo o mesmo foco do módulo original — governança e segurança
no uso de IA generativa, com destaque para sigilo profissional, LGPD e o risco de
alucinação em pesquisa jurídica. Onde a FADISMA tiver um slide sobre um tópico que não
existe no conteúdo da UNISM, adapte usando o tópico mais próximo do material abaixo. Se
não encontrar os slides de referência da FADISMA na pasta, avise antes de prosseguir.

Conteúdo do Módulo 1 — UNISM (Direito):

[Cole aqui o conteúdo da Parte 1 deste documento — "PARTE 1 — CONTEÚDO DO MÓDULO"]
```
