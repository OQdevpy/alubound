FROM python:3.10.12-alpine3.17


ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt /requirements.txt

RUN apk add --update --no-cache postgresql-client
RUN apk add --update --no-cache --virtual .tmp-build-deps \
    gcc libc-dev linux-headers postgresql-dev 
RUN pip install -r /requirements.txt
RUN apk del .tmp-build-deps

WORKDIR /code
COPY . /code