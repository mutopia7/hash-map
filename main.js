class Node {
  constructor(key, value, next = null) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // اضافه کردن یا به‌روزرسانی Node با کلید مشخص
  append(key, value) {
    if (!this.head) {
      this.head = new Node(key, value);
      return;
    }

    let current = this.head;
    while (current) {
      if (current.key === key) {
        current.value = value; // به‌روزرسانی مقدار اگر کلید وجود داشته باشه
        return;
      }
      if (!current.next) break;
      current = current.next;
    }

    current.next = new Node(key, value);
  }

  // پیدا کردن مقدار با کلید مشخص
  find(key) {
    let current = this.head;
    while (current) {
      if (current.key === key) return current.value;
      current = current.next;
    }
    return undefined;
  }

  // حذف Node با کلید مشخص
  remove(key) {
    if (!this.head) return false;

    if (this.head.key === key) {
      this.head = this.head.next;
      return true;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.key === key) {
        current.next = current.next.next;
        return true;
      }
      current = current.next;
    }

    return false;
  }
}

class HashMap {
  constructor(initialCapacity = 16) {
    this.buckets = new Array(initialCapacity).fill(null).map(() => new LinkedList());
    this.capacity = initialCapacity;
    this.size = 0;
  }

  hash(key) {
    let hash = 0;
    const stringKey = String(key);
    for (let i = 0; i < stringKey.length; i++) {
      hash += stringKey.charCodeAt(i);
    }
    return hash % this.capacity;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    const oldValue = bucket.find(key);
    if (oldValue === undefined) this.size++;

    bucket.append(key, value);

    if (this.size / this.capacity > 0.75) {
      this.resize();
    }
  }

  get(key) {
    const index = this.hash(key);
    return this.buckets[index].find(key);
  }

  remove(key) {
    const index = this.hash(key);
    const removed = this.buckets[index].remove(key);
    if (removed) this.size--;
    return removed;
  }

  has(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    let current = bucket.head;

    while (current) {
      if (current.key === key) return true;
      current = current.next;
    }
    return false;
  }

  keys() {
    const allKeys = [];

    for (const bucket of this.buckets) {
      let current = bucket.head;
      while (current) {
        allKeys.push(current.key);
        current = current.next;
      }
    }
    return allKeys;
  }

  values() {
    const allValues = [];

    for (const bucket of this.buckets) {
      let current = bucket.head;
      while (current) {
        allValues.push(current.value);
        current = current.next;
      }
    }
    return allValues;
  }

  resize() {
    const oldBuckets = this.buckets;
    this.capacity *= 2;
    this.buckets = new Array(this.capacity).fill(null).map(() => new LinkedList());
    this.size = 0;

    for (const bucket of oldBuckets) {
      let current = bucket.head;
      while (current) {
        this.set(current.key, current.value);
        current = current.next;
      }
    }
  }
}
