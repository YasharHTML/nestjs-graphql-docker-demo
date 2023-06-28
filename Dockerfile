FROM node:lts-alpine as build

WORKDIR /app
COPY package.json ./
COPY yarn.lock ./

RUN yarn install --frozen-lockfile

COPY tsconfig* ./
COPY ./src ./src

RUN yarn build

FROM node:lts-alpine

WORKDIR /app

ENV NODE_ENV production
ENV DB_SYNC N

COPY --chown=node:node --from=build /app/dist ./dist
COPY --chown=node:node --from=build /app/package.json ./

RUN yarn install --prod

CMD [ "node", "dist/main" ]