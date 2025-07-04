# 💖 ¿Quieres ser mi San Valentín?

Una aplicación web interactiva y divertida para invitar a alguien especial a ser tu San Valentín. Construida con React, TypeScript y Vite.

## 🌟 Características

- **Interfaz interactiva**: Botones que cambian de tamaño dinámicamente
- **GIFs animados**: Colección de GIFs de Bubu y Dudu que cambian según las respuestas
- **Mensajes persuasivos**: Sistema de mensajes que aparecen cuando se hace clic en "No"
- **Efectos visuales**: Corazones flotantes animados en el fondo
- **Responsive design**: Se adapta a diferentes tamaños de pantalla
- **Animaciones suaves**: Transiciones y efectos visuales atractivos

## 🎮 Cómo funciona

1. **Pregunta inicial**: "¿Quieres ser mi San Valentín? 💖"
2. **Botón "Sí"**: 
   - Muestra un GIF especial de celebración
   - Desaparecen los botones
   - Aparece un mensaje final romántico
3. **Botón "No"**:
   - Cambia el GIF a uno triste
   - El botón "Sí" se hace más grande
   - El botón "No" se hace más pequeño
   - Aparece un mensaje persuasivo
   - El proceso se repite hasta que acepte

## 🛠️ Tecnologías utilizadas

- **React 19**: Framework de interfaz de usuario
- **TypeScript**: Tipado estático para mayor robustez
- **Vite**: Herramienta de construcción rápida
- **CSS3**: Estilos y animaciones personalizadas
- **GitHub Pages**: Despliegue automático

## 📁 Estructura del proyecto

```
src/
├── components/
│   ├── GiftDisplay.tsx     # Componente para mostrar GIFs
│   └── HeartsOverlay.tsx   # Componente de corazones flotantes
├── hooks/
│   └── useHearts.ts        # Hook personalizado para animar corazones
├── utils/
│   ├── gifts.ts            # Array de GIFs de Bubu y Dudu
│   └── messages.ts         # Mensajes persuasivos
├── App.tsx                 # Componente principal
└── App.css                 # Estilos principales
```

## 🚀 Instalación y ejecución

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/jchuayta/want-to-be-my-valentine.git
   cd want-to-be-my-valentine
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Construir para producción**
   ```bash
   npm run build
   ```

## 🌐 Despliegue

El proyecto está configurado para desplegarse automáticamente en GitHub Pages:

- **URL de producción**: [https://jchuayta.github.io/want-to-be-my-valentine/](https://jchuayta.github.io/want-to-be-my-valentine/)
- **Comando de despliegue**: `npm run deploy`

## 🎨 Personalización

### Cambiar GIFs
Edita el archivo `src/utils/gifts.ts` para agregar o cambiar los GIFs:

```typescript
export const bubuDuduGifs = [
  "URL_DEL_NUEVO_GIF",
  // ... más GIFs
];
```

### Cambiar mensajes
Modifica `src/utils/messages.ts` para personalizar los mensajes persuasivos:

```typescript
export const messages = [
  "Tu mensaje personalizado aquí 🥺",
  // ... más mensajes
];
```

### Cambiar colores
Edita `src/App.css` para modificar la paleta de colores:

```css
.background {
  background: linear-gradient(135deg, #tu-color-1, #tu-color-2);
}
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas! Si tienes ideas para mejorar el proyecto:

1. Haz un fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 💝 Créditos

- **GIFs**: Bubu y Dudu (personajes animados)
- **Inspiración**: El amor y la creatividad 💕

---

**¡Espero que esta aplicación ayude a crear momentos especiales! 💖**

*Desarrollado con ❤️ por [jchuayta](https://github.com/jchuayta)*
