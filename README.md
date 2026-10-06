# MTNA – Matemática Sem Limites

Projeto educativo em React + Vite para apresentar conteúdos, exercícios e materiais sobre limites matemáticos.

## Site oficial

- Domínio principal: https://mtnaweblimites.org/

## Tecnologias

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

## Como executar localmente

```bash
npm install
npm run dev
```

## Como compilar para produção

```bash
npm run build
npm run preview
```

## Deploy e domínio

Este projeto foi migrado do ambiente Lovable para GitHub e agora deve ser publicado diretamente em um host estático ou servidor de produção com o domínio configurado corretamente.

O workflow do GitHub Pages lê a configuração do Supabase dos GitHub Actions secrets `VITE_SUPABASE_URL` e `VITE_SUPABASE_PUBLISHABLE_KEY`. Cria ambos em **Settings → Secrets and variables → Actions** no repositório e volta a executar o workflow para ativar o formulário de contacto. Usa a publishable key (ou a antiga anon key); nunca uses uma `service_role` ou `sb_secret` key no frontend.

Para o Google AdSense, o importante é manter a identidade do site consistente com o domínio real, por exemplo:

- marca: MTNA – Matemática Sem Limites
- domínio: mtnaweblimites.org
- URLs públicas: https://mtnaweblimites.org/

Evite nomes antigos genéricos ou incompatíveis com o domínio final, porque isso pode causar confusão na validação do site.
