/**
 * Tests for deep merge utility
 */

import { deepMerge } from '../utils/deep-merge';

describe('deepMerge', () => {
  describe('Basic merging', () => {
    it('should merge two simple objects', () => {
      const target: Record<string, number> = { a: 1, b: 2 };
      const source: Partial<Record<string, number>> = { b: 3, c: 4 };
      const result = deepMerge(target, source);

      expect(result).toEqual({ a: 1, b: 3, c: 4 });
    });

    it('should not mutate the target object', () => {
      const target = { a: 1, b: 2 };
      const source = { b: 3 };
      deepMerge(target, source);

      expect(target).toEqual({ a: 1, b: 2 });
    });

    it('should return a new object', () => {
      const target: Record<string, number> = { a: 1 };
      const source: Partial<Record<string, number>> = { b: 2 };
      const result = deepMerge(target, source);

      expect(result).not.toBe(target);
      expect(result).not.toBe(source);
    });
  });

  describe('Nested object merging', () => {
    it('should merge nested objects', () => {
      const target: Record<string, Record<string, Record<string, number>>> = {
        level1: {
          level2: {
            a: 1,
            b: 2,
          },
        },
      };
      const source: Partial<typeof target> = {
        level1: {
          level2: {
            b: 3,
            c: 4,
          },
        },
      };
      const result = deepMerge(target, source);

      expect(result).toEqual({
        level1: {
          level2: {
            a: 1,
            b: 3,
            c: 4,
          },
        },
      });
    });

    it('should merge multiple levels of nesting', () => {
      const target: Record<
        string,
        Record<string, Record<string, Record<string, number>>>
      > = {
        a: {
          b: {
            c: {
              d: 1,
            },
          },
        },
      };
      const source: Partial<typeof target> = {
        a: {
          b: {
            c: {
              e: 2,
            },
          },
        },
      };
      const result = deepMerge(target, source);

      expect(result).toEqual({
        a: {
          b: {
            c: {
              d: 1,
              e: 2,
            },
          },
        },
      });
    });

    it('should preserve nested properties not in source', () => {
      const target: Record<string, Record<string, number>> = {
        a: {
          b: 1,
          c: 2,
        },
      };
      const source: Partial<typeof target> = {
        a: {
          b: 3,
        },
      };
      const result = deepMerge(target, source);

      expect(result).toEqual({
        a: {
          b: 3,
          c: 2,
        },
      });
    });
  });

  describe('Partial source objects', () => {
    it('should handle partial source objects', () => {
      const target: Record<string, number | Record<string, number>> = {
        a: 1,
        b: {
          c: 2,
          d: 3,
        },
      };
      const source: Partial<typeof target> = {
        b: {
          c: 4,
        },
      };
      const result = deepMerge(target, source);

      expect(result).toEqual({
        a: 1,
        b: {
          c: 4,
          d: 3,
        },
      });
    });

    it('should handle undefined values in source', () => {
      const target: Record<string, number> = { a: 1, b: 2 };
      const source: Partial<Record<string, number | undefined>> = {
        a: undefined,
        b: 3,
      };
      const result = deepMerge(target, source);

      // undefined values should not override existing values
      expect(result.a).toBe(1);
      expect(result.b).toBe(3);
    });
  });

  describe('Edge cases', () => {
    it('should handle empty target object', () => {
      const target: Record<string, number> = {};
      const source: Partial<Record<string, number>> = { a: 1, b: 2 };
      const result = deepMerge(target, source);

      expect(result).toEqual({ a: 1, b: 2 });
    });

    it('should handle empty source object', () => {
      const target: Record<string, number> = { a: 1, b: 2 };
      const source: Partial<Record<string, number>> = {};
      const result = deepMerge(target, source);

      expect(result).toEqual({ a: 1, b: 2 });
    });

    it('should handle both empty objects', () => {
      const target: Record<string, number> = {};
      const source: Partial<Record<string, number>> = {};
      const result = deepMerge(target, source);

      expect(result).toEqual({});
    });

    it('should not merge arrays', () => {
      const target: Record<string, number[]> = { arr: [1, 2] };
      const source: Partial<Record<string, number[]>> = { arr: [3, 4] };
      const result = deepMerge(target, source);

      // Arrays should be replaced, not merged
      expect(result.arr).toEqual([3, 4]);
    });

    it('should not merge null values as objects', () => {
      const target: Record<string, Record<string, number> | null> = {
        a: { b: 1 },
      };
      const source: Partial<Record<string, Record<string, number> | null>> = {
        a: null,
      };
      const result = deepMerge(target, source);

      // null should replace the object
      expect(result.a).toBeNull();
    });
  });

  describe('Complex scenarios', () => {
    it('should handle mixed types in nested objects', () => {
      const target: Record<
        string,
        string | number | boolean | Record<string, string | number>
      > = {
        string: 'hello',
        number: 42,
        boolean: true,
        nested: {
          a: 1,
          b: 'test',
        },
      };
      const source: Partial<typeof target> = {
        string: 'world',
        nested: {
          a: 2,
          c: 'new',
        },
      };
      const result = deepMerge(target, source);

      expect(result).toEqual({
        string: 'world',
        number: 42,
        boolean: true,
        nested: {
          a: 2,
          b: 'test',
          c: 'new',
        },
      });
    });

    it('should handle multiple nested levels with different properties', () => {
      const target: Record<
        string,
        Record<string, string | Record<string, string | Record<string, string>>>
      > = {
        level1: {
          prop1: 'value1',
          level2: {
            prop2: 'value2',
            level3: {
              prop3: 'value3',
            },
          },
        },
      };
      const source: Partial<typeof target> = {
        level1: {
          prop1: 'newValue1',
          level2: {
            prop2: 'newValue2',
            level3: {
              prop4: 'value4',
            },
          },
        },
      };
      const result = deepMerge(target, source);

      expect(result).toEqual({
        level1: {
          prop1: 'newValue1',
          level2: {
            prop2: 'newValue2',
            level3: {
              prop3: 'value3',
              prop4: 'value4',
            },
          },
        },
      });
    });
  });
});
