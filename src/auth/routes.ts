// Ruta por defecto
export const defaultRoute = "/";

export const apiAuthRoute = "/api/auth";
// Ruta para inicio de sesión
export const loginRoute = "/login";
// Ruta para cerrar sesión
export const logoutRoute = "/logout";
// Ruta para registror un nuevo usuario
export const registerRoute = "/register";

// Rutas de autenticación
export const authRoutes = [loginRoute, registerRoute];

// Todos los usuarios pueden acceder a las rutas públicas
export const publicRoutes = ["/", "/prices"];

// Solo los usuarios autenticados pueden acceder a las rutas y subrutas protegidas
export const protectedRoutes = ["/dashboard"];
