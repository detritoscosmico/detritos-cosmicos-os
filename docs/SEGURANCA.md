# Política de Segurança — Detritos Cósmicos OS

## Objetivo

Manter o projeto útil, seguro, reversível e educativo.

## Permitido

- Interface visual
- Protótipos HTML/CSS/JS
- Scripts de organização pessoal
- Scripts de limpeza de cache com confirmação
- Diagnóstico sem alteração no sistema
- Logs locais transparentes
- Automação pessoal consentida
- Documentação técnica

## Não permitido

- Apagar arquivos pessoais sem confirmação explícita
- Ocultar processos de forma maliciosa
- Coletar dados sem autorização
- Interferir em sistemas de terceiros
- Criar persistência escondida
- Executar comandos destrutivos automaticamente
- Burlar permissões do sistema
- Capturar senhas, tokens ou dados privados

## Regra para o PurgeX

O PurgeX deve começar como simulador visual.

Depois pode evoluir para limpeza segura de:

- cache temporário
- arquivos duplicados confirmados
- lixeira
- logs antigos

Sempre com:

- pré-visualização
- confirmação
- modo teste
- log do que será feito
- backup quando possível

## Regra de desenvolvimento

Toda função que altera arquivos precisa responder três perguntas:

1. O usuário sabe exatamente o que será alterado?
2. Existe confirmação antes da ação?
3. Existe registro ou forma de revisar o que aconteceu?

Se a resposta for não, a função não deve ser implementada.

## Frase operacional

Primeiro segurança. Depois automação. Depois estética.
