pipeline {
    agent any
    tools { nodejs('NodeJS 18.16.0 LTS') }

    stages {
        stage('nodejs 18') {
            steps {
                echo "NodeJS Version ======================"
                sh 'node --version'
            }
        }

        stage('build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Create/Build docker image') {
            steps {
                sh 'docker build --tag man9r0ve/nestjs-expense-app:v$BUILD_NUMBER .'
            }
        }

    }
}