pipeline {
    agent any
    
    stages {
        stage('Env') {
            steps {
                sh 'printenv'
            }
        }
        
        stage('Build') {
            steps {
                git GIT_URL
                sh 'npm install --loglevel=error'
            }
        }
        
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
    
    post {
        success {
            echo 'Build success'
            sh 'curl -d "chat_id=-292740675&text=Build success" https://api.telegram.org/bot1373771575:AAGWzfodFfnQH5pWuNMEzWoiUZ3JloBnhEI/sendMessage?chat_id=443065378&text=Build'
        }
        
        failure {
            echo 'Build Automation'
            sh 'curl -d "chat_id=-292740675&text=Build failure" https://api.telegram.org/bot1373771575:AAGWzfodFfnQH5pWuNMEzWoiUZ3JloBnhEI/sendMessage?chat_id=443065378&text=Success'
        }
    }
}
