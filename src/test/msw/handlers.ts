import type { RequestHandler } from 'msw'

// Los handlers globales se añaden aquí.
// Cada feature puede sobrescribir handlers en sus propios tests con server.use(...)
export const handlers: RequestHandler[] = []
