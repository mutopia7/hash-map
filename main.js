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
