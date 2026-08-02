# Melhorias pendentes — ai.agents

Lista de melhorias identificadas no review da página. Itens marcados com
**prioridade alta** são os que têm mais impacto; o resto entra quando der.

## 🔴 Prioridade alta (começa por aqui)

### Hero — reduzir tamanho ✅ CONCLUÍDO (2026-08-01)
- [x] Trocar `font-size: 120px` fixo por `clamp(2.9rem, 8.5vw, 6.5rem)` no `.hero__title`
- [x] Reduzir `min-height: 100svh` para `clamp(680px, 92svh, 860px)` no `.hero`
- [x] Encurtar copy: `"Pare de perder horas / fazendo a IA acertar."` (2 linhas em vez de 3)
- [x] Suavizar `.hero__shade`: reduzir a opacidade da esquerda de `0.98` para `~0.85`
- [x] **Reativar a chip `.availability`** (linhas 64–68 do `index.html`, hoje comentada)
- [x] Ajustar `max-width` do título de `790px` para `880px` (acompanha o font-size maior proporcional)

### Hierarquia de tipografia no mobile ✅ CONCLUÍDO (2026-08-01)
- [x] H1 mobile: removido `font-size: clamp(2.5rem, 12.4vw, 3.5rem)` conflitante — herda o clamp geral agora escalável
- [x] H2 mobile: `clamp(2.75rem, 13.2vw, 4rem)` → `clamp(2.4rem, 12vw, 3.3rem)`
- [x] H3 mobile: `clamp(2.55rem, 13vw, 3.75rem)` → `clamp(2.1rem, 10vw, 2.9rem)`
- [x] Hierarquia final no mobile: H1 (~3.7rem max) > H2 (~3.3rem max) > H3 (~2.9rem max)
- [x] `.hero__title em` no mobile: `display: block` → `display: inline` (acompanha a nova estrutura de 2 linhas)

## 🟡 Prioridade média

### Status pills dos cards
- [ ] Padronizar labels: diferenciar "Em breve" vs "Em desenvolvimento" com copy mais clara
- [ ] Sugestão: `01 — Disponível em breve` / `02 — Em desenvolvimento` / `03 — Em desenvolvimento`

### Font loading
- [ ] Remover `<link rel="preload">` da `Blacksword.otf` (usada só no brand, é pequena)
- [ ] Manter preload só de `Gordan.ttf` (display) e `Coolvetica.otf` (corpo)
- [ ] Considerar `font-display: optional` em conexões lentas

### Hover/focus dos cards
- [ ] Verificar focus state da `.primary-button` via teclado (não só outline global)
- [ ] Envolver transitions de hover dos cards em `@media (prefers-reduced-motion: no-preference)` — hoje as transitions de hover continuam mesmo com motion reduzido

### Rail lateral "LIGHT · TEXTURE · SCENE · COMPOSITION"
- [ ] Trocar `transform: rotate(-90deg)` por `writing-mode: vertical-rl` para posicionamento mais previsível
- [ ] Fixar `right: 32px; bottom: 32px` para não flutuar em widescreen

## 🟢 Pequenos ajustes (cleanup)

- [ ] Corrigir `font-synthesis: weight` no `body` (deveria ser `font-synthesis: none` ou `weight style`)
- [ ] Footer mobile: remover `min-height: 90px` (sobra espaço em branco)
- [ ] `outline: 1px solid rgba(255, 255, 255, 0.1)` em `.hero__image` e `.agent-card__visual img` — testar em diferentes browsers
- [ ] Refatorar o `.agents__backdrop::before` (30 linhas de "ESPECIALISTA" repetidas) — usar SVG pattern ou JS para gerar dinamicamente

## ✅ Já tá bom (não mexer)

- Identidade visual preto + amarelo #f3f100 (forte e autoral)
- HTML semântico, ARIA labels, aria-hidden nos decorativos
- `prefers-reduced-motion` implementado (exceto as transitions de hover)
- `focus-visible: 3px solid var(--signal)` global
- Tipografia Gordan (display) + Coolvetica (corpo) + Blacksword (assinatura)
- Backdrop repetindo "ESPECIALISTA" em mega tipo (truque forte)
- Visual-corners amarelas nos cards (vibe viewfinder/câmera)
- 3 breakpoints responsivos bem cuidados (900, 620, 380)
- `aspect-ratio: 1` nos cards no mobile
- Toast pra estado "link em configuração"
