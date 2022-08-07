FROM amazonlinux:2018.03

ENV PYTHONIOENCODING=utf-8
ENV LC_ALL=en_US.utf-8
ENV LANG=en_US.utf-8

RUN mkdir /api
WORKDIR /api

RUN yum -y install git \
    python38 \
    python38-pip \
    zip \
    jq \
    dos2unix\
    && yum clean all

COPY ./backend/requirements.txt /api/requirements.txt

RUN PIP_CACHE_DIR=.cache && \
    python3 -m pip install --upgrade pip > /dev/null && \
    python3 -m pip install --upgrade setuptools > /dev/null && \
    python3 -m pip install --upgrade wheel > /dev/null && \
    python3 -m pip install -r requirements.txt > /dev/null && \
    # Need to empty the pycache folders first, before we can delete them.
    rm -rf $${PIP_CACHE_DIR}

COPY docker/api.entrypoint.sh /entrypoint.sh

RUN dos2unix /entrypoint.sh && chmod +x /entrypoint.sh

ENTRYPOINT [ "/entrypoint.sh"]
