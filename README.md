# Biblioteca de extração de URLs

**O objetivo dessa biblioteca é extrair todas as URLs contidas em um markdown.**


## Para instalar a biblioteca siga os seguintes passos: 
1.   Instale o node e o npm
2.   Instale a biblioteca `$npm install markdown-ss`


## O método utilizado na biblioteca é:

### getLinksFromMd(str);

Exemplo de uso:

```
$node
> let extract = require('markdown-ss')
> extract.getLinksFromMd(""); // {}
> extract.getLinksFromMd(str); // [{href: url}]
```

Retornos:
* um objeto vazio se a entrada for uma string vazia
* uma array com objetos de todas as URLs encontradas no seguinte modelo {href: url}.


## Roadmap

### Versão 1.0.0
- Funcionalidades: Extrai URLs contidas em um markdown.