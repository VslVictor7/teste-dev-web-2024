from django.shortcuts import render, redirect
from .models import Empresa
from .forms import EmpresaForm

def index(request):
    context = {}
    form = EmpresaForm()
    empresas = Empresa.objects.all()
    context['empresas'] = empresas

    if request.method == 'POST':

        if 'save' in request.POST:

            pk = request.POST.get('save')

            if not pk:

                form = EmpresaForm(request.POST)

            else:

                empresa = Empresa.objects.get(id=pk)
                form = EmpresaForm(request.POST, instance=empresa)
            form.save()
            form = EmpresaForm()
            return redirect('index')

        
        elif 'delete' in request.POST:
            pk = request.POST.get('delete')
            emp = Empresa.objects.get(id=pk)
            emp.delete()

        elif 'edit' in request.POST:
            pk = request.POST.get('edit')
            emp = Empresa.objects.get(id=pk)
            form = EmpresaForm(instance=emp)

    context['form'] = form
    return render(request, 'index.html', context)



# Create your views here.
