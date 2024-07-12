# OPEN-CLOSED PRINCIPLE

> Toda entidade de software deveria ser aberto para extensão mas fechado para modificação.

1. https://youtu.be/fsNCS5ktKrQ?si=y6NKTLW5lxdSFoDM
1. https://youtu.be/UlSNpWFTU3Q?si=HSQaNcXNMoOBuE0k

No React temos uma forma de se fazer isso chamada composition que você pode procurar pelo termo "Pattern Composition" ou "Pattern de composição" onde basicamento um componente pai recebe suas "partes" que o compõe (que são outros componentes) como children.

1. https://youtu.be/VsC1pm4CUFM
1. https://youtu.be/oPOKpSFqy-I

Existe um termo [criado pela Jenn Creighton](https://kentcdodds.com/chats/02/03/jenn-creighton-chats-with-kent-about-avoiding-an-apropcolypse) (Engenheira de Software da Netflix) chamado **"apropcalypse"**

```js
/**
 * <Input
 *  type="text"
 *  placeholder
 *  name
 *  value 
 *  icon
 *  ...
 * />
 */
```

Você pode enchergar o pattern compostion como um sanduiche, onde o pão é o componente pai principal que recebe os childrens que serão os recheios que você seleciona quais você quer naquele momento.

```js
/**
 * <Pão>
 *  <Tomate />
 *  <Queijo />]
 *  <Hamburguer />
 *  <Alface />
 * </Pão>
 */
```