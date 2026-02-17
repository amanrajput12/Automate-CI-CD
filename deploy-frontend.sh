set -e
cd /home/ubuntu/Automate-CI-CD
git pull
npm run test
rm -f dist/ --recursive
npm run build
aws s3 rm s3://storageapp-aman --recursive
aws s3 cp dist/ s3://storageapp-aman --recursive
aws cloudfront create-invalidation \
  --distribution-id E2M94LAD5IGJGZ \
  --paths "/*"
