let team = [{
    name:'Laurence Patterson',
    discription:'Some information about Laurence Patterson',
},{
    name:'Vivian Benson',
    discription:'Some information about Vivian Benson',
},{
    name:'Harry Moore',
    discription:'Some information about Harry Moore',
},{
    name:'Willis Nash',
    discription:'Some information about Willis Nash',
}]

setPhoto(0);

function setPhoto(index){
    let p_name = document.getElementById('pname');
    let p_discripption =document.getElementById('pdiscription');
    p_name.innerHTML = "";
    p_discripption.innerHTML = "";
    p_name.append(team[index]['name']);
    p_discripption.append(team[index]['discription']);
}