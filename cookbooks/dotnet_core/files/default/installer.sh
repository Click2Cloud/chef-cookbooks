#!/bin/bash
echo ASPNETCORE_URLS=http://*:80 > /etc/environment
source ~/.bashrc
export ASPNETCORE_URLS=http://*:80
export GIT_SRC=https://github.com/KapilThakkar/aspnet-core-10-ex
export GIT_DEST=/root/clone-app
rm -rf $GIT_DEST

export INSTALL_PKGS="libunwind libicu"
echo
echo "Downloading .NET Core dependencies"
yum install -y --setopt=tsflags=nodocs $INSTALL_PKGS > /dev/null
echo
echo "Checking Git Client"
yum install -y git > /dev/null
echo
echo "Clean cache"
yum clean all -y > /dev/null

curl -sSL -o dotnet.tar.gz https://go.microsoft.com/fwlink/?LinkID=809131
mkdir -p /opt/dotnet && tar zxf dotnet.tar.gz -C /opt/dotnet
ln -f -s /opt/dotnet/dotnet /usr/local/bin

echo
echo "Cloning source code from '"$GIT_SRC"' repository"
git clone $GIT_SRC $GIT_DEST


rm -f `find $GIT_DEST -name project.lock.json`

PRJ_PATH=`find $GIT_DEST -name project.json | sed 's/project.json//'`
cd $PRJ_PATH
echo
echo "Restoring dotnet core libraries..."
dotnet restore
sleep 3

echo
echo "Running dotnet service..."
sleep 5000 | nohup dotnet run > /dev/null 2>&1 &
echo
echo ".Net Core service running successfully "
echo

