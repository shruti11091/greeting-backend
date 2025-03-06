class Greet {
    static getMessage(name) {
      if (!name) {
        return { error: "Name is required." };
      }
      return { message: `Hello, ${name}! Welcome to Younglabs.` };
    }
  }
  
  module.exports = Greet; 
  