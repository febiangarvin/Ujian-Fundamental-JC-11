                        //===========SCRIPT REGISTRASI DAN LOGIN===========
class User{
    constructor(username, password, role){
        this.username = username
        this.password = password
        this.role = role
    }
}
var datausers = [
    new User ('admin', 'a', 'Admin'),
    new User ('dino', 'b', 'User'),
]
var datauserlogin = {}
const btnlogin=()=>{
    var usernamelogin = document.getElementById('username').value
    var passwordlogin = document.getElementById('password').value
    var arrbaru = datausers.filter((val)=>val.username==usernamelogin&&val.password==passwordlogin)
    datauserlogin=arrbaru[0]
    if (datauserlogin) {
        document.getElementById('isiregislogin').innerHTML = 'Halo'
            if (datauserlogin.role=='Admin') {
                Printdata(listdata)
                document.getElementById('isiketeranganregislogin').innerHTML = 'Admin'
            }
            else{
                document.getElementById('isiketeranganregislogin').innerHTML = 'Anda terdaftar sebagai USER'
            }
        document.getElementById('btnlogout').innerHTML = `<button onclick='logoutuser()'>Logout</button>`
        }
    else{
        document.getElementById('isiregislogin').innerHTML = 'Maaf, username atau password anda salah'
        document.getElementById('isiketeranganregislogin').innerHTML = ''
        document.getElementById('btnlogout').innerHTML = ``
        }
    }
    const logoutuser=()=>{
        datauserlogin={}
        listdata = []
        Printdata[listdata]
        document.getElementById('isiregislogin').innerHTML = ''
        document.getElementById('isiketeranganregislogin').innerHTML = ''
        document.getElementById('btnlogout').innerHTML = ``
        document.getElementsByTagName('tbody')[0].innerHTML=''
    }

                    //=============SCRIPT ADMIN=====================

class Todo{
        constructor(a,b,c){
            this.kegiatan=a,
            this.hari=b,
            this.gambar=c
        }
    }
    var listdata=[
            new Todo('Mancing','Senin','https://explorewisata.com/wp-content/uploads/2018/12/asyiknya-mancing-ikan-di-kolam-pemancingan-ikan-mabuk-manding-malang.jpg'),
            new Todo('Galau','Selasa','https://i0.wp.com/titikdua.net/wp-content/uploads/2018/07/Kata-kata-galau-patah-hati-800x533.jpg'),
            new Todo('Kondangan','Jumat','https://awsimages.detik.net.id/community/media/visual/2019/03/18/226701be-86ea-4f48-a165-4a82c835539c_43.jpeg?w=700&q=90')
    ]
    var indexedit=-1
    var inddexdel=-2
    const Printdata=(a)=>{
        var output=''
        a.forEach((val,index) => {
            if(index==indexedit){
                output+=`<tr>
                            <td>${index+1}</td>
                            <td><input type="text" id="edittodo${index}"></td>
                            <td>
                                <select id="edithari${index}">
                                    <option> Senin</option>
                                    <option> Selasa</option>
                                    <option> Rabu</option>
                                    <option> Kamis</option>
                                    <option> Jumat</option>
                                    <option> Sabtu</option>
                                    <option> Minggu</option>
                                </select>    
                            </td>
                            <td><input type="text" id="editimg${index}"></td>
                            <td>
                            <button onclick="cancel()">cancel</button>
                            <button onclick="save(${index})">save</button>
                            </td>
                        </tr>`
            }else if(index==inddexdel){
                output+=`<tr>
                            <td>${index+1}</td>
                            <td>${val.kegiatan}</td>
                            <td>${val.hari}</td>
                            <td><img src=${val.gambar} height='100px'/></td>
                            <td>
                            <button onclick="cancelDel()">No</button>
                            <button onclick="confirmDel(${index})">Yes</button>
                            </td>
                        </tr>`
            }else{
                output+=`<tr>
                            <td>${index+1}</td>
                            <td>${val.kegiatan}</td>
                            <td>${val.hari}</td>
                            <td>
                            <img src=${val.gambar} height='100px'/></td>
                            <td>
                            <button onclick="hapus(${index})">delete</button>
                            <button onclick="edit(${index})">edit</button></td>
                        </tr>`
            }
        })
        var foottable = `<tr>
        <td><input type="text" class="addtodo"></td>
        <td>
            <select class="addtodo">
                <option> Senin</option>
                <option> Selasa</option>
                <option> Rabu</option>
                <option> Kamis</option>
                <option> Jumat</option>
                <option> Sabtu</option>
                <option> Minggu</option>
            </select>
        </td>
        <td><input type="text" class="addtodo"></td>
        <td><button onclick="onAddTodoClick()">Add</button></td>
        </tr>`
        document.getElementsByTagName('tbody')[0].innerHTML= output + foottable
    }
    // Printdata(listdata)
    const hapus=(bebas)=>{
        inddexdel=bebas
        Printdata(listdata)
    }
    const cancelDel=()=>{
        inddexdel=-2
        Printdata(listdata)
    }
    const confirmDel=(bebas)=>{
        listdata.splice(bebas,1)
        inddexdel=-1
        Printdata(listdata)
    }
    const edit=(bebas)=>{
        indexedit=bebas
        Printdata(listdata)
    }
    const cancel=()=>{
        indexedit=-1
        Printdata(listdata)
    }
    const save=(bebas)=>{
        var newtodo=document.getElementById(`edittodo${bebas}`).value
        var newhari=document.getElementById(`edithari${bebas}`).value
        var newimg=document.getElementById(`editimg${bebas}`).value
        console.log(newtodo,newhari,newimg)
        if(newtodo){
            listdata[bebas].kegiatan=newtodo
        }
        if(newhari!==listdata[bebas].hari){
            listdata[bebas].hari=newhari
        }
        if(newimg){
            listdata[bebas].gambar=newimg
        }
        indexedit=-1
        Printdata(listdata)
    }
    const onAddTodoClick=(bebas)=>{
        var input=document.getElementsByClassName('addtodo')
        var todobaru=input[0].value
        var haribaru=input[1].value
        var imagebaru=input[2].value
        listdata.push(new Todo(todobaru,haribaru,imagebaru))
        Printdata(listdata)
    }