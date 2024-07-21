## SRP - SINGLE RESPONSABILITY PRINCIPLE 

O Princípio da Responsabilidade Única.

O livro Arquitetura Limpa do Robert C. Martin fala sobre o princípio no capítulo 7, porém ele aborda as implicações arquiteturais. Diferente do que muitos dizem o autor reconhece este princípio como o menos incompreendido devido ao nome inadequado que sugere que um módulo deve fazer uma única coisa. A definição exata é "*um módulo deve ser responsável por um, e apenas um, ator.*". Quem aborda dessa forma também é o Pisani da ArcH no vídeo [Single Responsibility Principle: Entenda o conceito por trás deste princípio do SOLID.](https://youtu.be/KtF0LKi-tAo)

As duas implicações arquiteturais obvias ao desconsiderar o princípio são a duplicação acidental e as fusões. Considere o exemplo de uma classe Employe, ela tem métodos que podem ser usados pelo departamentos diferentes. A alteração do código para um poderia afetar outro. O princípio diz exatamente para separar o código no qual atores diferentes dependam. 

Na prática, cada método estaria em uma classe diferente, mas além disso também seria necessário separar os dados das funções em uma outra classe. Isto resultaria em mais classes para instanciar, mas uma solução moderna são os `facades`.

Quem fez esta mesma abordagem do livro é o Otavio Lemos no vídeo [139 - Entenda o Single Responsibility Principle do SOLID | theWiseDev SOLID](https://youtu.be/P9RJs4oatQM). Ele complementa a outra solução dizendo que a função mais importante pode estar dentro dela juntos com os dados que precisar e as menos importantes são apenas instanciadas nelas servindo ela própria como uma `facade`.


---

> [!NOTE]
> VÍDEO: =="***SOLID fica FÁCIL com Essas Ilustrações*** "==
> AUTHOR: **Filipe Deschamps**
> URL: https://youtu.be/6SfrO3D4dHM

O vídeo aborda todos os princípios utilizando como base o artigo "[The S.O.L.I.D Principles in Pictures - Ugonna Thelma | medium](https://medium.com/backticks-tildes/the-s-o-l-i-d-principles-in-pictures-b34ce2f1e898)". O artigo explica com ilustrações. Este princípio é explicado com um robô garçom que realiza varias coisas diferentes mas o ideal seria um robô diferente para cada tipo de atividade. O robô, na programação, representa, uma classe, um componente ou uma função. 

Por que programar assim? 

- Reaproveitamento de código facilitado
- Refatoramento de código facilitado 
- Teste automatizados 
- Menos bugs
- Isolamento de erros

---

> [!NOTE]
> VÍDEO: =="***18 - Princípio da responsabilidade única*** "==
> AUTHOR: **Otavio Lemos**
> URL: https://youtu.be/fKAf74I3Yas

O autor explica que a classe ou modulo deve apenas uma responsabilidade, e ele explica que a responsabilidade é responder para alguém. 

Se você pensar em uma empresa podemos pensar em uma classe de funcionário ou colaborador, esta classe pode implementar métodos para calcular salário, salvar no banco de dados, procurar as informações desse colaborador, etc. O método que calcula o salário pode retornar uma resposta para o departamento financeiro, os métodos que manipulam o banco de dados pode retornar uma resposta para aplicação ou departamento do DBA (o administrador de banco de dados), etc. 

Mas esta classe em geral esta ferindo o princípio por que esta respondendo para 3 departamentos diferentes para funções ou responsabilidades diferentes. Qualquer alteração nesta classe, mesmo que somente em um método, pode afetar toda a estrutura da empresa que depende desta classe. O ideal é separar cada atividade em um módulo ou classe diferente que responde a somente um departamento com as limitações impostas aquele departamento.

---

> [!NOTE]
> VÍDEO: =="***S01E02: Dominando o "S" do SOLID | Codeografia*** "==
> AUTHOR: **Tio Jobs**
> URL: https://youtu.be/B7ryFykQ4Dw

O vídeo explica o conceito na prática com "meio php" (um php vanilla digamos assim, na unha)

1. `composer init`
2. criar um arquivo `index.php` (arquivo inicial)
3. criar um arquivo `src/app.php` (classes e instancias)
4. criar um arquivo `src/CreateUser.php` (Implementação da criação de usuário)
5. criar um arquivo `src/Mail.php` (Implementação da criação de usuário)

Este projeto irá simular um sistema de cadastro de usuário. No arquivo `CreateUser.php` vai ter o seguinte código, por exemplo:

```php
class CreateUser {
	// classes id, nome, email
	// método construtor
	// método validarEmail que retorna boolean
	// método enviarEmail que implementa a classe Mail
}
```

Os métodos apenas retornam um texto com `echo` (em `app.php`) por que queremos é apenas simular. No geral, o exemplo mostra que a classe `CreateUser` não esta coesa (propósito claro e bem definido) com o princípio SOLID, por que embora ela tenha um um único propósito (cadastrar usuário) ela faz mais do que sua responsabilidade (enviar email).

O ideal seria separa os métodos em outras classes e quem chamou a classe `CreateUser` também vai chamar as outras classes, e assim a `CreateUser` só vai ter a única responsabilidade.

Para um exemplo do princípio aplicado no Laravel: https://youtu.be/Dfn1EvD9LFs

---
Ouros:
1. "***SOLID: SRP - Single Responsability Principle (Princípio da Responsabilidade Única)***", **André Secco**, https://youtu.be/9q_BWrCGMVM
2. "***SOLID - Single Responsibility Principle (SRP) / Princípio da Responsabilidade Única***", **João Paulo S. Araújo | Dev dotNET | Cloud**, https://youtu.be/56OVfbiOnQY
3. "***COMO APLICAR SOLID NO REACT - Single Responsibility Principle SRP***", **Dev Junior Alves**, https://youtu.be/4xBVqWmUoIs
4. "***Seu próximo back-end Node com TESTES! (+ SOLID)***", Rocketseat, https://www.youtube.com/watch?v=jBOLRzjEERk


pratica
https://www.youtube.com/live/mjBsii0eiuI?si=DohgDRge17MSfAKE

clean achtecture
https://youtu.be/pJaBq_nBpiQ?si=6QJhZ4KgRfVsoe0t
https://www.youtube.com/live/zcDKQqFmjEA?si=DFKZ3y2r3ymTM-7V
https://youtu.be/7BNoxRntLYo?si=E04rCn3Nro5ZH4cO
https://youtu.be/iUQVZHzqGuc?si=UfWklOA3jwVcQkTN
https://www.youtube.com/live/ewEFpEgaSdg?si=ZtQPHEb9geJYYv_7
https://www.youtube.com/live/O7Yclo_jbFY?si=AUCzz805BEpKzow6
https://youtu.be/ZOyEFaBSEfk
https://youtu.be/yLPxkIxbNDg

ddd
https://youtu.be/XTmvAj5OSQI

## OCP - OPEN/CLOSE PRINCIPLE

O Princípio do Aberto e Fechado.

O livro Arquitetura Limpa do Robert C. Martin fala sobre o princípio no capítulo 8. Ele diz que o princípio é reconhecido como um guia para classes e módulos, mas que também é muito importante quando consideramos o nível dos componentes arquiteturais. A definição exata é "*Um artefato de software deve ser aberto para extensão, mas fechado para modificação*". 

Um forma de se conseguir fazer isso, o autor conta, é:

>"*Primeiro, devemos separar adequadamente as coisas que mudam por razões diferentes (o Princípio da Responsabilidade Única) para, então, organizarmos as dependências entre essas coisas de forma apropriada (o Princípio da Inversão de Dependência).*" (p. 71)

Ele da o exemplo de um sistema que exibe um relatório financeiro na web e por impresso, mesma abordagem do Otavio Lemos no vídeo ["***140 - Clean Architecture: Open/Closed Principle | theWiseDev SOLID***"](https://youtu.be/fsNCS5ktKrQ)

Considere um exemplo de um sistema financeiro, queremos imprimir um relatório financeiro em uma página web  em que os número negativos apareçam em vermelho. Mas imagine uma alteração e agora o sistema deveria também poder imprimir o relatório, paginado e com números negativos entre parênteses. 

Se a arquitetura do sistema que gera o relatório for boa a alteração do código base que já funciona vai ser minimizada, ou zero. Isso pode ser feito aplicando os princípios de responsabilidade única para separar o módulo para cada ator. A organização do módulo deve ser feita para que a funcionalidade seja estendida sem que seja necessário modifica-la (com classes e componentes).

O objetivo dele é deixar o sistema fácil de sofrer alterações sem que ocorrer mudanças muito fortes no código existente. Isso é alcançado quando há uma divisão em componentes com uma hierarquia de dependências que protegem os componentes de alo nível de mudanças que possam ocorrer em componentes de baixo nível. 

>*"é melhor que os detalhes de implementação, nossas regras de negócio, fiquem escondidos e protegidos dos módulos que utilizam essas regras de negócio."*

Os relacionamentos dos componentes são unidirecionais. Ou seja, uma classe conhece a somente a classe que ela implementa. 

>"*Para que componente A seja protegido das mudanças no componente B, o componente B deve depender do componente A.*" (p. 73)


> [!NOTE]
> VÍDEO: =="***SOLID fica FÁCIL com Essas Ilustrações*** "==
> AUTHOR: **Filipe Deschamps**
> URL: https://youtu.be/6SfrO3D4dHM

O vídeo aborda todos os princípios utilizando como base o artigo "[The S.O.L.I.D Principles in Pictures - Ugonna Thelma | medium](https://medium.com/backticks-tildes/the-s-o-l-i-d-principles-in-pictures-b34ce2f1e898)". O artigo explica com ilustrações. Geralmente é neste princípio que existe um debate mais acalorado. Geralmente dizem que entidades ou funções devem estar abertas para extensão mas fechadas para modificação. Mas a ilustração no artigo sobre este princípio mostra um robô que sabe cortar e depois de uma fatoração ele sabe cortar e pintar (ele não perdeu sua habilidade anterior de corte, e ela nem foi substituída).

Imagine o exemplo de um processamento de pagamentos. Ela recebe um cartão, faz as validações, utiliza algum serviço externo antifraude e por fim realiza a cobrança. Mas os requisitos mudam, o que era serviço de pagamento para cartão de crédito muda para receber cartão de débito, ou ainda pior, processar boleto. 

Você iria violar o princípio de não fazer alterações se adicionasse mais uma condicional para boletos. O ideal seria um nível de abstração correto para estender sua implementação sem a modificar, mesmo princípio de plugins.

O debate existe por que a ilustração, a ideia de estender, poderia ferir o principio de responsabilidade única. Ele levante um insight de que um princípio neste caso pode causar um efeito dominó em outro, seja para o bem ou mal.

---

> [!NOTE]
> VÍDEO: =="***140 - Clean Architecture: Open/Closed Principle | theWiseDev SOLID*** "==
> AUTHOR: **Otavio Lemos**
> URL: https://youtu.be/fsNCS5ktKrQ

Definido em 1988, o principio define que um modulo deve estar aberto para extensão e fechado para modificação.

O princípio é importante para módulos, mas é ainda mais interessante a nível de arquitetura. 


## LSP - LISKOV PRINCIPLE

> [!NOTE]
> VÍDEO: =="***SOLID fica FÁCIL com Essas Ilustrações*** "==
> AUTHOR: **Filipe Deschamps**
> URL: https://youtu.be/6SfrO3D4dHM

> "*Ele que se a gente tem uma classe e dela criarmos uma subclasse (utilizando herança), o objeto ou instância resultante dessa subclasse tem que conseguir substituir o objeto da classe principal, sem quebrar o programa.*" 

Isto força seu programa a ter um nível de abstração suficiente para que programa não quebre. Imagine a classe Ave que tenha os métodos bicar e voar. Se você criar uma subclasses elas herdarão seus métodos, para uma classe pica-pau tudo bem bicar e voar, mas para pinguim não.

>"*Se você esta lutando com o que herda, você precisa desfazer o que herdou, é bem possível que você já começou com a abstração errada.*"

O princípio irá forçar a pensar o que a classe pai deveria fornecer em comum para as classes que a herdam. Ele sugere que você não faça subclasses terem um comportamento não esperado.


> [!NOTE]
> VÍDEO: =="***SOLID: LSP - Liskov Substitution Principle (Princípio da Substituição de Liskov)*** "==
> AUTHOR: **André Secco**
> URL: https://www.youtube.com/watch?v=7hI75hKFMuM


Acredita que este é o princípio mais incompreendido.

>*"Classes derivadas devem poder serem substituídas por suas classes bases."*

Um exemplo é uma variável tipada receber a instância de uma classe.

```java
Cliente cliente = new ClienteContratado("André Seco", DateTime.Today);
```

>*"Isso foi uma forma que o princípio trouxe para que você consiga perceber quando uma entidade sua não deve ser uma classe derivada daquele tipo base"*

> [!NOTE]
> Quando você tipou a variável `cliente` com o tipo `Cliente` você estabeleceu regras específicas que você irá descobrir no momento da atribuição se a classe instanciada deveria estar sendo instanciada. 

>*"A partir desse princípio você descobre se você esta forçando a barra e tentando reaproveitar alguma coisa" que não deve ser reaproveitada"*



211 - Não seja tão SOLID assim! 😅 | theWiseDev SOLID
https://youtu.be/Cdcp5rd1xz8?list=PLpJIjBkNnEt_IyTngYRkXXwxqz-Ae74ub

## ISP - INTERFACE SEGREGATION PRINCIPLE

> [!NOTE]
> VÍDEO: **SOLID: ISP - Interface Segregation Principle (Princípio da Segregação de Interfaces)*** 
> AUTHOR: **André Secco**
> URL:  https://www.youtube.com/watch?v=QeuojKDdQNI

O princípio da segregação de interface diz:

> *"cliente não devem ser forçados a depender de métodos que não usam"*

Tem semelhança com o LSP (que também forçava implementar coisas que não precisava). Mesmo exemplo da classe ave com os métodos de bicar e voar. Não faz sentido implementar o voar para o Pinguin, ele iria depender de um método que não usa.

Segregar de forma que consiga modelar de uma forma que faça sentido. Isso poderia ser feito implementando uma classe ave que tenha apenas o método de bicar e outra classe ave voadora que extenda a classe ave e tenha a mais a classe voar.

```java
public interface IAve {
	void Bicar();
}

public interface IAveVoadora: IAve {
	void Voar()
}

public class Gavião: IAveVoadora {}
public class Pinguin: IAve {}
```

No livro é dito que também um caso pode depender de uma linguagem de programação. Em linguagens fortemente tipadas como o Java alguma declaração usando o include pode forçar a recompilação, o que não ocorre em linguagens dinamicamente tipadas como Python e Ruby que são inferidas em tempo de execução.

>*"Em geral, é prejudicial depender de módulos que contenham mais elementos do que você precisa." (p. 86*)




SOLID com JavaScript - https://youtu.be/XzdhzyAukMM