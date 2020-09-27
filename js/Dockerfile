FROM node:12
RUN useradd -m hellscream_bot
WORKDIR /home/hellscream_bot
COPY package*.json ./
RUN npm install
COPY . .
RUN chown -R hellscream_bot /home/hellscream_bot
USER hellscream_bot
CMD ["node", "bot.js"]
