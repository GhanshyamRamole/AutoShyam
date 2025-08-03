# AutoShyam

A modern React TypeScript application with dual deployment strategies - AI-powered operations and traditional DevOps best practices.

## 🚀 Project Overview

AutoShyam is a production-ready web application built with:
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Containerization**: Docker
- **Orchestration**: Kubernetes
- **CI/CD**: Jenkins

## 📁 Project Structure

```
AutoShyam/
├── Application/          # React TypeScript application
│   ├── src/             # Source code
│   ├── Dockerfile       # Container configuration
│   ├── docker-compose.yml
│   ├── nginx.conf       # Web server configuration
│   └── package.json     # Dependencies and scripts
├── AI-Ops/              # AI-powered deployment tools
│   ├── Amazon-cli-Installation
│   └── MCP-Server
├── jenkins-file/        # Jenkins CI/CD configurations
├── k8s/                 # Kubernetes manifests
│   ├── deployment.yml   # Application deployment
│   ├── service.yml      # Service configuration
│   └── ingress.yml      # Ingress controller
└── .Autoshyam/         # Project-specific configurations
```

## 🏗️ Architecture Overview

### System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        AutoShyam Application                    │
├─────────────────────────────────────────────────────────────────┤
│  Frontend: React 18 + TypeScript + Vite + Tailwind CSS        │
│  ├── Components (Lucide React Icons)                           │
│  ├── Routing & State Management                                │
│  └── Build System (Vite + ESLint + PostCSS)                   │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                     Containerization Layer                      │
├─────────────────────────────────────────────────────────────────┤
│  Docker Container                                               │
│  ├── Multi-stage Build                                         │
│  ├── Nginx Web Server (Custom Config)                          │
│  ├── Static Asset Serving                                      │
│  └── Health Check Endpoints                                    │
└─────────────────────────────────────────────────────────────────┘
                                │
                    ┌───────────┴───────────┐
                    ▼                       ▼
        ┌─────────────────────┐   ┌─────────────────────┐
        │    AI-Ops Path      │   │  Traditional Path   │
        │        🤖           │   │        🛠️           │
        └─────────────────────┘   └─────────────────────┘
```

### AI-Ops Deployment Architecture

```
┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│   Developer      │    │   Amazon Q CLI   │    │   AWS Cloud      │
│                  │    │                  │    │                  │
│ ┌──────────────┐ │    │ ┌──────────────┐ │    │ ┌──────────────┐ │
│ │ Local Code   │ │───▶│ │ AI Assistant │ │───▶│ │ ECS/EKS      │ │
│ │ Repository   │ │    │ │ MCP Server   │ │    │ │ Auto-scaling │ │
│ └──────────────┘ │    │ └──────────────┘ │    │ └──────────────┘ │
│                  │    │                  │    │                  │
│ ┌──────────────┐ │    │ ┌──────────────┐ │    │ ┌──────────────┐ │
│ │ q chat       │ │◀───│ │ Intelligent  │ │◀───│ │ CloudWatch   │ │
│ │ Interface    │ │    │ │ Monitoring   │ │    │ │ AI Analytics │ │
│ └──────────────┘ │    │ └──────────────┘ │    │ └──────────────┘ │
└──────────────────┘    └──────────────────┘    └──────────────────┘
                                 │
                                 ▼
                    ┌──────────────────────┐
                    │   AI-Powered Features │
                    ├──────────────────────┤
                    │ • Cost Optimization  │
                    │ • Predictive Scaling │
                    │ • Anomaly Detection  │
                    │ • Auto-remediation   │
                    └──────────────────────┘
