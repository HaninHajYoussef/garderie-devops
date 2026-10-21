pipeline {
  agent any
  environment {
    DOCKERHUB_USER = 'haninhajyoussef'          
    FRONT_IMAGE    = "${DOCKERHUB_USER}/garderie-frontend"
    BACK_IMAGE     = "${DOCKERHUB_USER}/garderie-backend"
    TAG            = "${env.BUILD_NUMBER}"
  }
  stages {
    stage('Checkout') {
      steps { checkout scm }
    }
    stage('Install') {
      steps {
        dir('frontend') { sh 'npm install' }
        dir('backend')  { sh 'npm install' }
      }
    }
    stage('Test') {
      steps { dir('frontend') { sh 'npm test' } }   // un échec arrête le pipeline
    }
    stage('Build Frontend') {
      steps { sh 'docker build -t $FRONT_IMAGE:$TAG -t $FRONT_IMAGE:latest ./frontend' }
    }
    stage('Build Backend') {
      steps { sh 'docker build -t $BACK_IMAGE:$TAG -t $BACK_IMAGE:latest ./backend' }
    }
    stage('Push Frontend') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', usernameVariable: 'DH_USER', passwordVariable: 'DH_PASS')]) {
          sh 'echo "$DH_PASS" | docker login -u "$DH_USER" --password-stdin'
          sh 'docker push $FRONT_IMAGE:$TAG && docker push $FRONT_IMAGE:latest'
        }
      }
    }
    stage('Push Backend') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', usernameVariable: 'DH_USER', passwordVariable: 'DH_PASS')]) {
          sh 'echo "$DH_PASS" | docker login -u "$DH_USER" --password-stdin'
          sh 'docker push $BACK_IMAGE:$TAG && docker push $BACK_IMAGE:latest'
        }
      }
    }
  }
  post { always { sh 'docker logout || true' } }
}
