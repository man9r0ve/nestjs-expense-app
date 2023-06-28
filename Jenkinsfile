pipeline {
    agent any
    tools { nodejs('NodeJS 18.16.0 LTS') }

    environment {
      dockerImage = ''
    }

    stages {
        stage('build check') {
            steps {
                echo "NodeJS Version ======================"
                sh 'node --version'
                // echo "Docker Version ======================"
                // sh 'docker --version'
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
                // sh 'docker build --tag man9r0ve/nestjs-expense-app:v${BUILD_NUMBER} .'
                // 기본적으로 현재 디렉토리의 Dockerfile 로 빌드 https://www.jenkins.io/doc/book/pipeline/docker/#building-containers
                dockerImage = docker.build("man9r0ve/nestjs-expense-app:v${BUILD_NUMBER}")
            }
        }

    }
}