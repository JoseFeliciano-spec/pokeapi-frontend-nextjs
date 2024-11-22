# Pokédex - Frontend en Next.js

Este proyecto es una **Pokédex** desarrollada con **Next.js**, que permite a los usuarios descubrir información detallada sobre sus Pokémon favoritos, incluyendo habilidades, estadísticas y versiones especiales.

---

## Capturas de Pantalla

### 1. Página de Inicio
La página de inicio invita a los usuarios a explorar la Pokédex con un diseño limpio y moderno.

![Home](https://github.com/user-attachments/assets/341fb300-0e9a-43f3-a0df-ba7da626fd26)


---

### 2. Vista de Lista de Pokémon
Muestra una lista de Pokémon con sus detalles básicos, incluyendo tipo, altura y peso.

**Estado Cargando**:
![Pokedex Home Skeleton](https://github.com/user-attachments/assets/ab7f536b-b31b-4510-b1de-bc33e4702192)

**Vista Completa**:
![Pokedex Home](https://github.com/user-attachments/assets/56840d6e-d299-4aa7-ad8b-278f61d17429)

---

### 3. Detalles de un Pokémon
Proporciona información detallada sobre un Pokémon seleccionado, incluyendo habilidades, estadísticas y versiones.

**Versión Normal**:
![Pokemon Detalle Normal](https://github.com/user-attachments/assets/bf4c65ba-5b29-4f85-b87b-6121e8d4622c)

**Versión Shiny**:
![Pokemon Detalle Shiny](https://github.com/user-attachments/assets/606cabc6-0cae-4afe-8f71-5429a8c1ea93)

**Versión Móvil**:

![Pokemon Detalle Movil](https://github.com/user-attachments/assets/27b0ead9-6295-4d45-b7f4-0e2f619d57f5)

---

### 4. Menú Responsive
Una vista del menú desplegable optimizado para dispositivos móviles.

![Menu Responsive](https://github.com/user-attachments/assets/f50a71c9-f217-4a05-ae70-8861a0e61571)

---

## Metadatos y Uso de OpenGraph

Este proyecto incluye el uso de **metadatos** mediante OpenGraph, lo que permite mejorar la presentación de enlaces compartidos en redes sociales. Los metadatos incluyen:

**Imagen OpenGraph**:

![MetaData usando opengraph](https://github.com/user-attachments/assets/939037c7-04f9-4555-a754-463a84a30596)


En la sección de detalles de cada Pokémon, se genera dinámicamente un conjunto de metadatos que incluye:
- Nombre del Pokémon.
- Número en la Pokédex.
- Versión Shiny (si aplica).

Esto mejora la visibilidad del proyecto cuando se comparte en redes sociales o se utiliza en herramientas de SEO.

---

## Descripción del Proyecto

### Características Principales
- **Lista de Pokémon**: Explora y busca entre más de 1300 Pokémon.
- **Vista Detallada**: Información completa sobre cada Pokémon, incluyendo habilidades, altura, peso y estadísticas.
- **Versiones Shiny**: Descubre las variaciones Shiny de tus Pokémon favoritos.
- **Responsive Design**: Diseñado para verse perfecto en dispositivos móviles, tabletas y escritorio.

### Tecnologías Utilizadas
- **Next.js**: Framework de React para renderizado del lado del servidor y aplicaciones web optimizadas.
- **PokeAPI**: API para obtener datos detallados de Pokémon.
- **Tailwind CSS y Material UI**: Para estilizado modular y mantenible.
- **Vercel**: Para el despliegue y hosting.

---

## Cómo Ejecutar el Proyecto Localmente

### Prerrequisitos
1. Node.js (v16+ recomendado).
2. Git.

### Pasos
1. Clona el repositorio:
   ```
   git clone https://github.com/JoseFeliciano-spec/pokeapi-frontend-nextjs.git
   ```
2. Instala las dependencias:
   ```
   npm install
   ```
3. Crea un archivo .env con la siguiente variable en la raiz del proyecto
   ```
   NEXT_PUBLIC_API_URL = https://pokeapi.co/api/v2
   ```
4. Ejecuta el proyecto en modo desarrollo:
   ```
   npm run dev
   ```
5. Abre el navegador en [http://localhost:3000](http://localhost:3000).

---

## Despliegue

El proyecto está desplegado en **Vercel** y puedes explorarlo directamente en el siguiente enlace:

[Pokédex en Vercel](https://pokeapi-frontend-nextjs.vercel.app)

---

## Colaboradores

Este proyecto fue realizado por:
- **José Feliciano Anaya Simanca**

---

## Licencia

Este proyecto está bajo la licencia [MIT](./LICENSE).

---

## Recursos

### Imagen Destacada del Proyecto
![opengraph-image](https://github.com/user-attachments/assets/500aef3b-6130-4173-adcd-2fe94fa16fdc)
