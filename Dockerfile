FROM node:18

RUN mkdir -p /var/app
WORKDIR /var/app

COPY . .

# 빌드는 jenkins 에서 실행
# RUN npm install && npm run build
RUN npm install

EXPOSE 3000

CMD ["node", "dist/main.js"]