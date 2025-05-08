## 1. What are some differences between interfaces and types in TypeScript?

TypeScript allows us to define the shape of data and create custom types. To do this, we can use either `interfaces` or `types`. There are some key differences between them:

### Differences Between `type` and `interface`

#### 1. Extending

-`interface` can be extended multiple times.
-`type` cannot be extended once declared (but you can use intersection types to combine).

```ts
interface Person {
  name: string;
}

interface Person {
  age: number;
}

// Now A has both name and age
```

```ts
type B = {
  name: string;
};

```

#### 2. Different Types of Data

-`type` can represent:
  - Unions
  - Tuples
  - Primitives
  - Functions

```ts
type Person = {
  country: string;
  population: number;
};

type Status = "active" | "inactive";
type Pair = [number, number];
type Callback = () => void;
```

-`interface` can only represent object structures:

```ts
interface Person {
  country: string;
  population: number;
}
```

---

## 2. What is the use of the `keyof` keyword in TypeScript?

The `keyof` keyword in TypeScript is used to extract the keys of an object type and create a string literal union type.

### Example

```ts
type Car = {
  name: string;
  model: number;
};

type CarKeys = keyof Car; 
// Equivalent to: "name" | "model"
```

---

## Why do we need the `keyof` operator?

### Enables Generic Functions

```ts
function getCar<T>(obj: T, key: keyof T): T[keyof T] {
  return obj[key];
}
```

### Prevents Runtime Errors

It ensures that we are accessing valid properties, helping us catch mistakes at compile time.

### Avoids Hardcoded Keys

We don’t have to manually write key names as strings, reducing typos and making refactoring easier.

---

