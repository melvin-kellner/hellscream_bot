Old JS version

replace the token in auth.json with your own token.

to build the docker image run:
docker build . -t hellscream-bot

to run the docker container:
docker run -d --restart unless-stopped hellscream-bot