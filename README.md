[Português Brasileiro](https://github.com/Gilberto-Mascena/api-google-gemini/blob/main/README.md) | 
[English](https://github.com/Gilberto-Mascena/api-google-gemini/blob/main/README_en.md)

![Status de Manutenção](https://img.shields.io/badge/Maintained-Yes-brightgreen?style=for-the-badge)
[![GitHub Actions Status](https://img.shields.io/github/actions/workflow/status/Gilberto-Mascena/api-google-gemini/build.yml?style=for-the-badge)](https://github.com/Gilberto-Mascena/api-google-gemini/actions)
[![Licença](https://img.shields.io/github/license/Gilberto-Mascena/api-google-gemini?style=for-the-badge)](https://github.com/Gilberto-Mascena/api-google-gemini/blob/main/LICENSE.md)
[![Estrelas no GitHub](https://img.shields.io/github/stars/Gilberto-Mascena/api-google-gemini?style=for-the-badge)](https://github.com/Gilberto-Mascena/api-google-gemini/stargazers)
[![Problemas no GitHub](https://img.shields.io/github/issues/Gilberto-Mascena/api-google-gemini?style=for-the-badge)](https://github.com/Gilberto-Mascena/api-google-gemini/issues)
[![Versão do Repositório](https://img.shields.io/github/v/release/Gilberto-Mascena/api-google-gemini?include_prereleases&style=for-the-badge)](https://github.com/Gilberto-Mascena/api-google-gemini/releases)
![Data de Lançamento](https://img.shields.io/github/release-date/Gilberto-Mascena/api-google-gemini?style=for-the-badge)
![Tamanho do Repositório](https://img.shields.io/github/repo-size/Gilberto-Mascena/api-google-gemini?style=for-the-badge)

# 🚀 API Google Gemini: Imersão Alura

#### Este projeto foi desenvolvido durante a Imersão Alura, utilizando a API do modelo generativo Gemini do Google Cloud para criar uma API Node.js capaz de interagir com imagens e gerar descrições textuais.

## ⚙️ Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas e contas configuradas:

* **Node.js:** Versão igual ou superior a `14.0.0`. Você pode verificar sua versão com o comando:
    ```bash
    node -v
    ```
    Para instalar ou atualizar o Node.js, acesse o [site oficial do Node.js](https://nodejs.org/).
* **MongoDB:** Uma instância do MongoDB em execução. Você pode instalá-lo localmente, usar um serviço de nuvem como o MongoDB Atlas ou utilizar um container Docker.
* **Conta no Google Cloud:** Uma conta ativa no [Google Cloud Platform](https://cloud.google.com/).
* **Acesso ao modelo generativo Gemini:** Certifique-se de que sua conta no Google Cloud tenha acesso à API do modelo Gemini. Isso pode envolver a ativação da API e a configuração das permissões necessárias.
* **Chave de API do Google Gemini:** Uma chave de API válida para autenticar suas requisições ao modelo Gemini. Você pode criar e gerenciar suas chaves de API no [console do Google Cloud](https://console.cloud.google.com/).

## 🛠️ Instalação

Siga estas etapas para configurar o ambiente de desenvolvimento:

### 1. Clone o repositório:

```bash
git clone git@github.com:Gilberto-Mascena/api-google-gemini.git
cd api-google-gemini
```

### 2. Instale as dependências do projeto:
```Bash
npm install
```

Este comando irá baixar e instalar todas as bibliotecas necessárias listadas no arquivo package.json.

### 3. Configure as variáveis de ambiente:
Crie um arquivo chamado .`env` na raiz do seu projeto. Este arquivo armazenará informações sensíveis e configurações específicas do seu ambiente. Adicione as seguintes variáveis ao arquivo `.env`, substituindo os valores de exemplo pelas suas informações reais:

`GEMINI_API_KEY=SUA_CHAVE_DE_API_DO_GOOGLE_GEMINI`
`STRING_CONNECTION=SUA_STRING_DE_CONEXÃO_DO_MONGODB
PORT=3000 # (Opcional)` Define a porta do servidor, o padrão é 3000
Importante: Certifique-se de adicionar o arquivo .env ao seu arquivo .gitignore para evitar o envio acidental de suas informações sensíveis para o controle de versão.

### 4. Crie a pasta de uploads:
Execute o seguinte comando no terminal, dentro da raiz do seu projeto, para criar a pasta onde as imagens enviadas serão armazenadas:

```Bash
mkdir uploads
```
Certifique-se de que a sua aplicação tenha permissões de leitura e escrita nesta pasta.

## 🚀 Como Usar
### 1. Inicie o servidor de desenvolvimento:

```Bash
npm run dev
```
Este comando, definido no package.json, geralmente inicia o servidor utilizando uma ferramenta como o nodemon, que reinicia o servidor automaticamente em caso de alterações nos arquivos.

### 2. Acesse a API:
A API estará disponível no endereço:

`http://localhost:3000`
Certifique-se de que a porta configurada na variável de ambiente PORT (ou a porta padrão 3000) esteja livre e acessível.

#### Endpoints da API:
A seguir, estão os endpoints disponíveis nesta API:

`GET /posts`:

**Descrição**: Retorna uma lista de todos os posts armazenados no banco de dados.
**Resposta**: Um array de objetos JSON, onde cada objeto representa um post.

`POST /posts`:

**Descrição**: Cria um novo post.\
**Corpo da Requisição**:
Um objeto JSON contendo os dados do novo post. Os campos esperados dependerão da sua implementação.
Exemplo de Corpo (JSON):\
JSON

``` 
{
  "titulo": "Meu Primeiro Post",
  "conteudo": "Este é o conteúdo do meu primeiro post."
}
```

`POST /upload`  :

**Descrição**: Faz o upload de uma imagem.\
**Corpo da Requisição (Form-Data)**: A imagem deve ser enviada como um arquivo no campo imagem. O Content-Type da requisição deve ser multipart/form-data.\
**Resposta**: Um objeto JSON contendo informações sobre o arquivo de imagem enviado (por exemplo, o nome do arquivo).
PUT /upload/:id:

**Descrição**: Atualiza um post existente (identificado pelo id na URL) adicionando uma descrição gerada pelo modelo Gemini com base na imagem associada a esse post.\
**Parâmetros da URL**:
id: O identificador único do post a ser atualizado.
Observações: Este endpoint provavelmente buscará o caminho da imagem associada ao post, enviará essa imagem para a API Gemini e, em seguida, atualizará o campo de descrição do post no banco de dados com a resposta do Gemini.

### 📜 *Licença*

*Este projeto está licenciado sob a MIT License. Veja mais detalhes em:* [_LICENSE.md_](./LICENSE.md)

### Gilberto | Dev _2024_
