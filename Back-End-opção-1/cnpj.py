import json
import re
from pip._vendor import requests

def formatar_cnpj(cnpj):
    cnpj = re.sub(r'\D', '', cnpj)  
    return cnpj

def validar_cnpj(cnpj):
    if len(cnpj) != 14 or not cnpj.isdigit(): 
        return False
    return True

def get_empresa_data(cnpj):
    url = f"https://www.receitaws.com.br/v1/cnpj/{cnpj}"  
    response = requests.get(url)
    
    if response.status_code == 200: 
        data = response.json()
        if 'error' not in data:  
            return data
    return None

def main():
    cnpj_input = input("Digite o CNPJ da empresa: ")
    cnpj = formatar_cnpj(cnpj_input)
    
    if not validar_cnpj(cnpj):
        print("CNPJ inválido.")
        return
    
    empresa_data = get_empresa_data(cnpj)
    
    if empresa_data:
        formatted_data = {
            "razao_social": empresa_data['nome'],
            "codigo_atividade_principal": empresa_data['atividade_principal'][0]['code'],
            "endereco": {
                "numero": empresa_data['numero'],
                "cep": empresa_data['cep'],
                "municipio": empresa_data['municipio'],
                "estado": empresa_data['uf'],
            }
        }
        print(json.dumps(formatted_data, indent=4))
    else:
        print("CNPJ não encontrado na API.")

if __name__ == "__main__":
    main()