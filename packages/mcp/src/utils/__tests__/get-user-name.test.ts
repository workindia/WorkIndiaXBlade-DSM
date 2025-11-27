import { getUserName } from '../get-user-name.js';

describe('get-user-name', () => {
  describe('getUserName', () => {
    it('should extract username from macOS path', () => {
      const result = getUserName({
        currentProjectRootDirectory: '/Users/john/Desktop/my-project',
      });
      expect(result).toBe('john');
    });

    it('should extract username from Linux path', () => {
      const result = getUserName({
        currentProjectRootDirectory: '/home/jane/projects/app',
      });
      expect(result).toBe('jane');
    });

    it('should extract username from Windows path (normalized)', () => {
      const result = getUserName({
        currentProjectRootDirectory: 'C:/Users/bob/Documents/work',
      });
      expect(result).toBe('bob');
    });

    it('should handle path with trailing slash', () => {
      const result = getUserName({
        currentProjectRootDirectory: '/Users/alice/',
      });
      expect(result).toBe('alice');
    });

    it('should exclude common directory names', () => {
      const result = getUserName({
        currentProjectRootDirectory: '/Users/Desktop/projects/app',
      });
      // Should not return 'Desktop', should return first meaningful segment
      expect(result).not.toBe('Desktop');
    });

    it('should exclude Documents directory name', () => {
      const result = getUserName({
        currentProjectRootDirectory: '/Users/Documents/projects/app',
      });
      expect(result).not.toBe('Documents');
    });

    it('should exclude Downloads directory name', () => {
      const result = getUserName({
        currentProjectRootDirectory: '/Users/Downloads/projects/app',
      });
      expect(result).not.toBe('Downloads');
    });

    it('should exclude Projects directory name', () => {
      const result = getUserName({
        currentProjectRootDirectory: '/Users/Projects/app',
      });
      expect(result).not.toBe('Projects');
    });

    it('should exclude workspace directory name', () => {
      const result = getUserName({
        currentProjectRootDirectory: '/Users/workspace/app',
      });
      expect(result).not.toBe('workspace');
    });

    it('should return first segment for non-standard path structure', () => {
      const result = getUserName({
        currentProjectRootDirectory: '/some/custom/path',
      });
      // Should return first meaningful segment or 'unknown'
      expect(result).toBeTruthy();
      expect(typeof result).toBe('string');
    });

    it('should return "unknown" for empty path', () => {
      const result = getUserName({
        currentProjectRootDirectory: '',
      });
      expect(result).toBe('unknown');
    });

    it('should return "unknown" for root path', () => {
      const result = getUserName({
        currentProjectRootDirectory: '/',
      });
      expect(result).toBe('unknown');
    });

    it('should handle path without Users or home', () => {
      const result = getUserName({
        currentProjectRootDirectory: '/var/www/html',
      });
      // Should return first segment
      expect(result).toBe('var');
    });

    it('should handle path with multiple segments after username', () => {
      const result = getUserName({
        currentProjectRootDirectory: '/Users/charlie/deep/nested/path/project',
      });
      expect(result).toBe('charlie');
    });

    it('should handle Windows-style path with backslashes normalized', () => {
      // Paths are normalized, so forward slashes are used
      const result = getUserName({
        currentProjectRootDirectory: 'C:/Users/david/Projects',
      });
      expect(result).toBe('david');
    });
  });
});
