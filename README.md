# Infra with apache and 2 php different projects

## Setup Infrastructure

### Requirements

You'll need the following software installed on your machine:

* [Docker](https://docs.docker.com/install/)
* [Docker Compose](https://docs.docker.com/compose/install/)

### Docker

Build and up infra
```bash
docker-compose up --build -d
```


Add entries to your `/etc/hosts` file:

```bash
127.0.0.1 test1.local
127.0.0.1 test2.local
```
### Try 

```bash
http://test1.local
http://test1.local
```