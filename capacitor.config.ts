import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.almarawani.supermarket',
  appName: 'سوبرماركت المرواني',
  webDir: 'public',
  server: {
    url: 'https://almarawani.vercel.app',
    cleartext: true,
  },
  android: {
    allowMixedContent: true,
    backgroundColor: '#004f9f',
  },
};

export default config;
