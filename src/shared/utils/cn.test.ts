import { cn } from './cn'

describe('cn', () => {
  it('une varias clases con espacio', () => {
    expect(cn('a', 'b', 'c')).toBe('a b c')
  })

  it('filtra valores falsy (false, null, undefined)', () => {
    expect(cn('a', false, null, undefined, 'b')).toBe('a b')
  })

  it('aplana arrays de clases', () => {
    expect(cn(['a', 'b'], 'c')).toBe('a b c')
  })

  it('aplana arrays anidados', () => {
    expect(cn(['a', ['b', 'c']], 'd')).toBe('a b c d')
  })

  it('devuelve string vacío cuando no recibe argumentos', () => {
    expect(cn()).toBe('')
  })

  it('devuelve string vacío cuando todos los argumentos son falsy', () => {
    expect(cn(false, null, undefined)).toBe('')
  })
})
