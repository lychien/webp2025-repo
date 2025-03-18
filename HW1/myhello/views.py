#from django.shortcuts import render
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import status

# class HelloApiView(APIView):
#     def get(self , request):
#         my_name = request.GET.get('name' , None)
#         if my_name:
#             retValue = {}
#             retValue['data'] = "Hello" +my_name
#             return Response(retValue, status=status.HTTP_200_OK)
#         else:
#             return Response(
#                 {"res": "parameter: name is None"},
#                 status=status.HTTP_400_BAD_REQUEST
#             )
       
from rest_framework import status
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.decorators import api_view
from django.core.serializers.json import DjangoJSONEncoder
import json
import logging
#from .models import Post  
from .models import Course
from django.views.decorators.csrf import csrf_exempt

logger = logging.getLogger('django')

@api_view(['Get'])
def add_post(request):

    # title = request.GET.get('title','')
    # content = request.GET.get('content' ,'')
    # photo = request.GET.get('photo','')
    # location = request.GET.get('location','')

    # new_post= Post()
    # new_post.title = title
    # new_post.content = content
    # new_post.photo = photo
    # new_post.location = location
    #new_post.save()

    #logger.debug("************** myhello_api: " + Title)
    # if title:
    #     return Response({"data": title + " insert!"}, status=status.HTTP_200_OK)
    # else:
    #     return Response(
    #         {"res": "parameter: name is None"},
    #         status=status.HTTP_400_BAD_REQUEST
    #     )

    Department = request.GET.get('Department','')
    CourseTitle = request.GET.get('CourseTitle','')
    Instructor = request.GET.get('Instructor','')

    new_post= Course()

    new_post.Department = Department
    new_post.CourseTitle = CourseTitle
    new_post.Instructor = Instructor
    new_post.save()
    logger.debug("************** myhello_api: " + Department)

    if Department:
        return Response({"data": Department + " insert!"}, status=status.HTTP_200_OK)
    else:
        return Response(
            {"res": "parameter: name is None"},
            status=status.HTTP_400_BAD_REQUEST
        )
@api_view(['GET'])
def course_list(request):
    courses = list(Course.objects.values())
    return JsonResponse(list(courses), safe=False)
    # return Response({"data":
    #                 json.dumps(
    #                     list(posts),
    #                     sort_keys = True,
    #                     indent = 1,
    #                     cls = DjangoJSONEncoder)},
    #                     status=status.HTTP_200_OK)

@csrf_exempt  # 允許 POST 請求，不受 CSRF 限制
def add_course(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            new_course = Course.objects.create(
                Department=data.get("Department", ""),
                CourseTitle=data.get("CourseTitle", ""),
                Instructor=data.get("Instructor", ""),
            )
            return JsonResponse({"message": "Course added successfully!", "id": new_course.id}, status=201)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    return JsonResponse({"error": "Invalid request method"}, status=405)
