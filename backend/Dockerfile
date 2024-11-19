FROM node:18-alpine

COPY . ./pre_build

RUN npm install -f --prefix /pre_build
RUN npm run build --prefix /pre_build

RUN mkdir -p /build/

RUN cp -R pre_build/dist /build/dist
RUN cp -R pre_build/node_modules /build/node_modules

RUN rm -r /pre_build

CMD [ "node", "/build/dist/main.js" ]

EXPOSE 3030