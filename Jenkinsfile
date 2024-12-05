pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                echo 'Cloning Repository...'
                git branch: 'main', url: 'https://github.com/Rookienoob007/Interactive-App.git'
            }
        }
        stage('Build') {
            steps {
                echo 'Building the application...'
                // You can add build commands here, if any (e.g., minifying CSS/JS, etc.)
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                // You can add your test commands here, if any (e.g., running unit tests)
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the application...'

                // Copy the files to the web directory (assuming the files are in the repository)
                sh '''
                    sudo rm -rf /var/www/Intapp/*  # Clear existing files
                    sudo cp -r * /var/www/Intapp/  # Copy new files to /var/www/Intapp/
                '''
                
                // Ensure proper permissions (replace "www-data" with your NGINX user if needed)
                sh '''
                    sudo chown -R www-data:www-data /var/www/Intapp/
                    sudo chmod -R 755 /var/www/Intapp/
                '''
                
                // Reload NGINX to reflect changes
                sh '''
                    sudo nginx -s reload
                '''
            }
        }
    }
}
