import envConfig from '../env.conf';

const RUN_ENV = process.env.RUN_ENV;
const currentEnvConfig = envConfig && envConfig[RUN_ENV] ? envConfig[RUN_ENV] : {};
export default currentEnvConfig;
