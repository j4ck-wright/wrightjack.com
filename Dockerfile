FROM node:18-alpine AS build

WORKDIR /app

COPY . .
RUN yarn
RUN yarn build

FROM node:18-alpine AS runner

ENV NODE_ENV=production
COPY --from=build /app/posts/ .
COPY --from=build /app/build build/
COPY --from=build /app/package.json .

EXPOSE 3000
CMD [ "yarn", "start" ]