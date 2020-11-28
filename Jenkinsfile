pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        stage('Settings') {
            steps {
                script {
                    withCredentials([string(credentialsId: 'npm-token',variable: 'NPM_TOKEN')]) {
                        sh 'echo registry=https://xxx/repository/npm-all/ > .npmrc'
                        sh 'echo always-auth=true >> .npmrc'
                        sh 'echo _auth=$NPM_TOKEN >> .npmrc'
                    }       
                }
            }
        }
        stage('Cache clean') {
            steps {
                sh 'npm cache clean --force'
            }
        }
        stage('Rebuild') {
            steps {
                echo 'npm rebuild'
            }
        }        
        stage('Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('UT') {
            steps {
                echo 'UT execution....'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }     
        stage('Start and run E2E tests') {
            steps {
                sh 'npm run cy:ci'
            }
            post {
                always {
                    sh 'npm run cy:report'
                }
            }
        }
        stage('Upload to Nexus') {
            steps {
                echo 'Uploading to Nexus....'
            }
        }
    }   
}