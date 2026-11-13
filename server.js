const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

    res.end(`
        <!DOCTYPE html>
        <html lang="vi">
        <head>
            <meta charset="UTF-8">
            <title>Thông tin sinh viên</title>
            <style>
                body {
                    font-family: Arial;
                    background: linear-gradient(135deg, #2193b0, #6dd5ed);
                    text-align: center;
                    padding: 50px;
                }

                .card {
                    background: white;
                    padding: 35px;
                    border-radius: 20px;
                    max-width: 550px;
                    margin: auto;
                    box-shadow: 0 5px 20px #555;
                }

                h1 {
                    color: #0066cc;
                }

                p {
                    font-size: 20px;
                    color: #333;
                }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>THÔNG TIN SINH VIÊN</h1>
                <p><b>Họ và tên:</b> Võ Thanh Hoài</p>
                <p><b>Mã sinh viên:</b> CĐ-CNTT18A14</p>
                <p><b>Lớp:</b> CĐ-CNTT18A</p>
                <p><b>Trường:</b> Kỹ thuật Công nghệ Nha Trang</p>
                <h2>Chào mừng đến với Node.js!</h2>
            </div>
        </body>
        </html>
    `);
});

server.listen(3000, () => {
    console.log('Server đang chạy tại http://localhost:3000');
});