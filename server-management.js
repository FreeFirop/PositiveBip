// server-management.js

function createServer() {
    const serverName = document.getElementById('serverName').value;
    const cpu = document.getElementById('cpu').value;
    const software = document.getElementById('software').value;
    const nodes = document.getElementById('nodes').value.split(',').map(node => node.trim());

    if (!serverName || !cpu || !software || nodes.length === 0) {
        alert('Please fill in all the fields.');
        return;
    }

    fetch('/api/create-server', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ serverName, cpu, software, nodes }),
    })
    .then(response => response.text())
    .then(message => alert(message))
    .catch(error => console.error('Error:', error));
}

function startServer() {
    const serverName = prompt('Enter server name:');
    fetch('/api/start-server', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ serverName }),
    })
    .then(response => response.text())
    .then(message => alert(message))
    .catch(error => console.error('Error:', error));
}
