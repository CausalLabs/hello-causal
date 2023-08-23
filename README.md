<!-- TOC -->

- [Welcome](#welcome)
- [Setup](#setup)
- [Starting the Demo](#starting-the-demo)
- [Differences with a real customer setup.](#differences-with-a-real-customer-setup)
<!-- TOC -->

# Welcome

Welcome to the CausalLabs demo.

Here are the ports the demo opens on your computer and their purpose.

| Application       | Port | Description            |
| ----------------- | ---- | ---------------------- |
| Demo-UI           | 8842 | Http Port              |
| Demo-UI           | 9255 | Javascript Debug port. |
| Impression Server | 3004 | Http Port              |
| ETL-Query         | 8081 | Http Port              |

# Setup

You will have received an email from Causal Support called "Welcome to the CausalLabs.io demo" which provides instructions on how to set up your local environment.

# Starting the Demo

```bash
 docker compose up
```

# Differences with a real customer setup.

1. The demo starts a docker image called compiler. Normally you would install the causal compiler locally using `npm install --global @causal/compiler`. The optional `causalc` script is provided here, so you don't need to install this locally while trying out causal.
2. The ETL-Query server allows you to view data in AWS without the need to log into the AWS console. This is only used for demo purposes.

# Demo UI Application
The Demo UI contains two distinct areas running on a next.js server. The root ([http://localhost:8842](http://localhost:8842)) contains the tutorial that will walk you through the Causal workflow and feature set.

We also included a more fulsome ecommerce site demo ([http://localhost:8842/store](http://localhost:8842/store)). We built this to provide a more real-world example implementation and provide an example of integrating Causal into a React Server component architecture. The Causal SDK also supports many other languages, including Java, Ruby, and Python.