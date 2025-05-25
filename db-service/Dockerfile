# Usa imagen oficial de Python
FROM python:3.10-slim

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos
COPY app.py /app

# Instala Flask
RUN pip install flask

# Expone el puerto 5000
EXPOSE 5000

# Comando para ejecutar la app
CMD ["python", "app.py"]

