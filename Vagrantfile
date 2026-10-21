Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/jammy64"          # Ubuntu Server 22.04
  config.vm.hostname = "garderie-vm"
  config.vm.network "private_network", ip: "192.168.56.10"

  config.vm.provider "virtualbox" do |vb|
    vb.name = "garderie-vm"
    vb.memory = 2048
    vb.cpus = 2
  end

  # Provisioning Ansible (exécuté DANS la VM, pas besoin d'Ansible sur l'hôte)
  config.vm.provision "ansible_local" do |ansible|
    ansible.install = true
    ansible.provisioning_path = "/vagrant/ansible"
    ansible.playbook = "site.yml"
    ansible.become = true
  end
end
