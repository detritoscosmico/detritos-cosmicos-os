# Estrutura do projeto — Detritos Cósmicos OS

Este projeto deve funcionar como laboratório organizado, não como pasta solta de ideias.

## Estrutura recomendada

```text
detritos-cosmicos-os/
├── README.md
├── docs/
│   ├── ESTRUTURA.md
│   ├── ROADMAP.md
│   ├── SEGURANCA.md
│   └── MODULOS.md
├── prototipos/
│   └── painel-html/
├── scripts-seguros/
├── terminal/
└── suzy/
```

## Função das pastas

### `docs/`

Explicações oficiais do projeto: segurança, roadmap, módulos e decisões técnicas.

### `prototipos/`

Versões visuais e experimentais. Aqui entram telas HTML/CSS, mockups e testes de interface.

### `scripts-seguros/`

Scripts reversíveis, com confirmação e sem comportamento destrutivo automático.

### `terminal/`

Área reservada para o Terminal Dimensional.

### `suzy/`

Área reservada para integração da Suzy como assistente do sistema.

## Regra de organização

Toda nova ideia deve entrar primeiro em `docs/ROADMAP.md`. Só depois vira código.
