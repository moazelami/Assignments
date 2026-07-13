const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const DB_PATH = path.join(__dirname, 'auth.db.json');

function loadDB() {
  try { return JSON.parse(fs.readFileSync(DB_PATH, 'utf8')); }
  catch { return { users: [], sessions: [] }; }
}

function saveDB(db) {
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
}

function hashPassword(password, salt = crypto.randomBytes(16).toString('hex')) {
  const hash = crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString('hex');
  return { salt, hash };
}

function verifyPassword(password, salt, hash) {
  return hashPassword(password, salt).hash === hash;
}

function createToken() {
  return crypto.randomBytes(32).toString('hex');
}

const Auth = {
  register(username, password) {
    const db = loadDB();
    if (db.users.find(u => u.username === username)) {
      return { success: false, error: 'Username already exists' };
    }
    const { salt, hash } = hashPassword(password);
    const user = { id: db.users.length + 1, username, salt, hash, createdAt: new Date().toISOString() };
    db.users.push(user);
    saveDB(db);
    return { success: true, user: { id: user.id, username: user.username } };
  },

  login(username, password) {
    const db = loadDB();
    const user = db.users.find(u => u.username === username);
    if (!user || !verifyPassword(password, user.salt, user.hash)) {
      return { success: false, error: 'Invalid credentials' };
    }
    const session = { token: createToken(), userId: user.id, createdAt: new Date().toISOString() };
    db.sessions.push(session);
    saveDB(db);
    return { success: true, token: session.token, user: { id: user.id, username: user.username } };
  },

  verify(token) {
    const db = loadDB();
    const session = db.sessions.find(s => s.token === token);
    if (!session) return { success: false, error: 'Invalid or expired token' };
    const user = db.users.find(u => u.id === session.userId);
    return { success: true, user: { id: user.id, username: user.username } };
  },

  logout(token) {
    const db = loadDB();
    db.sessions = db.sessions.filter(s => s.token !== token);
    saveDB(db);
    return { success: true };
  },

  listUsers() {
    const db = loadDB();
    return db.users.map(u => ({ id: u.id, username: u.username, createdAt: u.createdAt }));
  }
};

const mode = process.argv[2];
const args = process.argv.slice(3);

switch (mode) {
  case 'register':
    console.log(JSON.stringify(Auth.register(args[0], args[1]), null, 2));
    break;
  case 'login':
    console.log(JSON.stringify(Auth.login(args[0], args[1]), null, 2));
    break;
  case 'verify':
    console.log(JSON.stringify(Auth.verify(args[0]), null, 2));
    break;
  case 'logout':
    console.log(JSON.stringify(Auth.logout(args[0]), null, 2));
    break;
  case 'users':
    console.log(JSON.stringify(Auth.listUsers(), null, 2));
    break;
  default:
    console.log('Usage: node auth.js <command> [args]');
    console.log('Commands:');
    console.log('  register <username> <password>');
    console.log('  login    <username> <password>');
    console.log('  verify   <token>');
    console.log('  logout   <token>');
    console.log('  users');
}
