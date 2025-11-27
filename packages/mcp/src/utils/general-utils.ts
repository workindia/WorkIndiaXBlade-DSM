import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import {
  CURSOR_RULES_VERSION_STRING,
  KNOWLEDGEBASE_DIRECTORY,
  PROJECT_ROOT_DIRECTORY,
} from './tokens.js';

const hasOutDatedRules = (ruleFilePath: string): boolean => {
  const ruleFileContent = readFileSync(ruleFilePath, 'utf8');
  return !ruleFileContent.includes(CURSOR_RULES_VERSION_STRING);
};

const getPackageJSONVersion = (): string => {
  const packageJson = JSON.parse(
    readFileSync(join(PROJECT_ROOT_DIRECTORY, 'package.json'), 'utf8'),
  ) as { version: string };
  return packageJson.version;
};

type DocumentationType = 'components' | 'patterns' | 'general';

/**
 * Reads the given documentation type directory and returns a list of available WorkIndia DSM docs
 * @param documentationType - The type of documentation to read
 * @returns A list of available WorkIndia DSM docs
 */
const getWorkIndiaDocsList = (
  documentationType: DocumentationType,
): string[] => {
  const docsList: string[] = [];
  try {
    // Read all markdown files and strip the .md extension
    const files = readdirSync(join(KNOWLEDGEBASE_DIRECTORY, documentationType));
    for (const file of files) {
      if (file.endsWith('.md') && !file.includes('index.md')) {
        docsList.push(file.replace('.md', '').trim());
      }
    }
  } catch (error: unknown) {
    console.error('Error reading knowledgebase directory:', error);
    return [];
  }

  return docsList;
};

export { hasOutDatedRules, getPackageJSONVersion, getWorkIndiaDocsList };
export type { DocumentationType };
