module.exports = {
  networks: {
    development: {
     host: process.env.NAME+".local",   // ping "$(hostname).local"
     port: 7545,                        // nc -zv "$(hostname).local" 7545
     network_id: "*" 
    },
    dashboard: {
    }
  },
  compilers: {
    solc: {
      version: "0.8.15",
    }
  },
  db: {
    enabled: false,
    host: "127.0.0.1",
  }
};
