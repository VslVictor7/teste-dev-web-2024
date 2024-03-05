from django.db import models

class Empresa(models.Model):
    razao_social = models.CharField(max_length=100)
    atividade_principal = models.CharField(max_length=100)
    numero_endereco = models.CharField(max_length=150)
    cep = models.IntegerField()
    municipio = models.CharField(max_length=50)
    estado = models.CharField(max_length=40)
