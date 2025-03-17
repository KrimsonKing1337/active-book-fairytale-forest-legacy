const { execSync } = require('child_process');

try {
  execSync('for /f "tokens=5" %i in (\'netstat -ano ^| findstr :3001\') do taskkill /pid %i /F');
} catch (e) {
  console.error(e.stdout.toString());
}
