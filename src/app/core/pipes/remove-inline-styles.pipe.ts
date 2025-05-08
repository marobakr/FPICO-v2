import { isPlatformBrowser } from '@angular/common';
import { inject, Pipe, PipeTransform, PLATFORM_ID } from '@angular/core';

@Pipe({
  name: 'removeInlineStyles',
  standalone: true,
})
export class RemoveInlineStylesPipe implements PipeTransform {
  _PLATFORM_ID = inject(PLATFORM_ID);

  transform(value: string): string {
    console.log('value', value);
    if (!value) return '';

    if (!isPlatformBrowser(this._PLATFORM_ID)) return '';
    // 1. Parse the HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(value, 'text/html');

    // 2. Process all elements in the document
    this.cleanElement(doc.body);

    // 3. Return the cleaned HTML content
    return doc.body.innerHTML;
  }

  // Helper method to remove all attributes from an element
  private cleanElement(element: Element): void {
    // Remove all attributes from the element
    Array.from(element.attributes).forEach((attr) => {
      if (attr.name != 'src' && attr.name != 'width') {
        element.removeAttribute(attr.name);
      }
    });

    // Remove inline styles
    element.removeAttribute('style');

    // Recursively clean all child elements
    Array.from(element.children).forEach((child) => {
      this.cleanElement(child);

      // Remove empty elements (those without content or only whitespace)
      if (
        child.children.length === 0 &&
        !child.textContent?.trim() &&
        !child.hasAttribute('src')
      ) {
        child.remove();
      }
    });
  }
}
