FROM node:alpine

COPY ./package*.json ./pre_build/
RUN npm install -f --prefix /pre_build

COPY . ./pre_build

RUN npm run build --prefix /pre_build

RUN mkdir -p /build/admin/

RUN cp -R pre_build/admin/.next /build/admin/.next
RUN cp -R pre_build/node_modules /build/node_modules
RUN cp -R pre_build/package.json /build/package.json
RUN cp -R pre_build/next.config.mjs /build/next.config.mjs

RUN rm -r /pre_build

CMD [ "npm", "run", "start", "--prefix", "./build" ]
EXPOSE 4040
