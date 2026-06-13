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

        stage('Sonar Scan') {
            steps {
                withCredentials([string(credentialsId: 'sonar-token', variable: 'SONAR_TOKEN')]) {
                    sh 'sonar-scanner -Dsonar.projectKey=powerplatform -Dsonar.sources=app -Dsonar.host.url=http://172.17.0.1:9000 -Dsonar.token=$SONAR_TOKEN'
                }
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t powerplatform-app:v1 ./app'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                echo 'Skipping Kubernetes deploy until Jenkins-Minikube connection is configured'
            }
        }
    }
}
