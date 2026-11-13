class SinhVien {
    constructor(ma, hoTen, tuoi, diem) {
        this.ma = ma;
        this.hoTen = hoTen;
        this.tuoi = tuoi;
        this.diem = diem;
    }
}

const danhSachSinhVien = [
    new SinhVien("SV001", "Nguyễn Văn An", 18, 8.5),
    new SinhVien("SV002", "Trần Thị Bình", 19, 4.5),
    new SinhVien("SV003", "Lê Văn Cường", 20, 7.0),
    new SinhVien("SV004", "Phạm Thị Dung", 18, 3.5),
    new SinhVien("SV005", "Võ Thanh Hoài", 19, 9.0)
];

const sinhVienDat = danhSachSinhVien.filter(
    sinhVien => sinhVien.diem >= 5
);

console.log("DANH SÁCH SINH VIÊN ĐẠT YÊU CẦU:");
console.table(sinhVienDat);