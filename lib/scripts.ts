export function removeMarkdownFormatting(markdownText: string) {
    // Remove headers
    markdownText = markdownText.replace(/^#+\s+/gm, '');
  
    // Remove bold and italic
    markdownText = markdownText.replace(/\*\*([^*]+)\*\*/g, '$1'); // bold
    markdownText = markdownText.replace(/__([^_]+)__/g, '$1'); // bold
    markdownText = markdownText.replace(/\*([^*]+)\*/g, '$1'); // italic
    markdownText = markdownText.replace(/_([^_]+)_/g, '$1'); // italic
  
    // Remove strikethrough
    markdownText = markdownText.replace(/~~([^~]+)~~/g, '$1');
  
    // Remove inline code
    markdownText = markdownText.replace(/`([^`]+)`/g, '$1');
  
    // Remove code blocks
    markdownText = markdownText.replace(/```[\s\S]*?```/g, '');
    markdownText = markdownText.replace(/~~~[\s\S]*?~~~/g, '');
  
    // Remove links but keep the text
    markdownText = markdownText.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
  
    // Remove images but keep the alt text
    markdownText = markdownText.replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1');
  
    // Remove blockquotes
    markdownText = markdownText.replace(/^>\s+/gm, '');
  
    // Remove horizontal rules
    markdownText = markdownText.replace(/^[-\*=_]{3,}\s*$/gm, '');
  
    // Remove unordered list items
    markdownText = markdownText.replace(/^\s*[-*+]\s+/gm, '');
  
    // Remove ordered list items
    markdownText = markdownText.replace(/^\s*\d+\.\s+/gm, '');
  
    return markdownText;
  }