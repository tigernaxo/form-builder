
export {};

declare global {
  interface HTMLElementConstructor {
    xAppendChild(convasId: string, node :Node, ffsetX:number, offsetY:number): void
  }
}