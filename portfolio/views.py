from django.shortcuts import render



def index(request):
    return render(request, 'index.html')

def resume(request):
    return render(request, 'resume.html')

def projects(request):
    return render(request, 'projects.html')

def contacts(request):
    return render(request, 'contact.html')