```

### Traditional DevOps Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              CI/CD Pipeline                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────────┐   ┌─────────────┐   ┌─────────────┐   ┌─────────────┐    │
│  │   Source    │──▶│   Build     │──▶│    Test     │──▶│   Deploy    │    │
│  │   Control   │   │   (Docker)  │   │  (ESLint)   │   │ (Kubernetes)│    │
│  │    (Git)    │   │             │   │             │   │             │    │
│  └─────────────┘   └─────────────┘   └─────────────┘   └─────────────┘    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                         Kubernetes Cluster                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐            │
│  │   Ingress       │  │    Service      │  │   Deployment    │            │
│  │   Controller    │  │   (ClusterIP)   │  │   (3 Replicas)  │            │
│  │                 │  │                 │  │                 │            │
│  │ ┌─────────────┐ │  │ ┌─────────────┐ │  │ ┌─────────────┐ │            │
│  │ │ SSL/TLS     │ │  │ │ Load        │ │  │ │   Pod 1     │ │            │
│  │ │ Termination │ │  │ │ Balancing   │ │  │ │   Pod 2     │ │            │
│  │ │ Routing     │ │  │ │ Service     │ │  │ │   Pod 3     │ │            │
│  │ └─────────────┘ │  │ │ Discovery   │ │  │ └─────────────┘ │            │
│  └─────────────────┘  │ └─────────────┘ │  └─────────────────┘            │
│                       └─────────────────┘                                  │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                      Monitoring & Observability                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────────┐   ┌─────────────┐   ┌─────────────┐   ┌─────────────┐    │
│  │ Prometheus  │   │   Grafana   │   │ ELK Stack   │   │   Jaeger    │    │
│  │  (Metrics)  │──▶│(Dashboards) │   │ (Logging)   │   │ (Tracing)   │    │
│  │             │   │             │   │             │   │             │    │
│  └─────────────┘   └─────────────┘   └─────────────┘   └─────────────┘    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Data Flow Diagram

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Browser   │    │   Ingress   │    │   Service   │    │    Pods     │
│             │    │ Controller  │    │             │    │             │
│ ┌─────────┐ │    │ ┌─────────┐ │    │ ┌─────────┐ │    │ ┌─────────┐ │
│ │ React   │ │───▶│ │ Nginx   │ │───▶│ │ Load    │ │───▶│ │ Nginx   │ │
│ │ App     │ │    │ │ Ingress │ │    │ │ Balance │ │    │ │ Server  │ │
│ └─────────┘ │    │ └─────────┘ │    │ └─────────┘ │    │ └─────────┘ │
│             │    │             │    │             │    │             │
│ ┌─────────┐ │    │ ┌─────────┐ │    │ ┌─────────┐ │    │ ┌─────────┐ │
│ │ HTTPS   │ │◀───│ │ SSL/TLS │ │◀───│ │ Health  │ │◀───│ │ Static  │ │
│ │Response │ │    │ │ Term.   │ │    │ │ Checks  │ │    │ │ Assets  │ │
│ └─────────┘ │    │ └─────────┘ │    │ └─────────┘ │    │ └─────────┘ │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
```

## 🎯 Deployment Methods

### Method 1: AI-Ops Deployment 🤖

Leverage AI-powered operations for intelligent, automated deployment with minimal manual intervention.

#### Prerequisites
- AWS CLI configured
- Amazon Q CLI installed
- MCP Server setup

#### Quick Start
```bash
# Navigate to AI-Ops directory
cd AI-Ops/

# Install Amazon CLI (if not already installed)
cat Amazon-cli-Installation

# Setup MCP Server
cat MCP-Server

# Deploy using AI assistance
q chat
```

#### AI-Ops Features
- **Intelligent Resource Allocation**: AI determines optimal resource requirements
- **Automated Scaling**: Dynamic scaling based on usage patterns
- **Smart Monitoring**: AI-driven alerting and issue resolution
- **Cost Optimization**: Automatic resource optimization recommendations

### Method 2: Traditional DevOps Best Practices 🛠️

Complete CI/CD pipeline following industry best practices with comprehensive monitoring and security.

#### Prerequisites
- Docker & Docker Compose
- Kubernetes cluster (minikube/EKS/GKE)
- Jenkins
- kubectl configured

#### Local Development
```bash
# Clone the repository
git clone <repository-url>
cd AutoShyam/Application

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

#### Docker Deployment
```bash
# Build and run with Docker Compose
cd Application/
docker-compose up -d

