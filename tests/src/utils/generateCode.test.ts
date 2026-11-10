import { describe, it, expect } from 'vitest';
import { generateSixDigitCode } from '../../../src/utils/generateCode.util';

describe('Generate Code Utility Tests', () => {
  it('Genera un código de 6 dígitos numéricos', () => {
    const code = generateSixDigitCode();
    
    expect(typeof code).toBe('string');
    expect(code.length).toBe(6);
    expect(/^\d+$/.test(code)).toBe(true);
  });
});