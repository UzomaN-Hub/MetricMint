# MetricMint

MetricMint is a modern analytics dashboard for product, revenue, customer, and campaign insight workflows. It is designed as a fast, information-dense reporting workspace where users can move from high-level KPI monitoring into detailed investigation through filters, charts, tables, saved views, and drill-down screens.

## Overview

The application is built around a dashboard-first experience. The primary user can open the app, understand performance at a glance, narrow the scope with filters, inspect evidence in charts and tables, and save or reuse recurring report views.

The product direction follows three core ideas:

- signal before detail
- fast filtering without confusion
- clear movement from overview to deeper analysis

## Product goals

MetricMint is intended to help teams answer:

- What changed?
- Why did it change?
- What should be investigated next?

It supports that flow through:

- KPI summary cards
- trend and breakdown charts
- filter chips and top controls
- a detailed report table
- saved views and export surfaces
- row-level drill-down pages

## Main application areas

### Marketing / entry
The landing page introduces the product, explains the value proposition, and provides entry points into the dashboard and reporting surfaces.

### Overview
The overview route acts as the control room. It is the default dashboard surface and combines:

- top-level KPI cards
- a primary trend chart
- an insights / alerts panel
- a top movers section
- filter controls and saved view shortcuts

### Revenue
Focused revenue analysis with:

- revenue trend
- channel breakdown
- transaction-style table view
- comparison-ready filter flow

### Customers
Customer-oriented analysis with:

- retention snapshot
- device distribution
- customer list / report rows
- shared filter context

### Products
Product performance monitoring with:

- top products
- declining products
- product performance rows
- shared table interactions

### Campaigns
Campaign and acquisition analysis with:

- campaign KPI summary cards
- source / channel breakdown
- campaign rows and reporting view

### Reports
A report-centric surface for:

- saved presets
- export-oriented workflow
- report table interaction
- alternate report entry points

### Saved Views
Reusable configurations for common analysis workflows.

### Settings
Workspace settings, notification preferences, and integration status surfaces.

### Record Detail
A deeper drill-down page for viewing an individual record or narrowed context.

## Features

### Dashboard shell
- persistent sidebar navigation
- topbar with search, quick actions, theme control, and breadcrumbs
- responsive mobile navigation drawer
- shared content shell and section layout

### Filters
- date range filtering
- segment filtering
- filter chips with clear / reset behavior
- shared dashboard filter state
- saved view application

### Data presentation
- KPI cards
- trend charts
- breakdown charts
- top movers
- report presets
- export history panels

### Table interaction
- report rows loaded from the backend
- column visibility controls
- search toolbar
- pagination
- reusable empty and error states

### UX states
- loading placeholders
- empty states
- no-result states
- panel-level errors
- route-level not found and error handling

### Visual system
- bright analytics-oriented palette
- light / dark theme support
- hover states on major interactive surfaces
- motion-based reveal and card hover interactions

## Technology stack

### Frontend
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Radix UI primitives
- Motion for React
- TanStack Query
- TanStack Table
- TanStack Virtual
- Recharts
- Lucide icons
- next-themes

### Backend
- FastAPI
- Pydantic / pydantic-settings
- seeded JSON data
- lightweight service / repository structure
- pytest

## Why each tool is used

### Next.js
Provides the route structure, layout system, client/server component model, and good ergonomics for a multi-surface dashboard application.

### TypeScript
Improves safety for filters, chart props, table columns, API response types, and route-level UI composition.

### Tailwind CSS
Enables rapid dashboard construction while keeping spacing, typography, colors, and responsive behavior consistent.

### shadcn/ui + Radix UI
Used for composable UI primitives such as buttons, inputs, dropdowns, dialogs, sheets, selects, tables, tooltips, avatars, and popovers.

### TanStack Query
Handles server-state fetching, caching, loading states, and refetch behavior for filter-driven API requests.

### TanStack Table
Powers the serious data-table layer: columns, row rendering, visibility state, and table composition.

### TanStack Virtual
Included to support future table virtualization and performance improvements for larger row sets.

### Recharts
Used for trend and breakdown charts. It is lightweight enough for the MVP while still supporting readable chart interactions.

### Motion
Used for subtle page reveals, card lift on hover, and micro-interactions that improve perceived polish without overwhelming readability.

### FastAPI
Provides a small backend that returns realistic dashboard data without turning the project into a heavy backend system.

## Application architecture

The codebase is organized around route shells, shared UI, and domain features.

### Frontend structure

- `app/`
  - route groups and page entry points
  - dashboard and marketing surfaces
  - route-level loading, error, and not-found states

- `components/`
  - shared layout components
  - reusable data display components
  - feedback states
  - shared UI primitives
  - navigation elements

- `features/`
  - domain-specific functionality grouped by user task or business area
  - filters
  - charts
  - overview
  - reports table
  - revenue
  - customers
  - products
  - campaigns
  - saved views
  - settings
  - drill-down

- `lib/`
  - API client functions
  - constants
  - formatters
  - query client
  - utilities
  - mock / mapping helpers where needed

- `providers/`
  - app-level providers
  - query provider
  - theme provider
  - dashboard filter provider

- `styles/`
  - tokens and chart-specific style helpers

- `types/`
  - shared frontend types for API responses and app models

### Backend structure

- `app/api/`
  - route registration
  - versioned API routing
  - endpoint modules

- `app/core/`
  - settings and core configuration

- `app/data/`
  - seeded JSON datasets

- `app/repositories/`
  - data access layer

- `app/services/`
  - business logic layer

- `app/schemas/`
  - response and filter models

- `app/utils/`
  - filtering, formatting, sorting, and pagination helpers

- `tests/`
  - endpoint and behavior validation

## Route map

### Frontend routes
- `/`
- `/dashboard`
- `/dashboard/overview`
- `/dashboard/revenue`
- `/dashboard/customers`
- `/dashboard/products`
- `/dashboard/campaigns`
- `/dashboard/reports`
- `/dashboard/saved-view`
- `/dashboard/settings`
- `/dashboard/record-detail`

### Backend routes
- `/api/v1/health`
- `/api/v1/metrics`
- `/api/v1/trends`
- `/api/v1/breakdowns`
- `/api/v1/reports`
- `/api/v1/saved-views`
- `/api/v1/settings`

## Data model highlights

The current dashboard revolves around these entities:

- metric summary
- trend point
- dimension breakdown
- report row
- saved view

Typical fields include:

- revenue
- orders
- conversion rate
- date
- segment
- channel
- device
- saved filter configuration

## Local development

## Frontend

### Install
```bash
npm install
```

### Run
```bash
npm run dev
```

The frontend expects the API base URL to resolve to the FastAPI backend. If `NEXT_PUBLIC_API_BASE_URL` is not set, the app falls back to:

```txt
http://127.0.0.1:8000/api/v1
```

## Backend

### Create environment
```bash
python -m venv .venv
```

### Activate
#### Windows
```bash
.venv\Scripts\activate
```

#### macOS / Linux
```bash
source .venv/bin/activate
```

### Install dependencies
```bash
pip install -r requirements.txt
```

### Run server
```bash
python run.py
```

### Run tests
```bash
pytest
```


## License

Built by Uzoma Nwaiwu
