# Llevarlo al celular — paso a paso

Al terminar esto vas a tener:

- Una **dirección web** que abres desde cualquier computadora o teléfono.
- Un **icono en la pantalla de inicio** del celular, que abre a pantalla completa y sin barra del navegador. Se ve y se usa como una aplicación normal.
- **Todo sincronizado**: lo que cambies en la computadora aparece en el teléfono y al revés, porque los datos viven en Supabase.
- Funciona **sin internet**: abre igual, puedes mirar y editar, y sube los cambios cuando vuelva la señal.

Se hace una sola vez. Calcula media hora la primera vez.

> **Antes de empezar**, si todavía no conectaste Supabase, hazlo primero en la computadora siguiendo **Conectar la nube - paso a paso.md**. Sin eso el teléfono no tendría de dónde sacar los datos.

> **Ya está hecho.** La aplicación vive en el repositorio `eabuilts/PLANTILLA-DE-HORARIO-A.S.` y se abre en:
>
> ```
> https://eabuilts.github.io/PLANTILLA-DE-HORARIO-A.S./
> ```
>
> El Paso 1 queda como referencia por si algún día hay que volver a montarlo. Para instalarlo en un teléfono nuevo, salta al **Paso 2**.

> **El 13 de septiembre de 2026 el usuario de GitHub pasó de HORARIORENTCAR a eabuilts.** La dirección vieja, `horariorentcar.github.io/...`, ya no abre. Si tenías la app instalada con la dirección vieja: bórrala, abre la nueva, instálala otra vez (Paso 2 o 3) y vuelve a pegar la línea de conexión (Paso 4). Los datos no se pierden: están en Supabase.

---

## Paso 1 — Subir la carpeta a GitHub Pages

GitHub Pages te da una dirección con `https` gratis y para siempre. El `https` no es un capricho: sin él el teléfono no deja instalar la aplicación ni guardar nada para trabajar sin internet.

### 1.1 Crear la cuenta

Entra a `github.com` → **Sign up**. Correo, contraseña y un nombre de usuario. Ese nombre va a salir en la dirección.

### 1.2 Crear el repositorio

1. Arriba a la derecha, el **+** → **New repository**.
2. **Repository name**: el nombre que quieras; sale en la dirección.
3. Deja marcado **Public**. *(Más abajo explico qué queda público exactamente y por qué tus datos siguen protegidos.)*
4. **No marques** ninguna de las casillas de abajo (README, .gitignore, license).
5. **Create repository**.

### 1.3 Subir los archivos

En la pantalla que aparece, busca el enlace **uploading an existing file** y arrastra estos archivos:

| Archivo | Para qué |
|---|---|
| `index.html` | La aplicación entera |
| `manifest.webmanifest` | El nombre y el icono con que se instala |
| `sw.js` | Lo que hace que abra sin internet |
| `icono-192.png` | Icono |
| `icono-512.png` | Icono grande |
| `icono-recortable-512.png` | Icono para Android, que lo recorta a su forma |
| `apple-touch-icon.png` | Icono para iPhone |
| `.nojekyll` | Le dice a GitHub que no toque nada |

> El archivo `.nojekyll` está vacío y empieza por punto, así que **puede que no lo veas** en el explorador de Windows. Si no aparece: pestaña **Vista** → marca **Elementos ocultos**.

Abajo, en el recuadro verde, pulsa **Commit changes**.

### 1.4 Encender GitHub Pages

1. En tu repositorio, arriba: **Settings**.
2. Menú de la izquierda: **Pages**.
3. En **Source** elige **Deploy from a branch**.
4. **Branch**: `main` — y al lado, carpeta `/ (root)`.
5. **Save**.

Espera un minuto y recarga esa misma página. Arriba va a aparecer un recuadro con tu dirección. Ábrela: debe salir la pantalla de la clave. **Guarda esa dirección**: es la que vas a usar siempre, en la computadora y en el teléfono.

---

## Paso 2 — Instalarlo en Android

1. Abre la dirección en **Chrome**.
2. Casi siempre sale solo un aviso abajo que dice **Instalar aplicación**. Púlsalo y ya está.
3. Si no sale: los **tres puntos** de arriba a la derecha → **Instalar aplicación** (o **Añadir a pantalla de inicio**).
4. Confirma. El icono de ANDEL STAR aparece entre tus aplicaciones.

Ábrelo desde ahí: se abre a pantalla completa, sin barra de direcciones. Entra con tu clave.

---

## Paso 3 — Instalarlo en iPhone

En iPhone **tiene que ser Safari**. Chrome en iPhone no puede instalar aplicaciones.

