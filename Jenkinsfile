pipeline {
    agent any
    stages {
        stage('Checkout the git code'){
            steps{
                git branch: 'master', credentialsId: 'github', url:'https://github.com/jaybamaniya66/nodejs-app.git'
            }
        }
        stage('Build image') {
            steps {
                withCredentials([string(credentialsId: 'aws-credentials', variable: 'AWS_ACCESS_KEY_ID'),
                                  string(credentialsId: 'aws-credentials', variable: 'AWS_SECRET_ACCESS_KEY')])
                                  {
                                    sh "aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 361924549766.dkr.ecr.us-east-1.amazonaws.com"
                                    sh "echo successful"
                                  }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}