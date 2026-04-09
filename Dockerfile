# ---------- Builder Stage ----------
# ----------------------------------
# Base Image mit Node + Browsern
# ----------------------------------
FROM mcr.microsoft.com/playwright:v1.58.2-jammy AS builder

# ----------------------------------
# Arbeitsverzeichnis
# ----------------------------------
WORKDIR /app

# ----------------------------------
# Package Files kopieren
# ----------------------------------
COPY package.json package-lock.json ./

# ----------------------------------
# Restlichen Code kopieren
# ----------------------------------
COPY . .

# Environment Variables default
ENV HOME=/root
# ---------- Runtime Stage ----------
FROM mcr.microsoft.com/playwright:v1.58.2-jammy

WORKDIR /app

COPY --from=builder /app /app
EXPOSE 3000
# ----------------------------------
# Local Tests Execution
# ----------------------------------