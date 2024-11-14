# Projeto-BusOn-Mobile
<br>
<div align="center">
    <img src="imagens_e_icones/BusOn Logo Branca.png" alt="Logo BlogSphere" width="200vh">
</div>
<br>

>  ## _índice:_

- [Introdução](#introdução);
- [Objetivos do Projeto](#objetivos-do-projeto);
- [Funcionalidades](#funcionalidades);
- [Design e Estilos](#design-e-estilos);
- [Estrutura de Programação e Ambiente de Desenvolvimento](#estrutura-de-programação-e-ambiente-de-desenvolvimento);

>  ## _Introdução_


<br>

> ## _Objetivos do Projeto_


<br>

> ## _Funcionalidades_

### _Manual de Instrução:_

**_Fluxograma de Uso:_**
<div align="center">
    <img src="documentos/diagrama_de_uso_blogsphere.png" alt="Diagrama de Uso" width="800vh">
</div>
<br>
Este diagrama destaca as ações possíveis para os usuários:

1. Usuário:
    - Adicionar, editar, excluir e visualizar Blogs.
    - Adicionar comentários, avaliar publicações de outros usuários.
    - Gerenciar perfil e publicações.

<br>

**_Fluxograma de Classe:_**
<div align="center">
    <img src="documentos/diagrama_de_classe_blogsphere.png" alt="Diagrama de Classe" width="800vh">
</div>
<br>
Este diagrama mostra as classes principais do sistema e como elas interagem:<br><br>

_**Usuário:**_ <br>

A classe Usuário contém atributos essenciais para representar cada usuário do sistema.<br>

**Atributos:**

- ID: Identificador único do usuário.
- Nome: Nome do usuário.
- Email: Endereço de e-mail do usuário.
- Senha: Senha usada para autenticação no sistema.

**Métodos:**

- login(): Método para autenticar o usuário e permitir o acesso ao sistema.
- logout(): Método para finalizar a sessão do usuário.
- adicionarPub(): Permite que o usuário adicione uma nova publicação.
- removerPub(): Remove uma publicação existente do usuário.
- atualizarPub(): Atualiza uma publicação criada pelo usuário.
- visualizarPub(): Exibe uma lista de publicações criadas pelo usuário.

<hr>

_**Blogs:**_ <br>
A classe Blogs gerencia as publicações feitas pelos usuários no sistema.<br>

**Atributos:**

- ID: Identificador único da publicação.
- Título: Título da publicação.
- Descricao: Conteúdo da publicação.
- dataPublicacao: Data em que a publicação foi criada.
- dataModificacao: Data da última modificação da publicação.
- Comentarios: Campo onde os usuários podem adicionar comentários à publicação.
- Avaliacao: Avaliação média atribuída pelos usuários.

**Métodos:**

- adicionarComentario(): Permite que os usuários adicionem comentários à publicação.
- avaliarPublicacao(): Permite aos usuários avaliar a publicação com base em uma escala.
- denunciarPublicacao(): Método para denunciar publicações que violam as diretrizes.
- compartilharPublicacao(): Função para compartilhar a publicação com outros usuários ou em redes sociais.


<br>

**_Fluxograma de Fluxo:_**
<div align="center">
    <img src="documentos/diagrama_de_fluxo_blogsphere.png" alt="Diagrama de Fluxo" width="800vh">
</div>
<br>

Este diagrama representa o fluxo principal do sistema BlogSphere, desde a tela de início até as principais funcionalidades disponíveis para os usuários. Abaixo estão as etapas detalhadas do fluxo:

**1. Início**: É a primeira página que o usuário acessa ao entrar no sistema. O usuário pode tomar a decisão de realizar uma ação, como se registrar ou fazer login.

**2. Ação**: Após acessar a página inicial, o usuário tem a possibilidade de escolher se deseja fazer login ou registrar uma nova conta.

**3. Decisão (Login/Registro)**: O sistema verifica se o usuário já possui uma conta:
    - Se o usuário já tiver uma conta, ele será redirecionado para a tela de login.
    - Se o usuário ainda não tiver uma conta, ele será encaminhado para a tela de registro para criar um novo perfil.

**4. Login**: Caso o usuário já tenha uma conta, ele será redirecionado para realizar o login. Após a autenticação, ele poderá acessar as funcionalidades principais da plataforma.

**5. Registro**: Se o usuário não tiver uma conta, ele será redirecionado para a tela de criação de perfil, onde poderá se cadastrar.

**6. Tela (Login)**: Após a autenticação bem-sucedida, o usuário será redirecionado para a página principal da plataforma, onde poderá realizar diversas ações.

**7. Ação**: Depois de logado, o usuário pode acessar as funcionalidades disponíveis, como:
    - **Perfil**: O usuário pode visualizar e editar seu perfil.
    - **Postar**: O usuário pode criar novos posts para compartilhar suas ideias.
    - **Avaliar**: O usuário pode avaliar os posts de outros membros da comunidade, proporcionando feedback e interação.

Este fluxo ilustra a jornada básica do usuário dentro do BlogSphere, abrangendo desde o registro ou login até as principais ações realizadas dentro da plataforma.

<br>

Esses diagramas juntos fornecem uma visão completa das funcionalidades e estrutura do sistema, desde a autenticação até o gerenciamento de publicações e perfis, garantindo que todos os usuários da plataforma possam realizar suas atividades de forma eficiente.

<br>

> ## _Design e Estilos_
Nesse tópico, irei apresentar todos os Designs de Wireframes de baixa, média e alta fidelidade.

**Design de Baixa Fidelidade:**
<div align="center">
    <img src="designs/blogsphere_baixa_fidelidade.png" alt="Wireframes de Baixa Fidelidade" width="800vh">
</div>
<br>

**Design de Média Fidelidade:**
<div align="center">
    <img src="designs/blogsphare_media_fidelidade.png" alt="Wireframes de Média Fidelidade" width="800vh">
</div>
<br>

**Design de Alta Fidelidade:**
<div align="center">
    <img src="designs/blogsphare_alta_fidelidade.png" alt="Wireframes de Alta Fidelidade" width="800vh">
</div>

<br>

> ## _Estrutura de Programação e Ambiente de Desenvolvimento_
**Framework React**
<br>
React é uma biblioteca JavaScript amplamente utilizada para a construção de interfaces de usuário (UI) dinâmicas e interativas. Desenvolvido pelo Facebook, ele permite a criação de componentes reutilizáveis, facilitando a manutenção e a escalabilidade de projetos. React oferece uma abordagem eficiente para a atualização da UI com seu Virtual DOM, o que resulta em melhor desempenho e uma experiência de usuário mais fluida.

<hr>

**Compilador Node.js**
<br>
Node.js é um ambiente de execução JavaScript no lado do servidor, que permite a construção de aplicações escaláveis e de alta performance. Ele é baseado no motor V8 do Google Chrome e possibilita a criação de servidores web rápidos, suportando um grande número de conexões simultâneas. Node.js é conhecido por sua eficiência em lidar com operações de I/O, tornando-o ideal para aplicações em tempo real.

<hr>

**Expo**
<br>


<hr>

**PostgreSQL**
<br>


<hr>

**GitHub**
<br>


<hr>

**VS Code**
<br>


<hr>

<hr>

### Temporário
Diagrama de Fluxo de Atividades: https://lucid.app/lucidchart/53afc5e6-b81f-489e-aa27-7c4f236db985/edit?viewport_loc=-102%2C-130%2C3573%2C1823%2C0_0&invitationId=inv_7fc43deb-d43c-4b54-a7cd-810870be098e  


# Sprint 1 - dia 11/11/2024

- Pesquisar sobre o editais sobre as leis de transporte de alunos/deficientes.
- Pesquisar sobre em outros municipios como funciona na parte de descontos.

## Novo Objetivo
- Focar em meio de ser uma empresa de viabilização de pagamentos.

