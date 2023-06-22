export class ImageComponent {
  private element: HTMLImageElement;
  constructor() {
    this.element = document.createElement('img');
    this.element.setAttribute('class', 'image');
    this.element.src = `https://picsum.photos/200/300`
  }

  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin')  {
    parent.insertAdjacentElement(position, this.element)
  }
}
