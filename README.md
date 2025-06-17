# 🚀 Loomi Dashboard - NORTUS

Desenvolvimento de uma interface de dashboard operacional para a Nortus, uma plataforma de inteligência artificial voltada para times de vendas e atendimento. A aplicação permite visualizar métricas de desempenho, classificações inteligentes, sugestões de IA e visão 360° do cliente, consumindo dados a partir de uma API mockada.

## 🛠️ Tecnologias utilizadas

- **Next.js** (v13+ com App Router)
- **TypeScript**
- **Tailwind CSS**
- **Zustand** (gerenciamento de estado global)
- **Axios** (consumo de APIs)
- **ESLint + Prettier** (padrão de código)
- **ApexCharts** (gráficos)
- **Sonner** (toasts de feedback)

## 📁 Organização de pastas
```
src/
├── app – páginas com estrutura App Router
├── components – componentes reutilizáveis 
├── features – espaço reservado para lógicas isoladas por feature
├── services – chamadas à API mockada 
├── stores – estado global com Zustand
├── types – tipagens TypeScript organizadas por domínio
├── utils – funções auxiliares e constantes
```

## ✨ Funcionalidades principais implementadas

- **🔐 Tela de Login fictício** (com armazenamento em cookie + localStorage)

- **📊 Página de Dashboard com:**
  - Evolução de KPIs (ARPU, Conversão, Retenção, Churn)
  - Ranking de ofertas ativas
  - Mapa de impacto por segmento (gráfico donut + clusters)
  - Workflows inteligentes ativos

- **👤 Página Visão 360° do cliente com:**
  - Dados do cliente, produtos contratados, perfil e frases captadas
  - Sugestões da IA com Reason Why
  - Classificação inteligente com gauge e progress bars

- **⚡ Recursos adicionais:**
  - Skeleton Loaders para ambas as páginas
  - Feedback visual com toast de erro (ex: falha ao carregar cliente)
  - Responsividade mínima em telas a partir de 1000px

## ✅ Requisitos atendidos do desafio

 ✓ Projeto configurado com ESLint + Prettier
 ✓ Uso de estado global com Zustand
 ✓ Estrutura de código modular e escalável
 ✓ Fidelidade visual conforme protótipo Figma
 ✓ Separação de responsabilidades entre componentes, serviços e estados
 ✓ Commit descritivo com uso de Git e GitHub (fluxo por branches e PR)
 ✓ Feedbacks visuais com a biblioteca Sonner
 ✓ Documentação clara e gerenciador de tarefas via Notion
 ✓ Uso consciente de ferramentas de IA durante o processo de desenvolvimento

## 🚀 Como rodar o projeto localmente

1. Clonar o repositório
   ```bash
   git clone https://github.com/GuilhermeEstevan/loomi.git
   ```

2. Instalar dependências
   ```bash
   npm install
   ```

3. Rodar o projeto
   ```bash
   npm run dev
   ```

4. Acessar via http://localhost:3000

## 📝 Link do gerenciador de tarefas
Todas as tarefas foram registradas no Notion
https://www.notion.so/215c8388c63380ca8916c6ba45b2ecd8?v=215c8388c63380dc8ef0000c82aff6b7&source=copy_link

## 👨‍💻 Autores e créditos
Desenvolvido por Guilherme Estevan como parte do desafio técnico React da Loomi.
Com o suporte da documentação fornecida e protótipos do Figma.