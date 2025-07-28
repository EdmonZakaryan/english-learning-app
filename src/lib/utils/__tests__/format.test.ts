import {
  cn,
  formatDate,
  formatDateTime,
  formatTimeAgo,
  truncateText,
  capitalizeFirst,
  slugify,
  formatNumber,
  formatPercentage,
  getLevelColor,
  getLevelLabel,
  getErrorMessage,
  groupBy,
  unique,
} from '../format';

describe('Format Utilities', () => {
  describe('cn (className merger)', () => {
    it('should merge class names correctly', () => {
      expect(cn('px-2 py-1', 'text-sm')).toBe('px-2 py-1 text-sm');
      expect(cn('px-2', 'px-4')).toBe('px-4'); // Should override
      expect(cn('px-2 py-1', undefined, 'text-sm')).toBe('px-2 py-1 text-sm');
    });
  });

  describe('Date formatting', () => {
    const testDate = new Date('2024-01-15T10:30:00Z');

    it('should format date correctly', () => {
      const formatted = formatDate(testDate);
      expect(formatted).toBe('January 15, 2024');
    });

    it('should format date time correctly', () => {
      const formatted = formatDateTime(testDate);
      expect(formatted).toContain('2024');
      expect(formatted).toContain('Jan');
    });

    it('should format time ago correctly', () => {
      const now = new Date();
      const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);
      const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);

      expect(formatTimeAgo(oneHourAgo)).toMatch(/hour|hours/);
      expect(formatTimeAgo(oneDayAgo)).toMatch(/day|days/);
    });
  });

  describe('Text manipulation', () => {
    it('should truncate text correctly', () => {
      const longText = 'This is a very long text that should be truncated';
      expect(truncateText(longText, 20)).toBe('This is a very long...');
      expect(truncateText('Short text', 20)).toBe('Short text');
    });

    it('should capitalize first letter', () => {
      expect(capitalizeFirst('hello world')).toBe('Hello world');
      expect(capitalizeFirst('HELLO')).toBe('Hello');
      expect(capitalizeFirst('')).toBe('');
    });

    it('should create slugs correctly', () => {
      expect(slugify('Hello World')).toBe('hello-world');
      expect(slugify('Test & Example')).toBe('test-example');
      expect(slugify('Multiple   Spaces')).toBe('multiple-spaces');
    });
  });

  describe('Number formatting', () => {
    it('should format numbers correctly', () => {
      expect(formatNumber(1234)).toBe('1,234');
      expect(formatNumber(1234567)).toBe('1,234,567');
      expect(formatNumber(123)).toBe('123');
    });

    it('should format percentages correctly', () => {
      expect(formatPercentage(75, 100)).toBe('75%');
      expect(formatPercentage(12, 100)).toBe('12%');
      expect(formatPercentage(100, 100)).toBe('100%');
    });
  });

  describe('Level utilities', () => {
    it('should return correct level colors', () => {
      expect(getLevelColor('beginner')).toBe('text-green-600 bg-green-100');
      expect(getLevelColor('intermediate')).toBe('text-yellow-600 bg-yellow-100');
      expect(getLevelColor('advanced')).toBe('text-red-600 bg-red-100');
      expect(getLevelColor('unknown' as any)).toBe('text-gray-600 bg-gray-100');
    });

    it('should return correct level labels', () => {
      expect(getLevelLabel('beginner')).toBe('Beginner');
      expect(getLevelLabel('intermediate')).toBe('Intermediate');
      expect(getLevelLabel('advanced')).toBe('Advanced');
      expect(getLevelLabel('unknown' as any)).toBe('Unknown');
    });
  });

  describe('Error handling', () => {
    it('should extract error messages correctly', () => {
      expect(getErrorMessage(new Error('Test error'))).toBe('Test error');
      expect(getErrorMessage('String error')).toBe('String error');
      expect(getErrorMessage({ message: 'Object error' })).toBe('Object error');
      expect(getErrorMessage(null)).toBe('An unknown error occurred');
      expect(getErrorMessage(undefined)).toBe('An unknown error occurred');
    });
  });

  describe('Array utilities', () => {
    it('should group array items correctly', () => {
      const items = [
        { category: 'A', value: 1 },
        { category: 'B', value: 2 },
        { category: 'A', value: 3 },
      ];

      const grouped = groupBy(items, (item) => item.category);
      expect(grouped.A).toHaveLength(2);
      expect(grouped.B).toHaveLength(1);
      expect(grouped.A[0].value).toBe(1);
      expect(grouped.A[1].value).toBe(3);
    });

    it('should return unique values', () => {
      expect(unique([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
      expect(unique(['a', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c']);
      expect(unique([])).toEqual([]);
    });
  });
  });