# Dicas, conceitos, anotações..

A maioria das anotações princípais vão estar aqui, porém outras podem estar
diretamente comentadas no código.


# o que é o typescript? 

É um superset do javascript, ele fornece uma serie de poderes que nós ajudam a encontrar erros
e codar no tempo de desenvolvimento, como validação de tipos, e recursos
de OO com autocomplete e mais.

- Open source e desenvolvimento aberto
- Segue o padrão ECMAScript
- Tipagem estática e inovadora
- Manuntenção contínua ( novas features, etc)
- Desenvolvido e mantido ela comunidade técnica

# tsconfig.json

Todo projeto em typescript precisa do tsconfig.json, porque esse arquivo é oque 
define as configurações do typescript, como onde vai ser jogado o resultado do transpiler,
qual versão de ecmascript nós vamos usar e por ai vai..você pode ver todos os detalhes
aqui: https://www.typescriptlang.org/pt/tsconfig


# Motivos para usar?

Bom primeiro que ele permite a gente escolher a versão na qual precisamos como, ES6, ES7 e etc..
forte apoio a POO e FRP ( function reactive programming )
Linguagem estática tpipada ajuda adepurar o código ( é mais prevísivel e fato de encontrar erros)
E ele ajuda a retornar erros antes do tempo de execução.

# TypeAnnotation

É o valor que nós damos para uma variável relacionado ao tipo dela por exemplo:
let nome: string; aqui estamos dizendo que a variável do tipo nome só recebe valores do tipo string.
Lembrando que não é  obrigatório, mas é sempre recomendado utilizar para poder nós ajudar
com os futuros erros e depuração.