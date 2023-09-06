declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// もしSCSSやSassを使用している場合、以下の宣言も追加することができます
// declare module '*.module.scss' {
//   const classes: { [key: string]: string };
//   export default classes;
// }

// declare module '*.module.sass' {
//   const classes: { [key: string]: string };
//   export default classes;
// }
