FROM python:3
# Install Python and Package Libraries
RUN apt-get update && apt-get upgrade -y && apt-get autoremove && apt-get autoclean \
  -y --no-install-recommends python python-virtualenv

# Project Files and Settings
ARG PROJECT=myproject
ARG PROJECT_DIR=/var/www/${PROJECT}
RUN mkdir -p $PROJECT_DIR
WORKDIR $PROJECT_DIR/backend/src

# ENV VIRTUAL_ENV=/var/venv
# RUN python -m virtualenv --python=/usr/bin/python $VIRTUAL_ENV
# ENV PATH="$VIRTUAL_ENV/bin:$PATH"


COPY requirements.txt .
RUN pip install -r requirements.txt

# WORKDIR /backend
# RUN env/bin/activate

# Server
EXPOSE 8000
STOPSIGNAL SIGINT
ENTRYPOINT ["python", "manage.py"]
CMD ["runserver", "0.0.0.0:8000"]