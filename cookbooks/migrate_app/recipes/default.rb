#
# Cookbook:: migrate_app
# Recipe:: default
#
# Copyright:: 2017, The Authors, All Rights Reserved.
package 'httpd'
service 'httpd' do
action [:enable, :start]
end

remote_directory '/var/www/html' do
  source 'html'
  owner 'root'
  group 'root'
  mode '0755'
  action :create
end

service 'iptables' do
action :stop
end

service 'firewalld' do
action [:restart, :stop]
end
