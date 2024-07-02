pipeline{
    agent any 

    stages{
        stage('Checkout the git code'){
            steps{
                git branch: 'master', credentialsId: 'github', url:'https://github.com/jaybamaniya66/nodejs-app.git'
            }
        }
        stage('Docker build and push'){
            steps{
                sh 'terraform --version'
            }
        }
    }
}