def getnewTag(){
    def commitHash = sh(script: 'git rev-parse --short HEAD', returnStdout: true).trim()
    return "v${commitHash}"
}

pipeline{
    agent any 
    environment{
        tag = "latest"
    }
    stages{
        stage('Checkout the git code'){
            steps{
                git branch: 'master', credentialsId: 'github', url:'https://github.com/jaybamaniya66/nodejs-app.git'
            }
        }
        stage('Build Docker Image') {
            steps { 
                script{
                    withDockerRegistry(credentialsId: 'docker-token', toolName: 'docker'){   
                       def newTag = getnewTag()
                       sh "docker build -t node-app ."
                       sh "docker tag node-app jaybamaniya/node-app:${newTag} "
                       sh "docker push jaybamaniya/node-app:${newTag} "
                }
            }
            }
        }
        stage('kubernetes deployment'){        
            steps{
                script{
                    withKubeConfig(caCertificate: '', clusterName: '', contextName: '', credentialsId: 'k8s', namespace: '', restrictKubeConfigAccess: false, serverUrl: '') {
                    //    def k8Tag = getnewTag()
                    //    sh "sed -i 's/(jaybamaniya/node-app):[^:]*/(jaybamaniya/node-app):${k8Tag}/' deployment.yml"
                    //    sh "mv $tempfile deployment.yml"
                       sh 'kubectl apply -f k8s/deployment.yml'
                       sh 'kubectl apply -f k8s/service.yml'
                       sh 'kubectl apply -f k8s/ingress.yml'
                  }
            }
          }
        }
    }
}
