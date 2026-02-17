cd /home/ubuntu/Automate-CI-CD
git pull
npm run test
npm run build
aws s3 cp dist/ s3://storageapp-aman --recursive
