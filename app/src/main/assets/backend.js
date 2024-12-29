
<script>
    // Hàm để đọc và hiển thị nội dung file JSON
    function loadJSON() {
        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                document.getElementById('json-output').textContent = JSON.stringify(data, null, 2);
            })
            .catch(error => {
                console.error('Lỗi khi tải file JSON:', error);
            });
    }

    // Gọi hàm để tải JSON khi trang được tải
    window.onload = loadJSON;

</script>