def getnewTag(){
    def commitHash = sh(script: 'git rev-parse --short HEAD', returnStdout: true).trim()
    return "v${commitHash}"
}

pipeline{
    agent any 
    environment{
        tag = "latest"
        newTag = ""
    }


    stages{
        stage('Checkout the git code'){
            steps{
                git branch: 'master', credentialsId: 'github', url:'https://github.com/jaybamaniya66/nodejs-app.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                def newTag = getnewTag()
                script{
                    withDockerRegistry(credentialsId: 'docker-token', toolName: 'docker'){   
                       sh "docker build -t node-app ."
                       sh "docker tag node-app jaybamaniya/node-app:${newTag} "
                       sh "docker push jaybamaniya/node-app:${newTag} "
                }
            }
            }
        }
        }
    }
