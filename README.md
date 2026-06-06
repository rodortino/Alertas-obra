# 🏗 Alertas Obra

Sistema de alertas tempranas para obras de construcción. PWA instalable en cualquier dispositivo.

## Funcionalidades

- Registro de alertas por categoría y señal específica
- 8 conceptos con señales definidas por el equipo
- Perfil de usuario persistente
- Selector de obra por proyecto
- Historial con edición y eliminación de registros
- Estadísticas por categoría y por mes
- Exportación JSON y Excel (CSV)
- Importación de bases de datos JSON o CSV
- Funciona **100% offline** una vez instalada

## Cómo instalar en el teléfono

**iPhone (Safari):**
1. Abre la URL en Safari
2. Toca el botón compartir (cuadrado con flecha)
3. "Añadir a pantalla de inicio"

**Android (Chrome):**
1. Abre la URL en Chrome
2. Toca los tres puntos → "Instalar app"
3. O espera el banner automático

## Estructura del repositorio

```
alertas-obra/
├── index.html       ← App completa
├── manifest.json    ← Configuración PWA
├── sw.js            ← Service worker (offline)
├── icons/           ← Íconos para todos los dispositivos
│   ├── icon-192x192.png
│   ├── icon-512x512.png
│   ├── apple-touch-icon.png
│   └── ...
└── README.md
```

## Publicar en GitHub Pages

1. Sube todos estos archivos a un repositorio público
2. Ve a **Settings → Pages**
3. Source: `Deploy from a branch` → `main` → `/ (root)`
Tu app quedará en: `https://tuusuario.github.io/AlertasObra`

## Etapa siguiente

- Sincronización entre dispositivos vía backend
- Perfiles y permisos por usuario
- Notificaciones push al equipo
- Integración con Microsoft Teams

---

v1.0 — Etapa 1 · Datos guardados localmente en cada dispositivo
