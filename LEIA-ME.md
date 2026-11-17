# Curso de Milhas: como publicar e instalar

## O que tem na pasta

| Arquivo | O que é |
| --- | --- |
| `index.html` | A página do curso (visual e estrutura) |
| `content1.js`, `content2.js` | O conteúdo das aulas, quizzes e glossário |
| `app.js` | O funcionamento: navegação, calculadoras, progresso, backup |
| `manifest.webmanifest` | Nome, cores e ícone do app (é o que permite instalar) |
| `sw.js` | Deixa o curso funcionando sem internet |
| `icons/` | Ícones do app |

## 1. Publicar no GitHub Pages (grátis, uns 10 minutos)

1. Entre no github.com e crie um repositório novo, por exemplo `curso-milhas`. Pode ser público.
2. No repositório, clique em **Add file → Upload files** e arraste **todo o conteúdo desta pasta**, incluindo a pasta `icons`. Os arquivos precisam ficar na raiz do repositório, não dentro de outra pasta.
3. Clique em **Commit changes**.
4. Vá em **Settings → Pages**. Em "Branch", escolha `main` e a pasta `/ (root)` e clique em **Save**.
5. Em um ou dois minutos, o endereço aparece no topo da página, tipo `https://SEU-USUARIO.github.io/curso-milhas/`.

Esse é o link pra mandar pra sua mãe.

## 2. Instalar no celular

**Android (Chrome):** abra o link, toque nos três pontinhos e em **Instalar app** (ou **Adicionar à tela inicial**).

**iPhone (Safari):** abra o link **no Safari**, toque no botão de compartilhar (quadrado com seta) e em **Adicionar à Tela de Início**.

Depois de instalado, o curso abre em tela cheia pelo ícone e funciona sem internet.

## 3. Sobre o progresso

- O progresso fica salvo **no aparelho**, dentro do app. Fechar e abrir de novo não apaga nada.
- Cada pessoa no seu próprio celular tem o seu progresso separado.
- **No iPhone**, o app instalado guarda o progresso separado do Safari. Instale primeiro e estude pelo ícone.
- O progresso some se você desinstalar o app ou limpar os dados do navegador.
- **Pra não perder nada:** na página inicial, em "Backup do progresso", toque em **Copiar meu código** e guarde num lugar seguro (notas do celular, WhatsApp pra você mesma). Pra trocar de aparelho, cole o código em **Restaurar de um código**.
- Se você já tinha progresso na versão do Claude, use o mesmo backup: copie o código lá e restaure no app.

## 4. Atualizando o curso depois

Se mudar qualquer arquivo, abra o `sw.js` e aumente a versão na primeira linha útil (`curso-milhas-v1` → `curso-milhas-v2`), e suba os arquivos de novo no GitHub. Sem isso, o celular pode continuar mostrando a versão antiga guardada pro modo offline. O progresso não é apagado na atualização.
