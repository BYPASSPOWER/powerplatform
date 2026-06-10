pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
            }
        }

        stage('Build App') {
            steps {
                sh 'cd app && npm install'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t powerplatform-app:v1 ./app'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f k8s/deployment.yaml'
                sh 'kubectl apply -f k8s/service.yaml'
            }
        }
    }
}
