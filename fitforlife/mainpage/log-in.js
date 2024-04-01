function reset(){
    document.getElementById('log-in').value='';
    document.getElementById('mat-khau').value='';
}
function dangnhap(){
    var ten = document.getElementById('log-in').value;
    var matkhau = document.getElementById('mat-khau').value;
    if(ten == '' && matkhau == ''){
        alert('Xin vui lòng điền thông tin!');
        var ten = document.getElementById('log-in').value;
        var matkhau = document.getElementById('mat-khau').value;
    } else if(ten == ''){
        alert('Xin vui lòng điền email!');
    } else if(matkhau == ''){
        alert('Xin vui lòng nhập mật khẩu!');
    } else {
        alert('Đăng nhập thành công!');
    }
}