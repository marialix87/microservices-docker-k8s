# microservices-docker-k8s

# Microservicios con Docker y Kubernetes

Este proyecto es una práctica completa de microservicios utilizando **Docker**, **Docker Compose** y **Kubernetes**. Incluye tres servicios básicos: una API (`api-service`), un servicio de base de datos (`db-service`) y un servicio de autenticación (`auth-service`), orquestados primero con Docker y luego desplegados en un clúster Kubernetes (K3s).

---

## ✨ Motivación y contexto

Este proyecto nace como un ejercicio práctico con el objetivo de entender cómo funcionan los microservicios y su despliegue. 

Al inicio, comencé desarrollando cada servicio por separado usando **Node.js**, con pruebas locales utilizando contenedores de Docker. A medida que avanzaba, integré `docker-compose` para facilitar la ejecución de múltiples servicios, y luego pasé a **Kubernetes** para experimentar con un entorno más realista de orquestación.

El objetivo final es tener un proyecto completo que pueda mostrar en GitHub y LinkedIn como parte de mi portafolio, con buena documentación y buenas prácticas.

---

## 🧰 Tecnologías utilizadas

- Node.js / Express
- Docker
- Docker Compose
- Kubernetes (K3s)
- EC2 (AWS)
- Axios
- YAML para definición de manifiestos

---

## 🗂️ Estructura del proyecto

microservices-docker-k8s/
├── api-service/ # Servicio API principal
├── auth-service/ # Servicio de autenticación
├── db-service/ # Servicio que simula una base de datos
├── k8s/ # Archivos de manifiestos YAML para Kubernetes
├── docker-compose.yml # Orquestación local con Docker
└── README.md # Este archivo


---

## 🚀 Cómo ejecutar el proyecto

🔹 Opción 1: Solo Docker

# Desde la raíz del proyecto
cd api-service
docker build -t api-service .

cd ../db-service
docker build -t db-service .

docker run -d --name db-service -p 5000:5000 db-service
docker run -d --name api-service -p 3000:3000 --env DB_SERVICE_URL=http://localhost:5000/data api-service


🔹 Opción 2: Docker Compose

docker-compose up --build

🔹 Opción 3: Kubernetes (K3s en EC2)

# Aplicar los manifiestos YAML desde la carpeta k8s
kubectl apply -f k8s/
Revisar estado de pods:

kubectl get pods
Probar conexión local con port forwarding:

kubectl port-forward svc/api-service 3000:3000
curl http://localhost:3000

🔁 Endpoints y funcionalidad esperada
GET /data en db-service: retorna un JSON simulado con datos
api-service: consulta internamente al db-service usando Axios
auth-service: previsto como base para futura autenticación

⚠️ Consideraciones

Asegurarse de que la variable DB_SERVICE_URL esté correctamente seteada.
Los pods deben estar en estado Running para hacer pruebas.
Kubernetes se instaló con k3s en una instancia EC2 (AWS).
Se usaron .gitkeep para mantener estructura de carpetas en GitHub.

📝 Próximos pasos

Agregar tests automatizados.
Mejorar el auth-service.
Configurar CI/CD con GitHub Actions (archivo ya creado en .github/workflows).
Documentación visual en un PDF (con capturas y explicación detallada del proceso).

### 🚀 Futuras mejoras

- Agregar un `frontend-service` para consumir el API y visualizar los datos.
- Configurar CI/CD con GitHub Actions para automatizar tests y despliegues.
- Usar Ingress Controller (como Traefik o NGINX) para manejar rutas más limpias.
- Mejorar la seguridad con Secrets y Service Accounts personalizados.
- Escribir tests unitarios y de integración para cada servicio.

---

### 📚 Aprendizajes

Este proyecto me permitió:

- Entender la diferencia entre contenerización y orquestación.
- Aplicar buenas prácticas de estructura en proyectos con microservicios.
- Aprender a usar `kubectl`, `docker-compose`, volúmenes y variables de entorno.
- Subir y versionar mi código en GitHub de forma clara y profesional.

👉 [Ver documentación final en PDF](./Final-laboratorio.pdf)
  

👩‍💻 Autor
Proyecto desarrollado por Marialix87 como parte de mi formación en DevOps y desarrollo backend con microservicios.
