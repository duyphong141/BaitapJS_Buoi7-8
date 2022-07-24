var myArray = [];
function themSo() {
    var num = Number(document.getElementById('nhapSo').value);
    myArray.push(num);
    document.getElementById('hienThiMang').innerHTML = myArray;
}

document.getElementById('btnThemSo').onclick = themSo;

//! 1. Tổng các số dương trong mảng

function tinhTongDuong() {
    var tong = 0;
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i] > 0) {
            tong += myArray[i];
        }
    }
    document.getElementById('hienThiTong').innerHTML = `Tổng số dương: ${tong}`;
}
document.getElementById('btnTinhTong').onclick = tinhTongDuong;

//! 2. Đếm số dương
function demSoDuong() {
    var demSoDuong = 0;
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i] > 0) {
            demSoDuong++;
        }
    }
    document.getElementById('hienThiDemSoDuong').innerHTML = `Số dương: ${demSoDuong}`;
}
document.getElementById('btnDemSoDuong').onclick = demSoDuong;

//! 3. Tìm số nhỏ nhất
function soNhoNhat() {
    var min = myArray[0];
    for (var i = 1; i < myArray.length; i++) {
        if (min > myArray[i]) {
            min = myArray[i];
        }
    }
    document.getElementById('hienThiSoNhoNhat').innerHTML = `Số nhỏ nhất: ${min}`;
}
document.getElementById('btnSoNhoNhat').onclick = soNhoNhat;


//! 4. Tìm số dương nhỏ nhất
function timSoDuongMin() {
    var arraySoDuong = [];
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i] > 0) {
            arraySoDuong.push(myArray[i]);
        }
    }
    // console.log(arraySoDuong.length)
    if (arraySoDuong.length === 0) {
        document.getElementById('hienThiSoDuongNhoNhat').innerHTML = 'Không có số dương trong mảng';
    } else {
        var min = arraySoDuong[0];
        for (var j = 0; j < arraySoDuong.length; j++) {
            if (min > arraySoDuong[j]) {
                min = arraySoDuong[j];
            }
        }
        document.getElementById('hienThiSoDuongNhoNhat').innerHTML = `Số dương nhỏ nhất: ${min}`;
    }

}
document.getElementById('btnSoDuongNhoNhat').onclick = timSoDuongMin;

//! 5. Tìm số chẵn cuối cùng
function timSoChanCuoiCung() {
    var arraySoChan = []
    var SoChanCuoiCung = 0;
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i] % 2 == 0) {
            arraySoChan.push(myArray[i]);
            SoChanCuoiCung = arraySoChan[arraySoChan.length - 1];
        } 
    }
    document.getElementById('hienThiSoChanCuoiCung').innerHTML = `Số chẳn cuối cùng: ${SoChanCuoiCung}`;
}
document.getElementById('btnTimSoChanCuoiCung').onclick = timSoChanCuoiCung;

//! 6. Đổi chỗ
function doiViTri() {
    var viTri1 = Number(document.getElementById('nhapSoViTri1').value);
    var viTri2 = Number(document.getElementById('nhapSoViTri2').value);
    var temp = myArray[viTri1];
    myArray[viTri1] = myArray[viTri2];
    myArray[viTri2] = temp;
    document.getElementById('hienThiDoiCho').innerHTML = `Mảng sau khi đổi: ${myArray}`;
}
document.getElementById('btnDoiCho').onclick = doiViTri;

//! 7. Sắp xếp tăng dần

function sapXep() {
    for (var i = 0; i < myArray.length - 1; i++) {
        for (var j = 0; j < myArray.length; j++) {
            if (myArray[j] > myArray[j + 1]) {
                var temp = myArray[j];
                myArray[j] = myArray[j + 1];
                myArray[j + 1] = temp;
            }
        }
    }
    document.getElementById('hienThiSapXep').innerHTML = myArray;
}
document.getElementById('btnTimSapXep').onclick = sapXep;


//! 8. Tìm số nguyên tố đầu tiên
function timSoNT() {
    var soNT = -1;
    for (var i = 0; i < myArray.length; i++) {
        if (checkSNT(myArray[i])) {
            soNT = myArray[i];
            break;
        }
    }
    document.getElementById('hienThiSoNT').innerHTML = soNT;
}
document.getElementById('btnTimSoNT').onclick = timSoNT;

function checkSNT(x) {
    var checkSNT = true;
    for (var i = 2; i <= Math.sqrt(x); i++) {
        if (x % i === 0) {
            checkSNT = false;
            break;
        }
    }
    return checkSNT;
}

//! Bài 9. Đếm số nguyên
var myArray2 = [];
function themSoBai9() {
    var num = Number(document.getElementById('nhapSoBai9').value);
    myArray2.push(num);
    document.getElementById('hienThiSo').innerHTML = myArray2;
}

document.getElementById('btnThemSoBai9').onclick = themSoBai9;

function demSoNguyen() {
    var demSoNguyen = 0;
    for (var i = 0; i < myArray2.length; i++) {
        if (Number.isInteger(myArray2[i])) {
            demSoNguyen++;
        }
    }
    document.getElementById('hienThiSoNguyen').innerHTML = `Số nguyên: ${demSoNguyen}`;
}

document.getElementById('btnDemSoNguyen').onclick = demSoNguyen;

//! So sánh số lượng số âm và dương

function soSanh() {
    var soAm = 0;
    var soDuong = 0;
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i] < 0) {
            soAm++;
        } else if (myArray[i] > 0) {
            soDuong++;
        }
    }
    if (soAm > soDuong) {
        document.getElementById('hienThiSoSanh').innerHTML = 'Số âm > Số dương';
    } else if (soAm < soDuong) {
        document.getElementById('hienThiSoSanh').innerHTML = 'Số dương > Số âm';
    } else {
        document.getElementById('hienThiSoSanh').innerHTML = 'Số âm = Số dương';
    }

}
document.getElementById('btnSoSanh').onclick = soSanh;