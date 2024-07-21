a gente não deve depener de algo concreto, a gente deve depender de abstrações

```js
function handleLogin({ email, password }){
  // Service()
}
```

A Service vai ser um processo intermediário: page.tsx -> Service -> API Login. Dessa forma sempre houver uma mudança na API a página não sera atingida diretamente, a mudança deverá ser feita diretamente na Service. Invertemos as dependencias.

Outro exemplo é usando Custom Hooks. Médodos que retornam um objeto apenas com métodos e variaveis que você irá usar:

```jsx
function customHook(){
  // lógica

  return { metodo1, ..., variavel1, ... }
}
```