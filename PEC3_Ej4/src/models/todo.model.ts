

export class Todo {
  id: string;
  text: string;
  complete: boolean;
  
  constructor({ text, complete }: {text?: string, complete?: boolean} = { complete: false }) {
    this.id = this.uuidv4();
    this.text = text || '';
    this.complete = complete || false;
  }

  uuidv4(): string {
    return (([1e7] as any) + -1e3 + -4e3 + -8e3 + -1e11).replace(
      /[018]/g,
      (c: number) =>
        (
          c ^
          (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
        ).toString(16)
    );
  }
}
