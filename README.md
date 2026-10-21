# Joyería López

Primera página de la casa: la vitrina digital para que un cliente llegue, mire las colecciones y deje un encargo.

## Verla en tu computadora

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Qué se edita sin rehacer la página

- Textos de contacto, WhatsApp, Instagram, dirección y horario: `src/data/site.ts`
- Colecciones y piezas de muestra: `src/data/catalog.ts`
- Aspecto (colores, tipografía, espacios): `src/app/globals.css`

El número de WhatsApp va solo con dígitos y código de país, por ejemplo `59170000000`. Cuando ese campo tiene valor, el botón aparece solo.

## Cómo se publica

El código vive en GitHub. Vercel mira ese repositorio y publica cada cambio de la rama `main`. No hace falta un servidor propio.

La dirección `https://algo.vercel.app` es el sitio real desde el primer despliegue. Un nombre como `joyerialopez.com` o `joyerialopez.com.bo` es aparte: se compra el dominio y después se apunta a este mismo proyecto de Vercel. La página no se vuelve a construir para eso.
