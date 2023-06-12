pipeline {
    agent any
    tools { nodejs('NodeJS 18.16.0 LTS') }

    stages {
        stage('nodejs 18') {
            steps  {
                echo "NodeJS Version ======================"
                sh 'node --version'
            }
        }

        // stage('github clone') {
        //     steps {
        //         checkout(
        //             [
        //                 $class: 'GitSCM',
        //                 branches: [[name: '*/master']],
        //                 extensions: [],
        //                 userRemoteConfigs: [
        //                     [credentialsId: 'c0c5de3f-b692-4d9a-a84b-3d97e44d5d57', url: 'https://github.com/man9r0ve/nestjs-expense-app.git']
        //                 ]
        //             ]
        //         )
        //     }
        // }

        stage('build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }

        }

    }
}