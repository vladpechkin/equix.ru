export const cssToStyle = (string: string) =>
  Object.fromEntries(
    string
      .replaceAll(": ", ":")
      .replaceAll("; ", ";")
      .split(";")
      .filter(Boolean)
      .map((str) => str.split(":"))
      .map((arr) => [arr[0].replace(/-./g, (m) => m.toUpperCase()[1]), arr[1]])
  );
