const instances = require('../config/instances.json');

const requestedInstance = process.env.CLI_INSTANCE;
const fallbackInstance = instances.items.find(i => i.default).id;
const selectedInstance = requestedInstance || fallbackInstance;

if (selectedInstance && !instances.items.find(i => i.id === selectedInstance)) {
  throw 'Unsupported instance name (see config/instances.json)';
}

module.exports = {
  requestedInstance,
  selectedInstance,
  instances: instances.items.filter(
    i => i.group === process.env.INSTANCE_GROUP
  ),
};
