#
# Cookbook:: dotnet_core
# Recipe:: default
#
# Copyright:: 2017, The Authors, All Rights Reserved.
cookbook_file "/root/installer.sh" do
  source "installer.sh"
  mode 0755
end

execute "install my script" do
  command "sh /root/installer.sh"
end

service 'firewalld' do
action [:restart, :stop]
end