1. Abre la dirección en **Safari**.
2. Pulsa el botón **Compartir** — el cuadrado con la flecha hacia arriba, abajo en el centro.
3. Desliza la lista hacia abajo y pulsa **Añadir a pantalla de inicio**.
4. Arriba a la derecha, **Añadir**.

El icono queda en tu pantalla de inicio. Al abrirlo desde ahí se ve a pantalla completa.

> **Ojo con iPhone:** si abres la dirección en Safari normal y también desde el icono, son **dos almacenamientos distintos**. Usa siempre el icono. Como los datos vienen de la nube, igualmente vas a ver lo mismo, pero la clave te la va a pedir en los dos sitios por separado.

---

## Paso 4 — Conectar la nube en el teléfono

El teléfono todavía no sabe de dónde sacar los horarios. Se lo dices una vez:

**En la computadora que ya funciona:**

1. Ajustes → baja hasta *Compartir entre varias computadoras*.
2. Pulsa **Copiar datos para otro equipo**.
3. Te da una línea que empieza por `HORARIOS1|`. Mándatela por WhatsApp a ti mismo.

**En el teléfono:**

1. Abre la aplicación desde el icono y entra con la clave.
2. Ajustes → **Pegar datos de conexión**.
3. Pega la línea → **Conectar**.

Listo. Aparecen todos tus empleados, turnos y semanas. Arriba, junto al nombre de la empresa, dirá **sincronizado en la nube**.

---

## Cómo se ve en el teléfono

El horario de la semana es una tabla de siete columnas: en una pantalla de teléfono habría que deslizar cuatro pantallas para leerla. Así que en el teléfono **la aplicación cambia sola a la vista de un día**.

Arriba salen los siete días de la semana. Tocas uno y ves, uno debajo de otro, los tres equipos con quién entra ese día y en qué turno. Tocando a una persona se abre el mismo menú de siempre para cambiarle el turno.

El día de hoy sale marcado con un borde, y los feriados llevan un punto.

Si quieres la tabla completa —para revisar la semana entera o para imprimir— pulsa **Ver la semana completa**. Y en una computadora o una tablet no cambia nada: sigue saliendo la tabla de siempre.

---

## Cuando se actualice la aplicación

Desde el 9 de septiembre de 2026 la carpeta de trabajo **es una copia del repositorio** (git), así que publicar es hacer *commit* y *push* de `index.html`. También sirve el camino de siempre: en el repositorio, **Add file → Upload files** y arrastrar el `index.html` nuevo encima.

En un minuto está arriba. En los teléfonos, la aplicación coge la versión nueva sola la próxima vez que la abras con internet. Si quieres forzarlo, ciérrala del todo y vuelve a abrirla. El **sello de versión** al final de Ajustes te dice cuál tienes.

---

## Qué queda público y qué no

**Público:** el archivo `index.html`, o sea **el programa**. Cualquiera con la dirección puede abrirlo y ver la pantalla de la clave. Eso no es un problema: es como que alguien vea la caja de un programa.

**No público:** tus horarios, tus empleados y tus datos. Eso vive en Supabase y solo se llega con la dirección del proyecto y la clave, que **no están dentro del archivo**: las escribe cada equipo una vez y se quedan guardadas en ese equipo.

**La clave de la aplicación (1234)** solo tapa la pantalla en ese dispositivo; no cifra nada. Cámbiala en Ajustes por otra que no sea obvia.

**Lo que sí tienes que cuidar** es la línea `HORARIOS1|...`: ahí sí van la dirección y la clave de Supabase juntas. Trátala como una contraseña y mándala solo a tus propios equipos.

Y aunque tengas la nube, **descarga la copia de seguridad de vez en cuando** desde Ajustes.

---

## Si algo falla

| Qué ves | Qué pasa |
|---|---|
| La dirección da **404** | GitHub Pages tarda un minuto la primera vez. Recarga. Si sigue, revisa que en Settings → Pages la rama sea `main` y la carpeta `/ (root)`. |
| Sale la aplicación pero **no aparece "Instalar"** | Falta alguno de los archivos, o no estás en `https`. Comprueba que subiste `manifest.webmanifest`, `sw.js` y los tres iconos, y que la dirección empieza por `https://`. |
| En iPhone no veo **Añadir a pantalla de inicio** | Estás en Chrome. En iPhone tiene que ser Safari. |
| **No sincroniza** en el teléfono | Ajustes → *Probar conexión*: te dice exactamente qué falta. Lo más común es que no se pegó la línea de conexión. |
| Cambié algo en la computadora y **el teléfono no lo ve** | Pulsa **Actualizar**, arriba en la barra. La aplicación mira sola cada 15 segundos, pero ese botón lo hace en el momento. |
| Abre **la versión vieja** después de actualizar | Ciérrala del todo (no solo minimizarla) y ábrela otra vez con internet. Mira el sello al final de Ajustes. |
