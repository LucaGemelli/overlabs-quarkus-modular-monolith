# Etapa de build
FROM ghcr.io/graalvm/graalvm-ce:latest AS build
RUN gu install native-image
WORKDIR /project
COPY . .
RUN ./mvnw package -Pnative -DskipTests

# Etapa final
FROM alpine:latest
WORKDIR /app
COPY --from=build /project/target/*-runner /app/app
CMD ["./app"]
