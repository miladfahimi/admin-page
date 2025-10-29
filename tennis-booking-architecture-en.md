## Tennis Court Booking Application Kick-off Guide

### 1. High-Level Architecture (Macro-Services Architecture)

- **Gateway / API Gateway**

  - Entry point for all user requests.
  - Applies rate limiting, initial authentication, and routes to downstream services.

- **Identity & Access Service**

  - Sign-up, login, role management (player, club manager).
  - Supports OAuth/OpenID Connect for integrations with external services.

- **Court Management Service**

  - Manages courts, available slots, and the calendar.
  - Domain model: Court, CourtAvailability, MaintenanceWindow.
  - Domain rules such as "court preparation time after each booking."

- **Booking Service**

  - Handles booking, cancellation, and waitlist management.
  - Domain model: Booking, ReservationPolicy, PaymentStatus.
  - Domain rules such as weekly booking limits per user.

- **Pricing & Payment Service**

  - Calculates costs, discounts, and processes payments.
  - Connects to external payment providers.

- **Notification Service**

  - Sends notifications via email/SMS/push.
  - Event-driven pattern to react to new or canceled bookings.

- **Analytics & Reporting Service**

  - Collects event data (Event Sourcing or CDC).
  - Provides management dashboards.

- **Admin Panel (Angular SPA)**

  - Manages users, courts, and metrics.
  - Communicates through the API Gateway and a dedicated Backend for Frontend (BFF).

- **Player Web App (Angular)**

  - Allows booking, viewing history, and payments.

- **Shared Kernel / Platform Services**
  - Shared library for DTOs, events, and contracts.
  - Supporting services such as logging, monitoring, configuration, and service discovery.

### 2. Domain-Driven Design (DDD) in the Backend

- **Bounded Contexts**: Identity, Court Management, Booking, Billing, Notifications.
- **Context Map**: Relationships (Customer/Supplier, Conformist, Anti-corruption Layer).
- **Aggregates & Entities**: Booking as the aggregate root with value objects like TimeSlot.

### 3. Recommended Tools and Technologies

- **Backend**: NestJS or Spring Boot (both fit microservice and hexagonal architecture with DDD).
- **Message Broker**: Kafka or RabbitMQ for event-driven interactions between services.
- **Database per Service**: e.g., PostgreSQL for Booking and Court; Redis for caching.
- **Infrastructure as Code**: Terraform or Pulumi to manage environments.
- **CI/CD**: GitHub Actions or GitLab CI.
- **Observability**: OpenTelemetry + Prometheus/Grafana.

### 4. Suggested Visual Blueprint (Charts)

Use tools like **draw.io (diagrams.net)**, **Miro**, or **Lucidchart** to prepare diagrams:

1. **Context Diagram**: Shows services and high-level interactions (Gateway ↔ services, payment gateway, SMS system).
2. **Container Diagram (C4 Model Level 2)**: Breaks down services, databases, message broker, and frontends.
3. **Component Diagram for each Bounded Context**: Internal components of the Booking Service (Application Layer, Domain Layer, Infrastructure Layer).
4. **Sequence Diagram for the Booking Scenario**: From user sign-in to notification delivery.

### 5. Resources and Templates

