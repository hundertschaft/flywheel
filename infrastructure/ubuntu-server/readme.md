<sub>`Work in Progress Notes`</sub>

# Ubuntu Server

Version: `20.04 LTS`<br>
Architecture: `x86_64`<br>
Machine: `4 Core Bare Metal Dedicated Server`<br>
Hostname: `worker`<br>
User: `ubuntu` (default)<br>
Authentication: `SSH Key`

## Creation of the Kubernetes Environment

SSH into the fresh server and do the following

```bash
# Install microk8s
sudo snap install microk8s --classic

# Add ubuntu user to microk8s group to avoid sudo
# Note this assumes that the user is called "ubuntu"
sudo usermod -a -G microk8s ubuntu || sudo chown -R ubuntu ~/.kube
# -> Ignore .kube might not exist warning

# Reload user group to apply changes
newgrp microk8s

# Check status of microk8s
microk8s status --wait-ready
# -> Should say: microk8s is running

# Enable Kubernetes Services
microk8s enable dashboard dns registry istio
# -> Ignore Token Message

# Enable Dashboard
microk8s dashboard-proxy
# -> Open URL and use token to sign in
```
