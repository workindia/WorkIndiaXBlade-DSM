import { readFileSync } from 'fs';
import { resolve } from 'path';
import {
  KNOWLEDGEBASE_DIRECTORY,
  ICONS_KNOWLEDGEBASE_DIRECTORY,
} from './tokens.js';
import type { DocumentationType } from './general-utils.js';

const getWorkIndiaDocsResponseText = ({
  docsList,
  documentationType,
}: {
  docsList: string;
  documentationType: DocumentationType;
}): string => {
  const docNames = docsList.split(',').map((name: string) => name.trim());

  let responseText = `WorkIndia DSM ${documentationType} documentation for: ${docsList}\n\n`;

  const baseDir =
    documentationType === 'icons'
      ? ICONS_KNOWLEDGEBASE_DIRECTORY
      : KNOWLEDGEBASE_DIRECTORY;

  for (const docName of docNames) {
    responseText += `# ${docName}\n`;

    try {
      const filePath = resolve(baseDir, documentationType, `${docName}.md`);
      const content = readFileSync(filePath, 'utf8');
      responseText += `${content}\n\n`;
    } catch {
      responseText += `⚠️ Error: Could not read documentation for ${docName} in ${documentationType}. The documentation may not exist or there may be an issue with the file.\n\n`;
    }
  }

  return responseText;
};

export { getWorkIndiaDocsResponseText };
