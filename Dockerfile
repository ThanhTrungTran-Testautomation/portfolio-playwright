# ---------- Builder Stage ----------
# ----------------------------------
# Base Image mit Node + Browsern
# ----------------------------------
FROM mcr.microsoft.com/playwright:v1.45.0-jammy AS builder

# ----------------------------------
# Arbeitsverzeichnis
# ----------------------------------
WORKDIR /app

# ----------------------------------
# Package Files kopieren
# ----------------------------------
COPY package.json package-lock.json ./

# ----------------------------------
# Dependencies installieren
# ----------------------------------
RUN npm ci
RUN npx cypress install
RUN npm install --save-dev wait-on
RUN npm install cypress-split --save-dev
RUN npm install
# ----------------------------------
# Restlichen Code kopieren
# ----------------------------------
COPY . .

# Verzeichnis für Reports vorbereiten
RUN mkdir -p /app/results /app/cypress/screenshots /app/cypress/videos

# Environment Variables default
ENV CYPRESS_baseUrl="http://localhost:3000"
ENV CYPRESS_loginPath="/login"
ENV CYPRESS_dashboardPath="/dashboard"

# ---------- Runtime Stage ----------
FROM mcr.microsoft.com/playwright:v1.45.0-jammy

WORKDIR /app

COPY --from=builder /app /app
EXPOSE 3000
# ----------------------------------
# Local Tests Execution
# ----------------------------------