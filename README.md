# Ma Garderie â€” DevOps (Jenkins Â· Docker Â· Vagrant Â· Ansible)

## 1. PrÃ©sentation
Landing page responsive pour une garderie : frontend **Next.js** (Navbar, Hero, Services) + backend **Node.js/Express** (`/api/garderie`, `/api/services`, `/api/activites`).

## 2. Architecture
```
Navigateur â”€â”€â–º Frontend Next.js :3000 â”€â”€(proxy /api)â”€â”€â–º Backend Express :5000
GitHub â–º Jenkins (Checkout, Install, Test, Build, Push) â–º Docker Hub â–º VM Vagrant (Docker via Ansible) â–º docker compose
```

## 3. CrÃ©ation et provisioning de la VM
```bash
vagrant up            # crÃ©e la VM Ubuntu (2 Go, 2 vCPU, 192.168.56.10) + lance Ansible
vagrant ssh           # vÃ©rification SSH
docker --version && docker compose version
```

## 4. Pipeline Jenkins
Pipeline as Code (`Jenkinsfile`). Credentials Docker Hub : id `dockerhub-credentials`.
Ã‰tapes : Checkout â†’ Install â†’ Test â†’ Build Frontend â†’ Build Backend â†’ Push Frontend â†’ Push Backend.

## 5. Images Docker Hub
- Frontend : https://hub.docker.com/r//garderie-frontend
- Backend : https://hub.docker.com/r//garderie-backend

## 6. DÃ©ploiement (dans la VM)
```bash
cd /vagrant/deploy
cp .env.example .env     # mettre votre user Docker Hub
docker compose pull && docker compose up -d
docker compose ps
curl localhost:5000/api/garderie
```

## 7. AccÃ¨s
http://192.168.56.10:3000

## 8. Captures d'Ã©cran
![Jenkins](screenshots/jenkins.png)
![Docker Hub](screenshots/dockerhub.png)
![Vagrant](screenshots/vagrant.png)
![Ansible](screenshots/ansible.png)
![Conteneurs](screenshots/containers.png)
![Navigateur](screenshots/browser.png)
![Docker dans la VM](screenshots/dockerInVm.png)

![Docker dans la VM](screenshots/dockerInVm.png)
