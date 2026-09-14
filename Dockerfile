FROM node:20-alpine
# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm@10.34.5 && pnpm install --frozen-lockfile

WORKDIR /opt/app
COPY . .
ENV PATH /opt/node_modules/.bin:$PATH
RUN chown -R node:node /opt/app
USER node
RUN ["pnpm", "build"]
EXPOSE 1337
CMD ["pnpm", "develop"]