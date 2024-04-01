function reset(){
    document.getElementById('log-in').value='';
    document.getElementById('email').value='';
    document.getElementById('mat-khau').value='';
    document.getElementById('mat-khau2').value='';
}
function dangky(){
    var ten = document.getElementById('log-in').value;
    var email = document.getElementById('email').value;
    var matkhau = document.getElementById('mat-khau').value;
    var matkhau2 = document.getElementById('mat-khau2').value;
    if(ten == '' && email =='' && matkhau == '' && matkhau2 ==''){
        alert('Xin vui lòng điền thông tin!');
        var ten = document.getElementById('log-in').value;
        var email = document.getElementById('email').value;
        var matkhau = document.getElementById('mat-khau').value;
        var matkhau2 = document.getElementById('mat-khau2').value;
    } else if(ten == ''){
        alert('Xin vui lòng điền tên đăng nhập!');
    } else if(email == ''){
        alert('Xin vui lòng nhập email!')
    } else if(matkhau == ''){
        alert('Xin vui lòng nhập mật khẩu!');
    } else if(matkhau2 == ''){
        alert('Xin vui lòng nhập lại mật khẩu!');
    } else if(matkhau != matkhau2){
        alert('Mật khẩu không trùng khớp! Vui lòng nhập lại');
        document.getElementById('mat-khau').value='';
        document.getElementById('mat-khau2').value='';
        var matkhau = document.getElementById('mat-khau').value;
        var matkhau2 = document.getElementById('mat-khau2').value;
    } else {
        alert('Đăng ký thành công!');
    }
}