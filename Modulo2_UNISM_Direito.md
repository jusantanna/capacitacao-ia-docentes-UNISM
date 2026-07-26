# Módulo 2 — Engenharia de Prompt
### Oficina de IA para Docentes · Curso de Direito · UNISM
**Foco do módulo: eixo principal da oficina — exemplos e exercícios práticos aplicados ao Direito**
**Tempo sugerido: ~100 minutos (maior fatia da oficina)**

---

## PARTE 1 — CONTEÚDO DO MÓDULO
*(material de apoio / apostila — base para os slides)*

### 1. O que é engenharia de prompt e por que a interação determina o resultado

Engenharia de prompt é a disciplina que estuda como estruturar instruções para modelos de linguagem, para que eles entreguem respostas melhores e mais alinhadas ao objetivo de quem pergunta. Não é "pedir educadamente" — é entender que o modelo prevê, estatisticamente, qual é a continuação mais provável para o que foi digitado. Um prompt vago tende a levar a um caminho genérico; um prompt bem estruturado direciona o modelo para um caminho específico, alinhado à sua necessidade.

**Um amplificador de expertise, não um substituto.** Engenharia de prompt não substitui o domínio jurídico do professor — ela amplifica esse domínio. Um professor que já sabe exatamente que tipo de questão quer para avaliar raciocínio jurídico aplicado, e não só memorização, consegue extrair da IA um resultado muito mais preciso do que alguém sem esse critério, porque sabe traduzir esse critério em instrução clara.

### 2. Anatomia de um prompt eficaz

Cinco elementos transformam um pedido vago em uma instrução precisa:

| Elemento | Pergunta que responde |
|---|---|
| **Persona** | Quem a IA deve "ser" ao responder? |
| **Contexto** | Qual o cenário, a turma, o material já visto? |
| **Instrução** | Qual é a tarefa exata? |
| **Restrição** | O que não fazer, que limites respeitar? |
| **Saída** | Em que formato a resposta deve vir? |

**Amador (a pergunta):**
> "Crie uma questão de prova sobre responsabilidade civil objetiva."
> *Resultado: genérico — o tipo de questão que aparece em qualquer banco de questões pronto, sem relação com o que foi discutido em aula.*

**Profissional (o briefing):**
> [PERSONA] Atue como um professor de Direito Civil com experiência em avaliações que
> exigem raciocínio jurídico aplicado, não só memorização de conceito.
>
> [CONTEXTO] Turma do 4º semestre, já estudou responsabilidade civil subjetiva e objetiva
> e discutiu em aula um julgado do STJ sobre responsabilidade do fornecedor por acidente
> de consumo.
>
> [INSTRUÇÃO] Elabore uma questão discursiva com um caso hipotético inédito, pedindo ao
> aluno para identificar o regime de responsabilidade aplicável, justificando com base
> nos conceitos vistos em aula.
>
> [RESTRIÇÃO] Não repetir o caso discutido em aula. Enunciado com no máximo 15 linhas.
>
> [SAÍDA] Apresente o enunciado da questão e, em seguida, um gabarito comentado com os
> pontos que uma resposta nota máxima precisa conter.

A anatomia serve como checklist, não como fórmula fixa — nem todo prompt do dia a dia precisa dos cinco elementos ao mesmo tempo, mas quanto mais específico o resultado esperado, mais vale tornar cada um deles explícito.

### 3. Noções mínimas de como o modelo processa a resposta

O modelo não lê como uma pessoa lê: converte o texto em tokens, calcula pesos de relevância entre eles (mecanismo de atenção) e prevê a próxima palavra mais provável. Uma consequência prática: colocar a instrução mais importante no início ou no fim do prompt (não no meio de um parágrafo longo) e, para tarefas complexas, permitir que o modelo "raciocine" antes de responder, em vez de pedir só a resposta final — o que leva diretamente à próxima técnica.

### 4. Zero-shot e Few-shot

**Zero-shot** é dar apenas a instrução, sem exemplo — funciona para tarefas simples. *"Resuma esta ementa em três frases."*

**Few-shot** é incluir de 2 a 5 exemplos de entrada e saída antes de pedir o caso novo — ideal quando o formato ou o critério esperado é específico demais para descrever só com palavras.

**Exemplo aplicado — padronizar comentários de correção de peça:**
```
Você é um assistente que comenta peças processuais de alunos seguindo os meus critérios.

Exemplos:
Trecho: "O aluno identificou corretamente o rito, mas não fundamentou o pedido liminar."
Comentário: "Bom domínio do rito processual. Atenção: o pedido liminar precisa de
fundamentação própria, não basta mencionar a urgência."

Trecho: "Faltou qualificação completa das partes."
Comentário: "Revisar a qualificação das partes — item obrigatório na petição inicial,
mesmo em exercício simulado."

Agora comente o trecho que vou enviar, no mesmo padrão.
```
*Útil para manter o mesmo critério de correção ao longo de uma turma inteira de peças simuladas.*

