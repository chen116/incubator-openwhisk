{
    "hosts": ["tcp://0.0.0.0:4243", "unix:///var/run/docker.sock"],
    "insecure-registries": ["{{ groups['registry']|first }}:5000"],
	"storage-driver": "{{ docker.storagedriver }}"
}