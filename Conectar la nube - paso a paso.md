# Conectar la nube — paso a paso

Sirve para que dos computadoras (o tu celular) trabajen con los mismos datos. Se hace **una sola vez**, unos 10 minutos, y es gratis.

Antes de empezar, abre **Horarios Rotativos** y pulsa **Ctrl+F5** para tener la versión más nueva.

---

## Paso 1 — Crear el proyecto en Supabase

Entra a `supabase.com` → **Start your project** → puedes entrar con Google.

Pulsa **New project** y llena:

| Campo | Qué poner |
|---|---|
| **Project name** | `horarios-andel-star` |
| **Database password** | Pulsa **Copy** y guárdala en un papel. No la usarás en la aplicación, pero no se puede recuperar. |
| **Region** | Americas |
| **Security** (las 3 casillas) | Déjalas las tres marcadas |

Pulsa **Create new project** y espera uno o dos minutos.

> **El proyecto ya existe.** Desde el 1 de agosto de 2026 los horarios viven en el proyecto `hdyzvtfaxvdoyrtllura`, y la tabla ya está creada. Si estás conectando un equipo nuevo, salta al **Paso 3**: solo hacen falta los dos datos de conexión.

---

## Paso 2 — Crear la tabla

**En la aplicación:** Ajustes → baja hasta *Compartir entre varias computadoras* → abre **Pasos para conectar la nube** → pulsa **Copiar**.

**En Supabase:** menú de la izquierda → **SQL Editor** → pega el texto en el recuadro grande → pulsa **Run**.

- Si sale un aviso de *"Potential issue detected"*, pulsa **Run query**. Es normal, no borra nada.
- Cuando termine debe decir **Success**. Ya está.

---

## Paso 3 — Conseguir los dos datos de conexión

Aquí es donde la gente se pierde, porque Supabase cambió el menú. Hay dos caminos y **el primero es el fácil**.

### Camino fácil: el botón Connect

1. Arriba del todo, en la barra superior del panel, hay un botón que dice **Connect**. Púlsalo.
2. Se abre una ventana. Busca la pestaña o sección de **App Frameworks**.
3. Ahí verás dos líneas parecidas a estas:

```
NEXT_PUBLIC_SUPABASE_URL=https://abcdefghijk.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_xxxxxxxxxxxxx
```

- Lo que va después del primer `=` es tu **dirección del proyecto**.
- Lo que va después del segundo `=` es tu **clave pública**.

No importa que diga `NEXT_PUBLIC` ni `ANON_KEY`; eso son nombres de otro programa. Tú solo copias los dos valores.

### Camino largo: por Settings

1. Abajo a la izquierda, el engranaje: **Project Settings**.
2. Entra a **API Keys**.
3. En la pestaña **API Keys** busca **Publishable key**. Empieza por `sb_publishable_`. Cópiala.
   - Si esa pestaña está vacía, pulsa **Create new API Keys**.
   - Si en su lugar ves una pestaña **Legacy API Keys**, la clave `anon` de ahí también sirve.
4. La dirección del proyecto está en **Settings → Data API**, en el campo **Project URL**. Es `https://algo.supabase.co`.

> **Nunca uses** la clave que diga `service_role` o `secret`. Esa es la de administrador.

> **La dirección no se abre en el navegador.** Si la pegas en la barra de direcciones, Supabase contesta `requested path is invalid`. Es normal: esa dirección es para que la aplicación hable con la base de datos, no una página para mirar.

---

## Paso 4 — Conectar esta computadora

En la aplicación, en Ajustes:

1. **Dirección del proyecto** → pega la que termina en `.supabase.co`
2. **Clave pública** → pega la larga
3. **Nombre del horario compartido** → déjalo en `principal`
4. Marca **Mantener sincronizado**. Sin esta casilla el botón de abajo solo guarda los campos y dice *"Sincronización desactivada"*.
5. Pulsa **Guardar y conectar**

Si en la nube ya había un horario, te pregunta **con cuál te quedas**: *Traer la de la nube* o *Enviar la de este equipo*. Elige la del equipo donde has estado trabajando; la otra se pierde. Antes de decidir, descarga una **copia de seguridad** desde el mismo Ajustes.

Arriba, junto al nombre de la empresa, aparecerá **sincronizado en la nube**. Ya está.

Si algo falla, pulsa **Probar conexión**: te dice exactamente qué está mal.

---

## Paso 5 — El segundo equipo (o el celular)

**En la computadora que ya funciona:**

1. Ajustes → **Copiar datos para otro equipo**.
2. Te da una sola línea que empieza por `HORARIOS1|`. Mándatela por WhatsApp.
3. Manda también el archivo **Horarios Rotativos.html** en el mismo mensaje.

**En el otro equipo:**

1. Descarga el archivo y ábrelo. Entra con la clave.
2. Ajustes → **Pegar datos de conexión** → pega la línea → **Conectar**.

Listo: aparecen todos tus empleados, turnos y semanas. No hay que teclear la clave larga.

---

## Cómo funciona el día a día

- Cada cambio sube solo, segundo y medio después de hacerlo.
- Al abrir la aplicación, primero baja lo más reciente.
- Sin internet sigues trabajando; sube cuando vuelva la conexión.
- Si lo que baja de la nube viene de una **versión anterior** de la aplicación, se actualiza solo al bajar y se vuelve a subir ya actualizado. Antes no pasaba: la nube se quedaba con la versión vieja y cada equipo la volvía a bajar encima de la suya. Corregido el 9 de septiembre de 2026.
- La dirección y la clave se **limpian solas** al pegarlas: si al copiarlas de un chat o de WhatsApp se cuela un carácter invisible, la aplicación lo quita. Antes salía el error *"String contains non ISO-8859-1 code point"*. Corregido el 9 de septiembre de 2026.

**Regla importante:** que no editen dos personas la misma semana a la vez. No se rompe nada, pero el último que guarde pisa lo del otro.

---

## Sobre el celular

Abrir el archivo suelto en un teléfono es incómodo, y algunos navegadores bloquean las conexiones a internet cuando el archivo se abre desde el almacenamiento del propio teléfono. Si eso pasa, la sincronización no funcionará.

Para usarlo en serio en el celular, la aplicación está publicada en internet. Los pasos están en **Subir al celular - paso a paso.md**.

---

## Si algo falla

| Mensaje | Qué hacer |
|---|---|
| *La clave no es válida* | Copiaste la clave equivocada o incompleta. Vuelve al paso 3 y copia la **publishable** entera. |
| *La tabla "horarios" todavía no existe* | Falta el paso 2. Vuelve al SQL Editor y ejecuta el texto. |
| *No se pudo contactar con la nube* | Revisa el internet y que la dirección empiece por `https://` y termine en `.supabase.co`, sin barra al final. |
| *Sincronización desactivada* | Falta marcar la casilla **Mantener sincronizado** antes de pulsar Guardar y conectar. |
| *La dirección o la clave traen un carácter raro* | Borra el campo entero y vuelve a pegar. Con la versión 2026-09-09-b o posterior ya no debería pasar. |

---

## Seguridad

Cualquiera con esa dirección y esa clave puede ver y cambiar tus horarios. Es suficiente para el uso interno de un equipo pequeño, pero trata esa línea `HORARIOS1|...` como una contraseña: mándala solo a tus propios equipos.

Aunque tengas la nube, descarga de vez en cuando la **copia de seguridad** desde Ajustes.
