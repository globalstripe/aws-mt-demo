url="https://remix.s3mediamanager.com"
url="https://localhost"
curl -H $url \
  -H "Access-Control-Request-Method: POST" \
  -H "Access-Control-Request-Headers: X-Requested-With" \
  -X OPTIONS --verbose \
"https://localhost/video/master.m3u8"
