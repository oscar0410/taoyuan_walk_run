## 前端打包方式
npm build
會出現out資料夾 壓縮後 放到GCP VM
如果是桃園專案記得把admin.html改成admin.ejs


## 桃園走跑docker 啟動方式 @GCP
sudo docker stop taoyuan_walk_run
sudo docker rm taoyuan_walk_run
sudo docker rmi taoyuan_walk_run
sudo docker build -t taoyuan_walk_run .
sudo docker run -d -p 3000:3001 --name=taoyuan_walk_run --add-host=host.docker.internal:host-gateway  -v /home/yunyang-wu-rsa/taoyuan_walk_run:/usr/src/app taoyuan_walk_run



## 高雄走跑docker 啟動方式 @GCP
sudo docker stop kaohsiung_walk_run
sudo docker rm kaohsiung_walk_run
sudo docker rmi kaohsiung_walk_run
sudo docker build -t kaohsiung_walk_run .
sudo docker run -d -p 3001:3000 --name=kaohsiung_walk_run --add-host=host.docker.internal:host-gateway -v /home/yunyang-wu-rsa/kaohsiung_walk_run:/usr/src/app kaohsiung_walk_run
