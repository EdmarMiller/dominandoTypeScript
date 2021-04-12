# Entendendo o compilador TypeScript

## Compilador TS

- Navegadores não leem TS so JS
- o T ype S cript C ompiler (TSC) ==> transforma o código TS em JS.

Compilador ==> tipo um transformador.

# 3 maneiras de configurar o compilador TS

  1. Linha de comando pro frag ```tsc aula01.ts --target "ES5" ```
  2. Através do arquivo tsconfig.json ou jscongig.json (tsconfg.json é o mais usual)
  3. Executando ```tsc --init ``` Ele irá criar os arquivos de conf. automaticamente

```bash
tsc --init

```
> Configurar o arquivo para saida e entrada dos arquivos de conf

>jsconfig.json
# entrada e saida de arquivos
```json
{
  "outDir": "", => pra onde vão os arquivos JS >17<
  "rootDir":"" => onde estão os arquivos TS >18<

}

```
# Ajuda o navegador a encontrar arquivos
## Ajuda tambem na depuração, apontando para o erro no TY e não no JS
```json
{
   "sourceMap": true => vai aparecer na pasta output um arquivo .map, que é um json que ajuda o navegador >15<
}

```

na linha 21, podemos remover os comentarios.
na 10 allowJs, apesar de ja vim como padrão true, é uma boa pratica.

# O TY é rigoroso, então pra usar o DOM temos que permitir
```json
{
   "lib": ["DOM"],
}
