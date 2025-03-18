from django.urls import path
from . import views


#urlpatterns = [
#   path('',views.HelloApiView.as_view(), name='index'),
   #path('',views.myhello_api, name='index'),
#]

urlpatterns = [
   # path('add',views.add_post, name='add post'),
   # #path('',views.myhello_api, name='index'),
   # path('list', views.list_post, name='list_post'),
   path('addcourse/',views.add_course, name='add_course'),
   path('courselist/', views.course_list, name='course_list'),
]