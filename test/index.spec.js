import RandomGeneratorDefault, { RandomGenerator } from '../src/index';
import { describe, it, expect } from 'vitest';

describe('index exports', () => {
  it('should have a named export RandomGenerator', () => {
    expect(RandomGenerator).toBeDefined();
    expect(typeof RandomGenerator).toBe('object');
  });

  it('should have a default export', () => {
    expect(RandomGeneratorDefault).toBeDefined();
    expect(typeof RandomGeneratorDefault).toBe('object');
  });
});
