
# Nestjs Microservice using kafka,Opentelemetry (Request Tracing)  and ELK stack(Centralized Logging)

Centralized logging and request tracing are important components in microservice architecture as they provide crucial insights into the overall health and performance of the system.

In a microservice architecture, services are split into multiple smaller services, which may be distributed across multiple servers or even different data centers. When an issue arises, it can be difficult to pinpoint the root cause of the problem as the issue may be occurring in one or more of the microservices. Centralized logging provides a single point of access for logs from all services, making it easier to troubleshoot and identify the cause of issues.

Request tracing is another important aspect of microservice architecture. It allows you to trace requests as they move through the system, making it easier to identify bottlenecks or performance issues. This is particularly important in a distributed environment, where requests may pass through multiple services before being fulfilled.

In summary, centralizing logs and tracing requests can provide valuable insights into the health and performance of a microservice architecture, making it easier to identify and troubleshoot issues.

# Clone repo
https://github.com/hafizul16103123/nestjs-kafka-microservice-traing.git

then go to folder: nestjs-kafka-microservice-traing
run docker-compose up -d

# Prerequisite
1. Need Docker and Docker Compose install on your PC.