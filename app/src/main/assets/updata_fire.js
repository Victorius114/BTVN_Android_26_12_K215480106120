// uploadData.js

const admin = require('firebase-admin');
const fs = require('fs');

// Khởi tạo Firebase Admin SDK
const serviceAccount = require('./serviceAccountKey.json');  // Đường dẫn đến tệp khóa dịch vụ
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://btvn-k215480106120-27-12-default-rtdb.asia-southeast1.firebasedatabase.app"
});

// Đọc dữ liệu từ file data.json
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Không thể đọc file JSON:', err);
    return;
  }

  const jsonData = JSON.parse(data);

  // Đẩy dữ liệu lên Firebase Realtime Database
  const db = admin.database();
  const ref = db.ref('messages/1');  // Thay đổi đường dẫn nếu cần

  ref.set(jsonData, (error) => {
    if (error) {
      console.error('Lỗi khi đẩy dữ liệu lên Firebase:', error);
    } else {
      console.log('Dữ liệu đã được đẩy lên Firebase thành công');
    }
  });
});
