echo -e "---------docker Login--------"
docker login --username=$1  --password=$2 # 这个是yml文件最后一行所传递的参数，你docker的用户名和密码
echo -e "---------docker Stop--------"
docker stop docs
echo -e "---------docker Rm--------"
docker rm docs
docker rmi applestven/docs:forCloud
echo -e "---------docker Pull--------"
docker pull applestven/docs:forCloud 
echo -e "---------docker Create and Start--------"
docker run --rm -d -p 9000:80  --name docs applestven/docs:forCloud
echo -e "---------deploy Success--------"