# Or build manually
docker build -t autoshyam:latest .
docker run -p 80:80 autoshyam:latest
```

#### Kubernetes Deployment
```bash
# Apply Kubernetes manifests
kubectl apply -f k8s/

# Check deployment status
kubectl get pods
kubectl get services
kubectl get ingress

# Scale deployment
kubectl scale deployment autoshyam-deployment --replicas=3
```

#### Jenkins CI/CD Pipeline
```bash
# Setup Jenkins pipeline
# 1. Create new pipeline job
# 2. Point to jenkins-file/ directory
# 3. Configure webhooks for automatic builds
```

## 🔧 Configuration

### Environment Variables
```bash
# Application
NODE_ENV=production
PORT=3000

# Database (if applicable)
DB_HOST=localhost
DB_PORT=5432
DB_NAME=autoshyam

# AWS (for AI-Ops)
AWS_REGION=us-east-1
AWS_PROFILE=default
```

### Nginx Configuration
The application uses a custom nginx configuration for optimal performance:
- Gzip compression enabled
- Static asset caching
- Security headers
- Health check endpoint

## 📊 Monitoring & Observability

### Traditional DevOps Monitoring
- **Metrics**: Prometheus + Grafana
- **Logging**: ELK Stack (Elasticsearch, Logstash, Kibana)
- **Tracing**: Jaeger
- **Alerting**: AlertManager

### AI-Ops Monitoring
- **Intelligent Alerts**: AI-powered anomaly detection
- **Predictive Scaling**: Proactive resource management
- **Cost Analytics**: Real-time cost optimization insights

## 🔒 Security Best Practices

- **Container Security**: Multi-stage Docker builds, non-root user
- **Kubernetes Security**: RBAC, Network Policies, Pod Security Standards
- **CI/CD Security**: Secret management, vulnerability scanning
- **Runtime Security**: Security monitoring and compliance checks

## 🚦 Health Checks

### Application Health
```bash
# Local health check
curl http://localhost:3000/health

# Kubernetes health check
kubectl get pods -l app=autoshyam
```

### Monitoring Endpoints
- `/health` - Application health status
- `/metrics` - Prometheus metrics
- `/ready` - Readiness probe

## 📈 Performance Optimization

### Frontend Optimizations
- Code splitting with Vite
- Tree shaking for minimal bundle size
- Lazy loading for components
- CDN integration for static assets

### Infrastructure Optimizations
- Horizontal Pod Autoscaling (HPA)
- Vertical Pod Autoscaling (VPA)
- Cluster autoscaling
- Resource requests and limits

## 🔄 Deployment Comparison

| Feature | AI-Ops | Traditional DevOps |
|---------|--------|-------------------|
| Setup Time | ⚡ Minutes | 🕐 Hours |
| Maintenance | 🤖 Automated | 👨‍💻 Manual |
| Cost Optimization | 🎯 AI-driven | 📊 Manual analysis |
| Scaling | 🧠 Intelligent | 📏 Rule-based |
| Monitoring | 🔮 Predictive | 📈 Reactive |
| Learning Curve | 📚 Moderate | 🎓 Steep |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

### AI-Ops Support
- Use `q chat` for intelligent assistance
- Check AI-Ops documentation in the `AI-Ops/` directory

### Traditional Support
- Check Jenkins logs for CI/CD issues
- Use `kubectl logs` for Kubernetes troubleshooting
- Monitor application metrics in Grafana

## 🔗 Useful Links

- [React Documentation](https://reactjs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Vite Documentation](https://vitejs.dev/)
- [Kubernetes Documentation](https://kubernetes.io/)
- [Docker Documentation](https://docs.docker.com/)
- [Amazon Q Documentation](https://docs.aws.amazon.com/amazonq/)

---

**Choose your deployment method based on your team's expertise and requirements. AI-Ops for rapid deployment and intelligent operations, or traditional DevOps for full control and customization.**
