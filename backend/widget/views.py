from django.shortcuts import render

# Create your views here.
import requests
from django.http import JsonResponse
from django.conf import settings

def get_weather(request):
    city = request.GET.get('city', 'hanoi')
    api_key = settings.WEATHER_API_KEY
    url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric"
    
    print(url)
    response = requests.get(url)
    
    if response.status_code == 200:     
        return JsonResponse(response.json())
    else:
        return JsonResponse({'error': 'City not found'}, status=response.status_code)