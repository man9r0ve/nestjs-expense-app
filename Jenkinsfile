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
        stage('github clone') {
            steps {
                checkout(
                    [
                        $class: 'GitSCM',
                        branches: [[name: '*/master']],
                        extensions: [],
                        userRemoteConfigs: [
                            [credentialsId: 'man9r0ve', url: 'https://github.com/man9r0ve/nestjs-expense-app.git']
                        ]
                    ]
                )
            }
        }

        stage('build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }

        }

    }
}