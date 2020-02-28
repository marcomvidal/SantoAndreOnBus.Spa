# Santo André On Bus

Front-end administrativo para o aplicativo de consulta de informações de linhas de ônibus da cidade de Santo André.

## Disclaimer
Este aplicativo não é oficial e não possui nenhuma ligação com empresas ou órgãos oficiais de transportes.
Foi desenvolvido unicamente para fins de aprendizagem e não pode ser distribuído comercialmente.

## Ferramentas utilizadas
- Typescript 3.5
- Angular 8
- Node 12
- Express 4.17

## Componentes
Todos localizados em `/app`. São eles:
- `auth`: Interceptador HTTPS, serviço de envio de credenciais e guarda de rotas;
- `common-component-tasks`: Código que é comum à maioria dos formulários, como submissão e tratamento de erros de validação;
- `login`: Front-end do processo inicial de autenticação;
- `models`: Classes POJO de objetos de lógica de negócio representados em diferentes partes do projeto;
- `shared`: Componentes de UI encapsulados para serem reutilizados em componentes de páginas;
- `structure`: Montagem dos elementos obrigatórios da maioria das páginas;
Os demais componentes representam páginas que fazem uso das estruturas supracitadas.

## Ambientes
Não há armazenamento de credenciais sensíveis neste projeto. Em `environments`, ficam armazenadas apenas as URLs de WebAPIs dos ambientes de desenvolvimento e produção.

## Fluxo de execução
1. O roteador do projeto encaminha o usuário a algum `Component` de página;
2. As informações armazenadas são obtidas através da WebAPI por intermédio de um `Service` associado ao `Component` em questão;
3. Dados de formulário e página são atualizados via `rxjs` pelo `CommonComponentTasksService`. Particularidades são executadas através de funções de callback;
4. `Services` enviam informações à WebAPI caso o `Component` em questão seja um formulário.

## Autenticação
Não são utilizados cookies. Toda a autenticação ocorre por tokens e seguem o seguinte fluxo:
1. O usuário submete o formulário de login;
2. `AuthService` é acionado, enviando as credenciais criptografadas em TLS e retornando um token. O usuário é informado visualmente caso haja erros no processo;
3. O token é registrado no `Local Storage` do browser do usuário;
4. `TokenInterceptorService` intercepta todas as requisições HTTPS, embutindo o token em seu cabeçalho para que sejam aceitas na WebAPI
5. Estando corretas as informações de login, o token é armazenado no LocalStorage do browser e utilizado nas requisições seguintes

## Roteamento
Todas as rotas estão armazenadas em `AppRoutingModule` e demandam autenticação, com a óbvia exceção do login.

## Funcionalidades comuns
Algumas tarefas de exibição e execução de tarefas são comuns a todos os formulários e exibições. Por isso, foram concentradas no `CommonComponentTasksService`, facilmente injetável em qualquer componente. Dentre elas, estão:
- Preparação para envio de dados para a WebAPI
- Exibição e ocultação de erros de validação
- Edição de registros existentes
- Limpeza do formulário

## Deployment
A aplicação real foi hospedada em um servidor do Heroku com sucesso. O `postinstall` já está configurado adequadamente, assim como um servidor Node.js, configurado em `server.js`.
Para realizar o deployment, basta solicitar ao Heroku que utilize o repositório do Git com a aplicação.

## Execução
Utilize o comando `ng serve`. Será iniciada uma instância do Node.js padrão do Angular. Esta aplicação é compatível com Windows, Linux e Mac OS X, desde que o Node.js 12 ou maior esteja instalado.

## Arquitetura da solução
![Principal](https://raw.githubusercontent.com/marcomvidal/SantoAndreOnBus/master/arquitetura.png)
