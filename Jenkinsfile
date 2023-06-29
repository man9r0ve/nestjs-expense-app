pipeline {
    environment {
      dockerImage = ''
    }

    agent any

    stages {
        stage('Create/Build docker image') {
            steps {
                // script {
                //     /* 기본적으로 현재 디렉토리의 Dockerfile 로 빌드 https://www.jenkins.io/doc/book/pipeline/docker/#building-containers */
                //     dockerImage = docker.build("man9r0ve/nestjs-expense-app:v${BUILD_NUMBER}")
                // }
                sh 'docker build --tag man9r0ve/nestjs-expense-app:v${BUILD_NUMBER} .'
            }
        }
    }
}