- **Awesome Microservices Templates**

  - [Microservices.io](https://microservices.io/) for architecture patterns.
  - [Awesome Microservices (GitHub)](https://github.com/mfornos/awesome-microservices) for project lists and frameworks.

- **DDD Resources**

  - [Awesome Domain-Driven Design](https://github.com/heynickc/awesome-ddd).
  - Sample projects for DDD with NestJS: search for "nestjs ddd microservices boilerplate."

- **Angular + Nx Monorepo**

  - [Nx Workspace](https://nx.dev/) for creating a monorepo with Angular and NestJS.
  - Template [nrwl/nx-examples](https://github.com/nrwl/nx-examples).

- **Hexagonal Architecture Samples**
  - [albertllousas/hexagonal-architecture-example](https://github.com/albertllousas/hexagonal-architecture-example).
  - For Java/Spring: [melardev/hexagonal-architecture-springboot](https://github.com/melardev/hexagonal-architecture-springboot).

### 6. Suggested Onboarding Workflow

1. **Define the Vision and Use Cases**: Key scenarios for booking, court management, and payments.
2. **Domain Modeling with Event Storming**: Identify aggregates and domain events.
3. **Design the Context Map**: Establish service boundaries.
4. **Create an Nx Monorepo** (Angular + NestJS) or choose a multi-repo approach.
5. **Implement Gateway and Identity** as the foundation.
6. **Build Booking and Court Services** with domain-level tests.
7. **Develop the Angular Frontend** with a BFF or GraphQL in mind.
8. **Consider DevOps and Observability** from day one (pipelines, monitoring).

### 7. Visual Design Tools

- **diagrams.net** (free and simple)
- **Miro** (collaborative)
- **Figma** (UI/UX and wireframes)
- **Structurizr** (C4 model modeling)

You can start with a base diagram in one of these tools and gradually add more details.

---

# If you need a more detailed chart or diagram examples, I can provide ASCII templates or more specific guidance for your chosen tool.

# Tennis Booking Platform Architecture Overview

This guide captures the macro-service architecture, DDD considerations, and onboarding workflow for the tennis court booking application. A colourful interactive HTML diagram is also available for quick exploration of the layout.

- [Open the interactive architecture board](./architecture-diagram.html)

## 1. Macro-Services Architecture

- **Gateway / API Gateway**

  - Entry point for all client requests.
  - Provides rate limiting, authentication hand-off, and routing to downstream services.

- **Identity & Access Service**

  - Handles sign-up, login, and role management (player, club administrator).
  - Supports OAuth/OpenID Connect for external integrations.

- **Court Management Service**

  - Maintains court inventory, availability windows, and maintenance schedules.
  - Implements domain rules such as “buffer time between reservations”.

- **Booking Service**

  - Processes bookings, cancellations, and waitlists.
  - Implements policies for weekly booking limits per user.

- **Pricing & Payment Service**

  - Calculates pricing, discounts, and handles payment workflows.
  - Integrates with third-party payment gateways.

- **Notification Service**

  - Sends email/SMS/push notifications for booking updates.
  - Event-driven reactions to booking or cancellation events.

- **Analytics & Reporting Service**

  - Collects event data (event sourcing or CDC) for insights.
  - Powers administrative dashboards.

- **Admin Panel (Angular SPA)**

  - Administration portal for users, courts, and reports.
  - Communicates via an API Gateway and a web-focused BFF.

- **Player Web App (Angular)**

  - Allows players to browse availability, reserve courts, and pay.

- **Shared Kernel / Platform Services**
  - Shared library of DTOs, events, and service contracts.
  - Supporting services: logging, monitoring, configuration, service discovery.

## 2. Domain-Driven Design (DDD)

- **Bounded Contexts**: Identity, Court Management, Booking, Billing, Notifications.
- **Context Map**: Relationships (Customer/Supplier, Conformist, Anti-corruption Layer).
- **Aggregates & Entities**: For example, Booking as an aggregate root with value objects such as TimeSlot.

## 3. Suggested Tooling

- **Backend**: NestJS or Spring Boot for microservice-friendly DDD and hexagonal architecture.
- **Message Broker**: Kafka or RabbitMQ for event-driven communication.
- **Database per Service**: PostgreSQL for Booking/Court, Redis for caching.
- **Infrastructure as Code**: Terraform or Pulumi to manage environments.
- **CI/CD**: GitHub Actions or GitLab CI.
- **Observability**: OpenTelemetry with Prometheus/Grafana.

## 4. Visual Documentation Recommendations

Use visual tools such as **diagrams.net**, **Miro**, **Lucidchart**, or **Structurizr** to maintain these artifacts:

1. **Context Diagram**: Shows top-level services and interactions (Gateway ↔ services, payment provider, SMS system).
2. **Container Diagram (C4 Level 2)**: Breaks down services, data stores, message brokers, and front-ends.
3. **Component Diagram per Bounded Context**: e.g., Booking Service’s Application/Domain/Infrastructure layers.
4. **Sequence Diagram for Booking Flow**: From user login to payment confirmation and notification.

## 5. Starter Templates & Resources

- **Microservice Patterns**

  - [microservices.io](https://microservices.io/)
  - [Awesome Microservices](https://github.com/mfornos/awesome-microservices)

- **DDD Resources**

  - [Awesome Domain-Driven Design](https://github.com/heynickc/awesome-ddd)
  - Sample projects (search for “nestjs ddd microservices boilerplate”).

- **Angular + Nx Monorepo**

  - [Nx Workspace](https://nx.dev/)
  - [nrwl/nx-examples](https://github.com/nrwl/nx-examples)

- **Hexagonal Architecture Samples**
  - [albertllousas/hexagonal-architecture-example](https://github.com/albertllousas/hexagonal-architecture-example)
  - [melardev/hexagonal-architecture-springboot](https://github.com/melardev/hexagonal-architecture-springboot)

## 6. Suggested Starting Steps

1. **Define Vision and Use Cases**: Booking, court management, payment, and notifications.
2. **Model the Domain via Event Storming**: Identify aggregates, policies, and domain events.
3. **Design the Context Map**: Clarify service boundaries and relationships.
4. **Create an Nx Monorepo (Angular + NestJS)** or choose a polyrepo layout.
5. **Implement Gateway and Identity** as foundational services.
6. **Develop Booking and Court Services** with domain tests.
7. **Build Angular Frontends** aligned with the BFF or GraphQL endpoints.
8. **Plan DevOps & Observability** early (pipelines, monitoring, alerting).

## 7. Design Tools

- **diagrams.net** – free and accessible for quick diagrams.
- **Miro** – collaborative whiteboarding for teams.
- **Figma** – for UI/UX and wireframing.
- **Structurizr** – for C4 model-driven documentation.

Use these tools alongside the interactive HTML board to maintain a clear, evolving picture of your architecture.