### 5. Chain-of-thought (raciocínio passo a passo)

Pedir que o modelo exponha o raciocínio antes da conclusão reduz a chance de uma resposta rasa ou precipitada — o raciocínio intermediário passa a fazer parte do que influencia a resposta final.

**Exemplo — analisar uma decisão estratégica pedagógica:**
```
Estou pensando em substituir a prova dissertativa final por uma simulação de audiência
nesta disciplina.

Divida isso passo a passo:
1. Vantagens pedagógicas dessa mudança
2. Riscos e desafios de implementação
3. Como isso afetaria os critérios de avaliação
4. Recomendação final, considerando o perfil da turma
```

**Exemplo — investigar um erro recorrente da turma:**
```
Nas últimas três provas, a maioria da turma errou a mesma questão sobre prescrição e
decadência.

Faça o diagnóstico de forma sistemática:
- Qual é o desempenho esperado vs. o desempenho real?
- Em que ponto do raciocínio o erro parece acontecer?
- Quais são as causas mais prováveis (explicação em aula, material, formulação da
  questão)?
- Qual é a correção mais eficiente agora?
```

### 6. Role prompting (definição de papel)

Definir um papel específico para a IA direciona a resposta para o vocabulário e a lógica daquela expertise. Quanto mais específico o papel — não "especialista", e sim "avaliador de banca examinadora especializado em argumentação jurídica" —, melhor o resultado.

**Papéis por tipo de tarefa docente em Direito:**
- Preparação de aula: *"Aja como um professor sênior de Direito Processual Civil, com anos de experiência ensinando recursos para alunos que ainda não têm essa base."*
- Correção: *"Aja como um avaliador de banca examinadora rigoroso, mas justo, especializado em avaliar fundamentação jurídica e técnica de redação de peças, não só memorização de artigo de lei."*
- Pesquisa: *"Aja como um orientador de TCC experiente, especializado em ajudar o aluno a delimitar um problema de pesquisa jurídica viável."*
- Orientação: *"Aja como um orientador acadêmico especializado em identificar sinais precoces de dificuldade de aprendizagem em raciocínio jurídico."*

### 7. Decomposição de tarefas

Diferente do chain-of-thought (raciocínio dentro de uma resposta), decomposição quebra um problema grande em partes menores, resolvidas em etapas — útil quando a tarefa é grande demais para caber em um único pedido.

**Exemplo — reformular a ementa de uma disciplina:**
```
Quero reformular por completo a ementa de Direito do Consumidor, hoje desatualizada em
relação às mudanças recentes na legislação.

Antes de montar o plano, decomponha em:
1. Fase de diagnóstico (o que está desatualizado e por quê)
2. Fase de planejamento (novo conteúdo programático)
3. Fase de execução (elaboração de plano de ensino e materiais)
4. Fase de validação (alinhamento com o NDE e o PPC do curso)

Explique o que entra em cada fase. Depois detalhe o plano completo.
```

**Exemplo — corrigir um lote grande de peças sem perder critério:**
```
Não entregue a correção direto.
Primeiro divida as 30 peças em blocos de 5.
Corrija bloco por bloco, aplicando exatamente os mesmos critérios em todos.
Só então consolide um relatório final com os padrões de erro mais recorrentes.
```
*Corrigir em blocos, em vez de tudo de uma vez, reduz o risco de o critério de correção "derivar" ao longo da leitura — o mesmo problema que acontece quando um humano corrige 30 provas seguidas.*

### 8. Prompts iterativos

Prompt bom raramente sai perfeito na primeira tentativa — é normal, e esperado, refinar. O erro mais comum é digitar "melhore isso" de forma vaga, ou reescrever o prompt inteiro do zero. Refinar de verdade é dar feedback específico:

> Em vez de "melhore": *"está bom, mas encurte pela metade e tire o jargão técnico
> excessivo — é para um aluno do 2º semestre."*

**Evolução de um prompt na prática:**
- **V1:** "Explique prescrição para meus alunos." → genérico.
- **V2:** "Explique prescrição para alunos de Direito Civil que já viram decadência, mas nunca prescrição." → mais direcionado, ainda abstrato.
- **V3:** "Explique prescrição para esses alunos usando um caso de cobrança de dívida como exemplo, com uma linha do tempo descrita em palavras antes da definição técnica." → pronto para usar em aula.

### 9. Grounding / ancoragem — a técnica que mais reduz alucinação

Ancoragem é dar ao modelo um ponto de referência explícito, em vez de deixá-lo responder só com base no que aprendeu no treinamento geral — é a técnica que mais reduz o risco de alucinação, visto no Módulo 1.

