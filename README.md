# 🧠 HashMap Implementation in JavaScript

This project is a **manual implementation of a HashMap** in JavaScript using **Linked Lists** to handle collisions.  
It closely follows the requirements from [The Odin Project's HashMap Assignment](https://www.theodinproject.com/lessons/javascript-hashmap).

---

## 📁 Project Structure

This project includes three core classes:

- `Node`: A basic element of the linked list, holding key, value, and a reference to the next node.
- `LinkedList`: A simple singly-linked list to manage collisions at each hash bucket.
- `HashMap`: The main class implementing the HashMap logic, including insertion, retrieval, removal, resizing, and utility methods.

---

## 🚀 Features

- 🔐 **Set**: Add or update key-value pairs
- 🔎 **Get**: Retrieve a value by key
- ❌ **Remove**: Delete a key from the map
- ✅ **Has**: Check whether a key exists
- 🔑 **Keys**: Return an array of all keys
- 📦 **Values**: Return an array of all values
- 📏 **Resize**: Automatically resize when load factor exceeds 0.75
- 🧩 **Separate Chaining**: Collisions are handled using Linked Lists in each bucket

---

## ⚙️ How It Works

### Hashing

A basic hash function converts stringified keys to an index within the fixed-size `buckets` array.

