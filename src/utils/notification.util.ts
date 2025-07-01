export const notification = {
  success: (message: string) => {
    console.log(`✅ ${message}`);
    alert(`Success: ${message}`);
  },
  
  error: (message: string) => {
    console.error(`❌ ${message}`);
    alert(`Error: ${message}`);
  },
  
  warning: (message: string) => {
    console.warn(`⚠️ ${message}`);
    alert(`Warning: ${message}`);
  },
  
  info: (message: string) => {
    console.info(`ℹ️ ${message}`);
    alert(`Info: ${message}`);
  }
};