**Ancoragem por fonte de dados (a mais importante para pesquisa jurídica):**
```
Com base SOMENTE no acórdão que anexei, responda:
Quais são os três principais fundamentos do voto vencedor, e em que trecho do texto
cada um aparece?
```
*A restrição "somente" impede o modelo de misturar o conteúdo do documento anexado com conhecimento geral do treinamento — que pode estar desatualizado ou não refletir aquele julgado específico.*

**Ancoragem avançada — separando norma oficial de interpretação:**
```
Você vai responder com base exclusivamente na lei que anexei e no PPC da disciplina.

Antes de responder, liste as premissas que está assumindo sobre o meu contexto.

Estruture a resposta assim:
1. O que a norma determina oficialmente
2. Por que essa exigência existe
3. Como aplicar isso na minha ementa
4. O que a norma não cobre

Separe claramente o que é texto de lei do que é sua interpretação.
Se não encontrar base no texto anexado para algum ponto, diga explicitamente "não há
determinação no texto fornecido para isso" — não preencha com suposição.
```
*Este é o nível mais completo de ancoragem: fecha a porta para a IA "inventar" no vazio de dados, o mesmo vazio que gerou o caso Mata v. Avianca visto no Módulo 1.*

### 10. Validação e autocorreção — e seu limite real

Pedir que o modelo verifique o próprio trabalho contra critérios explícitos antes de entregar:

```
Antes de responder, verifique se sua resposta está:
1. Correta, sem erros factuais ou lógicos
2. Completa, atende tudo que foi pedido
3. Clara, fácil de entender para o meu aluno

Se encontrar algum problema, corrija e sinalize com:
Autocorreção: [o que mudou]
Versão corrigida: [resposta final]
```

**O limite importante:** pesquisa recente mostra que a capacidade de autocorreção sem apoio externo é limitada — em tarefas de raciocínio, às vezes piora o resultado. Adicionar "tem certeza?" tende a reduzir a confiança do modelo e pode trocar uma resposta correta por uma incorreta (o mesmo efeito de sicofania do Módulo 1). Essa técnica funciona bem para checar completude, formato e clareza — **não é garantia de verdade factual ou jurídica**. Para isso, vale sempre o que já vimos: ancoragem em fonte oficial e checagem humana.

---

## Bloco de exercício guiado (para aplicar em sala)

Reservar ~20 minutos ao final do módulo para os docentes escreverem, no próprio celular ou notebook, um prompt completo (com os 5 elementos da anatomia) para uma tarefa real da própria disciplina — sugestões de cenário:

1. Uma questão de prova com caso hipotético inédito sobre um tema já lecionado
2. Um roteiro de correção padronizado (rubrica) para uma peça processual simulada
3. Uma explicação de um instituto jurídico ancorada em um texto de lei anexado
4. Um plano de aula decomposto em etapas para um tema extenso da ementa

Cada docente testa o prompt ao vivo (Claude, ChatGPT ou Gemini) e compara o resultado com o que teria escrito de forma vaga, sem estrutura.

---

## PARTE 2 — PROMPT PARA CLAUDE CODE
*(copie o bloco abaixo inteiro e cole no Claude Code para gerar os slides deste módulo)*

```
Esta é uma nova conversa. Na pasta do projeto estão os slides da apresentação do Módulo 2
(Engenharia de Prompt) feita para a capacitação em IA da FISMA. Use essa apresentação
como modelo direto para o Módulo 2 desta nova apresentação, da capacitação em IA para os
docentes do curso de Direito da UNISM.

Replique a mesma estrutura de slides da FISMA para o Módulo 2: a mesma quantidade de
slides, a mesma sequência/lógica de progressão, o mesmo estilo visual (paleta de cores,
tipografia, layout de cada tipo de slide — incluindo o tratamento dado aos slides com
exemplo de prompt, que devem manter o mesmo destaque visual de bloco de código/citação —,
ícones e blocos de destaque) e o mesmo nível de densidade de texto por slide. Não invente
uma estrutura nova — a estrutura é a da FISMA, adaptada.

O que muda é o conteúdo: substitua o conteúdo da FISMA pelo conteúdo do Módulo 2 da
UNISM, descrito abaixo. O foco deste módulo é a engenharia de prompt aplicada
exclusivamente à rotina jurídica — é o eixo principal da oficina, com mais tempo de
prática. Todos os exemplos de prompt devem ser trocados pelos exemplos jurídicos
fornecidos abaixo (nenhum exemplo genérico ou de outra área deve permanecer). Onde a
FISMA tiver um slide sobre uma técnica que também existe no conteúdo da UNISM, mantenha o
mesmo papel daquele slide na sequência, só trocando o exemplo. Ao final, inclua o bloco
de exercício guiado como um ou mais slides de atividade prática. Se não encontrar os
slides de referência da FISMA na pasta, avise antes de prosseguir.

Conteúdo do Módulo 2 — UNISM (Direito):

[Cole aqui o conteúdo da Parte 1 deste documento — "PARTE 1 — CONTEÚDO DO MÓDULO",
incluindo o "Bloco de exercício guiado"]
```
