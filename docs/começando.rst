Começando
================
Siga estas instruções para configurar e executar o projeto em sua máquina local.

Pré-requisitos
--------------

- Docker
- Docker Compose

Instalação
----------

1. Clone o repositório:

git clone https://github.com/RafaelSedor/techshop.git

cd techshop

Atualização de Hosts no Windows
-------------------------------

Para redirecionar `localhost` para `techshop.com.br` no Windows, edite o arquivo hosts:

1. Abra o Notepad como Administrador.

2. Abra o arquivo `C:\Windows\System32\drivers\etc\hosts`.

3. Adicione a linha:

127.0.0.1 techshop.com.br

Executando a Aplicação
----------------------

1. Remova quaisquer contêineres, imagens, volumes e redes antigos:

docker-compose down --rmi all --volumes --remove-orphans

2. Construa e inicie a aplicação:

docker-compose up -d --build

3. A aplicação estará disponível em `http://techshop.com.br/:3001`.