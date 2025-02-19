    // Import các hàm cần thiết từ SDK Firebase
    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
    import { getDatabase, ref, get, set } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

    // Cấu hình Firebase của bạn
    const firebaseConfig = {
      apiKey: "AIzaSyDaEMf6wwjYH9Ez_Pj8ToYkdVMNYTXXzFM",
      authDomain: "btvn-k215480106120-27-12.firebaseapp.com",
      databaseURL: "https://btvn-k215480106120-27-12-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "btvn-k215480106120-27-12",
      storageBucket: "btvn-k215480106120-27-12.firebasestorage.app",
      messagingSenderId: "343588762119",
      appId: "1:343588762119:web:146e254c0eb9e039a9f0a2",
      measurementId: "G-4VK88TXLPV"
    };

    // Khởi tạo Firebase
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);

    // Hàm đọc dữ liệu từ Firebase Realtime Database
    function loadData() {
        const dbRef = ref(db, 'messages/1'); // Đường dẫn đến node 'messages/1'

        // Lấy dữ liệu từ Firebase
        get(dbRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const jsonData = snapshot.val();
                    document.getElementById('json-output').textContent = JSON.stringify(jsonData, null, 2);

                    // Cập nhật dữ liệu JSON vào textarea
                    document.getElementById('json-input').value = JSON.stringify(jsonData, null, 2);
                } else {
                    document.getElementById('json-output').textContent = 'Không có dữ liệu';
                    document.getElementById('json-input').value = '{}'; // Nếu không có dữ liệu, đặt textarea thành một chuỗi JSON rỗng
                }
            })
            .catch((error) => {
                console.error("Lỗi khi đọc dữ liệu:", error);
            });
    }

    // Hàm cập nhật dữ liệu vào Firebase
    function updateData() {
        const jsonData = document.getElementById("json-input").value;

        try {
            // Chuyển chuỗi JSON thành đối tượng JavaScript
            const data = JSON.parse(jsonData);

            // Đường dẫn đến node 'messages/1'
            const dbRef = ref(db, 'messages/1');

            // Cập nhật dữ liệu vào Firebase
            set(dbRef, data)
                .then(() => {
                    alert("Dữ liệu đã được cập nhật thành công!");
                    loadData(); // Gọi lại loadData để hiển thị dữ liệu mới
                })
                .catch((error) => {
                    console.error("Lỗi khi cập nhật dữ liệu:", error);
                });
        } catch (error) {
            alert("Chuỗi JSON không hợp lệ!");
        }
    }

    // Gọi hàm loadData khi trang được tải
    window.onload = loadData;