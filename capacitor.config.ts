import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.hithukdrama.app',
  appName: 'Hithu Kdrama',
  server: {
    url: 'https://hithukdrama.com.lk',
    cleartext: false
  }
};

export default config;