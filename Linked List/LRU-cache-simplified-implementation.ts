class LRUCache {
  private map = new Map();
  private c = 0;

  constructor(capacity: number) {
    this.c = capacity;
  }

  get(key: number): number {
    const value = this.map.get(key);

    if (value !== undefined) {
      this.map.delete(key);
      this.map.set(key, value);

      return value;
    }

    return -1;
  }

  put(key: number, value: number): void {
    if (this.c <= this.map.size && !this.map.has(key)) {
      this.map.delete(this.map.entries().next().value[0]);
    }

    this.map.delete(key);
    this.map.set(key, value);
  }
}
