ARG TARGET_PORT=3300
ARG NODE_BASE

# --- BUILDER ---
FROM $NODE_BASE AS builder

WORKDIR /usr/src/base

COPY . .

# install dependencies
RUN npm ci

# compile typescript
RUN npm run build:ci

RUN rm -rf node_modules
RUN npm ci --only=production

# copy dependencies to build
RUN cp -R node_modules build/node_modules
RUN cp package*.json build

# DEBUG
RUN ls /usr/src/base/build

# --- RELEASE ---
FROM $NODE_BASE

# update alpine dependencies
RUN apk update && apk upgrade

# copy project file
COPY --from=builder --chown=node:node /usr/src/base/build/ .

USER node

EXPOSE $TARGET_PORT

CMD ["dumb-init", "node", "server.js"]