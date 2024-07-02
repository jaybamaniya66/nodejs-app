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
        stage('Generate Tag') {
            steps {
                script{
                // Get the latest commit hash
                def commitHash = sh(script: 'git rev-parse --short HEAD', returnStdout: true).trim()

                // Define the new tag based on the commit hash (replace 'v' with your desired prefix)
                def newTag = "v${commitHash}"

                // Print the new tag for reference
                echo "Generated new tag: ${newTag}"
                }

            }
        }
        stage('Build Docker Image') {
            steps {
                    withDockerRegistry(credentialsId: 'docker-token', toolName: 'docker'){   
                       sh "docker build -t node-app ."
                       sh "docker tag node-app jaybamaniya/node-app:${newTag} "
                       sh "docker push jaybamaniya/node-app:${newTag} "
                }
            }
        }
        }
    }
