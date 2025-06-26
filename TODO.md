# 🧩 Woovi Token Bucket Challenge

### 🔧 Backend

- [x] Iniciar projeto Node.js com Koa.js + TypeScript
- [x] Configurar ESLint, Prettier e tsconfig
- [x] Estruturar diretórios
- [x] Implementar autenticação via Bearer Token
- [x] Criar middleware para autenticação e extração do usuário
- [x] Implementar multi-tenant (tokens por usuário)
- [x] Configurar Koa com GraphQl
- [x] Criar mutation `simulatePixTransaction`
- [x] Implementar estratégia Token Bucket:
  - [x] Consumir 1 token por requisição
  - [x] Se falhar, perder 1 token
  - [x] A cada 1h, adicionar 1 token até no máximo 10
- [x] Criar testes Unitários:
  - [x] Consumo de tokens
  - [x] Simulação de falhas
  - [x] Regeneração automática
- [ ] Criar coleção Postman para a API
- [ ] Criar README com instruções de execução e uso

### 💣 Hardcore - BACEN

- [ ] Estudar documentação oficial do BACEN DICT
- [ ] Implementar regras de limitação de requisição:
  - [ ] Janela de tempo
  - [ ] IP/tenant
  - [ ] Tipos de endpoint
  - [ ] Bloqueio temporário

### 💻 Frontend (React + Relay)

- [x] Criar projeto React com TypeScript
- [ ] Configurar Eslint ou outra ferramenta de lint
- [ ] Criar pagina de login
  - [x] Criar esqueleto
  - [x] Funcionalidades
  - [ ] CSS
- [ ] Criar pagina de registro
  - [x] Criar esqueleto
  - [x] Funcionalidades
  - [ ] CSS
- [ ] Configurar autenticação com Bearer Token
- [ ] Criar Home para consulta pix (formulário de consulta):
- [x] Configurar React Relay
- [ ] Criar mutation para iniciar consulta Pix
  - [ ] Exibir resultado da transação (sucesso/erro)
  - [ ] Adicionar feedback visual e validações
