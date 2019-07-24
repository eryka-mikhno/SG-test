export const clients = {
  client1: {
    id: 1,
    name: 'Client 1',
  },
  client2: {
    id: 2,
    name: 'Client 2',
  },
  client3: {
    id: 3,
    name: 'Client 3',
  },
};

export const defaultClient = {
    id: 0,
    name: 'Default Cliente',
};

const config = {
  client: clients.client2 || defaultClient
};

export default config;
