# Pendientes de la demo `electricidad_2` (Ribes e Hijo Electricistas, datos ficticios)

Web creada el 16/10/2026 desde el template `kit/templates/electricidad/electricidad-2` «Del barrio» con core `^0.5.0`. Proceso: `kit/docs/nuevo-cliente.md`. Estos pasos los hace Ysst en local (necesitan su token de GitHub Packages o el navegador). Borra cada línea al hacerla y este archivo al terminar.

## 1. Lockfile (paso 3 de `nuevo-cliente.md`)

Desde la carpeta de la web (`mis_datos/electricidad_2/` o el Codespace), comandos de terminal:

```bash
git pull
pnpm install
readlink -f node_modules/@andrei-leads/core    # debe acabar en …@andrei-leads+core@0.5.0_…
pnpm build
git add pnpm-lock.yaml
git commit -m "pnpm-lock"
git push
```

Un `401` en `pnpm install` = token personal caducado o mal pegado en `~/.npmrc` (`kit/docs/publicar-core.md` → «Llave»).

## 2. Datos (en `site.config.ts`, contenido de archivo)

- [ ] Comprobar en Google y Maps que «Ribes e Hijo Electricistas» no existe en Patraix (Valencia). Alternativas: «Electricistas Bonavista» e «Instalaciones Eléctricas Mira» (si cambia, también `nombre`, `nombreLegal`, el email `.example`, `seo.titulo` y la historia de `empresa`, que cita el apellido Ribes y la calle Bonavista).
- [ ] `contacto.telefono` y `contacto.whatsapp`: tu móvil (`+34` + 9 dígitos), en lugar de `+34600000000`.
- [ ] Revisar los 2 precios marcados `PRECIO FICTICIO` (`precioDesde`): son inventados. Borrarlos o sustituirlos por cifras validadas por el cliente.
- [ ] Quitar `contacto.coordenadas` si no se quieren (son aproximadas de Patraix).
- [ ] Lectura rápida de los textos de los servicios (los escribió un agente).

## 3. Vercel (pasos 10–12 de `nuevo-cliente.md`, en el navegador)

- [ ] GitHub App de Vercel con acceso al repo `electricidad_2`. Hobby solo despliega repos públicos de la organización: ponerlo **público** (datos ficticios, sin secretos) o usar Pro.
- [ ] Proyecto nuevo en Vercel con la variable `NPM_RC` (Production y Preview, Sensitive).
- [ ] Tras el primer despliegue: `seo.url` con la URL real de Vercel, `pnpm build`, commit y push.
- [ ] Comprobaciones del paso 12 (rutas, `noindex`, un `<h1>`, `tel:` y `wa.me` con tu número) y prueba desde el móvil.
- [ ] Opcional: analítica (paso 13), `analitica: { vercel: true }` + Analytics → Enable en Vercel.

## 4. Fotos

Las de `public/ejemplo/` son relleno gris. Cuando estén las de IA (prompts en `kit/docs/fotos-ejemplo/electricidad-2/prompts-chatgpt.md`), se ponen en el template de `kit` y se copian aquí con los mismos nombres.
